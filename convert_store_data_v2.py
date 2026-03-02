import json
import re

file_path = r"d:\TANISHQ KASHLA\Raskrti Art\raskrtiart\public\store\data to import in store.txt"

def slugify(s):
    s = s.lower().strip()
    s = re.sub(r'[^\w\s-]', '', s)
    return re.sub(r'[\s_-]+', '-', s)

def process_product(header, image_lines):
    parts = header.strip().split('\t')
    # Filter out empty strings from split
    parts = [p.strip() for p in parts if p.strip()]
    
    if len(parts) < 6:
        # Try splitting by multiple spaces if tabs fail, but file seems to be tab
        # Fallback
        return None

    title = parts[0]
    base = parts[1]
    medium = parts[2]
    dimensions = parts[3]
    time_to_make = parts[4]
    try:
        price = int(re.sub(r'[^\d]', '', parts[5]))
    except:
        price = 0

    # Process images
    main_image_src = ""
    additional_images = []
    
    # Parse image lines 
    # They might be quoted, multi-line string or single lines
    all_img_paths = []
    for line in image_lines:
        # Remove quotes
        line = line.strip().strip('"')
        sub_paths = line.split('\n')
        for p in sub_paths:
            p = p.strip()
            if not p: continue
            # Convert to web path
            # Remove "D:\TANISHQ KASHLA\Raskrti Art\raskrtiart\public"
            web_path = p.replace(r"D:\TANISHQ KASHLA\Raskrti Art\raskrtiart\public", "").replace("\\", "/")
            if web_path:
                all_img_paths.append(web_path)

    # Determine main image
    main_img = None
    others = []
    
    # If list has "1.jpg" or "1.png", prioritize it
    for p in all_img_paths:
        filename = p.split('/')[-1]
        if filename.startswith("1."):
            main_img = p
            break
    
    if not main_img and all_img_paths:
        main_img = all_img_paths[0]
        
    for p in all_img_paths:
        if p != main_img:
            others.append(p)
            
    # Default additional images block structure
    additional_objs = []
    for p in others:
        additional_objs.append({ "src": p, "alt": title })
        
    if not additional_objs:
         # Keep structure consistent with empty placeholder if needed, 
         # but usually empty list is fine. Original had [{}] which is weird.
         # I'll stick to [] if empty
         pass

    return {
        "category": "general",
        "title": title,
        "slug": slugify(title),
        "artist": "Shweta Singh",
        "artistPhoto": "/pfp.jpeg",
        "price": price,
        "timeToMake": time_to_make,
        "medium": medium,
        "base": base,
        "dimensions": dimensions,
        "imageData": {
            "mainImage": {
                "src": main_img if main_img else "",
                "alt": title
            },
            "additionalImages": additional_objs
        },
        "inStock": True,
        "tags": ["Made to Order", "nature", "vibrant", "intricate"]
    }

def main():
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Split by double newlines to find blocks?
    # Actually irregular format. "Header... \n Images..."
    # Let's read line by line.
    
    lines = content.splitlines()
    products = []
    
    current_header = None
    current_images = []
    
    # Skip header row
    start_idx = 0
    if "product name" in lines[0].lower():
        start_idx = 1
        
    for i in range(start_idx, len(lines)):
        line = lines[i].strip()
        if not line: continue
        
        # Check if it's a header line (has tabs and price/dims)
        # Headers usually start with Name and have tabs
        # Image lines usually start with D:\ or "
        
        is_header = False
        parts = line.split('\t')
        if len(parts) >= 4: # Heuristic
             is_header = True
             
        if is_header:
            # Save previous product
            if current_header:
                p = process_product(current_header, current_images)
                if p: products.append(p)
            current_header = line
            current_images = []
        else:
            current_images.append(line)
            
    # Save last
    if current_header:
        p = process_product(current_header, current_images)
        if p: products.append(p)

    # Output JS format
    # Use json dumps but without quotes on keys if possible? Valid JS object keys don't need quotes but JSON does.
    # Javascript accepts JSON syntax, so pure JSON is fine.
    
    print(json.dumps(products, indent=2))

if __name__ == "__main__":
    main()
