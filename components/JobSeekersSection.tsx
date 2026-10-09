import Image from "next/image";
import { FiArrowUpRight, FiCheckCircle, FiMapPin, FiSearch, FiSend, FiUser } from "react-icons/fi";
import MotionReveal from "./MotionReveal";
import jobSeekerImage from "../app/assets/JobSeekers/image1.png";
import jobSeekerImage2 from "../app/assets/JobSeekers/image2.png";
import jobSeekerImage3 from "../app/assets/JobSeekers/image3.png";
import jobSeekerImage4 from "../app/assets/JobSeekers/image4.png";
import jobSeekerImage5 from "../app/assets/JobSeekers/image5.png";
import AutoImageCarousel from "./AutoImageCarousel";

const benefits = [
  [FiSearch, "Find local opportunities", "Discover jobs that match your skills, location, and goals."],
  [FiSend, "Apply with ease", "Use your profile and resume to apply without repeating paperwork."],
  [FiMapPin, "Stay close to home", "Build your next career step with trusted local employers."],
  [FiUser, "Track your progress", "Follow every application from submission to selection."],
] as const;

export default function JobSeekersSection() {
  return (
    <section id="for-job-seekers" className="border-t border-[#ead9de] bg-[#fffafb] py-16" aria-labelledby="job-seekers-heading">
      <div className="mx-auto grid max-w-[1160px] items-center gap-8 px-5 sm:px-9 lg:grid-cols-[.9fr_1.1fr] lg:gap-12">
        <MotionReveal>
          <MotionReveal>
          <div className="gentle-float relative mx-auto h-[400px] w-full max-w-[360px] overflow-hidden p-5 sm:h-[500px]">
            <AutoImageCarousel images={[jobSeekerImage, jobSeekerImage2, jobSeekerImage3, jobSeekerImage4, jobSeekerImage5]} alt="Job seeker using Kanchipuram Jobs" />
          </div>
          </MotionReveal>
        </MotionReveal>
        <MotionReveal delay={0.12}>
          <p className="mb-5 text-[10px] font-extrabold tracking-[2px] text-[#9d536c]">FOR JOB SEEKERS</p>
          <h2 id="job-seekers-heading" className="text-4xl font-bold leading-[1.05] tracking-[-2px] text-[#24151a] sm:text-5xl">Find work that moves <em className="font-normal text-[#ac1e44]">you forward.</em></h2>
          <p className="my-5 max-w-[560px] text-[15px] leading-7 text-[#68636a]">Discover meaningful opportunities, apply confidently, and stay connected to the employers building Kanchipuram.</p>
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map(([Icon, title, description], index) => <MotionReveal key={title} delay={index * 0.12}><article className="rounded-2xl bg-white p-4 shadow-[0_8px_24px_rgba(36,21,26,0.05)]"><div className="mb-3 grid h-9 w-9 place-items-center rounded-xl bg-[#f9e5eb] text-lg text-[#ac1e44]"><Icon aria-hidden="true" /></div><h3 className="font-semibold text-[#24151a]">{title}</h3><p className="mt-1 text-sm leading-5 text-[#68636a]">{description}</p></article></MotionReveal>)}
          </div>
          <a className="mt-8 inline-flex items-center gap-2 rounded bg-[#ac1e44] px-5 py-3.5 text-sm font-bold text-white" href="#jobs">Explore jobs <FiArrowUpRight aria-hidden="true" /></a>
        </MotionReveal>
      </div>
    </section>
  );
}
