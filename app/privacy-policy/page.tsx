import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MotionReveal from "../../components/MotionReveal";

export default function PrivacyPolicyPage() {
  return (
    <><Navbar /><main className="min-h-screen bg-[#f8f5f6] px-5 pb-16 pt-32 text-[#24151a] sm:px-10 lg:px-24">
      <MotionReveal>
      <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl bg-white shadow-sm">
        <div className="relative h-40 overflow-hidden sm:h-52"><Image src="/kanchipuram-jobs-hero.png" alt="People finding opportunities with Kanchipuram Jobs" fill className="object-cover" /><div className="absolute inset-0 bg-gradient-to-r from-[#24151a]/85 to-[#ac1e44]/25" /><div className="absolute bottom-6 left-7 text-white sm:left-12"><p className="text-[10px] font-bold tracking-[2px] text-[#f3c3d0]">YOUR TRUST MATTERS</p><p className="mt-2 text-2xl font-semibold">Privacy, explained clearly.</p></div></div>
        <div className="p-7 sm:p-12">
        <Link href="/" className="text-sm font-semibold text-[#AC1E44]">← Back to Kanchipuram Jobs</Link>
        <h1 className="mt-8 text-4xl font-semibold tracking-tight">Privacy Policy</h1>
        <p className="mt-3 text-sm text-[#766970]">Last updated: October 9, 2026</p>
        <div className="mt-10 space-y-7 text-[15px] leading-8 text-[#5e555a]">
          <p>Kanchipuram Jobs respects your privacy. This policy explains how information is handled when you use our website and job platform.</p>
          <section><h2 className="text-xl font-semibold text-[#24151a]">Information we collect</h2><p className="mt-2">We may receive information you choose to provide, such as your name, contact details, resume, job preferences, and recruiter or company details.</p></section>
          <section><h2 className="text-xl font-semibold text-[#24151a]">How we use information</h2><p className="mt-2">Information is used to create profiles, show relevant jobs, support applications, help recruiters contact candidates, and improve the platform.</p></section>
          <section><h2 className="text-xl font-semibold text-[#24151a]">Your choices</h2><p className="mt-2">You can request access, correction, or deletion of your personal information by contacting hello@kanchipuramjobs.com.</p></section>
          <section><h2 className="text-xl font-semibold text-[#24151a]">Contact</h2><p className="mt-2">For privacy questions, email hello@kanchipuramjobs.com.</p></section>
        </div>
        </div>
      </div>
      </MotionReveal>
    </main><Footer /></>
  );
}
