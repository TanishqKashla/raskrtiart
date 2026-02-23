export const storeProducts = [
  {
    title: "Krishna and Yashoda Maa",
    slug: "krishna-and-yashoda-maa",
    artist: "Shweta Singh",
    artistPhoto: "/pfp.jpeg",
    description: "This is a beautiful painting that captures the essence of nature with vibrant colors and intricate details. This is a beautiful painting that captures the essence of nature with vibrant colors and intricate details.This is a beautiful painting that captures the essence of nature with vibrant colors and intricate details.",
    price: 56000,
    artStyle: "Abstract",
    medium: "Acrylic on Canvas",
    dimensions: "24 in X 18 in",
    theme: "Nature",
    origin: "India",

    imageData: {
      mainImage: {
        src: "/store/painting-name/main.jpeg",
        alt: "Painting 1"
      },
      additionalImages: [
        {
          src: "/store/painting-name/1.jpg",
          alt: "Painting 1 Detail"
        },
        {
          src: "/store/painting-name/2.jpg",
          alt: "Painting 1 Close-up"
        },
        {
          src: "/store/painting-name/3.jpg",
          alt: "Painting 1 Back View"
        },
      ]
    },
    inStock: true,
    discount: 10,
    tags: ["nature", "vibrant", "intricate"],
  },
  {
    title: "Sunset Over the Hills",
    slug: "sunset-over-the-hills",
    artist: "Rajiv Menon",
    description: "An evocative depiction of a sunset casting golden hues over rolling hills, evoking a sense of peace and tranquility.",
    price: 18000,
    artStyle: "Impressionism",
    medium: "Oil on Canvas",
    dimensions: "30 in X 20 in",
    theme: "Landscape",
    origin: "India",
    imageData: {
      mainImage: {
        src: "/store/peacock/main.jpg",
        alt: "Painting 2"
      },
      additionalImages: [
        {
          src: "/store/painting2/1.jpeg",
          alt: "Painting 2 Detail"
        },
        {
          src: "/store/painting2/2.jpeg",
          alt: "Painting 2 Close-up"
        }
      ]
    },
    inStock: true,
    discount: 15,
    tags: ["sunset", "hills", "tranquility"],
  },
]
