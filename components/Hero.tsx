import Image from "next/image";
import { FiArrowUpRight, FiStar } from "react-icons/fi";
import appStoreButton from "../app/assets/Storebutton/appstoreBtn-CXHM3aaZ.svg";
import playStoreButton from "../app/assets/Storebutton/playstoreBtn-C0Szw4ml.svg";
import { FaApple, FaGooglePlay } from "react-icons/fa6";

export default function Hero() {
  return (
    <section
      className="relative min-h-[680px] overflow-hidden bg-cover bg-center text-white"
      id="top"
      style={{ backgroundImage: "url('/kanchipuram-jobs-hero.png')" }}
    >
      <div className="hero-gradient-animate absolute inset-0 bg-gradient-to-r from-black/80 via-[#180a0f]/50 to-[#ac1e44]/25" />
      <div className="relative z-10 mx-auto flex min-h-[680px] w-[calc(100%-2rem)] max-w-[1160px] flex-col items-start justify-center sm:w-[calc(100%-4.5rem)]">
        <p className="mb-[22px] text-[10px] font-extrabold tracking-[2px] text-[#f3c3d0]">
          <FiStar
            aria-hidden="true"
            className="mr-1 inline-block align-[-2px]"
          />
          BUILT FOR KANCHIPURAM
        </p>
        <h1 className="text-[clamp(44px,5.2vw,72px)] font-bold leading-[.98] tracking-[-3px]">
          Work that moves
          <br />
          <em className="font-normal text-[#f3c3d0]">you forward.</em>
        </h1>
        <p className="my-7 max-w-[410px] text-[15px] leading-[1.7] text-[#f9dfe6]">
          Discover meaningful opportunities with the people and companies
          building our community.
        </p>
        {/* <div className="flex max-w-full flex-wrap items-center gap-4 sm:gap-7">
          <a
            className="rounded bg-[#ac1e44] px-[18px] py-3.5 text-xs font-bold"
            href="#jobs"
          >
            Find your next job{" "}
            <FiArrowUpRight
              aria-hidden="true"
              className="ml-1 inline-block align-[-2px]"
            />
          </a>
          <a className="text-xs font-bold" href="#for-employers">
            I&apos;m hiring{" "}
            <FiArrowUpRight
              aria-hidden="true"
              className="ml-1 inline-block align-[-2px]"
            />
          </a>
        </div> */}
        <div className="mt-8 flex max-w-full flex-wrap gap-3">
          <a
            className="transition-transform hover:scale-105"
            href="#"
            aria-label="Download the Kanchipuram Jobs app on Google Play"
          >
            <Image
              src={playStoreButton}
              alt="Get it on Google Play"
              className="h-auto w-[min(158px,calc((100vw-3rem)/2))]"
            />
          </a>
          <a
            className="transition-transform hover:scale-105"
            href="#"
            aria-label="Download the Kanchipuram Jobs app on the App Store"
          >
            <Image
              src={appStoreButton}
              alt="Download on the App Store"
              className="h-auto w-[min(158px,calc((100vw-3rem)/2))]"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
