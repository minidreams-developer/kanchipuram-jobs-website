"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";

import recruiterImage from "../app/assets/HowtoWorkimages/image1.png";

/* Shared container styles */
const wrap =
  "mx-auto w-[calc(100%-2rem)] max-w-[1160px] sm:w-[calc(100%-4.5rem)]";

/* Shared heading styles */
const heading =
  "text-4xl leading-tight tracking-[-2px] text-[#24151a] sm:text-5xl sm:leading-none sm:tracking-[-3px]";

/* Job categories */

/* FAQ questions */

const faqs = [
  {
    question: "What is Kanchipuram Jobs?",
    answer:
      "Kanchipuram Jobs is a dedicated local recruitment platform connecting job seekers across Kanchipuram district, including nearby towns, panchayats, and villages, with local businesses. Our mission is to make hiring easier and help the entire community grow together.",
  },
  {
    question: "How do I apply for a job?",
    answer:
      "Simply download the Kanchipuram Jobs app from the Google Play Store, create your profile, browse available job openings that match your skills and qualifications, and apply directly.",
  },
  {
    question: "Is Kanchipuram Jobs free for job seekers?",
    answer:
      "Kanchipuram Jobs is completely free for candidates. We do not charge job seekers any registration fees, application fees, or other charges to explore opportunities and apply for jobs.",
  },
  {
    question: "How can Kanchipuram Jobs help local businesses?",
    answer:
      "We help entrepreneurs and local businesses connect with skilled and reliable candidates from nearby areas, making hiring easier and helping businesses build stronger teams.",
  },
  {
    question: "Can I find jobs near my hometown?",
    answer:
      "Yes! Kanchipuram Jobs focuses on opportunities across Kanchipuram district, including its towns, panchayats, and surrounding villages. Our goal is to connect you with relevant jobs closer to home.",
  },
  {
    question: "Why should I choose Kanchipuram Jobs?",
    answer:
      "We bring local job seekers and employers together in one dedicated platform, making local hiring more accessible, relevant, and convenient for everyone.",
  },
  {
    question: "How does Kanchipuram Jobs solve local hiring problems?",
    answer:
      "Our platform reduces app overload and location mismatches by bringing local job opportunities and candidates together in one place.",
  },
];

/* Reusable animation settings */
const revealAnimation = {
  initial: {
    opacity: 0,
    y: 35,
  },
  whileInView: {
    opacity: 1,
    y: 0,
  },
  viewport: {
    once: true,
    amount: 0.15,
  },
  transition: {
    duration: 0.55,
    ease: [0.22, 1, 0.36, 1] as const,
  },
};

/* --------------------------------------------------
   STATS SECTION
-------------------------------------------------- */

export function Stats() {
  const [publicStats, setPublicStats] = useState<{
    users: number;
    recruiters: number;
    jobs: number;
  } | null>(null);

  useEffect(() => {
    const loadPublicStats = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/admin-dashboard/public-stats`,
        );
        if (!response.ok) return;
        const data = await response.json();
        setPublicStats(data);
      } catch {
        // Keep the stats placeholders when the public API is unavailable.
      }
    };

    loadPublicStats();
  }, []);

  const formatStat = (value: number | undefined) =>
    value === undefined ? "—" : value.toLocaleString("en-IN");

  const statistics = [
    [formatStat(publicStats?.recruiters), "Recruiters", ""],
    [formatStat(publicStats?.users), "Job seekers", ""],
    [formatStat(publicStats?.jobs), "Jobs posted", ""],
    ["4.9", "Community rating", "/5"],
  ];

  return (
    <section className="bg-[#ac1e44] py-8 text-white">
      <div className={`${wrap} grid grid-cols-2 gap-7 md:grid-cols-4`}>
        {statistics.map(([number, label, suffix]) => (
          <div key={label} className="text-center">
            <strong className="text-3xl font-bold sm:text-[32px]">
              {number}
              <span className="text-lg text-[#f3c3d0]">{suffix}</span>
            </strong>

            <small className="mt-1 block text-xs text-[#f1c7d3] sm:text-sm">
              {label}
            </small>
          </div>
        ))}
      </div>
    </section>
  );
}

/* --------------------------------------------------
   WHY SECTION
-------------------------------------------------- */

export function WhySection() {
  const items = [
    "Local opportunities",
    "Trusted recruiters",
    "Clear application tracking",
    "Made for growth",
  ];

  return (
    <section className={`${wrap} py-20 sm:py-24`}>
      <div className="mb-12 text-center">
        <p className="mb-5 text-sm font-extrabold tracking-[2px] text-[#9d536c]">
          WHY KANCHIPURAM JOBS
        </p>

        <h2 className={heading}>
          Built around{" "}
          <em className="font-normal text-[#ac1e44]">real people.</em>
        </h2>

        <p className="mx-auto my-5 max-w-[520px] text-[15px] leading-7 text-[#765361]">
          A local-first platform that brings job seekers and employers closer
          together.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => (
          <motion.article
            key={item}
            {...revealAnimation}
            transition={{
              ...revealAnimation.transition,
              delay: index * 0.1,
            }}
            className="min-h-[190px] rounded-2xl border border-[#ead1d9] bg-[#fffafb] p-6 transition-shadow hover:shadow-lg"
          >
            <span className="text-sm font-bold text-[#ac1e44]">
              0{index + 1}
            </span>

            <h3 className="mt-9 text-lg font-semibold text-[#24151a]">
              {item}
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#896575]">
              Find trusted opportunities and build your next step with
              confidence.
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

/* --------------------------------------------------
   EMPLOYER SECTION
-------------------------------------------------- */

export function EmployerSection() {
  return (
    <section className="py-20 sm:py-24" id="recruiter">
      <div
        className={`${wrap} flex min-h-[380px] flex-col justify-between overflow-hidden rounded-2xl bg-[#ac1e44] p-7 text-white sm:p-10 md:flex-row md:items-center md:p-16`}
      >
        <div className="max-w-[570px]">
          <p className="mb-5 text-sm font-extrabold tracking-[2px] text-[#f3c3d0]">
            FOR LOCAL EMPLOYERS
          </p>

          <h2 className="text-4xl leading-tight tracking-[-2px] sm:text-5xl sm:leading-none sm:tracking-[-3px]">
            Find the people
            <br />
            who make{" "}
            <em className="font-normal text-[#f3c3d0]">things happen.</em>
          </h2>

          <p className="my-6 max-w-[400px] text-[15px] leading-7 text-[#f1c7d3]">
            Complete company verification, choose a plan, post live roles, and
            connect with motivated talent from Kanchipuram.
          </p>

          <a
            className="inline-flex items-center gap-2 rounded-lg bg-[#f3c3d0] px-5 py-3.5 text-sm font-bold text-[#ac1e44] transition hover:bg-white"
            href="#recruiter"
          >
            Start hiring
            <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>

        <div className="relative mt-10 h-[260px] w-full max-w-[300px] self-center overflow-hidden rounded-2xl border border-[#f3c3d0]/30 bg-[#8f1838] md:mt-0 md:h-[320px] md:w-[280px]">
          <Image
            src={recruiterImage}
            alt="Recruiter using Kanchipuram Jobs"
            fill
            sizes="(max-width: 768px) 280px, 300px"
            className="object-contain p-3"
          />
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------
   ABOUT SECTION
-------------------------------------------------- */

export function AboutSection({ aboutUrl }: { aboutUrl: string }) {
  return (
    <section
      className={`${wrap} grid scroll-mt-24 gap-10 border-t border-[#ead9de] py-20 md:grid-cols-2 md:gap-24`}
      id="about"
    >
      <div>
        <p className="mb-5 text-sm font-extrabold tracking-[2px] text-[#9d536c]">
          MADE FOR OUR COMMUNITY
        </p>

        <h2 className={heading}>
          Opportunity
          <br />
          <em className="font-normal text-[#ac1e44]">lives here.</em>
        </h2>
      </div>

      <div>
        <p className="my-5 max-w-[480px] text-[15px] leading-7 text-[#765361]">
          Kanchipuram Jobs brings local talent and local ambition closer
          together. Job seekers can find, apply, and follow opportunities while
          verified recruiters build their teams.
        </p>

        <a
          className="inline-flex items-center gap-2 text-sm font-bold text-[#ac1e44] transition hover:gap-3"
          href={aboutUrl}
        >
          More about us
          <FiArrowUpRight aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}

/* --------------------------------------------------
   TESTIMONIALS SECTION
-------------------------------------------------- */

export function Testimonials() {
  const testimonials = [
    {
      quote:
        "I wish for everyone to benefit and prosper by using this application, which has been specially designed for the people of Kanchipuram.",
      author: "Sri Kamatchi",
      role: "CEO",
      initial: "K",
    },
    {
      quote:
        "Hello, Kanchipuram! This application is very helpful for finding full-time, part-time, or work-from-home opportunities tailored to each person's individual circumstances. Best wishes!",
      author: "Viji Parthiban",
      role: "Homemaker",
      initial: "S",
    },
    {
      quote:
        "Labour shortages are widespread in the food industry, making it very difficult to find local staff. For me and my company—who have long wished for a platform like this Kanchipuram Jobs has proven to be a tremendous help. Kudos to the team behind its design!",
      author: "Jesuraj",
      role: "F&B Manager",
      initial: "S",
    },
    {
      quote:
        "If every town had an app like this, it would be a huge blessing for job-seeking youth like us. Instead of moving away from our families for work, we can find suitable jobs right here in our hometown and lead happy, fulfilling lives.",
      author: "Arun",
      role: "Team leader",
      initial: "A",
    },
    {
      quote:
        "I warmly welcome this application, as it directly addresses labour shortages-one of the biggest challenges faced by small and micro-business owners.",
      author: "Anbil Periyavan",
      role: "Managing Director",
      initial: "V",
    },
    {
      quote:
        "I hope this app serves as a meaningful answer to how Kanchipuram-and its digital community-has often been portrayed on media and social platforms.",
      author: "Vaishnavi",
      role: "Mentor",
      initial: "V",
    },
  ];

  // Duplicate the testimonials to create a seamless infinite loop.
  const scrollingTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="overflow-hidden bg-[#f8e7ec] py-20 sm:py-24">
      <div className={`${wrap} mb-12`}>
        <div className="text-center">
          <p className="mb-5 text-sm font-extrabold tracking-[2px] text-[#9d536c]">
            OUR COMMUNITY SAYS
          </p>

          <h2 className={heading}>
            Small steps.
            <br />
            <em className="font-normal text-[#ac1e44]">Big possibilities.</em>
          </h2>

          <p className="mx-auto mt-5 max-w-[520px] text-[15px] leading-7 text-[#896575]">
            Every connection creates an opportunity. Discover what our community
            thinks about bringing local talent and employers together.
          </p>
        </div>
      </div>

      {/* Infinite Horizontal Testimonial Slider */}
      <div className="testimonial-slider group relative w-full overflow-hidden">
        {/* Left and Right Fade Effects */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#f8e7ec] to-transparent sm:w-28" />

        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#f8e7ec] to-transparent sm:w-28" />

        <div className="testimonial-track flex w-max">
          {scrollingTestimonials.map((testimonial, index) => (
            <article
              key={`${testimonial.author}-${index}`}
              aria-hidden={index >= testimonials.length}
              className="mx-3 flex h-[390px] w-[290px] shrink-0 flex-col rounded-[24px] border border-[#ead1d9] bg-white p-7 shadow-[0_10px_30px_rgba(108,35,58,0.06)] transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_36px_rgba(108,35,58,0.13)] sm:h-[410px] sm:w-[350px] sm:p-8"
            >
              {/* Quote Icon */}
              <div className="mb-6 flex items-center justify-between">
                <span className="text-5xl font-serif leading-none text-[#ac1e44]/25">
                  “
                </span>

                <div className="flex gap-1 text-[#d69a35]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span key={star} aria-hidden="true">
                      ★
                    </span>
                  ))}
                </div>
              </div>

              {/* Testimonial Quote */}
              <p className="h-[190px] overflow-y-auto text-[15px] leading-7 text-[#765361]">
                “{testimonial.quote}”
              </p>

              {/* Person Details */}
              <div className="mt-auto flex min-h-[70px] shrink-0 items-center gap-3 border-t border-[#f0e2e6] pt-5">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#ac1e44] text-lg font-bold text-white">
                  {testimonial.initial}
                </div>

                <div>
                  <h3 className="text-[15px] font-bold text-[#24151a]">
                    {testimonial.author}
                  </h3>

                  <p className="mt-1 text-xs font-medium text-[#9d536c]">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <p className="mt-8 text-center text-xs font-medium tracking-wide text-[#9d536c]">
        Connecting local talent with local opportunities.
      </p>

      {/* Slider Animation */}
      <style jsx>{`
        .testimonial-track {
          animation: testimonial-scroll 45s linear infinite;
          will-change: transform;
        }

        .testimonial-slider:hover .testimonial-track {
          animation-play-state: paused;
        }

        @keyframes testimonial-scroll {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .testimonial-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}

/* --------------------------------------------------
   FAQ SECTION
-------------------------------------------------- */

export function FaqSection() {
  return (
    <section
      className={`${wrap} grid gap-10 py-20 sm:py-24 md:grid-cols-2 md:gap-24`}
    >
      <div>
        <p className="mb-5 text-sm font-extrabold tracking-[2px] text-[#9d536c]">
          HAVE QUESTIONS?
        </p>

        <h2 className={heading}>
          Good
          <em className="font-normal text-[#ac1e44]"> to know.</em>
        </h2>
      </div>

      <div className="border-t border-[#dfb9c5]">
        {faqs.map((faq) => (
          <details
            className="group border-b border-[#dfb9c5] py-5 text-sm font-bold text-[#ac1e44]"
            key={faq.question}
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
              {faq.question}

              <span className="shrink-0 text-xl transition-transform duration-300 group-open:rotate-45">
                +
              </span>
            </summary>

            <p className="mt-4 max-w-[450px] text-sm font-normal leading-7 text-[#896575]">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

/* --------------------------------------------------
   WHY CHOOSE SECTION
-------------------------------------------------- */

export function WhyChooseSection() {
  const items = [
    [
      "✓",
      "Verified Recruiters",
      "Connect with companies that complete KYC verification before posting opportunities.",
    ],
    [
      "⌖",
      "Local Opportunities",
      "Discover genuine jobs across Kanchipuram and nearby districts in one place.",
    ],
    [
      "↗",
      "Apply in One Tap",
      "Use your profile and resume to apply quickly without repeating paperwork.",
    ],
    [
      "◷",
      "Track Every Update",
      "Follow your application from Applied and Screening through Interview or Selected.",
    ],
  ];

  return (
    <section className="why-choose-section py-20 sm:py-24">
      <div className={`${wrap} text-center`}>
        <p className="mb-5 text-sm font-extrabold tracking-[2px] text-[#9d536c]">
          YOUR LOCAL CAREER PLATFORM
        </p>

        <h2 className={heading}>Why Choose Kanchipuram Jobs?</h2>

        <p className="mx-auto mt-5 max-w-[620px] text-[15px] leading-7 text-[#765361]">
          A trusted local platform built to make finding work simpler, safer,
          and more rewarding.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-4 text-center sm:grid-cols-2 lg:mt-20 lg:grid-cols-4">
          {items.map(([icon, title, description], index) => (
            <motion.article
              key={title}
              {...revealAnimation}
              transition={{
                ...revealAnimation.transition,
                delay: index * 0.1,
              }}
              className="why-card"
            >
              <div className="why-icon">{icon}</div>
              <h3>{title}</h3>
              <p>{description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
