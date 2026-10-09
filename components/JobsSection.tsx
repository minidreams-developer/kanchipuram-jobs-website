"use client";

import { FiArrowUpRight, FiBookOpen, FiHeart, FiHome, FiTrendingUp } from "react-icons/fi";
import { motion } from "framer-motion";

const categories = ["Construction & Architecture", "Education & Training", "Sales & Marketing", "Healthcare & Wellness"];
const categoryIcons = [FiHome, FiBookOpen, FiTrendingUp, FiHeart];
const wrap = "mx-auto w-[calc(100%-2rem)] max-w-[1160px] sm:w-[calc(100%-4.5rem)]";
const heading = "text-5xl leading-none tracking-[-3px] text-[#24151a]";

export default function JobsSection() {
  return (
    <section className={`${wrap} py-24`} id="jobs">
      <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div><p className="mb-5 text-[10px] font-extrabold tracking-[2px] text-[#9d536c]">OPPORTUNITIES, YOUR WAY</p><h2 className={heading}>Find work that fits<br /><em className="font-normal text-[#ac1e44]">your life.</em></h2><p className="my-6 max-w-[410px] text-[15px] leading-7 text-[#765361]">Search by category, location, salary, experience, and job type to discover the opportunity made for you.</p></div>
        <a className="inline-flex items-center gap-2 rounded border border-[#d89bad] px-[18px] py-3.5 text-xs font-bold text-[#ac1e44]" href="#for-employers">For employers <FiArrowUpRight aria-hidden="true" /></a>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category, index) => { const Icon = categoryIcons[index]; return (
          <motion.a key={category} href="#contact" initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }} whileHover={{ y: -8 }} whileTap={{ scale: 0.98 }} className="group relative min-h-[252px] overflow-hidden rounded-[26px] border border-[#ead1d9] bg-[#fffdfd] p-4 shadow-[0_14px_35px_rgba(108,35,58,0.08)] transition-shadow hover:shadow-[0_22px_45px_rgba(108,35,58,0.16)]">
            <div className="relative flex items-center justify-between rounded-[19px] bg-gradient-to-br from-[#fff1f5] to-[#f9e3ea] p-4">
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-xl text-[#ac1e44] shadow-[0_8px_18px_rgba(172,30,68,0.12)] transition-transform duration-300 group-hover:rotate-[-6deg] group-hover:scale-110"><Icon aria-hidden="true" /></span>
              <span className="grid h-9 w-9 place-items-center rounded-full bg-[#ac1e44] text-lg text-white transition-transform group-hover:translate-x-1"><FiArrowUpRight aria-hidden="true" /></span>
              <span className="absolute -bottom-7 right-8 h-16 w-16 rounded-full border border-[#ac1e44]/10" />
            </div>
            <div className="px-1 pt-5">
              <div className="mb-3 flex items-center justify-between text-[9px] font-bold tracking-[1.5px] text-[#b06a80]"><span>LOCAL OPPORTUNITY</span><span>0{index + 1}</span></div>
              <h3 className="text-base leading-6 text-[#24151a]">{category}</h3>
              <p className="mt-2 text-xs leading-5 text-[#896575]">Find trusted local opportunities and take your next step.</p>
            </div>
            <span className="absolute bottom-0 left-5 right-5 h-px bg-gradient-to-r from-transparent via-[#e7b7c5] to-transparent" />
          </motion.a>
        ); })}
      </div>
    </section>
  );
}
