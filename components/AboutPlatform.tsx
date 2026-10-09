"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FiArrowUpRight, FiBriefcase } from "react-icons/fi";
import { AnimatePresence, motion } from "framer-motion";
import jobImage from "../app/assets/HowtoWorkimages/image2.png";
import jobImageAlt from "../app/assets/HowtoWorkimages/image4.png";
import jobImageDetails from "../app/assets/HowtoWorkimages/image3.png";

const jobSeekerImages = [jobImage, jobImageAlt, jobImageDetails];

export default function AboutPlatform({ aboutUrl }: { aboutUrl: string }) {
  const [imageIndex, setImageIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setImageIndex((current) => (current + 1) % jobSeekerImages.length);
    }, 3500);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section
      className="border-t border-[#ead9de] bg-white px-4 py-20 sm:px-9 lg:py-28"
      id="about"
    >
      <div className="mx-auto grid max-w-[1160px] items-center gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-24">
        <div className="relative grid grid-cols-2 items-center gap-5 lg:h-[460px]">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            animate={{ y: [0, -8, 0] }}
            className="relative flex min-h-[330px] h-full items-center justify-center overflow-hidden rounded-xl bg-[#AC1E44] p-8 text-center text-white shadow-[0_18px_45px_rgba(172,30,68,0.18)] sm:min-h-[410px]"
          >
            <span className="absolute -right-12 -top-12 h-36 w-36 rounded-full border border-white/20" />
            <span className="absolute -bottom-16 -left-10 h-44 w-44 rounded-full border border-white/15" />
            <div>
              <motion.div
                animate={{ rotate: [0, -7, 7, 0], scale: [1, 1.06, 1] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="mx-auto mb-5 grid h-20 w-20 place-items-center rounded-full border-2 border-[#f3c3d0] text-4xl font-bold text-[#f3c3d0]"
              >
                <FiBriefcase aria-hidden="true" />
              </motion.div>
              <strong className="block text-3xl tracking-tight">
                Kanchipuram
              </strong>
              <span className="mt-1 block text-[10px] font-bold tracking-[3px] text-[#f3c3d0]">
                JOBS
              </span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex min-h-[330px] h-full items-center justify-center overflow-visible sm:min-h-[410px]"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={imageIndex}
                initial={{ opacity: 0, y: 20, scale: 0.96, rotate: 2 }}
                animate={{ opacity: 1, y: 0, scale: 1, rotate: 0 }}
                exit={{ opacity: 0, y: -20, scale: 0.96, rotate: -2 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="h-full w-full"
              >
                <Image
                  src={jobSeekerImages[imageIndex]}
                  alt="Professionals discovering opportunities in Kanchipuram"
                  className="h-full w-full scale-130 object-contain"
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-white/80 px-3 py-2 shadow-sm backdrop-blur-sm" aria-label={`Showing image ${imageIndex + 1} of ${jobSeekerImages.length}`}>
              {jobSeekerImages.map((_, index) => (
                <motion.span key={index} animate={{ width: index === imageIndex ? 18 : 6, opacity: index === imageIndex ? 1 : 0.35 }} className="h-1.5 rounded-full bg-[#AC1E44]" />
              ))}
            </div>
          </motion.div>
        </div>
        <div>
          <p className="mb-5 text-[10px] font-extrabold tracking-[2px] text-[#9d536c]">
            ABOUT KANCHIPURAM JOBS
          </p>
          <h2 className="text-4xl font-bold leading-none tracking-[-2px] text-[#24151a] sm:text-5xl">
            Connecting people
            <br />
            with{" "}
            <em className="font-normal text-[#AC1E44]">real opportunity.</em>
          </h2>
          <p className="mt-8 text-[15px] leading-8 text-[#68636a]">
            Kanchipuram Jobs is a local-first employment platform created to
            make genuine work opportunities easier to discover, apply for, and
            follow. Job seekers can build a profile, search by category and
            location, upload a resume, and apply with one tap.
          </p>
          <p className="mt-6 text-[15px] leading-8 text-[#68636a]">
            Recruiters complete company KYC, choose a subscription plan, publish
            jobs, and manage applications in one connected place. By bringing
            verified employers and local talent together, we are building a
            clearer, more trusted employment ecosystem for Kanchipuram and
            nearby districts.
          </p>
          <a
            href={aboutUrl}
            className="mt-8 inline-flex rounded bg-[#AC1E44] px-5 py-3.5 text-xs font-bold text-white transition hover:bg-[#8f1838]"
          >
            Learn more about us <FiArrowUpRight aria-hidden="true" className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
