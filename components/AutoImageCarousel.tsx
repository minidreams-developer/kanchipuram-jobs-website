"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";

export default function AutoImageCarousel({ images, alt }: { images: StaticImageData[]; alt: string }) {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % images.length), 2200);
    return () => window.clearInterval(timer);
  }, [images.length]);
  return <div className="relative h-full w-full">{images.map((image, imageIndex) => <Image key={image.src} src={image} alt={`${alt} ${imageIndex + 1}`} fill sizes="(max-width: 1024px) 360px, 40vw" className={`object-contain p-4 transition-opacity duration-700 ${imageIndex === index ? "carousel-image-active opacity-100" : "pointer-events-none opacity-0"}`} />)}<div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-white/80 px-2.5 py-1.5">{images.map((image, imageIndex) => <span key={image.src} className={`h-1.5 rounded-full transition-all ${imageIndex === index ? "w-5 bg-[#ac1e44]" : "w-1.5 bg-[#d9a8b7]"}`} />)}</div></div>;
}
