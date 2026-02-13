'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ImageType {
    src: string;
    alt: string;
}

interface ProductGalleryProps {
    mainImage: ImageType;
    additionalImages: ImageType[];
}

const ProductGallery: React.FC<ProductGalleryProps> = ({ mainImage, additionalImages }) => {
    const [activeImage, setActiveImage] = useState(mainImage);
    const [zoomStyle, setZoomStyle] = useState<React.CSSProperties>({});
    const [isHovered, setIsHovered] = useState(false);

    // Combine for easy thumbnail list if needed, but current structure separates them.
    // Actually, usually the main image is also a thumbnail.
    const allImages = [mainImage, ...(additionalImages || [])];

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;

        setZoomStyle({
            transformOrigin: `${x}% ${y}%`,
            transform: 'scale(2.5)', // Adjust scale as needed
        });
    };

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        setZoomStyle({
            transformOrigin: 'center center',
            transform: 'scale(1)',
        });
    };

    return (
        <div className='flex flex-col gap-5 w-full'>
            {/* Main Display Area */}
            <div
                className='aspect-[4/5] w-full relative overflow-hidden cursor-crosshair rounded-xl border border-gray-100 shadow-sm'
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Image
                    src={activeImage.src}
                    alt={activeImage.alt}
                    fill
                    className={`object-cover transition-transform duration-100 ease-out ${!isHovered ? 'transition-all duration-300' : ''}`}
                    style={zoomStyle}
                    priority
                />
            </div>

            {/* Thumbnails */}
            <div className='flex gap-3 justify-center md:justify-start flex-wrap'>
                {allImages.map((img, index) => (
                    <div
                        key={index}
                        className={`relative overflow-hidden h-20 aspect-square rounded-md cursor-pointer border-2 transition-all duration-300 ${activeImage.src === img.src ? 'border-primary ring-1 ring-primary/30 scale-105' : 'border-transparent opacity-80 hover:opacity-100 hover:border-gray-200'
                            }`}
                        onClick={() => setActiveImage(img)}
                    >
                        <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            className='object-cover'
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductGallery;
