import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MotionReveal from "../../components/MotionReveal";

export default function DisclaimerPage() {
  return (
    <><Navbar /><main className="min-h-screen bg-[#f8f5f6] px-5 pb-16 pt-32 text-[#24151a] sm:px-10 lg:px-24">
      <MotionReveal>
      <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl bg-white shadow-sm">
        <div className="relative h-40 overflow-hidden sm:h-52"><Image src="/kanchipuram-jobs-hero.png" alt="Kanchipuram Jobs opportunity platform" fill className="object-cover" /><div className="absolute inset-0 bg-gradient-to-r from-[#24151a]/85 to-[#ac1e44]/25" /><div className="absolute bottom-6 left-7 text-white sm:left-12"><p className="text-[10px] font-bold tracking-[2px] text-[#f3c3d0]">STAY SAFE ONLINE</p><p className="mt-2 text-2xl font-semibold">A little guidance goes a long way.</p></div></div>
        <div className="p-7 sm:p-12">
        <Link href="/" className="text-sm font-semibold text-[#AC1E44]">← Back to Kanchipuram Jobs</Link>
        <h1 className="mt-8 text-4xl font-semibold tracking-tight">Disclaimer</h1>
        <p className="mt-3 text-sm text-[#766970]">Last updated: October 9, 2026</p>
        <div className="mt-10 space-y-7 text-[15px] leading-8 text-[#5e555a]">
          <p>Kanchipuram Jobs helps job seekers discover opportunities and helps recruiters connect with local talent. The platform does not guarantee employment, interviews, selection, or any particular result.</p>
          <section><h2 className="text-xl font-semibold text-[#24151a]">Job listings</h2><p className="mt-2">Recruiters are responsible for the accuracy, legality, and availability of their listings. Job seekers should verify role details, company information, salary, and other terms independently.</p></section>
          <section><h2 className="text-xl font-semibold text-[#24151a]">Use your judgement</h2><p className="mt-2">Do not send money, passwords, or sensitive documents to an employer unless you are confident that the request is legitimate. Report suspicious listings or messages to hello@kanchipuramjobs.com.</p></section>
          <section><h2 className="text-xl font-semibold text-[#24151a]">Contact</h2><p className="mt-2">For questions about this disclaimer, email hello@kanchipuramjobs.com.</p></section>
        </div>
        </div>
      </div>
      </MotionReveal>
    </main><Footer /></>
  );
}
