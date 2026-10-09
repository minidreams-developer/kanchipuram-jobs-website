"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { FiArrowUpRight, FiBriefcase, FiInfo, FiList, FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isInnerPage = pathname !== "/";
  const homeLink = pathname === "/" ? "#top" : "/";
  const sectionLink = (id: string) => pathname === "/" ? `#${id}` : `/#${id}`;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ["top", "how-it-works", "jobs", "about"]
        .map((id) => document.getElementById(id))
        .filter((section): section is HTMLElement => Boolean(section));
      const current = sections.reduce((latest, section) => {
        return section.getBoundingClientRect().top <= 130 ? section : latest;
      }, sections[0]);
      if (current) setActiveSection(current.id);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const targetId = event.currentTarget.getAttribute("href")?.slice(1);
    const target = targetId ? document.getElementById(targetId) : null;
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        (scrolled || isInnerPage)
          ? "border-b border-[#ead9de] bg-white/95 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div
        className={`mx-auto flex w-[calc(100%-2rem)] max-w-[1160px] items-center justify-between transition-all duration-300 sm:w-[calc(100%-4.5rem)] ${
          (scrolled || isInnerPage) ? "h-[68px]" : "h-[86px]"
        }`}
      >
        <a className="flex items-center gap-2.5 text-[17px] font-bold" href={homeLink} onClick={() => setMenuOpen(false)}>
          <span className="grid h-[35px] w-[35px] place-items-center rounded-[11px] bg-[#ac1e44] text-[21px] font-black italic text-[#f3c3d0]">
            K
          </span>
          <span className={(scrolled || isInnerPage) ? "text-[#24151a]" : "text-white"}>
            Kanchipuram <b className="block text-[10px] tracking-[2px] text-[#f3c3d0]">JOBS</b>
          </span>
        </a>
        <div className={`hidden gap-8 text-[13px] font-semibold md:flex ${(scrolled || isInnerPage) ? "text-[#815566]" : "text-white"}`}>
          <a onClick={handleNavClick} className={`inline-flex items-center gap-1.5 border-b-2 py-1 transition-all duration-200 hover:-translate-y-0.5 ${activeSection === "jobs" ? "border-[#ac1e44] text-[#ac1e44]" : "border-transparent"}`} href={sectionLink("jobs")}><FiBriefcase aria-hidden="true" />Find jobs</a>
          <a onClick={handleNavClick} className={`inline-flex items-center gap-1.5 border-b-2 py-1 transition-all duration-200 hover:-translate-y-0.5 ${activeSection === "how-it-works" ? "border-[#ac1e44] text-[#ac1e44]" : "border-transparent"}`} href={sectionLink("how-it-works")}><FiList aria-hidden="true" />How it works</a>
          <a onClick={handleNavClick} className={`inline-flex items-center gap-1.5 border-b-2 py-1 transition-all duration-200 hover:-translate-y-0.5 ${activeSection === "about" ? "border-[#ac1e44] text-[#ac1e44]" : "border-transparent"}`} href={sectionLink("about")}><FiInfo aria-hidden="true" />About us</a>
        </div>
        <a className="hidden rounded bg-[#ac1e44] px-[18px] py-3.5 text-[13px] font-bold text-white md:inline-flex" href={sectionLink("jobs")}>
          <span className="inline-flex items-center gap-2">Explore jobs <FiArrowUpRight aria-hidden="true" /></span>
        </a>
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className={`grid h-11 w-11 place-items-center rounded-xl border md:hidden ${(scrolled || isInnerPage) ? "border-[#ead9de] bg-white text-[#ac1e44]" : "border-white/30 bg-black/20 text-white"}`}
        >
          {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>
      {menuOpen && (
        <>
          <button aria-label="Close navigation menu" className="fixed inset-0 top-[68px] bg-[#24151a]/35 md:hidden" onClick={() => setMenuOpen(false)} />
          <div className="absolute right-4 top-[76px] w-[min(86vw,330px)] rounded-3xl border border-[#ead9de] bg-white p-3 text-[#24151a] shadow-[0_20px_50px_rgba(36,21,26,0.2)] md:hidden">
            <div className="mb-2 px-3 py-3 text-[10px] font-extrabold tracking-[2px] text-[#9d536c]">KANCHIPURAM JOBS</div>
            {[
              ["Find jobs", "jobs", FiBriefcase],
              ["How it works", "how-it-works", FiList],
              ["About us", "about", FiInfo],
            ].map(([label, id, Icon]) => (
              <a key={id as string} href={sectionLink(id as string)} onClick={() => setMenuOpen(false)} className="flex items-center gap-3 rounded-2xl px-3 py-3.5 text-sm font-semibold transition-colors hover:bg-[#fff1f5]">
                <Icon aria-hidden="true" className="text-[#ac1e44]" />{label as string}<FiArrowUpRight className="ml-auto text-[#b06a80]" />
              </a>
            ))}
            <a href="/privacy-policy" onClick={() => setMenuOpen(false)} className="mt-2 block border-t border-[#f0e2e6] px-3 pt-4 text-xs text-[#815566]">Privacy policy</a>
            <a href="/terms-and-conditions" onClick={() => setMenuOpen(false)} className="block px-3 py-3 text-xs text-[#815566]">Terms &amp; conditions</a>
            <a href="/disclaimer" onClick={() => setMenuOpen(false)} className="block px-3 pb-2 text-xs text-[#815566]">Disclaimer</a>
          </div>
        </>
      )}
    </nav>
  );
}
