import Button from '@/app/components/Button';
import Image from 'next/image'
import React from 'react'
import { LuArrowRight } from 'react-icons/lu';
import { storeProducts } from '@/app/data/storeData';
import ProductCard from '@/app/components/ProductCard';

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {

  const { slug } = await params;
  const product = storeProducts.find((item) => item.slug === slug);

  if (!product || product.inStock === false) {
    return <div className="text-center py-20 text-2xl font-primary text-primary">Product not found</div>;
  }


  return (
    <section className='max-w-[1195px] mx-auto px-5 md:px-8 py-12 md:py-4 gap-10'>
      <h2 className='text-2xl font-primary text-primary'>Shop</h2>

      {/* Product Details */}
      <div className='grid grid-cols-2 gap-10 md:gap-16 mt-5'>

        {/* Product Images */}
        <div className='flex flex-col gap-5'>
          <div className='aspect-[4/5] w-full relative overflow-hidden'>
            <Image
              src={product.imageData.mainImage.src}
              alt={product.imageData.mainImage.alt}
              fill
              className='object-cover' />
          </div>

          {/* thumbnails */}
          <div className='flex gap-3 justify-center'>
            <div className='relative overflow-hidden h-20 aspect-square'>
              <Image
                src={product.imageData.mainImage.src}
                alt={product.imageData.mainImage.alt}
                fill
                className='object-cover' />
            </div>
            {product.imageData.additionalImages.map((img, index) => (
              <div key={index} className='relative overflow-hidden h-20 aspect-square'>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className='object-cover' />
              </div>
            ))}
          </div>
        </div>



        {/* Product Information */}
        <div className=''>
          <p className='text-lg mb-5'>Category | {product.medium}</p>

          <div>
            <h3 className='font-primary text-primary text-6xl'>{product.title}</h3>
            <div className='flex gap-4 items-center mt-4'>
              <img src={product.artistPhoto} alt={product.artist} className='h-12 aspect-square rounded-full object-cover' />
              <span className='text-xl'>{product.artist}</span>
            </div>

            <p className='font-light font-bold text-2xl my-6'>₹{product.price.toLocaleString()}</p>
            <p className='text-2xl'>{product.description}</p>

            <div className='w-full flex gap-10 mt-10'>
              <div className='flex flex-col'>
                <h4 className='text-xl font-medium'>Dimensions: </h4>
                <p className='text-xl'>{product.dimensions}</p>
              </div>
              <div className='flex flex-col'>
                <h4 className='text-xl font-medium'>Material: </h4>
                <p className='text-xl'>{product.medium}</p>
              </div>
            </div>
            <Button>Buy Now on Whatsapp <LuArrowRight /></Button>
          </div>

          {/* Detailed List */}
          <div className='mt-28'>
            <h4 className='text-5xl font-primary'>Product Details</h4>
            <div className='py-6 border-b'>
              <h5 className='text-xl text-primary'>Title</h5>
              <p className='text-xl'>{product.title}</p>
            </div>
            <div className='py-6 border-b'>
              <h5 className='text-xl text-primary'>Artist</h5>
              <p className='text-xl'>{product.artist}</p>
            </div>
            <div className='py-6 border-b'>
              <h5 className='text-xl text-primary'>Art Style</h5>
              <p className='text-xl'>{product.artStyle}</p>
            </div>
            <div className='py-6 border-b'>
              <h5 className='text-xl text-primary'>Medium</h5>
              <p className='text-xl'>{product.medium}</p>
            </div>
            <div className='py-6 border-b'>
              <h5 className='text-xl text-primary'>Dimensions</h5>
              <p className='text-xl'>{product.dimensions}</p>
            </div>
            <div className='py-6 border-b'>
              <h5 className='text-xl text-primary'>Theme</h5>
              <p className='text-xl'>{product.theme}</p>
            </div>
            <div className='py-6'>
              <h5 className='text-xl text-primary'>Origin</h5>
              <p className='text-xl'>{product.origin}</p>
            </div>
          </div>
        </div>
      </div>


      <div className='py-10'>
        <h2 className='text-4xl font-primary mb-10'>More Paintings</h2>
        <div className='grid grid-cols-4'>
          {storeProducts.filter((item) => item.slug !== slug).map((product, index) => (
            <ProductCard key={index} productDetails={{
            title: product.title,
            artist: product.artist,
            size: product.dimensions,
            price: product.price,
            image: product.imageData.mainImage.src,
            slug: product.slug
          }} />
          ))}

        </div>
      </div>
      <div>

      </div>
    </section>

  )
}

export default page;