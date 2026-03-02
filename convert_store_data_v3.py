import json
import re

file_path = r"d:\TANISHQ KASHLA\Raskrti Art\raskrtiart\public\store\data to import in store.txt"

def slugify(s):
    s = s.lower().strip()
    s = re.sub(r'[^\w\s-]', '', s)
    return re.sub(r'[\s_-]+', '-', s)

def process_product(header, image_lines):
    parts = header.split('\t')
    
    # Try to clean up empty parts at end BUT preserve middle empties
    # Actually just strip each part
    parts = [p.strip() for p in parts]
    
    # If len < 6, pad
    while len(parts) < 6:
        parts.append("")
        
    title = parts[0]
    base = parts[1]
    medium = parts[2]
    dimensions = parts[3]
    time_to_make = parts[4]
    price_str = parts[5]
    
    if not title: return None
    
    if not time_to_make:
        time_to_make = "1 Week"
        
    try:
        price = int(re.sub(r'[^\d]', '', price_str))
    except:
        price = 0

    # Process images
    all_img_paths = []
    for line in image_lines:
        line = line.strip().strip('"')
        sub_paths = line.split('\n')
        for p in sub_paths:
            p = p.strip()
            if not p: continue
            # Convert to web path
            web_path = p.replace(r"D:\TANISHQ KASHLA\Raskrti Art\raskrtiart\public", "").replace("\\", "/")
            if web_path:
                all_img_paths.append(web_path)

    # Determine main image
    main_img = None
    others = []
    
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
            
    additional_objs = []
    for p in others:
        additional_objs.append({ "src": p, "alt": title })
        
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
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print("Error reading file:", e)
        return

    lines = content.splitlines()
    products = []
    
    current_header = None
    current_images = []
    
    start_idx = 0
    if len(lines) > 0 and "product name" in lines[0].lower():
        start_idx = 1
        
    for i in range(start_idx, len(lines)):
        line = lines[i]
        
        if not line.strip(): continue
        
        # Heuristic for header: usually starts with text, has tabs
        # But image lines also exist.
        # Image lines usually contain "D:\"
        
        is_header = False
        parts = line.split('\t')
        
        # Check if it looks like a header ( >= 4 parts ) and doesn't look like a path
        if len(parts) >= 4 and "D:\\" not in line:
             is_header = True
             
        if is_header:
            if current_header:
                p = process_product(current_header, current_images)
                if p: products.append(p)
            current_header = line
            current_images = []
        else:
            current_images.append(line)
            
    if current_header:
        p = process_product(current_header, current_images)
        if p: products.append(p)

    print(json.dumps(products, indent=2))

if __name__ == "__main__":
    main()
