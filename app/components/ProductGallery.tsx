'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { IoClose } from "react-icons/io5";

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
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [zoomStyle, setZoomStyle] = useState<React.CSSProperties>({});
    const [isHovered, setIsHovered] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    // Combine for easy thumbnail list if needed, but current structure separates them.
    // Actually, usually the main image is also a thumbnail.
    const allImages = [mainImage, ...(additionalImages || [])];

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        // Only enable zoom on desktop/large screens
        if (window.innerWidth < 1024) return;

        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = ((e.clientX - left) / width) * 100;
        const y = ((e.clientY - top) / height) * 100;

        setZoomStyle({
            transformOrigin: `${x}% ${y}%`,
            transform: 'scale(2.5)', // Adjust scale as needed
        });
    };

    const handleMouseEnter = () => {
        // Only enable zoom on desktop/large screens
        if (window.innerWidth < 1024) return;
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
                className='aspect-[4/5] w-full relative overflow-hidden cursor-pointer rounded-xl border border-gray-100 shadow-sm'
                onClick={openModal}
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
                        className={`relative overflow-hidden h-16 md:h-20 aspect-square rounded-md cursor-pointer border-2 transition-all duration-300 ${activeImage.src === img.src ? 'border-primary ring-1 ring-primary/30 scale-105' : 'border-transparent opacity-80 hover:opacity-100 hover:border-gray-200'
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

            {/* Lightbox Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-sm"
                    onClick={closeModal}
                >
                    <button
                        className="absolute top-5 right-5 text-white text-4xl hover:text-gray-300 transition-colors z-50 p-2"
                        onClick={(e) => {
                            e.stopPropagation();
                            closeModal();
                        }}
                        aria-label="Close gallery"
                    >
                        <IoClose />
                    </button>
                    <div
                        className="relative w-full h-full max-w-6xl max-h-[90vh] flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={activeImage.src}
                            alt={activeImage.alt}
                            fill
                            className="object-contain"
                            priority
                            sizes="100vw"
                        />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductGallery;
