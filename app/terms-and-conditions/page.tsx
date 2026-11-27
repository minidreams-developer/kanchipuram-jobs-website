
import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MotionReveal from "../../components/MotionReveal";

export default function TermsAndConditionsPage() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#f8f5f6] px-5 pb-16 pt-32 text-[#24151a] sm:px-10 lg:px-24">
        <MotionReveal>
          <div className="mx-auto max-w-3xl overflow-hidden rounded-3xl bg-white shadow-sm">
            {/* Hero Section */}
            <div className="relative h-40 overflow-hidden sm:h-52">
              <Image
                src="/kanchipuram-jobs-hero.png"
                alt="People connecting through Kanchipuram Jobs"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#24151a]/85 to-[#ac1e44]/25" />

              <div className="absolute bottom-6 left-7 text-white sm:left-12">
                <p className="text-[10px] font-bold tracking-[2px] text-[#f3c3d0]">
                  A CLEARER WAY TO CONNECT
                </p>
                <p className="mt-2 text-2xl font-semibold">
                  Our terms, simply stated.
                </p>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-7 sm:p-12">
              <Link
                href="/"
                className="text-sm font-semibold text-[#AC1E44]"
              >
                ← Back to Kanchipuram Jobs
              </Link>

              <h1 className="mt-8 text-4xl font-semibold tracking-tight">
                Terms &amp; Conditions
              </h1>

              {/* <p className="mt-3 text-sm text-[#766970]">
                Effective Date: November 24, 2026
              </p> */}

              <div className="mt-10 space-y-7 text-[15px] leading-8 text-[#5e555a]">
                {/* <p>
                  <strong className="text-[#24151a]">
                    Product:
                  </strong>{" "}
                  Kanchipuram Jobs (A Portal of Siva Sakthi Staffing Solutions).
                </p> */}

                {/* <p>
                  Welcome to <strong>Kanchipuram Jobs</strong>, a mobile
                  application and recruitment portal owned and operated by{" "}
                  <strong>Siva Sakthi Staffing Solutions</strong>. These
                  Terms and Conditions constitute a legally binding
                  agreement between you and Kanchipuram Jobs. By downloading,
                  registering on, or using the Kanchipuram Jobs app, you
                  accept these Terms, our Privacy Policy, and your respective
                  role-based Usage Policy.
                </p> */}

                {/* 1. Eligibility */}
                <section>
                  <h2 className="text-xl font-semibold text-[#24151a]">
                    1. Eligibility &amp; Age Restriction
                  </h2>
                  <ul className="mt-2 list-disc space-y-2 pl-6">
                    <li>
                      <strong>18+ Requirement:</strong> You must be at least
                      18 years of age and legally competent to enter into a
                      binding contract under the Indian Contract Act, 1872,
                      to create an account or use Kanchipuram Jobs.
                      Individuals under 18 are strictly prohibited from
                      registering.
                    </li>
                  </ul>
                </section>

                {/* 2. Registration and Security */}
                <section>
                  <h2 className="text-xl font-semibold text-[#24151a]">
                    2. Registration Data &amp; Account Security
                  </h2>
                  <ul className="mt-2 list-disc space-y-3 pl-6">
                    <li>
                      <strong>Accurate Information:</strong> You agree to
                      provide accurate, current, and complete details during
                      registration and promptly update your profile if your
                      information changes.
                    </li>
                    <li>
                      <strong>No Proxy or Shared Accounts:</strong> You must
                      register using your own personal or official
                      credentials. Creating accounts on behalf of friends,
                      spouses, family members, or third parties using shared
                      credentials is prohibited.
                    </li>
                    <li>
                      <strong>Credential Security:</strong> You are solely
                      responsible for safeguarding your login credentials,
                      passwords, and One-Time Passwords (OTPs), and for all
                      activities occurring under your account.
                    </li>
                    <li>
                      <strong>Breach Notification:</strong> You must notify
                      Kanchipuram Jobs immediately at{" "}
                      <a
                        href="mailto:support@kanchipuramjobs.in"
                        className="font-semibold text-[#AC1E44] hover:underline"
                      >
                        support@kanchipuramjobs.in
                      </a>{" "}
                      if you suspect unauthorized access to your account.
                    </li>
                    <li>
                      <strong>Enforcement:</strong> Any misrepresentation,
                      fake identity, or violation of these Terms may result
                      in account suspension, permanent blocking, and/or
                      legal action initiated by Kanchipuram Jobs, subject
                      to applicable law.
                    </li>
                  </ul>
                </section>

                {/* 3. Prohibited Activities */}
                <section>
                  <h2 className="text-xl font-semibold text-[#24151a]">
                    3. Strictly Prohibited Activities (Platform-Wide)
                  </h2>

                  <p className="mt-2">
                    Users are strictly prohibited from using Kanchipuram Jobs
                    for any unlawful, unethical, or unprofessional purpose,
                    including:
                  </p>

                  <ul className="mt-3 list-disc space-y-3 pl-6">
                    <li>
                      <strong>Alcohol, Tobacco &amp; Betting:</strong> Posting
                      or promoting any job involving the consumption, sale,
                      or promotion of alcohol, smoking/tobacco, gambling,
                      betting, adult/pornographic content, or illegal
                      activities.
                    </li>
                    <li>
                      <strong>Religious or Political Solicitation:</strong>{" "}
                      Using the platform to promote explicit religious
                      content, sects, religious personalities, or political
                      agendas.
                    </li>
                    <li>
                      <strong>Data Scraping &amp; Misuse:</strong> Copying,
                      harvesting, selling, transferring, or sharing another
                      user's contact details, resumes, or company data with
                      third parties, whether free or for a fee.
                    </li>
                    <li>
                      <strong>Unprofessional Conduct:</strong> Sending
                      obscene, abusive, harassing, or irrelevant messages,
                      or using the platform for personal marketing, loans,
                      or non-employment solicitation.
                    </li>
                  </ul>
                </section>

                {/* 4. Governing Law */}
                <section>
                  <h2 className="text-xl font-semibold text-[#24151a]">
                    4. Governing Law &amp; Jurisdiction
                  </h2>
                  <p className="mt-2">
                    These Terms are governed by the laws of India. Any
                    dispute arising out of the use of Kanchipuram Jobs shall
                    be subject to the exclusive jurisdiction of the
                    competent courts in Chennai / Kancheepuram, Tamil Nadu,
                    India, subject to applicable law.
                  </p>
                </section>

                {/* 5. Acceptance */}
                <section>
                  <h2 className="text-xl font-semibold text-[#24151a]">
                    5. Acceptance
                  </h2>
                  <p className="mt-2">
                    By registering for or using Kanchipuram Jobs, you
                    acknowledge that you have read, understood, and agree to
                    the following:
                  </p>

                  <ul className="mt-3 list-disc space-y-2 pl-6">
                    <li>Kanchipuram General Usage Policy</li>
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                  </ul>

                  <p className="mt-3">
                    Your continued use of the platform constitutes your
                    acceptance of these terms and applicable policies.
                  </p>
                </section>

                {/* Contact */}
                <section>
                  <h2 className="text-xl font-semibold text-[#24151a]">
                    Questions or Support
                  </h2>
                  <p className="mt-2">
                    If you have questions regarding these Terms and
                    Conditions, please contact us at{" "}
                    <a
                      href="mailto:support@kanchipuramjobs.in"
                      className="font-semibold text-[#AC1E44] hover:underline"
                    >
                      support@kanchipuramjobs.in
                    </a>.
                  </p>
                </section>
              </div>
            </div>
          </div>
        </MotionReveal>
      </main>

      <Footer />
    </>
  );
}
