import Image from "next/image";
import { FiStar } from "react-icons/fi";
import appStoreButton from "../app/assets/Storebutton/appstoreBtn-CXHM3aaZ.svg";
import playStoreButton from "../app/assets/Storebutton/playstoreBtn-C0Szw4ml.svg";

export default function HeroSection() {
  return (
    <section
  id="top"
  className="hero-background relative isolate min-h-[720px] overflow-hidden bg-[#26151b] text-white"
  style={{
    backgroundImage: "url('/kanchipuram-jobs-heroimage.png')",
  }}
>
  {/* Background overlay */}
  <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#190b12]/65 via-[#190b12]/35 to-[#190b12]/10" />

  {/* Bottom overlay */}
  <div className="absolute inset-x-0 bottom-0 z-0 h-40 bg-gradient-to-t from-black/50 to-transparent" />

      {/* Content */}
      <div
        className="relative z-10 mx-auto flex w-full
        max-w-[1320px] flex-col justify-center
        px-6 pb-16 pt-32 sm:px-12 lg:px-16"
      >
        {/* Built for Kanchipuram - Blur to Focus Animation */}
        <div className="hero-focus-badge mb-8">
          <div className="hero-focus-inner">
            <FiStar className="hero-focus-star" />

            <span className="hero-focus-text">BUILT FOR KANCHIPURAM</span>
          </div>
        </div>

        {/* Main heading */}
        <h1
          className="hero-heading max-w-[850px]
          text-[clamp(2.5rem,5.2vw,4.75rem)]
          font-extrabold leading-[1.02]
          tracking-[-2.5px]"
        >
          Work that moves
          <span className="hero-highlight block italic">you forward.</span>
        </h1>

        {/* Animated underline */}
        <div className="hero-line mt-5" />

        {/* Description */}
        <p
          className="hero-description mt-7 max-w-[540px]
          text-base font-medium leading-[1.8]
          text-white/95 sm:text-lg"
        >
          Discover meaningful opportunities with the people and companies
          building our community. Find your next opportunity and grow your
          career right here in Kanchipuram.
        </p>

        {/* App store buttons */}
        <div
          className="hero-store-buttons mt-9 flex
          flex-wrap items-center gap-4 sm:gap-5"
        >
          <a
            href="#"
            aria-label="Get it on Google Play"
            className="hero-store-link"
          >
            <Image
              src={playStoreButton}
              alt="Get it on Google Play"
              className="h-auto w-[155px] sm:w-[180px]"
            />
          </a>

          <a
            href="#"
            aria-label="Download on the App Store"
            className="hero-store-link"
          >
            <Image
              src={appStoreButton}
              alt="Download on the App Store"
              className="h-auto w-[155px] sm:w-[180px]"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
