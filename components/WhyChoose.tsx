"use client";

import Image, { type StaticImageData } from "next/image";
import { motion } from "framer-motion";

import jobSeekerImage from "../app/assets/HowtoWorkimages/image2.png";
import recruiterImage from "../app/assets/HowtoWorkimages/image1.png";

const audiences: Array<{ title: string; description: string; image: StaticImageData }> = [
  { title: "Job Seekers", description: "Discover verified local jobs, build your profile, and apply with confidence from one simple app.", image: jobSeekerImage },
  { title: "Recruiters", description: "Post your openings, reach the right local talent, and manage applications without the paperwork.", image: recruiterImage },
];

export default function WhyChoose() {
  return (
    <section className="bg-[#f3f5f6] px-4 py-20 sm:px-8 lg:py-24">
      <div className="mx-auto max-w-[1320px]">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.3 }} transition={{ duration: 0.6 }}>
          <h2 className="text-4xl font-semibold tracking-[-2px] text-[#24151a] sm:text-5xl">
            Why choose <span className="text-[#AC1E44]">Kanchipuram Jobs?</span>
          </h2>
          <p className="mt-5 max-w-[920px] text-base leading-8 text-[#675c61] sm:text-lg">
            A trusted local platform designed for both job seekers and recruiters. Whether you are looking for your next opportunity or your next great hire, we make the process simple.
          </p>
        </motion.div>
        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {audiences.map(({ title, description, image }, index) => (
            <motion.article
              initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.65, delay: index * 0.12 }} whileHover={{ y: -6 }}
              className="group relative isolate min-h-[410px] overflow-hidden rounded-2xl bg-[#161518] shadow-[0_18px_40px_rgba(36,21,26,0.12)] sm:min-h-[470px]"
              key={title}
            >
              <Image src={image} alt={`${title} experience in the Kanchipuram Jobs app`} fill sizes="(max-width: 768px) 100vw, 50vw" className="-z-20 object-contain object-center opacity-55 transition duration-700 group-hover:scale-105 group-hover:opacity-65" />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-[#09090c] via-[#09090c]/65 to-[#09090c]/25" />
              <div className="absolute inset-x-0 bottom-0 p-8 sm:p-11">
                <div className="mb-5 h-1 w-14 rounded-full bg-[#d79aab]" />
                <h3 className="text-3xl font-semibold tracking-[-1px] text-white sm:text-4xl">{title}</h3>
                <p className="mt-5 max-w-[590px] text-base leading-7 text-white/90 sm:text-lg sm:leading-8">{description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
