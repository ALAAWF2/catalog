import pandas as pd
import os

CATEGORY_FILE = r"C:\Users\ALAA-ORANGE\Desktop\catalog\create js\category2026.xlsx"

def load_category_rules():
    print(f"Loading rules from {CATEGORY_FILE}...")
    try:
        df = pd.read_excel(CATEGORY_FILE)
        print("Columns found:", df.columns.tolist())
        
        # Ensure columns exist
        if "Item Starts With" not in df.columns or "Category" not in df.columns:
            print("ERROR: Missing required columns 'Item Starts With' or 'Category'")
            return []
            
        # Convert to string and clean
        df["Item Starts With"] = df["Item Starts With"].astype(str).str.strip()
        df["Category"] = df["Category"].astype(str).str.strip()
        
        # Create list of tuples (prefix, category)
        rules = list(zip(df["Item Starts With"], df["Category"]))
        
        # Sort by length of prefix descending (Longest match first)
        rules.sort(key=lambda x: len(x[0]), reverse=True)
        
        print(f"Loaded {len(rules)} rules.")
        return rules
    except Exception as e:
        print(f"Failed to load rules: {e}")
        return []

def get_category(item_number, rules):
    item_number = str(item_number).strip()
    
    # 1. Handle kit- prefix
    # Case insensitive check for 'kit-'
    if item_number.lower().startswith("kit-"):
        clean_number = item_number[4:] 
    else:
        clean_number = item_number
        
    # 2. Find matching rule
    for prefix, category in rules:
        if clean_number.startswith(prefix):
            return category, clean_number
            
    return "UNCATEGORIZED", clean_number

def test():
    rules = load_category_rules()
    
    test_cases = [
        "kit-10144",
        "10144",
        "kit-110030064",
        "9999999",
        "30001",
        "KIT-555"
    ]
    
    print("\n--- Testing Logic ---")
    for item in test_cases:
        cat, clean = get_category(item, rules)
        print(f"Input: {item:<15} | Cleaned: {clean:<10} | Category: {cat}")

if __name__ == "__main__":
    test()
