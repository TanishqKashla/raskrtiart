'use client'
import Button from '@/app/components/Button';
import React from 'react'
import { LuArrowRight } from 'react-icons/lu';
import { storeProducts } from '@/app/data/storeData';
import ProductCard from '@/app/components/ProductCard';
import ProductGallery from '@/app/components/ProductGallery';
import Image from 'next/image';
import { buyProductRedirect } from '@/app/utils/whatsappRedirect';
import Link from 'next/link';
import NotFound from '@/app/not-found';

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {

  const { slug } = await params;

  // Define a type that covers all possible properties in storeData
  interface StoreProduct {
    slug: string;
    title: string;
    medium: string;
    base: string;
    dimensions: string;
    timeToMake: string;
    price: number;
    artist: string;
    artistPhoto: string;
    imageData: {
      mainImage: {
        src: string;
        alt: string;
      };
      additionalImages?: {
        src?: string;
        alt?: string;
      }[];
    };
    tags?: string[];
    artStyle?: string;
    theme?: string;
    origin?: string;
    category?: string;
    inStock?: boolean;
  }

  const product = storeProducts.find((item: any) => item.slug === slug) as StoreProduct | undefined;

  if (!product) {
    return <NotFound />;
  }


  return (
    <section className='max-w-[1195px] mx-auto px-5 md:px-8 py-5 md:py-4 gap-10'>
      <h2 className='text-2xl font-primary text-primary'>Shop</h2>

      {/* Product Details */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mt-5'>

        {/* Product Images */}
        <ProductGallery
          mainImage={product.imageData.mainImage}
          additionalImages={(product.imageData.additionalImages || [])
            .filter((img): img is { src: string; alt: string } => !!img.src && !!img.alt)}
        />



        {/* Product Information */}
        <div className=''>
          <p className='text-lg mb-5'>{product.medium} | {product.base}</p>

          <div>
            <h3 className='font-primary text-primary text-4xl md:text-6xl'>{product.title}</h3>
            <div>
              {product.tags && (
                <div className='flex flex-wrap gap-2 mt-3'>
                  <span className='text-xs md:text-lg text-white bg-yellow-600 px-2 md:px-5 py-0.5 md:py-1 rounded-full'>Made to Order</span>
                  {product.tags.map((tag, index) => (
                    <span
                      key={index}
                      className='text-xs md:text-lg text-primary border border-primary bg-primary/10 px-2 md:px-5 py-0.5 md:py-1 rounded-full'
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
            <div className='flex gap-4 items-center mt-4'>
              <img src={product.artistPhoto} alt={product.artist} className='h-12 aspect-square rounded-full object-cover' />
              <span className='text-xl'>{product.artist}</span>
            </div>

            <p className='font-light font-bold text-3xl my-6'>₹{product.price.toLocaleString()}</p>

            <div className='w-full bg-primary/10 border-2 border-primary/20 rounded-lg p-4 px-6 grid grid-cols-2 gap-5 mt-10 mb-10'>
              <div className='flex flex-col'>
                <h4 className='text-xl font-medium'>Dimensions: </h4>
                <p className='text-xl'>{product.dimensions}</p>
              </div>
              <div className='flex flex-col'>
                <h4 className='text-xl font-medium'>Material: </h4>
                <p className='text-xl'>{product.medium}</p>
              </div>
              <div className='flex flex-col'>
                <h4 className='text-xl font-medium'>Time to Make: </h4>
                <p className='text-xl'>{product.timeToMake}</p>
              </div>
              <div className='flex flex-col'>
                <h4 className='text-xl font-medium'>Base: </h4>
                <p className='text-xl'>{product.base}</p>
              </div>
            </div>
            <Button
              onClick={() => window.open(buyProductRedirect({ productLink: window.location.href, productName: product.title, price: product.price }), "_blank")}
              className='flex gap-3 items-center'>Buy Now on Whatsapp <LuArrowRight /></Button>
          </div>

          {/* Detailed List */}
          <div className='mt-20 md:mt-28'>
            <h4 className='text-4xl md:text-5xl font-primary'>Product Details</h4>
            <div className='py-6 border-b'>
              <h5 className='text-xl text-primary'>Title</h5>
              <p className='text-xl'>{product.title}</p>
            </div>
            <div className='py-6 border-b'>
              <h5 className='text-xl text-primary'>Artist</h5>
              <p className='text-xl'>{product.artist}</p>
            </div>
            {product.artStyle && (
              <div className='py-6 border-b'>
                <h5 className='text-xl text-primary'>Art Style</h5>
                <p className='text-xl'>{product.artStyle}</p>
              </div>
            )}
            <div className='py-6 border-b'>
              <h5 className='text-xl text-primary'>Medium</h5>
              <p className='text-xl'>{product.medium}</p>
            </div>
            <div className='py-6 border-b'>
              <h5 className='text-xl text-primary'>Base</h5>
              <p className='text-xl'>{product.base}</p>
            </div>
            <div className='py-6 border-b'>
              <h5 className='text-xl text-primary'>Dimensions</h5>
              <p className='text-xl'>{product.dimensions}</p>
            </div>
            {product.theme && (
              <div className='py-6 border-b'>
                <h5 className='text-xl text-primary'>Theme</h5>
                <p className='text-xl'>{product.theme}</p>
              </div>
            )}
            <div className='py-6 border-b'>
              <h5 className='text-xl text-primary'>Time to Make</h5>
              <p className='text-xl'>{product.timeToMake}</p>
            </div>
            {product.origin && (
              <div className='py-6'>
                <h5 className='text-xl text-primary'>Origin</h5>
                <p className='text-xl'>{product.origin}</p>
              </div>
            )}
          </div>
        </div>
      </div>


      <div className='py-10'>
        {/* compute suggestions lists */}
        {(() => {
          // split the products into same-category and others
          const sameCategory = storeProducts.filter(
            (item) => item.category === product.category && item.slug !== slug
          );
          const otherCategory = storeProducts.filter(
            (item) => item.category !== product.category && item.slug !== slug
          );

          // helper for rendering a grid of cards
          const renderGrid = (items: typeof storeProducts, keyPrefix: string) => (
            <div className='grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-10'>
              {items.map((p, i) => (
                <ProductCard
                  key={`${keyPrefix}-${i}`}
                  productDetails={{
                    title: p.title,
                    artist: p.artist,
                    size: p.dimensions,
                    price: p.price,
                    image: p.imageData.mainImage.src,
                    slug: p.slug,
                  }}
                />
              ))}
            </div>
          );

          // determine primary/secondary order based on current category
          const isMiniature = product.category === 'Rajasthani Miniature';

          return (
            <>
              {sameCategory.length > 0 && (
            <>
              <h2 className='text-4xl font-primary mb-10'>
                {isMiniature ? 'More Rajasthani Miniatures' : 'Explore More Artworks'}
              </h2>
              {renderGrid(sameCategory, 'primary')}
            </>
          )}

          {otherCategory.length > 0 && (
            <>
              <h2 className='text-4xl font-primary my-10'>
                {isMiniature ? 'Explore More Artworks' : 'Rajasthani Miniatures'}
              </h2>
              {renderGrid(otherCategory, 'secondary')}
            </>
          )}
            </>
          );
        })()}
      </div>
      <div>

      </div>
    </section>

  )
}

export default page;