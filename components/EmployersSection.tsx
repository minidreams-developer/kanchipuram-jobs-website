import Image from "next/image";
import { FiArrowUpRight, FiCheckCircle } from "react-icons/fi";
import recruiterImage from "../app/assets/HowtoWorkimages/image1.png";

const benefits = ["Complete company verification before posting", "Reach motivated talent across Kanchipuram", "Manage applications from one simple platform"];

export default function EmployersSection() {
  return <section id="for-employers" className="py-24" aria-labelledby="employers-heading">
    <div className="mx-auto flex min-h-[380px] max-w-[1160px] flex-col justify-between overflow-hidden rounded-lg bg-[#ac1e44] p-10 text-white sm:w-[calc(100%-4.5rem)] md:flex-row md:p-16">
      <div>
        <p className="mb-5 text-[10px] font-extrabold tracking-[2px] text-[#f3c3d0]">FOR LOCAL EMPLOYERS</p>
        <h2 id="employers-heading" className="text-5xl leading-none tracking-[-3px]">Find the people<br />who make <em className="font-normal text-[#f3c3d0]">things happen.</em></h2>
        <p className="my-6 max-w-[390px] text-sm leading-6 text-[#f1c7d3]">Complete company verification, choose a plan, post live roles, and connect with motivated talent from Kanchipuram.</p>
        <ul className="mb-7 space-y-2 text-xs text-[#fff0f4]">{benefits.map((benefit) => <li key={benefit} className="flex items-center gap-2"><FiCheckCircle aria-hidden="true" className="text-[#f3c3d0]" />{benefit}</li>)}</ul>
        <a className="inline-flex items-center gap-2 rounded bg-[#f3c3d0] px-[18px] py-3.5 text-xs font-bold text-[#ac1e44]" href="#contact">Start hiring <FiArrowUpRight aria-hidden="true" /></a>
      </div>
      <div className="relative mt-8 h-[280px] w-full max-w-[300px] self-center overflow-hidden rounded-2xl border border-[#f3c3d0]/30 bg-[#8f1838] md:mt-0 md:h-[320px] md:w-[280px]"><Image src={recruiterImage} alt="Recruiter using Kanchipuram Jobs" fill className="object-contain p-3" /></div>
    </div>
  </section>;
}
