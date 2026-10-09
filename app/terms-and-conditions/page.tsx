import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MotionReveal from "../../components/MotionReveal";

export default function TermsAndConditionsPage() {
  return (
    <><Navbar /><main className="min-h-screen bg-[#f8f5f6] px-5 pb-16 pt-32 text-[#24151a] sm:px-10 lg:px-24">
      <MotionReveal>
      <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl bg-white shadow-sm">
        <div className="relative h-40 overflow-hidden sm:h-52"><Image src="/kanchipuram-jobs-hero.png" alt="People connecting through Kanchipuram Jobs" fill className="object-cover" /><div className="absolute inset-0 bg-gradient-to-r from-[#24151a]/85 to-[#ac1e44]/25" /><div className="absolute bottom-6 left-7 text-white sm:left-12"><p className="text-[10px] font-bold tracking-[2px] text-[#f3c3d0]">A CLEARER WAY TO CONNECT</p><p className="mt-2 text-2xl font-semibold">Our terms, simply stated.</p></div></div>
        <div className="p-7 sm:p-12">
        <Link href="/" className="text-sm font-semibold text-[#AC1E44]">← Back to Kanchipuram Jobs</Link>
        <h1 className="mt-8 text-4xl font-semibold tracking-tight">Terms &amp; Conditions</h1>
        <p className="mt-3 text-sm text-[#766970]">Last updated: October 9, 2026</p>
        <div className="mt-10 space-y-7 text-[15px] leading-8 text-[#5e555a]">
          <p>By using Kanchipuram Jobs, you agree to these terms. The platform connects job seekers and recruiters; it does not guarantee employment or hiring outcomes.</p>
          <section><h2 className="text-xl font-semibold text-[#24151a]">Accounts and information</h2><p className="mt-2">You are responsible for providing accurate information and keeping your account details secure. Do not impersonate another person or publish misleading information.</p></section>
          <section><h2 className="text-xl font-semibold text-[#24151a]">Jobs and applications</h2><p className="mt-2">Recruiters are responsible for the accuracy and legality of their job listings. Job seekers should independently verify opportunities before sharing sensitive information or accepting an offer.</p></section>
          <section><h2 className="text-xl font-semibold text-[#24151a]">Acceptable use</h2><p className="mt-2">Do not use the platform for spam, harassment, fraud, unlawful discrimination, malicious activity, or unauthorised access.</p></section>
          <section><h2 className="text-xl font-semibold text-[#24151a]">Contact</h2><p className="mt-2">Questions about these terms can be sent to hello@kanchipuramjobs.com.</p></section>
        </div>
        </div>
      </div>
      </MotionReveal>
    </main><Footer /></>
  );
}
