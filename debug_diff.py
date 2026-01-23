import json
from pathlib import Path
import sys

def diff_files(file1, file2):
    print(f"Comparing {file1} vs {file2}")
    try:
        j1 = json.loads(Path(file1).read_text(encoding="utf-8"))
        j2 = json.loads(Path(file2).read_text(encoding="utf-8"))
    except Exception as e:
        print(f"Error reading files: {e}")
        return

    # Compare Sales Keys
    if "sales_by_outlet" in file1 or "sales" in file1:
        # j1 is dict
        keys1 = set(j1.keys())
        keys2 = set(j2.keys())
        
        if keys1 != keys2:
            print(f"Keys differ! In 1 not 2: {list(keys1 - keys2)[:5]}")
            print(f"In 2 not 1: {list(keys2 - keys1)[:5]}")
            return
            
        # Check values
        for k in keys1:
            v1 = j1[k] # Dict of outlet -> qty
            v2 = j2[k]
            
            if v1 != v2:
                print(f"Mismatch for item {k}:")
                # Check outlets
                o1 = set(v1.keys())
                o2 = set(v2.keys())
                if o1 != o2:
                    print(f"  Outlets differ: 1-2={o1-o2}, 2-1={o2-o1}")
                else:
                    # Check quantities
                    for o in o1:
                        if v1[o] != v2[o]:
                            print(f"  Qty mismatch at {o}: {v1[o]} vs {v2[o]}")
                            return
                return
        print("Sales match perfectly.")

    # Compare Products List
    if "products" in file1:
        # products is list
        if len(j1) != len(j2):
            print(f"List length differs: {len(j1)} vs {len(j2)}")
            return
            
        # We need to match items by Code? 
        # But order might differ.
        # Let's map by code
        map1 = {p["code"]: p for p in j1}
        map2 = {p["code"]: p for p in j2}
        
        for k in map1:
            if k not in map2:
                print(f"Product {k} in 1 but not 2")
                return
            
            p1 = map1[k]
            p2 = map2[k]
            
            # Check fields
            if p1 != p2:
                print(f"Product {k} differs:")
                for field in p1:
                   if p1.get(field) != p2.get(field):
                       print(f"  Field {field}: {p1.get(field)} ({type(p1.get(field))}) vs {p2.get(field)} ({type(p2.get(field))})")
                return

if __name__ == "__main__":
    print("--- Diff Sales ---")
    diff_files("sales_baseline.json", "sales_by_outlet.json")
    print("\n--- Diff Products ---")
    diff_files("products_baseline.json", "products.json")
