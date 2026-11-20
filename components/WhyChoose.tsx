"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";

import jobSeekerImage from "../app/assets/JobSeekers/Kanchipuram Careers_ Job Seekers and Recruiters.png";
import recruiterImage from "../app/assets/Recutier/Kanchipuram Careers_ Job_Recruiters.png";

const audiences: Array<{ title: string; description: string; image: StaticImageData }> = [
  { title: "Job Seekers", description: "Discover verified local jobs, build your profile, and apply with confidence from one simple app.", image: jobSeekerImage },
  { title: "Recruiters", description: "Post your openings, reach the right local talent, and manage applications without the paperwork.", image: recruiterImage },
];

export default function WhyChoose() {
  return (
    <section className="bg-[#f3f5f6] px-4 py-20 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-[1320px]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6 }}>
          <h2 className="text-4xl font-semibold tracking-[-2px] text-teal-700 sm:text-5xl">
            Why choose <span className="text-[#AC1E44]">Kanchipuram Jobs?</span>
          </h2>
          <p className="mt-5 max-w-[920px] text-base leading-8 text-[#675c61] sm:text-lg">
            A trusted local platform designed for both job seekers and recruiters. Whether you are looking for your next opportunity or your next great hire, we make the process simple.
          </p>
        </motion.div>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {audiences.map(({ title, description, image }, index) => (
            
<motion.article
  initial={{ opacity: 0, y: 35 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: false, amount: 0.2 }}
  transition={{ duration: 0.65, delay: index * 0.12 }}
  whileHover={{ y: -6 }}
  className="
    group overflow-hidden rounded-3xl
    border border-[#ead9de]
    bg-white
    shadow-[0_15px_40px_rgba(172,30,68,0.08)]
  "
  key={title}
>
  {/* Image area */}
  <div className="
    relative h-[280px] w-full
    overflow-hidden bg-[#f8e7ec]
    sm:h-[320px]
  ">
    <Image
      src={image}
      alt={`${title} experience in Kanchipuram Jobs`}
      fill
      sizes="(max-width: 768px) 100vw, 50vw"
      className="
        object-contain object-center
        p-3 sm:p-4
        transition-transform duration-500
        group-hover:scale-[1.02]
      "
    />
  </div>

  {/* Content area */}
  <div className="p-7 sm:p-9">
    <div className="
      mb-4 h-1 w-14 rounded-full
      bg-gradient-to-r from-[#AC1E44] to-[#F3C3D0]
    " />

    <h3 className="
      text-3xl font-bold tracking-tight
      text-[#24151a] sm:text-4xl
    ">
      {title}
    </h3>

    <p className="
      mt-3 max-w-[590px]
      text-sm leading-7 text-[#675c61]
      sm:text-base sm:leading-8
    ">
      {description}
    </p>
  </div>
</motion.article>

          ))}
        </div>
      </div>
    </section>
  );
}
