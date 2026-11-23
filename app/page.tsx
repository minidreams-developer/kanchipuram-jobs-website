
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import WhyChoose from "../components/WhyChoose";
import AboutPlatform from "../components/AboutPlatform";
import JobsSection from "../components/JobsSection";
import MissionSection from "../components/MissionSection";
import { HowItWorks } from "../components/HowItWorks";
import JobSeekersSection from "../components/JobSeekersSection";
import RecruitersSection from "../components/RecruitersSection";
import { FaqSection, Testimonials, Stats } from "../components/Sections";
import MotionReveal from "../components/MotionReveal";

export default function Home() {
  return (
    <main>
      <Navbar />

      <div id="top">
        <MotionReveal>
          <Hero />
        </MotionReveal>
      </div>

      <Stats />

      <div id="HowItWorks" className="scroll-mt-24">
        <HowItWorks />
      </div>

      <MotionReveal>
        <WhyChoose />
      </MotionReveal>

      <div id="AboutPlatform" className="scroll-mt-24">
        <MotionReveal>
          <AboutPlatform aboutUrl="#about" />
        </MotionReveal>
      </div>

      <MotionReveal>
        <MissionSection />
      </MotionReveal>

      <MotionReveal>
        <JobsSection />
      </MotionReveal>

      {/* Job Seeker Navigation Target */}
      <div id="JobSeekersSection" className="scroll-mt-24">
        <MotionReveal>
          <JobSeekersSection />
        </MotionReveal>
      </div>

      {/* Recruiter Navigation Target */}
      <div id="RecruitersSection" className="scroll-mt-24">
        <MotionReveal>
          <RecruitersSection />
        </MotionReveal>
      </div>

      <MotionReveal>
        <Testimonials />
      </MotionReveal>

      <MotionReveal>
        <FaqSection />
      </MotionReveal>

      <MotionReveal>
        <Footer />
      </MotionReveal>
    </main>
  );
}
