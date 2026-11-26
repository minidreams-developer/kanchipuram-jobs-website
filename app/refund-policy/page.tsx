
import Link from "next/link";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import MotionReveal from "@/components/MotionReveal";

export default function RefundPolicyPage() {
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
              alt="Kanchipuram Jobs"
              fill
              priority
              className="object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-[#24151a]/85 to-[#ac1e44]/25" />

            <div className="absolute inset-0 flex flex-col justify-center px-7 sm:px-12">
              <p className="text-[10px] font-bold tracking-[2px] text-[#f3c3d0]">
                KANCHIPURAM JOBS
              </p>

              <h1 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                Refund & Cancellation Policy
              </h1>

              {/* <p className="mt-2 text-xs text-white/80">
                Last Updated: 24/11/2026
              </p> */}
            </div>
          </div>

          {/* Policy Content */}
          <div className="p-7 sm:p-12">

            <div className="space-y-7 text-[15px] leading-8 text-[#5e555a]">
            <div className="mt-1 pt-2">
              <Link
                href="/"
                className="text-bold font-semibold text-[#AC1E44]"
              >
                ← Back to Kanchipuram Jobs
              </Link>
            </div>

              {/* <p>
                <strong className="text-[#24151a]">Product Name:</strong>{" "}
                Kanchipuram Jobs (A Portal of{" "}
                <strong className="text-[#24151a]">
                  Siva Sakthi Staffing Solutions
                </strong>
                )
              </p> */}

              <p>
                <strong className="text-[#24151a]">Applicable To:</strong>{" "}
                Recruiters, Employers, and Business Clients
                (&quot;Users&quot; or &quot;Recruiters&quot;)
              </p>

              <p>
                All paid recruitment plans, job posting credits, candidate
                database subscriptions, and staffing services offered on{" "}
                <strong className="text-[#24151a]">Kanchipuram Jobs</strong>{" "}
                by{" "}
                <strong className="text-[#24151a]">
                  Siva Sakthi Staffing Solutions
                </strong>{" "}
                are payable on a{" "}
                <strong className="text-[#24151a]">
                  100% advance basis
                </strong>
                . By purchasing a plan or service on Kanchipuram Jobs, you
                agree to the terms of this Refund & Cancellation Policy.
              </p>

              {/* Section 1 */}
              <section>
                <h2 className="mb-3 text-xl font-semibold text-[#24151a]">
                  1. General No-Refund Rule
                </h2>

                <ul className="list-disc space-y-3 pl-6">
                  <li>
                    <strong className="text-[#24151a]">
                      Digital & Activated Services:
                    </strong>{" "}
                    Because Kanchipuram Jobs provides immediate digital access
                    to job posting slots, candidate database searches, and
                    recruitment tools upon payment, all completed purchases
                    and active subscriptions are generally{" "}
                    <strong className="text-[#24151a]">
                      non-refundable
                    </strong>{" "}
                    once activated or utilized, except under the specific
                    conditions outlined below.
                  </li>

                  <li>
                    <strong className="text-[#24151a]">Job Seekers:</strong>{" "}
                    Kanchipuram Jobs is{" "}
                    <strong className="text-[#24151a]">100% free</strong> for
                    Job Seekers. We never charge candidates for creating
                    profiles or applying for jobs.
                  </li>
                </ul>
              </section>

              {/* Section 2 */}
              <section>
                <h2 className="mb-3 text-xl font-semibold text-[#24151a]">
                  2. Eligible Scenarios for Refund
                </h2>

                <p className="mb-3">
                  Refunds or credit adjustments are strictly limited to the
                  following verified situations:
                </p>

                <ul className="list-disc space-y-3 pl-6">
                  <li>
                    <strong className="text-[#24151a]">
                      Duplicate / Double Payment:
                    </strong>{" "}
                    If your bank account, card, or UPI is debited twice for
                    the same transaction due to a payment gateway or network
                    error, the duplicate amount will be refunded in full upon
                    verification.
                  </li>

                  <li>
                    <strong className="text-[#24151a]">
                      Subscription Activation Failure:
                    </strong>{" "}
                    If payment is successfully deducted from your account,
                    but your subscription plan, job credits, or recruiter
                    seat fails to activate on your Kanchipuram Jobs account.
                  </li>

                  <li>
                    <strong className="text-[#24151a]">
                      Verified Platform Technical Issues:
                    </strong>{" "}
                    If a verified technical outage or system defect directly
                    on the Kanchipuram Jobs platform prevents you from
                    utilizing your paid subscription or job credits for an
                    extended period, our team will calculate your unused
                    subscription period or unused job credits on a{" "}
                    <strong className="text-[#24151a]">
                      pro-rata basis
                    </strong>{" "}
                    and refund the remaining unutilized balance (or issue
                    equivalent service credits, at your option).
                  </li>
                </ul>
              </section>

              {/* Section 3 */}
              <section>
                <h2 className="mb-3 text-xl font-semibold text-[#24151a]">
                  3. Non-Refundable Scenarios (Exclusions)
                </h2>

                <p className="mb-3">
                  No refund, chargeback, or fee reversal will be granted under
                  any of the following circumstances:
                </p>

                <ul className="list-disc space-y-3 pl-6">
                  <li>
                    <strong className="text-[#24151a]">
                      Candidate Performance or Hiring Outcomes:
                    </strong>{" "}
                    Kanchipuram Jobs acts strictly as a technology platform
                    connecting Recruiters with Job Seekers. If a shortlisted
                    or hired candidate does not fulfill your company&apos;s
                    internal performance expectations, leaves the job early,
                    fails to attend an interview, or declines an offer,{" "}
                    <strong className="text-[#24151a]">
                      Siva Sakthi Staffing Solutions
                    </strong>{" "}
                    will{" "}
                    <strong className="text-[#24151a]">not</strong> refund
                    subscription fees, job posting charges, or platform
                    credits.
                  </li>

                  <li>
                    <strong className="text-[#24151a]">
                      Change of Mind or Hiring Freeze:
                    </strong>{" "}
                    If your organization cancels a vacancy, puts hiring on
                    hold, or decides not to use purchased credits after the
                    plan has been activated.
                  </li>

                  <li>
                    <strong className="text-[#24151a]">
                      Account Suspension for Policy Violations:
                    </strong>{" "}
                    If your Recruiter account or job listing is suspended,
                    blocked, or terminated for violating the{" "}
                    <strong className="text-[#24151a]">
                      Kanchipuram Jobs Recruiter Terms & Usage Policy
                    </strong>{" "}
                    (including posting fake jobs, charging fees to candidates,
                    or misusing candidate data).
                  </li>

                  <li>
                    <strong className="text-[#24151a]">
                      Expired Plans:
                    </strong>{" "}
                    Unused job credits or database views that expire at the
                    end of your subscription validity period.
                  </li>
                </ul>
              </section>

              {/* Section 4 */}
              <section>
                <h2 className="mb-3 text-xl font-semibold text-[#24151a]">
                  4. Verification & 72-Hour Resolution Process
                </h2>

                <p className="mb-3">
                  To request a refund under Section 2, please follow these
                  steps:
                </p>

                <ol className="list-decimal space-y-4 pl-6">
                  <li>
                    <strong className="text-[#24151a]">
                      Submit a Request:
                    </strong>{" "}
                    Email{" "}
                    <a
                      href="mailto:support@kanchipuramjobs.in"
                      className="font-medium text-[#AC1E44] hover:underline"
                    >
                      support@kanchipuramjobs.in
                    </a>{" "}
                    (or raise a ticket via the in-app{" "}
                    <strong className="text-[#24151a]">
                      Help & Support
                    </strong>{" "}
                    section) within{" "}
                    <strong className="text-[#24151a]">7 days</strong> of the
                    transaction date, attaching your{" "}
                    <strong className="text-[#24151a]">
                      Registered Mobile Number/Email
                    </strong>
                    ,{" "}
                    <strong className="text-[#24151a]">
                      Transaction ID / Payment Receipt
                    </strong>
                    , and a brief description of the issue.
                  </li>

                  <li>
                    <strong className="text-[#24151a]">
                      Admin Team Review (72-Hour SLA):
                    </strong>{" "}
                    Our Billing and Admin Team will investigate the payment
                    gateway logs and platform usage records and revert to you
                    with an official status update within{" "}
                    <strong className="text-[#24151a]">
                      72 working hours
                    </strong>
                    .
                  </li>

                  <li>
                    <strong className="text-[#24151a]">
                      Refund Processing Timeline:
                    </strong>{" "}
                    Once approved by our Admin Team, the eligible refund
                    amount will be credited back to your original payment
                    method (Bank Account / UPI / Card) within{" "}
                    <strong className="text-[#24151a]">
                      5 to 10 business days
                    </strong>
                    , depending on your bank&apos;s processing timelines.
                  </li>
                </ol>
              </section>

              {/* Section 5 */}
              <section>
                <h2 className="mb-3 text-xl font-semibold text-[#24151a]">
                  5. In-App Purchases (Apple App Store & Google Play Store)
                </h2>

                <ul className="list-disc space-y-3 pl-6">
                  <li>
                    If you purchased a subscription or digital credits
                    directly through{" "}
                    <strong className="text-[#24151a]">
                      Apple App Store
                    </strong>{" "}
                    or{" "}
                    <strong className="text-[#24151a]">
                      Google Play Billing
                    </strong>
                    , all billing, auto-renewal cancellations, and refund
                    requests are governed by Apple&apos;s or Google&apos;s
                    respective store refund policies and must be requested
                    directly through your App Store or Google Play account
                    settings.
                  </li>

                  <li>
                    <strong className="text-[#24151a]">
                      Subscription Auto-Renewal:
                    </strong>{" "}
                    You may cancel recurring subscriptions at any time at
                    least{" "}
                    <strong className="text-[#24151a]">24 hours before</strong>{" "}
                    the next billing cycle to avoid being charged for the
                    upcoming period. Cancellation stops future billing but
                    does not refund the current active billing cycle.
                  </li>
                </ul>
              </section>

              {/* Section 6 */}
              <section>
                <h2 className="mb-3 text-xl font-semibold text-[#24151a]">
                  6. Tax & Invoice Adjustments
                </h2>

                <ul className="list-disc pl-6">
                  <li>
                    As a start-up operating within the government-prescribed
                    turnover exemption limit, we do not currently charge GST.
                    GST will be applicable once we cross the statutory revenue
                    threshold.
                  </li>
                </ul>
              </section>

              {/* Section 7 */}
              <section>
                <h2 className="mb-3 text-xl font-semibold text-[#24151a]">
                  7. Billing Support Contact
                </h2>

                <p>
                  For any payment, invoice, or refund inquiries, contact:
                </p>

                <div className="mt-4 rounded-2xl bg-[#f8f5f6] p-5">
                  <p className="font-semibold text-[#24151a]">
                    Billing & Admin Support
                  </p>

                  <p className="mt-1">
                    Siva Sakthi Staffing Solutions
                  </p>

                  <p className="mt-2">
                    <strong className="text-[#24151a]">Email:</strong>{" "}
                    <a
                      href="mailto:support@kanchipuramjobs.in"
                      className="font-medium text-[#AC1E44] hover:underline"
                    >
                      support@kanchipuramjobs.in
                    </a>
                  </p>

                  <p className="mt-1">
                    <strong className="text-[#24151a]">
                      Support Hours:
                    </strong>{" "}
                    Monday to Friday, 10:00 AM – 5:00 PM IST
                  </p>
                </div>
              </section>

            </div>

            {/* Back Link */}
          

          </div>
        </div>
        </MotionReveal>
      </main>

      <Footer />
    </>
  );
}
