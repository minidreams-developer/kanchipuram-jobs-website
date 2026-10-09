"use client";

import { FiArrowUpRight, FiBookOpen, FiHeart, FiHome, FiTrendingUp } from "react-icons/fi";
import { motion } from "framer-motion";
import Image from "next/image";
import recruiterImage from "../app/assets/HowtoWorkimages/image1.png";

/* categories moved to JobsSection.tsx */
const categories = [
  "Construction & Architecture",
  "Education & Training",
  "Sales & Marketing",
  "Healthcare & Wellness",
  "Retail & Customer Service",
  "Engineering & Technology",
];
const categoryIcons = [FiHome, FiBookOpen, FiTrendingUp, FiHeart];
const faqs = [
  "What is Kanchipuram Jobs?",
  "How do I apply for a job?",
  "Can I track my application status?",
  "How are recruiters verified?",
  "Can recruiters post jobs immediately?",
];
const wrap =
  "mx-auto w-[calc(100%-2rem)] max-w-[1160px] sm:w-[calc(100%-4.5rem)]";
const heading = "text-5xl leading-none tracking-[-3px] text-[#24151a]";
export function Stats() {
  return (
    <section className="bg-[#ac1e44] py-7 text-white">
      <div className={`${wrap} grid grid-cols-2 gap-6 md:grid-cols-4`}>
        {[
          ["1,200", "Jobs posted", "+"],
          ["850", "Active employers", "+"],
          ["4.9", "Community rating", "/5"],
          ["100", "Local opportunities", "%"],
        ].map(([n, l, s]) => (
          <div key={l}>
            <strong className="text-[27px]">
              {n}
              <span className="text-[17px] text-[#f3c3d0]">{s}</span>
            </strong>
            <small className="mt-1 block text-[10px] text-[#f1c7d3]">{l}</small>
          </div>
        ))}
      </div>
    </section>
  );
}
export function JobsSection() {
  return (
    <section className={`${wrap} py-24`} id="jobs">
      <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div>
          <p className="mb-5 text-[10px] font-extrabold tracking-[2px] text-[#9d536c]">
            OPPORTUNITIES, YOUR WAY
          </p>
          <h2 className={heading}>
            Find work that fits
            <br />
            <em className="font-normal text-[#ac1e44]">your life.</em>
          </h2>
          <p className="my-6 max-w-[410px] text-[15px] leading-7 text-[#765361]">
            Search by category, location, salary, experience, and job type to
            discover the opportunity made for you.
          </p>
        </div>
        <a
          className="rounded border border-[#d89bad] px-[18px] py-3.5 text-xs font-bold text-[#ac1e44]"
          href="#for-employers"
        >
          Browse all jobs ↗
        </a>
      </div>
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {categories.slice(0, 4).map((c, i) => {
          const Icon = categoryIcons[i];
          return (
          <motion.a
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group relative min-h-[220px] overflow-hidden rounded-2xl border border-[#ead1d9] bg-gradient-to-br from-white to-[#fff5f8] p-5 shadow-[0_10px_28px_rgba(108,35,58,0.06)] transition-shadow hover:shadow-[0_18px_36px_rgba(108,35,58,0.15)]"
            href="#contact"
            key={c}
          >
            <div className="flex items-start"><span className="grid h-11 w-11 place-items-center rounded-xl bg-[#f9e5eb] text-xl text-[#ac1e44] transition-transform group-hover:scale-110"><Icon aria-hidden="true" /></span></div>
            <b className="float-right text-[#b26b82]">↗</b>
            <h3 className="mt-[67px] text-base">{c}</h3>
            <p className="mt-2 text-xs leading-5 text-[#896575]">
              Find trusted local opportunities and take your next step.
            </p>
          </motion.a>
          );
        })}
      </div>
    </section>
  );
}
export function WhySection() {
  return (
    <section className={`${wrap} py-24`}>
      <div className="mb-12 text-center">
        <p className="mb-5 text-[10px] font-extrabold tracking-[2px] text-[#9d536c]">
          WHY KANCHIPURAM JOBS
        </p>
        <h2 className={heading}>
          Built around{" "}
          <em className="font-normal text-[#ac1e44]">real people.</em>
        </h2>
        <p className="mx-auto my-5 max-w-[410px] text-[15px] leading-7 text-[#765361]">
          A local-first platform that brings job seekers and employers closer
          together.
        </p>
      </div>
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {[
          "Local opportunities",
          "Trusted recruiters",
          "Clear application tracking",
          "Made for growth",
        ].map((t, i) => (
          <article
            className="min-h-[190px] rounded-lg border border-[#ead1d9] bg-[#fffafb] p-6"
            key={t}
          >
            <span className="text-[11px] text-[#ac1e44]">0{i + 1}</span>
            <h3 className="mt-9 text-[17px]">{t}</h3>
            <p className="mt-2 text-xs leading-6 text-[#896575]">
              Find trusted local opportunities and build your next step with
              confidence.
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
export function EmployerSection() {
  return (
    <section className="py-24">
      <div
        className={`${wrap} flex min-h-[380px] flex-col justify-between overflow-hidden rounded-lg bg-[#ac1e44] p-10 text-white md:flex-row md:p-16`}
      >
        <div>
          <p className="mb-5 text-[10px] font-extrabold tracking-[2px] text-[#f3c3d0]">
            FOR LOCAL EMPLOYERS
          </p>
          <h2 className="text-5xl leading-none tracking-[-3px]">
            Find the people
            <br />
            who make{" "}
            <em className="font-normal text-[#f3c3d0]">things happen.</em>
          </h2>
          <p className="my-6 max-w-[350px] text-sm leading-6 text-[#f1c7d3]">
            Complete company verification, choose a plan, post live roles, and
            connect with motivated talent from Kanchipuram.
          </p>
          <a
            className="inline-flex rounded bg-[#f3c3d0] px-[18px] py-3.5 text-xs font-bold text-[#ac1e44]"
            href="#contact"
          >
            Start hiring ↗
          </a>
        </div>
        <div className="relative mt-8 h-[280px] w-full max-w-[300px] self-center overflow-hidden rounded-2xl border border-[#f3c3d0]/30 bg-[#8f1838] md:mt-0 md:h-[320px] md:w-[280px]">
          <Image src={recruiterImage} alt="Recruiter using Kanchipuram Jobs" fill className="object-contain p-3" />
        </div>
      </div>
    </section>
  );
}
export function AboutSection({ aboutUrl }: { aboutUrl: string }) {
  return (
    <section
      className={`${wrap} grid gap-10 border-t border-[#ead9de] py-20 md:grid-cols-2 md:gap-24`}
      id="about"
    >
      <div>
        <p className="mb-5 text-[10px] font-extrabold tracking-[2px] text-[#9d536c]">
          MADE FOR OUR COMMUNITY
        </p>
        <h2 className={heading}>
          Opportunity
          <br />
          <em className="font-normal text-[#ac1e44]">lives here.</em>
        </h2>
      </div>
      <div>
        <p className="my-5 max-w-[410px] text-[15px] leading-7 text-[#765361]">
          Kanchipuram Jobs brings local talent and local ambition closer
          together. Job seekers can find, apply, and follow opportunities while
          verified recruiters build their teams.
        </p>
        <a className="text-xs font-bold text-[#ac1e44]" href={aboutUrl}>
          More about us →
        </a>
      </div>
    </section>
  );
}
export function Testimonials() {
  return (
    <section className="bg-[#f8e7ec] py-24">
      <div className={wrap}>
        <div className="mb-12 text-center">
          <p className="mb-5 text-[10px] font-extrabold tracking-[2px] text-[#9d536c]">
            OUR COMMUNITY SAYS
          </p>
          <h2 className={heading}>
            Small steps.
            <br />
            <em className="font-normal text-[#ac1e44]">Big possibilities.</em>
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            "I can finally find jobs near home and know exactly what happens after I apply.",
            "Kanchipuram Jobs helps us reach motivated candidates without losing the local connection.",
          ].map((q, i) => (
            <blockquote
              className="rounded-lg border border-[#ead1d9] bg-[#fffafb] p-8 font-serif text-xl leading-8 text-[#ac1e44]"
              key={q}
            >
              “{q}”
              <cite className="mt-6 block font-sans text-xs not-italic text-[#896575]">
                — {i ? "Arun, Verified Recruiter" : "Priya, Job Seeker"}
              </cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
export function FaqSection() {
  return (
    <section className={`${wrap} grid gap-10 py-24 md:grid-cols-2 md:gap-24`}>
      <div>
        <p className="mb-5 text-[10px] font-extrabold tracking-[2px] text-[#9d536c]">
          HAVE QUESTIONS?
        </p>
        <h2 className={heading}>
          Everything you
          <br />
          <em className="font-normal text-[#ac1e44]">need to know.</em>
        </h2>
      </div>
      <div className="border-t border-[#dfb9c5]">
        {faqs.map((f) => (
          <details
            className="border-b border-[#dfb9c5] py-5 text-sm font-bold text-[#ac1e44]"
            key={f}
          >
            <summary className="flex cursor-pointer justify-between">
              {f}
              <span>+</span>
            </summary>
            <p className="mt-4 max-w-[450px] text-xs font-normal leading-6 text-[#896575]">
              We keep the process simple, transparent, and focused on connecting
              local talent with genuine opportunities.
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
export function WhyChooseSection() {
  const items = [
    [
      "✓",
      "Verified Recruiters",
      "Connect with companies that complete KYC verification before posting opportunities.",
    ],
    [
      "⌖",
      "Local Opportunities",
      "Discover genuine jobs across Kanchipuram and nearby districts in one place.",
    ],
    [
      "↗",
      "Apply in One Tap",
      "Use your profile and resume to apply quickly without repeating paperwork.",
    ],
    [
      "◷",
      "Track Every Update",
      "Follow your application from Applied and Screening through Interview or Selected.",
    ],
  ];
  return (
    <section className="why-choose-section">
      <div className={`${wrap} text-center`}>
        <h2 className="text-5xl font-bold tracking-[-2px]">
          Why Choose Kanchipuram Jobs
        </h2>
        <p className="mx-auto mt-5 max-w-[620px] text-[15px] leading-7 text-[#765361]">
          A trusted local platform built to make finding work simpler, safer,
          and more rewarding.
        </p>
        <div className="mt-20 grid grid-cols-2 gap-3 text-center lg:grid-cols-4">
          {items.map(([icon, title, description]) => (
            <article className="why-card" key={title}>
              <div className="why-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
