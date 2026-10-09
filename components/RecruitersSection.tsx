import Image from "next/image";
import {
  FiArrowUpRight,
  FiCheckCircle,
  FiClock,
  FiStar,
  FiUsers,
} from "react-icons/fi";
import MotionReveal from "./MotionReveal";
import recruiterImage from "../app/assets/Recutier/image1.png";
import recruiterImage2 from "../app/assets/Recutier/image2.png";
import recruiterImage3 from "../app/assets/Recutier/image3.png";
import recruiterImage4 from "../app/assets/Recutier/image4.png";
import recruiterImage5 from "../app/assets/Recutier/image5.png";
import recruiterImage6 from "../app/assets/Recutier/image6.png";
import AutoImageCarousel from "./AutoImageCarousel";

const benefits = [
  [
    FiUsers,
    "Reach local talent",
    "Connect with motivated candidates across Kanchipuram.",
  ],
  [
    FiClock,
    "Hire more efficiently",
    "Post roles and manage applications in one place.",
  ],
  [
    FiStar,
    "Build your reputation",
    "Showcase your company and create trusted connections.",
  ],
  [
    FiCheckCircle,
    "Verified hiring",
    "Complete company verification before posting opportunities.",
  ],
] as const;

export default function RecruitersSection() {
  return (
    <section
      id="for-employers"
      className="border-t border-[#ead9de] bg-white py-24"
      aria-labelledby="recruiters-heading"
    >
      <div className="mx-auto grid max-w-[1160px] items-center gap-12 px-5 sm:px-9 lg:grid-cols-[1.1fr_.9fr] lg:gap-20">
        <MotionReveal>
          <p className="mb-5 text-[10px] font-extrabold tracking-[2px] text-[#9d536c]">
            FOR RECRUITERS
          </p>
          <h2
            id="recruiters-heading"
            className="text-4xl font-bold leading-[1.05] tracking-[-2px] text-[#24151a] sm:text-5xl"
          >
            Find the people who make{" "}
            <em className="font-normal text-[#ac1e44]">things happen.</em>
          </h2>
          <p className="my-7 max-w-[560px] text-[15px] leading-8 text-[#68636a]">
            Grow your team with verified local talent and make every hiring step
            simpler, clearer, and more connected.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map(([Icon, title, description], index) => (
              <MotionReveal key={title} delay={index * 0.50}>
                <article className="rounded-2xl bg-[#fffafb] p-5 shadow-[0_8px_24px_rgba(36,21,26,0.05)]">
                  <div className="mb-4 grid h-10 w-10 place-items-center rounded-xl bg-[#f9e5eb] text-xl text-[#ac1e44]">
                    <Icon aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold text-[#24151a]">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#68636a]">
                    {description}
                  </p>
                </article>
              </MotionReveal>
            ))}
          </div>
          <a
            className="mt-8 inline-flex items-center gap-2 rounded bg-[#ac1e44] px-5 py-3.5 text-sm font-bold text-white"
            href="#contact"
          >
            Start hiring <FiArrowUpRight aria-hidden="true" />
          </a>
        </MotionReveal>
        <MotionReveal delay={0.12}>
          <MotionReveal>
            <div className="gentle-float relative mx-auto h-[400px] w-full max-w-[360px] overflow-hidden p-5 sm:h-[500px]">
              <AutoImageCarousel
                images={[
                  recruiterImage,
                  recruiterImage2,
                  recruiterImage3,
                  recruiterImage4,
                  recruiterImage5,
                  recruiterImage6,
                ]}
                alt="Recruiter using Kanchipuram Jobs"
              />
            </div>
          </MotionReveal>
        </MotionReveal>
      </div>
    </section>
  );
}
