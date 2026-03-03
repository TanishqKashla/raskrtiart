'use client'
import Image from "next/image";
import { LuShoppingCart } from "react-icons/lu";

interface ProductCardProps {
  productDetails: {
    title: string;
    artist: string;
    size: string;
    price: number;
    image: string;
    slug: string;
  };
}

const ProductCard = ({
  productDetails
}: ProductCardProps) => {


  return (
    <a href={`/shop/${productDetails.slug}`}>

      <div className="h-full flex flex-col gap-3 mb-3 md:mb-0 cursor-pointer">
        {/* Image wrapper */}
        <div className="aspect-[4/5] w-full relative overflow-hidden">
          <Image
            src={productDetails.image}
            alt={productDetails.title}
            fill
            className="object-cover object-center transition-transform duration-300 ease-in-out hover:scale-105"
          />
          <span className='absolute top-2 right-2 text-xs md:text-sm text-primary bg-white border border-primary px-2 md:px-4 py-0.5 md:py-1 rounded-full'>Made to Order</span>
        </div>

        {/* Content */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h3
              className="text-[18.65px] font-medium mb-1 leading-6 font-secondary"

            >
              {productDetails.title}
            </h3>
          </div>

          <div>
            <div
              className="flex justify-between text-[16px] font-book text-[#333] font-secondary"

            >
              <span className="hidden md:inline-block">Artist - {productDetails.artist}</span>
              <span>{productDetails.size}</span>
            </div>
            {/* Price */}
            <div
              className="bg-primary flex justify-center items-center gap-3 text-white text-center py-2 mt-3 text-[16px] font-book cursor-pointer font-light"
            >
              <LuShoppingCart /> ₹ {productDetails.price.toLocaleString()}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProductCard;
