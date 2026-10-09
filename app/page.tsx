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
import {
  FaqSection,
  Testimonials,
  Stats,
} from "../components/Sections";
import MotionReveal from "../components/MotionReveal";

export default function Home() {
  return (
    <main>
      <Navbar />
      <MotionReveal>
        <Hero />
      </MotionReveal>
      <Stats />
      <HowItWorks />
      <MotionReveal>
        <WhyChoose />
      </MotionReveal>
      <MotionReveal>
        <AboutPlatform aboutUrl="#about" />
      </MotionReveal>
        <MotionReveal>
        <MissionSection />
      </MotionReveal>
      <MotionReveal>
        <JobsSection />
      </MotionReveal>
      <MotionReveal>
        <JobSeekersSection />
      </MotionReveal>
      <MotionReveal>
        <RecruitersSection />
      </MotionReveal>

    
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
