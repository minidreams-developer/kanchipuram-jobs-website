"use client";

import Image from "next/image";
import { FiArrowUpRight, FiBookOpen, FiHeart, FiHome, FiTrendingUp } from "react-icons/fi";
import { motion } from "framer-motion";

const categories = ["Construction & Architecture", "Education & Training", "Sales & Marketing", "Healthcare & Wellness"];
const categoryIcons = [FiHome, FiBookOpen, FiTrendingUp, FiHeart];
const categoryImages = ["/career-construction.png", "/career-education.png", "/career-sales.png", "/career-healthcare.png"];
const wrap = "mx-auto w-[calc(100%-2rem)] max-w-[1160px] sm:w-[calc(100%-4.5rem)]";
const heading = "text-5xl leading-none tracking-[-3px] text-teal-700";

export default function JobsSection() {
  return (
    <section className={`${wrap} py-24`} id="jobs">
      <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div><p className="mb-5 text-[20px] font-extrabold tracking-[2px] text-[#9d536c]">OPPORTUNITIES, YOUR WAY</p><h2 className={heading}>Find work that fits<br /><em className="font-normal text-[#ac1e44]">your life.</em></h2><p className="my-6 max-w-[410px] text-[15px] leading-7 text-[#765361]">Search by category, location, salary, experience, and job type to discover the opportunity made for you.</p></div>
        <a className="inline-flex items-center gap-2 rounded border border-[#d89bad] px-[18px] py-3.5 text-xs font-bold text-[#ac1e44]" href="#for-employers">For employers <FiArrowUpRight aria-hidden="true" /></a>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category, index) => {
          const Icon = categoryIcons[index]; return (
            <motion.a key={category} href="#contact" initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }} whileHover={{ y: -8 }} whileTap={{ scale: 0.98 }} className="group relative min-h-[176px] overflow-hidden rounded-[24px] border border-[#ead1d9] bg-gradient-to-br from-[#fffafd] to-[#f9e3ea] p-5 shadow-[0_14px_35px_rgba(108,35,58,0.08)] transition-shadow hover:shadow-[0_22px_45px_rgba(108,35,58,0.16)]">
              <span className="absolute -bottom-16 right-[-18px] h-40 w-40 rounded-full border border-[#ac1e44]/10" />
              <div className="relative z-10 flex items-start gap-3">
                <span className="grid h-14 w-14 shrink-0 place-items-center rounded-[17px] bg-white text-[23px] text-[#ac1e44] shadow-[0_8px_18px_rgba(172,30,68,0.10)] transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-105"><Icon aria-hidden="true" /></span>
                <div className="min-w-0 pt-1 pr-12">
                  <h3 className="max-w-[132px] text-[17px] font-bold leading-[1.18] text-[#24151a]">{category}</h3>
                  <p className="mt-3 max-w-[155px] text-[13px] leading-5 text-[#765361]">Find trusted local opportunities.</p>
                </div>
              </div>
              <span className="absolute right-5 top-5 z-20 grid h-11 w-11 place-items-center rounded-full bg-[#ac1e44] text-lg text-white shadow-[0_8px_16px_rgba(172,30,68,0.18)] transition-transform group-hover:translate-x-1"><FiArrowUpRight aria-hidden="true" /></span>
              <Image src={categoryImages[index]} alt="" width={716} height={716} className="absolute bottom-[-12px] right-[-8px] z-[1] h-[148px] w-[148px] object-contain object-bottom" />
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
