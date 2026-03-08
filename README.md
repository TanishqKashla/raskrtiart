# Raskrti Art — Website Documentation

**Project Name:** Raskrti Art Website  
**Live Link:** raskrtiart.in  
**Framework:** Next.js  
**Developer:** Tanishq Kashla & Tamanna Singh  
**Version:** 1.0  

---

# 1. Project Overview

Raskrti Art is a website developed for an art and craft studio.

The website showcases:

- Certified courses offered by the studio
- Short-term art classes and workshops
- Artworks available for purchase
- Events and workshops
- Gallery and testimonials
- Information about the founder and studio

The website does **not use a database**. All dynamic content such as courses, classes, and store products is managed through **data files located in the project codebase**.

This means new content can be added by editing specific files and adding images to the **public folder**.

---

# 2. Technology Used

## Framework
- Next.js (App Router)

## Language
- TypeScript / JavaScript

## Styling
- Tailwind CSS

## Icons
- React Icons

## Runtime
- React

## Development Tools

**Package Manager:**  
npm

**Development Server:**  
```
npm run dev
```

**Build Command:**  
```
npm run build
```

---

# 3. Project Structure

Important folders in the project:

## app/components

Contains reusable UI components like:

- Navbar
- Footer
- Course cards
- Product cards
- Gallery
- Testimonials

## app/data

Contains all editable content for the website.

Files inside this folder control:

```
aboutSection.js → About section
coursesData.js → Certified courses
classesData.js → Classes and workshops
storeData.js → Store products
heroCarousel.js → Homepage carousel
eventsWorkshopsSection.js → Events section
testimonials.js → Testimonials
```

## public folder

Contains all images used on the website.

Examples:

```
public/courses → Course thumbnails
public/classes → Class thumbnails
public/store → Product images
```

---

# 4. How to Add a New Course

Courses appear in the **Certified Courses section** on the homepage.

## Step 1 — Add Course Image

Add the course image to:

```
public/courses/
```

Example:

```
public/courses/my-course.jpg
```

## Step 2 — Edit the Courses Data File

Open this file:

```
app/data/coursesData.js
```

Inside this file you will see a list of courses.

Add a new course object using this structure.

### Example Course Entry

```
id: 7
thumbnail: /courses/my-course.jpg
courseName: MY NEW COURSE
classType: Basic + Advance
ageGroup: 15+
fee: 12000
totalClasses: 24
days: Mon-Wed-Fri
timings: 3:30 PM – 5:00 PM
materials: Material Included
```

⚠️ Make sure the **ID number is unique**.

Once saved, the new course will automatically appear on the website.

---

# 5. How to Add a New Class

Classes appear in the **Classes We Offer section** on the homepage.

## Step 1 — Add Class Image

Add the class image to:

```
public/classes/
```

Example:

```
public/classes/my-class.jpg
```

## Step 2 — Edit Classes Data File

Open:

```
app/data/classesData.js
```

Add a new class entry with this structure.

### Example Class Entry

```
id: 25
thumbnail: /classes/my-class.jpg
className: MY NEW CLASS
ageGroup: 12+
fee: 3500
totalClasses: 4
days: Sat-Sun
timings: 3:30 PM – 5:00 PM
materials: Material Included
```

Save the file. The class will automatically appear on the website.

---

# 6. How to Add a New Store Product

Products appear in the **Buy Artworks section** and also have their own product pages.

## Step 1 — Add Product Images

Create a new folder inside:

```
public/store/
```

Example:

```
public/store/my-product/
```

Add images like:

```
1.jpg
2.jpg
3.jpg
```

## Step 2 — Edit Store Data File

Open:

```
app/data/storeData.js
```

Add a new product entry.

### Example Product Entry

```
category: general
title: My New Artwork
slug: my-new-artwork
artist: Shweta Singh
price: 2500
timeToMake: 1 week
medium: acrylic
base: canvas board
dimensions: 12 x 12 inches
inStock: true
```

Images will be referenced from the folder created earlier.

⚠️ Important:

Each product must have a **unique slug** because it is used in the product page URL.

Example:

```
/shop/my-new-artwork
```

---

# 7. Quick Reference

| Item | Location |
|-----|-----|
| Courses Data File | `app/data/coursesData.js` |
| Course Images | `public/courses` |
| Classes Data File | `app/data/classesData.js` |
| Class Images | `public/classes` |
| Store Products Data File | `app/data/storeData.js` |
| Store Images | `public/store/product-name/` |

---

# 8. Running the Project

Install dependencies:

```
npm install
```

Run development server:

```
npm run dev
```

Build the project:

```
npm run build
```

Run production server:

```
npm start
```

Open the website at:

```
http://localhost:3000
```

---

# 9. How to Deploy / Update the Website

If the website is connected to **GitHub** and deployed using platforms like **Vercel or Netlify**, follow these steps:

1. Make the required changes in the project code.
2. Commit and push the changes to the GitHub repository.
3. The deployment platform (Vercel / Netlify) will automatically detect the changes and update the live website.

### Manual Hosting (cPanel)

1. Make the required changes in the project files.
2. Build the project if required.
3. Upload the updated files to the hosting server using **cPanel File Manager or FTP**.
4. Replace the previous files with the updated ones.

---

# 10. Credentials & Access

The following accounts are associated with the website.

For security reasons, **credentials should be shared separately with the client.**

### Hosting

Provider: Vercel  
Username: vercel.com/raskrtiartandpaintingschool75  

### Domain

Provider: GoDaddy  
Domain Name: raskrtiart.in  

### GitHub Repository

Repository Link:

```
https://github.com/raskrtiartandpaintingschool/raskrtiart
```

---

# 11. Support

Minor fixes and support are available for **7 days after project handover**.

This includes:

- Small updates
- Bug fixes
- Guidance on managing the website

Any additional feature development, design changes, or major updates requested after the support period will be considered **a separate task or project**.

---

# 12. Important Notes

- Course and class IDs must always be **unique**
- Product slugs must be **unique to avoid page conflicts**
- Image paths must **match the file names in the public folder**
- Changing a product slug will **change its page URL**