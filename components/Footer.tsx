import Image from "next/image";
import logo from "../app/assets/Kanchipuram Jobs logo/Logo file formats/logo1.png";

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#ac1e44] px-0 py-[53px] text-white">
      <div className="mx-auto grid w-[calc(100%-2rem)] max-w-[1160px] gap-7 border-b border-white/25 pb-12 sm:w-[calc(100%-4.5rem)] md:grid-cols-[1.7fr_1fr_1fr] md:gap-10">
        <a
          className="flex items-center gap-2.5 text-lg font-bold"
          href="#top"
        >
          <Image src={logo} alt="Kanchipuram Jobs" width={260} height={82} className="h-[68px] w-[220px] object-contain sm:h-[76px] sm:w-[250px]" />
        </a>
        <div>
          <small className="mb-2 block text-sm text-[#f1c7d3]">
            Have a question?
          </small>
          <a className="text-base" href="mailto:hello@kanchipuramjobs.com">
            hello@kanchipuramjobs.com
          </a>
        </div>
        <div>
          <small className="mb-2 block text-sm text-[#f1c7d3]">
            Built for 
          </small>
          <span className="text-base">Kanchipuram district
            <br/> Tamil Nadu</span>
        </div>
      </div>
      <div className="mx-auto flex w-[calc(100%-2rem)] max-w-[1160px] flex-col justify-between gap-4 pt-[18px] text-xs text-[#f0becd] sm:w-[calc(100%-4.5rem)] md:flex-row">
        <span>© 2026 Kanchipuram Jobs</span>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          
          <a href="/terms-and-conditions">Terms &amp; conditions</a>
          <a href="/js-privacy-policy">Job Seekers Privacy policy</a>
          <a href="/recruiter-privacy-policy">Recruiter Privacy policy</a>
          <a href="/refund-policy">Refund policy</a>
        </div>
      </div>
    </footer>
  );
}
