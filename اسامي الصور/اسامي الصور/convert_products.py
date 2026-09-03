# -*- coding: utf-8 -*-
"""
convert_products.py
Extracts the product number printed on each image (RapidOCR / PaddleOCR models),
converts the image to WebP, and names the file after the product number.

Usage:
    python convert_products.py [source_dir] [--out webp] [--quality 80]

Output: <out>/<number>.webp for every image + <out>/report.csv
Statuses in the report:
    OK                  - number read with good confidence and valid format
    LOW_CONFIDENCE      - converted, but OCR confidence was low -> double-check
    BAD_FORMAT          - converted, but number doesn't match the expected pattern -> double-check
    NO_NUMBER_FOUND     - no number detected; image NOT converted
    ERROR: ...          - processing failed
"""

import argparse
import csv
import re
import sys
from pathlib import Path

import numpy as np
from PIL import Image, ImageOps
from rapidocr_onnxruntime import RapidOCR

IMAGE_EXTS = {".jpg", ".jpeg", ".png", ".bmp", ".tif", ".tiff"}

# Expected product number: 4-6 digits, optional color suffix like -32
VALID_PATTERN = re.compile(r"^\d{4,6}(?:-\d{1,3})?$")
# Candidate extraction: digits optionally followed by dash + digits
CANDIDATE_RE = re.compile(r"\d+(?:\s*-\s*\d+)?")
# Normalize every unicode dash variant the OCR may emit to a plain hyphen
DASHES = str.maketrans({c: "-" for c in "‐‑‒–—―−"})

CONFIDENCE_THRESHOLD = 0.80


def ocr_candidates(engine, img: Image.Image):
    """Run OCR on a PIL image, return list of (number, confidence)."""
    result, _ = engine(np.array(img.convert("RGB")))
    candidates = []
    for _box, text, score in result or []:
        text = text.translate(DASHES)
        for m in CANDIDATE_RE.finditer(text):
            value = re.sub(r"\s", "", m.group())
            digits = re.sub(r"\D", "", value)
            if len(digits) >= 4:
                candidates.append((value, float(score)))
    return candidates


def best_candidate(candidates):
    """Most digits wins; then valid format; then suffix; then confidence."""
    def key(c):
        value, score = c
        digits = len(re.sub(r"\D", "", value))
        return (digits, bool(VALID_PATTERN.match(value)), "-" in value, score)
    return max(candidates, key=key) if candidates else None


def read_number(engine, path: Path):
    """Multi-pass OCR: full image, then top-crop upscaled, then enhanced full."""
    img = ImageOps.exif_transpose(Image.open(path))
    passes = [img]
    # Pass 2: top 45% (labels sit near the top), doubled
    top = img.crop((0, 0, img.width, int(img.height * 0.45)))
    passes.append(top.resize((top.width * 2, top.height * 2), Image.LANCZOS))
    # Pass 3: full image doubled, grayscale + autocontrast
    big = img.resize((img.width * 2, img.height * 2), Image.LANCZOS)
    passes.append(ImageOps.autocontrast(big.convert("L")))

    all_text = []
    for attempt in passes:
        candidates = ocr_candidates(engine, attempt)
        valid = [c for c in candidates if VALID_PATTERN.match(c[0])]
        pick = best_candidate(valid or candidates)
        if pick and VALID_PATTERN.match(pick[0]):
            return pick, img
        if pick:
            all_text.append(pick)  # keep as fallback
    return (best_candidate(all_text), img)


def unique_path(out_dir: Path, number: str) -> Path:
    target = out_dir / f"{number}.webp"
    suffix = 2
    while target.exists():
        target = out_dir / f"{number}_{suffix}.webp"
        suffix += 1
    return target


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("source", nargs="?", default=".", help="folder with images")
    ap.add_argument("--out", default="webp", help="output folder name")
    ap.add_argument("--quality", type=int, default=80, help="WebP quality (default 80)")
    args = ap.parse_args()

    src = Path(args.source).resolve()
    out_dir = (src / args.out) if not Path(args.out).is_absolute() else Path(args.out)
    out_dir.mkdir(parents=True, exist_ok=True)

    images = sorted(p for p in src.iterdir() if p.suffix.lower() in IMAGE_EXTS)
    if not images:
        print(f"No images found in {src}")
        sys.exit(1)

    print("Loading OCR model...")
    engine = RapidOCR()

    rows = []
    for i, path in enumerate(images, 1):
        number, new_name, status, confidence = "", "", "", ""
        try:
            pick, img = read_number(engine, path)
            if pick:
                number, score = pick
                confidence = f"{score:.2f}"
                if not VALID_PATTERN.match(number):
                    status = "BAD_FORMAT"
                elif score < CONFIDENCE_THRESHOLD:
                    status = "LOW_CONFIDENCE"
                else:
                    status = "OK"
                target = unique_path(out_dir, number)
                img.convert("RGB").save(target, "WEBP", quality=args.quality, method=4)
                new_name = target.name
            else:
                status = "NO_NUMBER_FOUND"
        except Exception as exc:  # keep going on individual failures
            status = f"ERROR: {exc}"
        rows.append({"Original": path.name, "Number": number, "NewFile": new_name,
                     "Status": status, "Confidence": confidence})
        print(f"[{i}/{len(images)}] {path.name} -> {new_name or '-'} ({status})", flush=True)

    report = out_dir / "report.csv"
    with open(report, "w", newline="", encoding="utf-8-sig") as fh:
        writer = csv.DictWriter(fh, fieldnames=["Original", "Number", "NewFile", "Status", "Confidence"])
        writer.writeheader()
        writer.writerows(rows)

    ok = sum(1 for r in rows if r["Status"] == "OK")
    problems = [r for r in rows if r["Status"] != "OK"]
    print(f"\nDone. {ok} OK, {len(problems)} need attention. Report: {report}")

    if problems:
        print("\n== NEEDS REVIEW ==")
        for r in problems:
            print(f"  {r['Original']}  [{r['Status']}]"
                  + (f"  number={r['Number']}" if r["Number"] else ""))

    # Same number produced by more than one image -> possible OCR mistake or real duplicate
    by_number = {}
    for r in rows:
        if r["Number"]:
            by_number.setdefault(r["Number"], []).append(r)
    dups = {n: g for n, g in by_number.items() if len(g) > 1}
    if dups:
        print("\n== SAME NUMBER FROM MULTIPLE IMAGES (check these) ==")
        for n, group in dups.items():
            print(f"  Number {n}:")
            for r in group:
                print(f"    {r['Original']} -> {r['NewFile']}")


if __name__ == "__main__":
    main()
