"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";

export default function AutoImageCarousel({
  images,
  alt,
}: {
  images: StaticImageData[];
  alt: string;
}) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(
      () => setIndex((current) => (current + 1) % images.length),
      2200,
    );
    return () => window.clearInterval(timer);
  }, [images.length]);
 
  return (
    <div className="flex h-full w-full flex-col">
      {/* Image area */}
      <div className="relative min-h-0 flex-1 w-full">
        {images.map((image, imageIndex) => (
          <Image
            key={image.src}
            src={image}
            alt={`${alt} ${imageIndex + 1}`}
            fill
            sizes="(max-width: 1024px) 300px, 40vw"
            className={`object-contain p-2 sm:p-4 transition-opacity duration-700 ${
              imageIndex === index
                ? "carousel-image-active opacity-100"
                : "pointer-events-none opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Navigation dots - separate from image */}
      <div className="flex h-10 shrink-0 items-center justify-center gap-1.5">
        {images.map((image, imageIndex) => (
          <span
            key={image.src}
            className={`h-1.5 rounded-full transition-all ${
              imageIndex === index
                ? "w-5 bg-[#ac1e44]"
                : "w-1.5 bg-[#d9a8b7]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
