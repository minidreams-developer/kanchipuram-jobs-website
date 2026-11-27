
import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MotionReveal from "../../components/MotionReveal";

export default function PrivacyPolicyPage() {
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
                alt="People finding opportunities with Kanchipuram Jobs"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#24151a]/85 to-[#ac1e44]/25" />
              <div className="absolute bottom-6 left-7 text-white sm:left-12">
                <p className="text-[10px] font-bold tracking-[2px] text-[#f3c3d0]">
                  YOUR TRUST MATTERS
                </p>
                <p className="mt-2 text-2xl font-semibold">
                  Privacy, explained clearly.
                </p>
              </div>
            </div>

            {/* Main Content */}
            <div className="p-7 sm:p-12">

              <Link
                href="/"
                className="text-sm font-semibold text-[#AC1E44]"
              >
                ← Back to Kanchipuram Jobs
              </Link>

              <h1 className="mt-8 text-4xl font-semibold tracking-tight">
                Job Seeker Policy
              </h1>

              {/* <p className="mt-3 text-sm text-[#766970]">
                Last updated: November 24, 2026
              </p> */}

              <div className="mt-10 space-y-7 text-[15px] leading-8 text-[#5e555a]">

                {/* Introduction */}
                <div className="space-y-2">
                  {/* <p>
                    <strong className="text-[#24151a]">
                      Product Name:
                    </strong>{" "}
                    Kanchipuram Jobs (A Portal of Siva Sakthi Staffing Solutions)
                  </p> */}

                  <p>
                    <strong className="text-[#24151a]">
                      Applicable To:
                    </strong>{" "}
                    Individual Candidates, Applicants, and Workforce Resources
                    ("Job Seekers" or "Applicants").
                  </p>
                </div>

                {/* <p>
                  Welcome to <strong>Kanchipuram Jobs</strong>, a mobile
                  application and web recruitment platform owned and operated
                  by <strong>Siva Sakthi Staffing Solutions</strong>. By
                  registering an account, creating a profile, or applying
                  for employment opportunities on Kanchipuram Jobs, you enter
                  into an agreement with Kanchipuram Jobs and agree to these
                  Job Seeker Terms &amp; Usage Policy alongside our Privacy
                  Policy.
                </p> */}

                {/* JOB SEEKER TERMS */}
                <section>
                  <h2 className="text-2xl font-semibold text-[#24151a]">
                    Job Seeker Terms &amp; Usage Policy
                  </h2>
                </section>

                {/* 1 */}
                <section>
                  <h2 className="text-xl font-semibold text-[#24151a]">
                    1. Eligibility &amp; Account Integrity
                  </h2>
                  <ul className="mt-2 list-disc space-y-3 pl-6">
                    <li>
                      <strong>Minimum Age (18+):</strong> You must be at
                      least 18 years of age and legally competent to enter
                      into a binding contract under the Indian Contract Act,
                      1872, to create a Job Seeker account on Kanchipuram Jobs.
                    </li>
                    <li>
                      <strong>One Account Per Individual:</strong> You may
                      maintain only one active Job Seeker profile. Creating
                      duplicate accounts or registering on behalf of friends,
                      family members, or third parties to bypass recruiter
                      rejections, manipulate visibility, or spam applications
                      is strictly prohibited.
                    </li>
                    <li>
                      <strong>Credential Security:</strong> You are solely
                      responsible for safeguarding your login credentials,
                      passwords, and One-Time Passwords (OTPs), and for all
                      activities occurring under your account. Notify us
                      immediately at{" "}
                      <a
                        href="mailto:support@kanchipuramjobs.in"
                        className="font-semibold text-[#AC1E44] hover:underline"
                      >
                        support@kanchipuramjobs.in
                      </a>{" "}
                      if you suspect unauthorized access.
                    </li>
                  </ul>
                </section>

                {/* 2 */}
                <section>
                  <h2 className="text-xl font-semibold text-[#24151a]">
                    2. Profile Integrity &amp; Photograph Standards
                  </h2>
                  <ul className="mt-2 list-disc space-y-3 pl-6">
                    <li>
                      <strong>Truthful Credentials:</strong> Every detail in
                      your profile, including your legal name, contact number,
                      location, educational qualifications, trade
                      certifications, work experience, and salary history,
                      must be truthful, current, and verifiable. Submitting
                      forged degrees, fake experience certificates, or
                      doctored pay slips may lead to permanent account
                      suspension and legal action where applicable.
                    </li>
                    <li>
                      <strong>Profile Photograph Standards:</strong> If you
                      upload a profile picture, it must be a clear,
                      professional likeness of yourself. Kanchipuram Jobs
                      reserves the right to remove inappropriate, blurry,
                      or non-personal images and request a replacement.
                      By uploading your photo, you authorize Kanchipuram Jobs
                      to display it to verified Employers for legitimate
                      recruitment purposes.
                    </li>
                  </ul>
                </section>

                {/* 3 */}
                <section>
                  <h2 className="text-xl font-semibold text-[#24151a]">
                    3. Permitted Uses
                  </h2>
                  <p className="mt-2">
                    As a verified Job Seeker, you may use Kanchipuram Jobs to:
                  </p>
                  <ul className="mt-3 list-disc space-y-2 pl-6">
                    <li>
                      Create and maintain a professional resume and skill
                      profile for legitimate employment or manpower deployment
                      opportunities.
                    </li>
                    <li>
                      Browse verified job openings and submit applications
                      for roles matching your skills, qualifications, and
                      availability.
                    </li>
                    <li>
                      Communicate directly with verified Recruiters and
                      Employers through approved in-app channels regarding
                      active job applications, interviews, and onboarding.
                    </li>
                  </ul>
                </section>

                {/* 4 */}
                <section>
                  <h2 className="text-xl font-semibold text-[#24151a]">
                    4. Application &amp; Interview Commitments
                  </h2>
                  <ul className="mt-2 list-disc space-y-3 pl-6">
                    <li>
                      <strong>24-Hour Response Window:</strong> If an Employer
                      or Kanchipuram Jobs contacts you regarding your job
                      application, you are expected to respond within 24 hours.
                    </li>
                    <li>
                      <strong>Honoring Job Offers:</strong> Once you accept
                      an offer letter or confirm a joining date, you must
                      make every sincere effort to report on time. Repeatedly
                      failing to attend confirmed interviews or accepted
                      joining dates ("ghosting") without prior notice may
                      result in profile deprioritization or account
                      suspension.
                    </li>
                    <li>
                      <strong>Zero Job Fees:</strong> Kanchipuram Jobs is
                      100% free for Job Seekers to apply for jobs. Never pay
                      money to any recruiter or employer for registration,
                      interviews, or job offers.
                    </li>
                  </ul>
                </section>

                {/* 5 */}
                <section>
                  <h2 className="text-xl font-semibold text-[#24151a]">
                    5. Strictly Prohibited Conduct
                  </h2>
                  <p className="mt-2">
                    To protect the integrity of Kanchipuram Jobs and our
                    employer network, you must not:
                  </p>
                  <ul className="mt-3 list-disc space-y-3 pl-6">
                    <li>
                      <strong>Impersonate Others:</strong> Apply for roles on
                      behalf of another person or attend interviews using
                      proxy candidates.
                    </li>
                    <li>
                      <strong>Spam or Misuse Applications:</strong> Mass-apply
                      indiscriminately to unrelated roles using automated
                      scripts, bots, or repetitive copy-paste messages.
                    </li>
                    <li>
                      <strong>Harass or Misbehave:</strong> Use abusive,
                      discriminatory, threatening, or unprofessional language
                      toward Recruiters, Employers, or Kanchipuram Jobs
                      support staff.
                    </li>
                    <li>
                      <strong>Solicit Non-Employment Services:</strong> Use
                      the platform to promote personal businesses,
                      multi-level marketing schemes, loans, or unrelated
                      commercial services.
                    </li>
                    <li>
                      <strong>Share Employer Data:</strong> Copy, publish,
                      transfer, or sell Employer contact numbers, internal
                      documents, or confidential interview details to
                      external parties.
                    </li>
                  </ul>
                </section>

                {/* 6 */}
                <section>
                  <h2 className="text-xl font-semibold text-[#24151a]">
                    6. Due Diligence, Safety &amp; Mandatory Reporting
                  </h2>
                  <ul className="mt-2 list-disc space-y-3 pl-6">
                    <li>
                      <strong>Verify Before Joining:</strong> While
                      Kanchipuram Jobs conducts verification checks on
                      employers, you are advised to conduct your own
                      independent due diligence regarding the employer
                      and workplace before accepting an offer or joining.
                    </li>
                    <li>
                      <strong>Protect Sensitive Documents:</strong> Never
                      share sensitive personal documents such as Aadhaar,
                      PAN, or bank account details during initial phone
                      calls or shortlisting. Share them only after verifying
                      the Employer's identity and receiving a formal offer
                      letter or official background-verification request.
                    </li>
                    <li>
                      <strong>Mandatory Reporting:</strong> If you encounter
                      any suspicious employer, fake job listing, or demand
                      for money, report it immediately through the in-app
                      Report button or by emailing{" "}
                      <a
                        href="mailto:support@kanchipuramjobs.in"
                        className="font-semibold text-[#AC1E44] hover:underline"
                      >
                        support@kanchipuramjobs.in
                      </a>.
                    </li>
                  </ul>
                </section>

                {/* 7 */}
                <section>
                  <h2 className="text-xl font-semibold text-[#24151a]">
                    7. Policy Enforcement &amp; Disclaimers
                  </h2>
                  <ul className="mt-2 list-disc space-y-3 pl-6">
                    <li>
                      <strong>Enforcement Actions:</strong> If you violate
                      this Policy, Kanchipuram Jobs reserves the right to:
                      <ol className="mt-2 list-decimal space-y-2 pl-6">
                        <li>
                          Issue a formal warning or temporarily restrict
                          your ability to apply for jobs.
                        </li>
                        <li>
                          Remove unverified profiles, resumes, or flagged
                          content.
                        </li>
                        <li>
                          Permanently suspend or ban your account, block
                          future registrations, and initiate legal action
                          where applicable.
                        </li>
                      </ol>
                    </li>
                    <li>
                      <strong>No Employment Guarantee:</strong> Kanchipuram
                      Jobs acts strictly as a technology facilitator
                      connecting Job Seekers and Employers. Kanchipuram
                      Jobs / Siva Sakthi Staffing Solutions does not
                      guarantee job placement or permanent employment
                      to any Applicant.
                    </li>
                  </ul>
                </section>

                {/* PRIVACY POLICY */}
                <section className="border-t border-[#eee5e8] pt-7">
                  <h2 className="text-2xl font-semibold text-[#24151a]">
                    Job Seeker Privacy Policy
                  </h2>
                  <p className="mt-2 text-sm font-medium text-[#AC1E44]">
                    DPDP Act &amp; App Store Privacy
                  </p>
                  <p className="mt-2">
                    This Privacy Policy explains how Kanchipuram Jobs
                    collects, uses, stores, and protects the personal
                    information of Job Seekers when they use our recruitment
                    platform.
                  </p>
                </section>

                {/* Privacy 1 */}
                <section>
                  <h2 className="text-xl font-semibold text-[#24151a]">
                    1. Affirmative Consent &amp; Communications
                  </h2>
                  <p className="mt-2">
                    By registering on Kanchipuram Jobs, you act as a Data
                    Principal under India's Digital Personal Data Protection
                    Act, 2023 ("DPDP Act") and provide consent for processing
                    your personal data for recruitment and job-matching
                    services, as described in this Policy.
                  </p>
                  <ul className="mt-3 list-disc space-y-3 pl-6">
                    <li>
                      <strong>Alerts &amp; Notifications:</strong> Upon
                      registration, your email address and phone number may
                      be used to send essential transactional job alerts,
                      including OTPs, interview schedules, and application
                      updates, via SMS, WhatsApp, RCS, or email.
                    </li>
                    <li>
                      Promotional newsletters are sent only with your
                      separate opt-in consent, and you may opt out at any
                      time.
                    </li>
                  </ul>
                </section>

                {/* Privacy 2 */}
                <section>
                  <h2 className="text-xl font-semibold text-[#24151a]">
                    2. Personal Data We Collect &amp; Permissions
                  </h2>
                  <ul className="mt-2 list-disc space-y-3 pl-6">
                    <li>
                      <strong>Profile &amp; Career Data:</strong> Full name,
                      mobile number, email address, residential city/district,
                      educational qualifications, trade skills, work
                      experience, current/expected salary, resume/CV files,
                      and profile photograph.
                    </li>
                    <li>
                      <strong>Device &amp; Technical Data:</strong> IP
                      address, device model, operating system version,
                      crash diagnostics, and approximate city/district
                      location to match you with nearby job openings.
                    </li>
                    <li>
                      <strong>App Permissions:</strong> Storage/Camera
                      permissions solely for uploading resumes or profile
                      photos, and Push Notifications for interview and
                      application alerts.
                    </li>
                    <li>
                      <strong>No Sale of Data:</strong> We do not sell,
                      rent, or trade your personal data or resume to
                      third-party data brokers or external marketing
                      agencies. Your profile is shared with verified
                      Employers for legitimate recruitment purposes.
                    </li>
                  </ul>
                </section>

                {/* Privacy 3 */}
                <section>
                  <h2 className="text-xl font-semibold text-[#24151a]">
                    3. Data Retention &amp; Account Deletion
                  </h2>
                  <ul className="mt-2 list-disc space-y-3 pl-6">
                    <li>
                      Your personal data is retained only while your account
                      remains active or for as long as required or permitted
                      under applicable Indian law.
                    </li>
                    <li>
                      <strong>How to Delete Your Account:</strong> You can
                      request permanent deletion of your account and personal
                      data at any time inside the app via{" "}
                      <strong>Settings &gt; Account &gt; Delete Account</strong>,
                      or through our public web portal at{" "}
                      <strong>[Insert Web Deletion URL]</strong>.
                    </li>
                    <li>
                      Account deletion and applicable data erasure requests
                      are processed within 15–30 days, subject to legal
                      retention requirements.
                    </li>
                  </ul>
                </section>

                {/* Privacy 4 */}
                <section>
                  <h2 className="text-xl font-semibold text-[#24151a]">
                    4. Your DPDP Act Rights &amp; Grievance Officer
                  </h2>
                  <p className="mt-2">
                    Subject to applicable law, you have the right to:
                  </p>
                  <ul className="mt-3 list-disc space-y-2 pl-6">
                    <li>
                      Access a summary of your personal data.
                    </li>
                    <li>
                      Request correction of inaccurate or incomplete details.
                    </li>
                    <li>
                      Withdraw consent for data processing where applicable.
                    </li>
                    <li>
                      Request erasure of your personal data, subject to
                      applicable legal requirements.
                    </li>
                  </ul>

                  <p className="mt-4">
                    For privacy requests or complaints, contact our
                    designated Grievance Officer:
                  </p>

                  <div className="mt-3 rounded-2xl bg-[#f8f5f6] p-5">
                    <p>
                      <strong className="text-[#24151a]">Name:</strong>{" "}
                      Kolanji
                    </p>
                    <p>
                      <strong className="text-[#24151a]">Organization:</strong>{" "}
                      Siva Sakthi Staffing Solutions
                    </p>
                    <p>
                      <strong className="text-[#24151a]">Email:</strong>{" "}
                      <a
                        href="mailto:support@kanchipuramjobs.in"
                        className="font-semibold text-[#AC1E44] hover:underline"
                      >
                        support@kanchipuramjobs.in
                      </a>
                    </p>
                    <p>
                      <strong className="text-[#24151a]">
                        Response Timeline:
                      </strong>{" "}
                      Acknowledgment within 48 hours; resolution within
                      15 days.
                    </p>
                  </div>
                </section>

                {/* Acceptance */}
                <section className="border-t border-[#eee5e8] pt-7">
                  <h2 className="text-xl font-semibold text-[#24151a]">
                    5. Job Seeker Acceptance
                  </h2>

                  <p className="mt-2">
                    By registering on or using Kanchipuram Jobs, you
                    acknowledge and confirm the following:
                  </p>

                  <div className="mt-4 rounded-2xl bg-[#f8f5f6] p-5">
                    <p className="font-medium text-[#24151a]">
                      Job Seeker Onboarding Consent
                    </p>
                    <p className="mt-2">
                      I confirm that I am 18 years of age or older, and I
                      have read, understood, and agree to the Kanchipuram
                      Jobs Job Seeker Terms, Usage Policy, and Privacy
                      Policy.
                    </p>
                  </div>
                </section>

                {/* Contact */}
                <section>
                  <h2 className="text-xl font-semibold text-[#24151a]">
                    Questions or Support
                  </h2>
                  <p className="mt-2">
                    For assistance regarding your account, job applications,
                    personal information, or this policy, contact us at{" "}
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
