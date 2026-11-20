
import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MotionReveal from "@/components/MotionReveal";

export default function RecruiterPolicyPage() {
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
              alt="Recruiters connecting with talented candidates through Kanchipuram Jobs"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#24151a]/85 to-[#ac1e44]/25" />

            <div className="absolute bottom-6 left-7 text-white sm:left-12">
              <p className="text-[10px] font-bold tracking-[2px] text-[#f3c3d0]">
                BUILDING TRUSTED CONNECTIONS
              </p>
              <p className="mt-2 text-2xl font-semibold">
                Responsible hiring starts here.
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
              Recruiter Policy
            </h1>

            <p className="mt-3 text-sm text-[#766970]">
              Last updated: November 24, 2026
            </p>

            <div className="mt-10 space-y-7 text-[15px] leading-8 text-[#5e555a]">

              {/* Introduction */}
              <div className="space-y-2">
                <p>
                  <strong className="text-[#24151a]">Product Name:</strong>{" "}
                  Kanchipuram Jobs (A Portal of Siva Sakthi Staffing Solutions)
                </p>

                <p>
                  <strong className="text-[#24151a]">Applicable To:</strong>{" "}
                  Business Owners, Hiring Companies, HR Teams, Staffing
                  Agencies, and Authorized Talent Acquisition Representatives
                  ("Recruiters" or "Employers").
                </p>
              </div>

              <p>
                Welcome to <strong>Kanchipuram Jobs</strong>, a mobile
                application and web recruitment platform owned and operated
                by <strong>Siva Sakthi Staffing Solutions</strong>. By
                registering a Recruiter or Employer account, posting
                vacancies, or accessing candidate profiles on Kanchipuram
                Jobs, you enter into an electronic agreement with
                Kanchipuram Jobs and accept these Recruiter &amp; Employer
                Terms, Usage Policy, and Privacy Policy.
              </p>

              {/* TERMS AND USAGE POLICY */}
              <section>
                <h2 className="text-2xl font-semibold text-[#24151a]">
                  Recruiter &amp; Employer Terms &amp; Usage Policy
                </h2>
              </section>

              {/* 1. Business Authorization */}
              <section>
                <h2 className="text-xl font-semibold text-[#24151a]">
                  1. Business Authorization, KYC Verification &amp; Account Integrity
                </h2>

                <ul className="mt-2 list-disc space-y-3 pl-6">
                  <li>
                    <strong>Authorized Representative:</strong> You warrant
                    that you are at least 18 years of age and are a legally
                    authorized employee, proprietor, director, or contracted
                    recruiting representative of a duly registered business
                    entity.
                  </li>

                  <li>
                    <strong>Mandatory KYC Verification:</strong> Kanchipuram
                    Jobs reserves the right to verify your business
                    credentials, such as GSTIN, Udyam Registration,
                    Certificate of Incorporation, PAN, or official corporate
                    email domain, before activating job postings or candidate
                    database access. These documents are used strictly for
                    authentication and are not shared publicly.
                  </li>

                  <li>
                    <strong>Direct Hiring Only (Third-Party Restriction):</strong>{" "}
                    You may post jobs only for the organization you directly
                    represent. External recruitment or staffing agencies may
                    post vacancies on behalf of a client only after submitting
                    a valid written authorization letter or official email
                    confirmation from that client.
                  </li>

                  <li>
                    <strong>No Account Sharing:</strong> Recruiter login
                    credentials and OTPs are assigned to authorized
                    representatives only and must not be shared across
                    unverified third parties or external agencies.
                  </li>

                  <li>
                    <strong>Brand &amp; Social Media Promotion:</strong> By
                    uploading your company logo, you authorize Kanchipuram
                    Jobs to display it alongside your job listings and client
                    roster. To maximize candidate reach, Kanchipuram Jobs
                    reserves the right to cross-publish your job listings
                    on partner job boards and official social media handles
                    such as LinkedIn, Indeed, and Instagram.
                  </li>
                </ul>
              </section>

              {/* 2. Job Posting Standards */}
              <section>
                <h2 className="text-xl font-semibold text-[#24151a]">
                  2. Job Posting Standards &amp; Fair Hiring Conditions
                </h2>

                <p className="mt-2">
                  Every job requisition published on Kanchipuram Jobs must
                  adhere to the following rules:
                </p>

                <ul className="mt-3 list-disc space-y-3 pl-6">
                  <li>
                    <strong>Genuine Vacancies Only:</strong> You may post
                    only active, legitimate job openings or manpower
                    requirements. Posting "ghost jobs" solely to harvest
                    resumes or build a cold database is strictly prohibited.
                  </li>

                  <li>
                    <strong>Truthful &amp; Clear Role Details:</strong> Job
                    listings must accurately state the job title, work
                    location, shift timings, required skills/qualifications,
                    nature of employment (full-time, contract, or temporary),
                    and realistic compensation/salary range. Offering a
                    lower salary or inferior terms during the interview or
                    offer stage than what was advertised on Kanchipuram Jobs
                    is strictly prohibited and may result in account
                    suspension.
                  </li>

                  <li>
                    <strong>Zero Upfront Fees to Candidates:</strong> You
                    must never charge, demand, or accept registration fees,
                    interview fees, training deposits, or placement charges
                    from Job Seekers. All commercial fees are strictly
                    between the Employer/Recruiter and Siva Sakthi Staffing
                    Solutions.
                  </li>

                  <li>
                    <strong>No Document Collection at Shortlisting:</strong>{" "}
                    Employers are strictly prohibited from demanding
                    sensitive personal or government IDs, such as Aadhaar
                    card, PAN card, or bank details, from Applicants during
                    the initial shortlisting or pre-interview stage. Collect
                    verification documents only after issuing a formal
                    selection or offer.
                  </li>

                  <li>
                    <strong>Non-Discrimination &amp; Prohibited Industries:</strong>{" "}
                    Job postings must comply with applicable Indian labour
                    and equal-opportunity laws and must not contain unlawful
                    discrimination based on caste, religion, gender, marital
                    status, or disability. Jobs involving the consumption
                    or promotion of alcohol, tobacco/smoking, gambling,
                    betting, adult content, or illegal activities are
                    strictly prohibited.
                  </li>

                  <li>
                    <strong>Fair Skill Assessments:</strong> Any test or
                    assignment given to Applicants must be fair, unpaid-work-free,
                    and directly relevant to the advertised job role.
                  </li>

                  <li>
                    <strong>Mandatory Offer Letter &amp; Timely Salary:</strong>{" "}
                    Upon selecting an Applicant, you must issue a clear
                    written Offer Letter specifying the role,
                    responsibilities, remuneration, payment cycle, and
                    complete office address. You must pay promised
                    wages/stipends on time as agreed.
                  </li>

                  <li>
                    <strong>72-Hour Complaint Resolution:</strong> You must
                    respond within 72 working hours to any Applicant
                    complaint forwarded to you by Kanchipuram Jobs. Failure
                    to respond may result in temporary or permanent account
                    suspension.
                  </li>

                  <li>
                    <strong>Probation / Performance Review:</strong> Where
                    an Applicant's performance is unsatisfactory after
                    joining, Kanchipuram Jobs recommends evaluating and
                    communicating employment decisions transparently
                    within the initial 15 days in compliance with
                    applicable Indian labour laws.
                  </li>
                </ul>
              </section>

              {/* 3. Candidate Data Protection */}
              <section>
                <h2 className="text-xl font-semibold text-[#24151a]">
                  3. Candidate Data Protection (DPDP Act Compliance)
                </h2>

                <p className="mt-2">
                  Under India's Digital Personal Data Protection Act, 2023
                  ("DPDP Act"), candidate profiles and resumes accessed
                  through Kanchipuram Jobs constitute protected personal
                  data.
                </p>

                <ul className="mt-3 list-disc space-y-3 pl-6">
                  <li>
                    <strong>Strict Purpose Limitation:</strong> You may
                    access, download, and use Job Seeker contact details
                    and resumes solely for evaluating and contacting
                    candidates for your active, posted vacancies.
                  </li>

                  <li>
                    <strong>No Data Harvesting, Spam, or Resale:</strong>{" "}
                    Scraping, bulk-exporting, selling, renting, or
                    transferring candidate databases to third-party job
                    boards, marketing agencies, or sister concerns, or
                    sending unsolicited promotional messages to Applicants,
                    is strictly prohibited and may result in permanent
                    termination and legal action.
                  </li>

                  <li>
                    <strong>Data Security &amp; Deletion:</strong> You must
                    store downloaded resumes securely and permanently delete
                    candidate personal data once the hiring requirement is
                    closed or if a candidate withdraws consent, subject to
                    applicable legal requirements.
                  </li>
                </ul>
              </section>

              {/* 4. Commercial Payments */}
              <section>
                <h2 className="text-xl font-semibold text-[#24151a]">
                  4. Non-Circumvention &amp; Commercial Payments
                </h2>

                <ul className="mt-2 list-disc space-y-3 pl-6">
                  <li>
                    <strong>Non-Circumvention:</strong> Recruiters must not
                    manipulate platform workflows or encourage Job Seekers
                    to bypass Kanchipuram Jobs tracking mechanisms to evade
                    agreed commercial placement fees, subscription terms,
                    or service obligations.
                  </li>

                  <li>
                    <strong>100% Advance Payment &amp; Refunds:</strong> All
                    paid recruitment plans, job credits, or staffing services
                    offered by Kanchipuram Jobs are payable on a 100% advance
                    basis. Refunds, if applicable, are governed strictly
                    by our published Refund Policy and Apple App Store /
                    Google Play billing rules for in-app purchases.
                  </li>
                </ul>
              </section>

              {/* 5. Enforcement */}
              <section>
                <h2 className="text-xl font-semibold text-[#24151a]">
                  5. Policy Enforcement, Disclaimers &amp; Jurisdiction
                </h2>

                <ul className="mt-2 list-disc space-y-3 pl-6">
                  <li>
                    <strong>Enforcement Actions:</strong> Violations of this
                    Policy may result in:
                    <ol className="mt-2 list-decimal space-y-2 pl-6">
                      <li>
                        Immediate takedown of misleading or non-compliant
                        job listings.
                      </li>
                      <li>
                        Revocation of resume search privileges or freezing
                        of active Recruiter seats without refund, subject
                        to applicable law and the published Refund Policy.
                      </li>
                      <li>
                        Permanent account termination, blacklisting of
                        associated business entities, and legal action
                        for data misuse or fee circumvention.
                      </li>
                    </ol>
                  </li>

                  <li>
                    <strong>No Guarantee of Hiring:</strong> Kanchipuram
                    Jobs acts solely as a technology facilitator connecting
                    Employers and Job Seekers. Siva Sakthi Staffing
                    Solutions does not guarantee that posting a job will
                    result in a hire, nor does it guarantee the absolute
                    accuracy of user-submitted resumes. Employers remain
                    responsible for conducting final interviews and
                    background verification before hiring.
                  </li>

                  <li>
                    <strong>Governing Law:</strong> These Terms are governed
                    by the laws of India, with jurisdiction vested in the
                    competent courts of Chennai / Kanchipuram District,
                    Tamil Nadu, India, subject to applicable law.
                  </li>
                </ul>
              </section>

              {/* PRIVACY POLICY */}
              <section className="border-t border-[#eee5e8] pt-7">
                <h2 className="text-2xl font-semibold text-[#24151a]">
                  Recruiter Privacy Policy
                </h2>

                <p className="mt-2 text-sm font-medium text-[#AC1E44]">
                  DPDP Act &amp; App Store Privacy
                </p>

                <p className="mt-2">
                  <strong>Data Fiduciary:</strong> Siva Sakthi Staffing
                  Solutions.
                </p>

                <p className="mt-2">
                  This policy explains how Kanchipuram Jobs collects,
                  processes, stores, and protects Recruiter and Employer
                  personal and business information.
                </p>
              </section>

              {/* Privacy 1 */}
              <section>
                <h2 className="text-xl font-semibold text-[#24151a]">
                  1. Consent &amp; Purpose of Processing
                </h2>

                <p className="mt-2">
                  By registering as a Recruiter/Employer on Kanchipuram Jobs,
                  you provide consent under the Digital Personal Data
                  Protection Act, 2023 ("DPDP Act") for Siva Sakthi Staffing
                  Solutions to process your personal and business data to
                  verify your organization, publish job listings, facilitate
                  candidate matching, process billing, and provide support.
                </p>

                <ul className="mt-3 list-disc space-y-3 pl-6">
                  <li>
                    <strong>Transactional vs. Marketing Alerts:</strong>{" "}
                    Upon registration, your corporate email and phone number
                    will be used to send essential transactional notifications,
                    including OTPs, candidate applications, interview
                    updates, and billing alerts via SMS, WhatsApp, RCS,
                    or email.
                  </li>

                  <li>
                    Promotional newsletters are sent only with your opt-in
                    consent, and you may opt out at any time.
                  </li>
                </ul>
              </section>

              {/* Privacy 2 */}
              <section>
                <h2 className="text-xl font-semibold text-[#24151a]">
                  2. Data We Collect &amp; Device Permissions
                </h2>

                <ul className="mt-2 list-disc space-y-3 pl-6">
                  <li>
                    <strong>Recruiter &amp; Business Data:</strong> Authorized
                    representative's name, designation, corporate email,
                    mobile phone number, company name, office address,
                    company logo, billing/GST details, and business KYC
                    verification documents.
                  </li>

                  <li>
                    <strong>Technical &amp; Device Data:</strong> IP address,
                    device model, operating system version, crash logs,
                    and approximate city/district location to match
                    vacancies with local workforce talent.
                  </li>

                  <li>
                    <strong>App Permissions:</strong> Storage/Camera
                    permissions solely to upload company logos or KYC
                    documents, and Push Notifications for real-time
                    applicant alerts.
                  </li>

                  <li>
                    <strong>Data Protection:</strong> We do not sell
                    personal or business data to third-party data brokers.
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
                    Your account data is retained only while your account
                    remains active or as required under applicable Indian
                    tax, GST, and corporate laws.
                  </li>

                  <li>
                    <strong>How to Delete Your Account:</strong> You can
                    request permanent deletion of your account and
                    associated personal data anytime inside the app via{" "}
                    <strong>
                      Settings &gt; Account &gt; Delete Account
                    </strong>
                    , or through our public web link at{" "}
                    <strong>[Insert Web Deletion URL]</strong>.
                  </li>

                  <li>
                    Account deletion is processed within 15–30 days,
                    excluding statutory tax/invoice records retained
                    under Indian law.
                  </li>
                </ul>
              </section>

              {/* Privacy 4 */}
              <section>
                <h2 className="text-xl font-semibold text-[#24151a]">
                  4. Your DPDP Act Rights &amp; Grievance Officer
                </h2>

                <p className="mt-2">
                  To access a summary of your data, request corrections,
                  withdraw consent, or report privacy concerns under the
                  DPDP Act, contact our designated Grievance Officer:
                </p>

                <div className="mt-4 rounded-2xl bg-[#f8f5f6] p-5">
                  <p>
                    <strong className="text-[#24151a]">Name:</strong>{" "}
                    Kolanji.K
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

              {/* Recruiter Safety Tips */}
              <section className="border-t border-[#eee5e8] pt-7">
                <h2 className="text-2xl font-semibold text-[#24151a]">
                  Recruiter Safety Tips
                </h2>

                <p className="mt-2 text-sm font-medium text-[#AC1E44]">
                  A Quick In-App Guide
                </p>

                <div className="mt-4 space-y-4">

                  <div className="flex gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f8e8ed] text-sm font-bold text-[#AC1E44]">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#24151a]">
                        Verify Candidate Credentials
                      </h3>
                      <p className="mt-1">
                        Conduct thorough interviews and verify original
                        educational and experience certificates before
                        issuing final appointment letters.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f8e8ed] text-sm font-bold text-[#AC1E44]">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#24151a]">
                        Keep Communication Transparent
                      </h3>
                      <p className="mt-1">
                        Maintain clear written records of interview
                        schedules, job roles, and salary terms to
                        prevent misunderstandings.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#f8e8ed] text-sm font-bold text-[#AC1E44]">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#24151a]">
                        Report Suspicious Profiles
                      </h3>
                      <p className="mt-1">
                        Immediately flag fake resumes, proxy candidates,
                        or suspicious behavior through the in-app Report
                        button so our moderation team can act swiftly.
                      </p>
                    </div>
                  </div>

                </div>
              </section>

              {/* Acceptance */}
              <section className="border-t border-[#eee5e8] pt-7">
                <h2 className="text-xl font-semibold text-[#24151a]">
                  Recruiter Acceptance
                </h2>

                <p className="mt-2">
                  By registering as a Recruiter or Employer on
                  Kanchipuram Jobs, you acknowledge that you are an
                  authorized business representative and agree to
                  the applicable platform policies.
                </p>

                <div className="mt-4 rounded-2xl bg-[#f8f5f6] p-5">
                  <p className="font-semibold text-[#24151a]">
                    Recruiter Onboarding Consent
                  </p>

                  <p className="mt-2">
                    I confirm I am an authorized business representative,
                    and I have read, understood, and agree to the
                    Kanchipuram Jobs Recruiter &amp; Employer Terms,
                    Usage Policy, and Privacy Policy.
                  </p>
                </div>
              </section>

              {/* Contact */}
              <section>
                <h2 className="text-xl font-semibold text-[#24151a]">
                  Questions or Support
                </h2>

                <p className="mt-2">
                  For assistance regarding recruiter accounts, business
                  verification, job postings, candidate data, or this
                  policy, contact us at{" "}
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
