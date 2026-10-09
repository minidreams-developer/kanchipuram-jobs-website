export default function Footer() {
  return (
    <footer id="contact" className="bg-[#ac1e44] px-0 py-[53px] text-white">
      <div className="mx-auto grid w-[calc(100%-2rem)] max-w-[1160px] gap-7 border-b border-white/25 pb-12 sm:w-[calc(100%-4.5rem)] md:grid-cols-[1.7fr_1fr_1fr] md:gap-10">
        <a
          className="flex items-center gap-2.5 text-base font-bold"
          href="#top"
        >
          <span className="grid h-[35px] w-[35px] place-items-center rounded-[11px] bg-[#f3c3d0] text-[21px] font-black italic text-[#ac1e44]">
            K
          </span>
          <span>
            Kanchipuram{" "}
            <b className="block text-[9px] tracking-[2px] text-[#f1c7d3]">
              JOBS
            </b>
          </span>
        </a>
        <div>
          <small className="mb-2 block text-[11px] text-[#f1c7d3]">
            Have a question?
          </small>
          <a className="text-xs" href="mailto:hello@kanchipuramjobs.com">
            hello@kanchipuramjobs.com
          </a>
        </div>
        <div>
          <small className="mb-2 block text-[11px] text-[#f1c7d3]">
            Built for the district
          </small>
          <span className="text-xs">Kanchipuram, Tamil Nadu</span>
        </div>
      </div>
      <div className="mx-auto flex w-[calc(100%-2rem)] max-w-[1160px] flex-col justify-between gap-3 pt-[18px] text-[10px] text-[#f0becd] sm:w-[calc(100%-4.5rem)] md:flex-row">
        <span>© 2026 Kanchipuram Jobs</span>
        <div className="flex gap-6">
          <a href="/privacy-policy">Privacy policy</a>
          <a href="/terms-and-conditions">Terms &amp; conditions</a>
          <a href="/disclaimer">Disclaimer</a>
        </div>
      </div>
    </footer>
  );
}
