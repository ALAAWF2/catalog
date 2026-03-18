import os
import re

def show_hidden_items():
    html_path = 'C:/Users/ALAA-ORANGE/Desktop/catalog/index.html'
    
    with open(html_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # The user asked to show the hidden items.
    # This means resetting blockedAliases to an empty array.
    # We find any blockedAliases array definition and replace it
    new_content = re.sub(
        r'const blockedAliases = \[.*?\];', 
        'const blockedAliases = [];', 
        content,
        flags=re.DOTALL
    )

    with open(html_path, 'w', encoding='utf-8') as f:
        f.write(new_content)
        
    print("✅ All items are now shown (blockedAliases array is empty).")

if __name__ == "__main__":
    show_hidden_items()
