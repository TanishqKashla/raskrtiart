# Raskrti Art — Project Documentation

This document describes the Raskrti Art website: its structure, technologies, and how to add or edit courses, classes, and store products using the data layer.

---

## 1. Project Overview

**Raskrti Art** is a Next.js website for an art and craft studio. It showcases:

- **Certified courses** — longer programs (e.g. Fabric Painting, Tanjour, Madhubani, Relief Art, Pichwai, Fine Art) with fees, schedules, and enrollment via WhatsApp.
- **Classes** — shorter workshops (e.g. Resin Art, Warli, Gond, Clay Art, Candle Making) with similar details and WhatsApp enrollment.
- **Store** — artworks for sale (e.g. Rajasthani Miniatures, wall hangings, Madhubani, relief art) with product pages and WhatsApp-based purchase inquiries.
- **Events & workshops** — carousel of events/workshops.
- **About, testimonials, founder, gallery, contact** — supporting content.

All dynamic content (courses, classes, store products, carousel, testimonials, events, about) is driven by **data files** in `app/data/`. No database is used; editing those `.js` files and adding images to `public/` is enough to add or update content.

---

## 2. Technology Used

| Category         | Technology                                                                                        |
| ---------------- | ------------------------------------------------------------------------------------------------- |
| **Framework**    | [Next.js](https://nextjs.org) 16 (App Router)                                                     |
| **Language**     | TypeScript (with some `.jsx`/`.js` components)                                                    |
| **UI / Styling** | [Tailwind CSS](https://tailwindcss.com) v4 (via `@tailwindcss/postcss`)                           |
| **Icons**        | [react-icons](https://react-icons.github.io/react-icons/) (e.g. `LuArrowRight`, `LuShoppingCart`) |
| **Fonts**        | Mauline, Futura PT, Microsoft Sans Serif                                                          |
| **Runtime**      | React 19                                                                                          |

### Development & tooling

- **Package manager:** npm
- **Linting:** ESLint (eslint-config-next)
- **Build:** `next build`
- **Dev server:** `next dev` (default: [http://localhost:3000](http://localhost:3000))

---

## 3. Project Structure

```
raskrtiart/
├── app/
│   ├── components/          # Reusable UI components
│   │   ├── about.tsx
│   │   ├── ArtGallery.tsx
│   │   ├── Button.jsx
│   │   ├── carausal.tsx
│   │   ├── ClassCard.tsx
│   │   ├── ClassSection.jsx
│   │   ├── contactUs.tsx
│   │   ├── CourseSection.tsx
│   │   ├── CourseCard.tsx
│   │   ├── events.tsx
│   │   ├── ExploreArtworks.tsx
│   │   ├── footer.tsx
│   │   ├── FounderSection.tsx
│   │   ├── navbar.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ProductGallery.tsx
│   │   ├── Testimonials.tsx
│   │   └── WhatsAppChat.tsx
│   ├── data/                # ⭐ Content data (edit here to add/change content)
│   │   ├── aboutSection.js
│   │   ├── classesData.js   # Classes / workshops
│   │   ├── coursesData.js   # Certified courses
│   │   ├── eventsWorkshopsSection.js
│   │   ├── heroCarousel.js
│   │   ├── storeData.js     # Store products
│   │   └── testimonials.js
│   ├── shop/
│   │   └── [slug]/
│   │       └── page.tsx     # Dynamic product detail page (/shop/:slug)
│   ├── utils/
│   │   └── whatsappRedirect.js
│   ├── globals.css
│   ├── layout.tsx           # Root layout (Navbar, Footer, WhatsApp)
│   ├── page.tsx             # Home page (all sections)
│   └── not-found.tsx
├── public/                  # Static assets (images, fonts)
│   ├── courses/             # Course thumbnails
│   ├── classes/             # Class thumbnails
│   ├── store/               # Product images (per-product folders)
│   ├── carousel/
│   ├── events/
│   ├── gallery/
│   ├── testimonials/
│   └── ...
├── next.config.ts
├── package.json
├── tailwind / postcss / tsconfig / eslint configs
└── DOCUMENTATION.md         # This file
```

### Data directory (`app/data/`)

| File                        | Purpose                                                                              |
| --------------------------- | ------------------------------------------------------------------------------------ |
| `coursesData.js`            | Certified courses (homepage “Certified Courses” section)                             |
| `classesData.js`            | Classes/workshops (homepage “Classes We Offer” section)                              |
| `storeData.js`              | Store products (homepage “Buy Artworks” / “Buy Miniature Artworks” + `/shop/[slug]`) |
| `heroCarousel.js`           | Hero carousel slides                                                                 |
| `aboutSection.js`           | About section content                                                                |
| `eventsWorkshopsSection.js` | Events/workshops carousel                                                            |
| `testimonials.js`           | Testimonials section                                                                 |

---

## 4. How to Add a New Course

Courses appear in the **Certified Courses** section on the homepage. Data comes from `app/data/coursesData.js`.

### Step 1: Add the course image

1. Add the course thumbnail under `public/courses/` (e.g. `public/courses/my-course.jpg`).
2. Use a clear, representative image; recommended aspect similar to existing course cards.

### Step 2: Add the course object in `coursesData.js`

Open `app/data/coursesData.js`. The file exports an array `courses`. Add a new object with a **unique `id`** and the following fields:

| Field          | Type   | Required | Description                                           |
| -------------- | ------ | -------- | ----------------------------------------------------- |
| `id`           | number | Yes      | Unique ID (use next number after existing courses).   |
| `thumbnail`    | string | Yes      | Path from `public/`, e.g. `"/courses/my-course.jpg"`. |
| `courseName`   | string | Yes      | Display name (e.g. `"FABRIC PAINTING"`).              |
| `ageGroup`     | string | Yes      | e.g. `"15+"`, `"12+"`.                                |
| `fee`          | number | Yes      | Course fee in INR (no commas).                        |
| `totalClasses` | number | Yes      | Total number of classes.                              |
| `days`         | string | Yes      | e.g. `"Tue-Thu"`, `"Mon-Wed-Fri"`.                    |
| `timings`      | string | Yes      | e.g. `"3.30-5.00 PM (Evening)"`.                      |
| `classType`    | string | No       | e.g. `"Scratch to Advance"`, `"Base: Fabric, Paper"`. |
| `materials`    | string | No       | e.g. `"Material Included"`.                           |

**Example — new course entry:**

```js
{
  id: 7,
  thumbnail: "/courses/my-course.jpg",
  courseName: "MY NEW COURSE",
  classType: "Basic + Advance",
  ageGroup: "15+",
  fee: 12000,
  totalClasses: 24,
  days: "Mon-Wed-Fri",
  timings: "3.30-5.00 PM (Evening)",
  materials: "Material Included",
},
```

Add this object inside the `courses` array and ensure the array is still exported: `export { courses };`. No other code changes are needed; `CourseSection.tsx` reads from `coursesData` and renders all courses.

---

## 5. How to Add a New Class

Classes appear in the **Classes We Offer** section on the homepage. Data comes from `app/data/classesData.js`.

### Step 1: Add the class image

1. Add the class thumbnail under `public/classes/` (e.g. `public/classes/my-class.jpeg`).

### Step 2: Add the class object in `classesData.js`

Open `app/data/classesData.js`. The file exports `classesData` (array). Add a new object with a **unique `id`** and the following fields:

| Field          | Type   | Required | Description                                           |
| -------------- | ------ | -------- | ----------------------------------------------------- |
| `id`           | number | Yes      | Unique ID.                                            |
| `thumbnail`    | string | Yes      | Path from `public/`, e.g. `"/classes/my-class.jpeg"`. |
| `className`    | string | Yes      | Display name (e.g. `"RESIN ART (BASIC)"`).            |
| `ageGroup`     | string | Yes      | e.g. `"12+"`, `"8+"`.                                 |
| `fee`          | number | Yes      | Fee in INR.                                           |
| `totalClasses` | number | Yes      | Number of sessions.                                   |
| `days`         | string | Yes      | e.g. `"Tue-Thurs"`, `"Sat-Sun"`.                      |
| `timings`      | string | Yes      | e.g. `"12.30-2.00 PM (Afternoon)"`.                   |
| `materials`    | string | No       | e.g. `"Material Included"`, `"Basic Kit Included"`.   |

**Example — new class entry:**

```js
{
  id: 25,
  thumbnail: "/classes/my-class.jpeg",
  className: "MY NEW CLASS",
  ageGroup: "12+",
  fee: 3500,
  totalClasses: 4,
  days: "Sat-Sun",
  timings: "3.30-5.00 PM (Evening)",
  materials: "Material Included",
},
```

Add it to the `classesData` array. `ClassSection.jsx` uses `classesData` and displays a “View More” pattern; new classes will appear in the list automatically.

---

## 6. How to Add a New Store Product

Store products appear in **Buy Artworks** and **Buy Miniature Artworks** on the homepage and have detail pages at `/shop/[slug]`. Data and images come from `app/data/storeData.js` and `public/store/`.

### Step 1: Add product images

1. Create a folder under `public/store/` for this product (e.g. `public/store/my-product/`).
2. Add the main image (e.g. `1.jpg`). This will be the **mainImage**.
3. Optionally add more images for **additionalImages** (e.g. `2.jpg`, `3.jpg`).

Use URL paths relative to `public/`: e.g. `/store/my-product/1.jpg`.

### Step 2: Add the product object in `storeData.js`

Open `app/data/storeData.js`. The file exports `storeProducts` (array). Add a new object with the following structure:

| Field         | Type     | Required | Description                                                                                                                                              |
| ------------- | -------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `category`    | string   | Yes      | e.g. `"general"` or `"Rajasthani Miniature"`. Products with `"Rajasthani Miniature"` appear under “Buy Miniature Artworks”; others under “Buy Artworks”. |
| `title`       | string   | Yes      | Product title.                                                                                                                                           |
| `slug`        | string   | Yes      | **Unique** URL slug used in `/shop/[slug]` (e.g. `"my-product"`). Use lowercase, hyphens, no spaces.                                                     |
| `artist`      | string   | Yes      | Artist name.                                                                                                                                             |
| `artistPhoto` | string   | No       | Path to artist photo (e.g. `"/pfp.jpeg"`).                                                                                                               |
| `price`       | number   | Yes      | Price in INR.                                                                                                                                            |
| `timeToMake`  | string   | No       | e.g. `"1 Week"`, `"3 days"`.                                                                                                                             |
| `medium`      | string   | Yes      | e.g. `"Acrylic"`, `"3d mural"`.                                                                                                                          |
| `base`        | string   | Yes      | e.g. `"Pastel Sheets"`, `"ply"`, `"canvas board"`.                                                                                                       |
| `dimensions`  | string   | Yes      | e.g. `"6 in X 8 in"`, `"A4"`.                                                                                                                            |
| `imageData`   | object   | Yes      | See below.                                                                                                                                               |
| `inStock`     | boolean  | Yes      | e.g. `true`.                                                                                                                                             |
| `tags`        | string[] | No       | e.g. `["handmade", "wall-art"]`.                                                                                                                         |

**`imageData` structure:**

```js
imageData: {
  mainImage: {
    src: "/store/my-product/1.jpg",
    alt: "Short description for accessibility"
  },
  additionalImages: [
    { src: "/store/my-product/2.jpg", alt: "Second view" },
    { src: "/store/my-product/3.jpg", alt: "Third view" }
  ]
}
```

**Example — full new product:**

```js
{
  category: "general",
  title: "My New Artwork",
  slug: "my-new-artwork",
  artist: "Shweta Singh",
  artistPhoto: "/pfp.jpeg",
  price: 2500,
  timeToMake: "1 week",
  medium: "acrylic",
  base: "canvas board",
  dimensions: "12 in X 12 in",
  imageData: {
    mainImage: {
      src: "/store/my-product/1.jpg",
      alt: "My New Artwork"
    },
    additionalImages: [
      { src: "/store/my-product/2.jpg", alt: "Detail" }
    ]
  },
  inStock: true,
  tags: ["handmade", "custom"]
}
```

Add this object to the `storeProducts` array. The homepage will show it in the correct section (general vs Rajasthani Miniature), and the product page will be available at `/shop/my-new-artwork`. **Each product must have a unique `slug`** for the detail page to work correctly.

---

## 7. Quick Reference — Data File Locations

| Content type   | Data file                 | Image folder(s)                  |
| -------------- | ------------------------- | -------------------------------- |
| Courses        | `app/data/coursesData.js` | `public/courses/`                |
| Classes        | `app/data/classesData.js` | `public/classes/`                |
| Store products | `app/data/storeData.js`   | `public/store/<product-folder>/` |

---

## 8. Running the Project

```bash
# Install dependencies
npm install

# Development (with hot reload)
npm run dev

# Production build
npm run build

# Run production build locally
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site. After editing any data file or adding images, refresh the page (or rely on hot reload in dev) to see changes.

---

## 9. Notes

- **IDs:** Use unique, sequential IDs for courses and classes to avoid key/display issues.
- **Slugs:** Store product URLs are based on `slug`. Changing a slug changes the product URL; old links will 404 unless you add a redirect.
- **Images:** Keep filenames and paths in data in sync with files in `public/`. Next.js serves `public/` at the root, so paths in data should start with `/` (e.g. `/courses/name.jpg`).
- **WhatsApp:** Enrollment and purchase flows use `app/utils/whatsappRedirect.js` to open WhatsApp with pre-filled message text; course/class/product names and key details are passed into these helpers from the data.

This documentation should be enough for anyone to add new courses, classes, and store products using only the data directory and the `public/` assets.
