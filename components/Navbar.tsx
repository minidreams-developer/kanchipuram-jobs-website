
"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ContactForm from "./ContactForm";
import logo from "../app/assets/Kanchipuram Jobs logo/Logo file formats/Kanchipuram Jobs logo PNG-01.png";
import {
  FiArrowUpRight,
  FiBriefcase,
  FiInfo,
  FiMail,
  FiList,
  FiMenu,
  FiUser,
  FiUsers,
  FiX,
} from "react-icons/fi";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  const pathname = usePathname();
  const isInnerPage = pathname !== "/";

  const homeLink = pathname === "/" ? "#top" : "/";
  const sectionLink = (id: string) =>
    pathname === "/" ? `#${id}` : `/#${id}`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = [
        "top",
        "how-it-works",
        "about",
        "jobseeker",
        "recruiter",
      ]
        .map((id) => document.getElementById(id))
        .filter((section): section is HTMLElement => Boolean(section));

      const current = sections.reduce<HTMLElement | undefined>(
        (latest, section) => {
          return section.getBoundingClientRect().top <= 130
            ? section
            : latest;
        },
        undefined
      );

      if (current) {
        setActiveSection(current.id);
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen || contactOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen, contactOpen]);

  const handleNavClick = (
    event: React.MouseEvent<HTMLAnchorElement>
  ) => {
    const href = event.currentTarget.getAttribute("href");

    if (!href) return;

    const targetId = href.startsWith("/#")
      ? href.slice(2)
      : href.startsWith("#")
        ? href.slice(1)
        : "";

    const target = targetId
      ? document.getElementById(targetId)
      : null;

    if (!target) return;

    event.preventDefault();
    target.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const navigationItems = [
    {
      label: "How it works",
      id: "HowItWorks",
      icon: FiList,
    },
    {
      label: "About us",
      id: "AboutPlatform",
      icon: FiInfo,
    },
    {
      label: "Job Seeker",
      id: "JobSeekersSection",
      icon: FiUser,
    },
    {
      label: "Recruiter",
      id: "RecruitersSection",
      icon: FiUsers,
    },
  ];

  const openContact = () => {
    setMenuOpen(false);
    setContactOpen(true);
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || isInnerPage
          ? "border-b border-[#ead9de] bg-white/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex w-[calc(100%-2rem)] max-w-[1160px] items-center justify-between transition-all duration-300 sm:w-[calc(100%-4.5rem)] ${
          scrolled || isInnerPage ? "h-[72px]" : "h-[86px]"
        }`}
      >
        {/* Logo */}
        <a
          className="flex shrink-0 items-center gap-2.5 text-[18px] font-bold"
          href={homeLink}
          onClick={() => setMenuOpen(false)}
        >
          <Image src={logo} alt="Kanchipuram Jobs" width={230} height={72} className="h-[58px] w-[200px] object-contain px-1 py-1 sm:h-[64px] sm:w-[225px]" priority />

          {/* <Image src={logo} alt="Kanchipuram Jobs" width={220} height={72} className="h-[60px] w-[180px] object-contain px-1 py-1 sm:h-[58px] sm:w-[200px]" priority /> */}
        </a>

        {/* Desktop Navigation */}
        <div
          className={`hidden items-center gap-7 text-[16px] font-semibold lg:flex ${
            scrolled || isInnerPage
              ? "text-[#815566]"
              : "text-white"
          }`}
        >
          {navigationItems.map(({ label, id, icon: Icon }) => (
            <a
              key={id}
              onClick={handleNavClick}
              href={sectionLink(id)}
              className={`inline-flex items-center gap-2 border-b-2 py-2 transition-all duration-200 hover:-translate-y-0.5 hover:text-[#ac1e44] ${
                activeSection === id
                  ? "border-[#ac1e44] text-[#ac1e44]"
                  : "border-transparent"
              }`}
            >
              <Icon size={18} aria-hidden="true" />
              {label}
            </a>
          ))}
        </div>

        <button type="button" onClick={openContact} className={`hidden items-center gap-2 border-b-2 border-transparent py-2 text-[16px] font-semibold transition hover:-translate-y-0.5 hover:border-[#ac1e44] hover:text-[#ac1e44] lg:inline-flex ${scrolled || isInnerPage ? "text-[#815566]" : "text-white"}`}>
          <FiMail size={18} aria-hidden="true" />
          Contact
        </button>

        {/* Download App Button */}
        <a
          className="hidden items-center rounded-lg bg-[#ac1e44] px-5 py-3.5 text-[15px] font-bold text-white transition hover:bg-[#891735] lg:inline-flex"
          href={sectionLink("jobseeker")}
        >
          <span className="inline-flex items-center gap-2">
            Download App
            <FiArrowUpRight size={18} aria-hidden="true" />
          </span>
        </a>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={
            menuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className={`grid h-11 w-11 place-items-center rounded-xl border lg:hidden ${
            scrolled || isInnerPage
              ? "border-[#ead9de] bg-white text-[#ac1e44]"
              : "border-white/30 bg-black/20 text-white"
          }`}
        >
          {menuOpen ? <FiX size={23} /> : <FiMenu size={23} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <>
          <button
            aria-label="Close navigation menu"
            className="fixed inset-0 top-[68px] bg-[#24151a]/35 lg:hidden"
            onClick={() => setMenuOpen(false)}
          />

          <div className="absolute right-4 top-[76px] w-[min(88vw,350px)] rounded-3xl border border-[#ead9de] bg-white p-4 text-[#24151a] shadow-[0_20px_50px_rgba(36,21,26,0.2)] lg:hidden">
            <div className="mb-3 px-3 py-3 text-[11px] font-extrabold tracking-[2px] text-[#9d536c]">
              KANCHIPURAM JOBS
            </div>

            {navigationItems.map(({ label, id, icon: Icon }) => (
              <a
                key={id}
                href={sectionLink(id)}
                onClick={(event) => {
                  handleNavClick(event);
                  setMenuOpen(false);
                }}
                className="flex items-center gap-3 rounded-2xl px-3 py-4 text-[15px] font-semibold transition-colors hover:bg-[#fff1f5]"
              >
                <Icon
                  size={19}
                  aria-hidden="true"
                  className="text-[#ac1e44]"
                />

                {label}

                <FiArrowUpRight
                  size={17}
                  className="ml-auto text-[#b06a80]"
                />
              </a>
            ))}

            <button type="button" onClick={openContact} className="flex w-full items-center gap-3 rounded-2xl px-3 py-4 text-left text-[15px] font-semibold transition-colors hover:bg-[#fff1f5]"><FiMail size={19} className="text-[#ac1e44]" /> Contact <FiArrowUpRight size={17} className="ml-auto text-[#b06a80]" /></button>

            {/* Policy Links */}
            <div className="mt-3 border-t border-[#f0e2e6] pt-3">
              <a
                href="/privacy-policy"
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-3 text-[14px] font-medium text-[#815566] hover:text-[#ac1e44]"
              >
                Privacy Policy
              </a>

              <a
                href="/terms-and-conditions"
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-3 text-[14px] font-medium text-[#815566] hover:text-[#ac1e44]"
              >
                Terms & Conditions
              </a>

              <a
                href="/disclaimer"
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-3 text-[14px] font-medium text-[#815566] hover:text-[#ac1e44]"
              >
                Disclaimer
              </a>

              <a
                href="/refund-policy"
                onClick={() => setMenuOpen(false)}
                className="block px-3 py-3 text-[14px] font-medium text-[#815566] hover:text-[#ac1e44]"
              >
                Refund & Cancellation Policy
              </a>
            </div>
          </div>
        </>
      )}
      <ContactForm open={contactOpen} onClose={() => setContactOpen(false)} />
    </nav>
  );
}
