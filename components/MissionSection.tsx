"use client";

import { motion, useInView } from "framer-motion";
import { FiGlobe, FiStar, FiShield, FiUsers } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";

const missionStats = [
  [FiUsers, "1,200", "Jobs posted", "+"],
  [FiStar, "850", "Active employers", "+"],
  [FiShield, "4.9", "Community rating", "/5"],
  [FiGlobe, "100", "Local opportunities", "%"],
] as const;

function Counter({ value, suffix }: { value: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: false, margin: "-80px" });
  const target = Number(value.replace(/,/g, ""));
  const [count, setCount] = useState(0);
  const decimals = value.includes(".") ? 1 : 0;

  useEffect(() => {
    if (!isInView) return;
    const duration = 1400;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Number((target * eased).toFixed(decimals)));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [isInView, target]);

  return <span ref={ref}>{count.toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}{suffix}</span>;
}

export default function MissionSection() {
  return (
    <section className="border-t border-[#ead9de] bg-white px-4 py-20 sm:px-9 lg:py-28">
      <div className="mx-auto grid max-w-[1160px] items-center gap-12 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
        <motion.div initial={{ opacity: 0, x: -45 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.7 }}>
          <p className="mb-5 text-[10px] font-extrabold tracking-[2px] text-[#9d536c]">OUR MISSION</p>
          <h2 className="text-4xl font-bold leading-[1.05] tracking-[-2px] text-[#24151a] sm:text-5xl">Making local work <em className="font-normal text-[#ac1e44]">easier to find.</em></h2>
          <p className="mt-7 max-w-[520px] text-[15px] leading-8 text-[#68636a]">We make meaningful employment easier to discover by bringing verified recruiters and local talent together through a simple, transparent platform.</p>
          <p className="mt-5 max-w-[520px] text-[15px] leading-8 text-[#68636a]">From finding the right opportunity to tracking an application, Kanchipuram Jobs helps people take their next career step with confidence.</p>
        </motion.div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {missionStats.map(([Icon, value, label, suffix], index) => (
            <motion.article key={label} initial={{ opacity: 0, x: 45 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: false, amount: 0.2 }} transition={{ duration: 0.6, delay: index * 0.1 }} className="flex min-h-[205px] flex-col items-center justify-center rounded-[22px] bg-[#fafbfa] px-5 py-7 text-center shadow-[0_8px_24px_rgba(36,21,26,0.04)]">
              <div className="mb-5 grid h-20 w-20 place-items-center rounded-full bg-[#f9e5eb] text-[40px] text-[#ac1e44]"><Icon aria-hidden="true" /></div>
              <strong className="text-[39px] font-bold leading-none tracking-[-2px] text-[#ac1e44]">
                <Counter value={value} suffix={suffix} />
              </strong>
              <span className="mt-3 text-[17px] text-[#68636a]">{label}</span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
