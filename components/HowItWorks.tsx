"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import image from "@/app/assets/HowtoWorkimages/image.png";
import image1 from "@/app/assets/HowtoWorkimages/image1.png";
import image4 from "@/app/assets/HowtoWorkimages/image4.png";
import image5 from "@/app/assets/Recutier/image6.png";

const steps: { title: string; description: string; image: StaticImageData }[] =
  [
    {
      title: "Choose your path",
      description:
        "Select Job Seeker to find work or Recruiter to build your team.",
      image: image1,
    },
    {
      title: "Job seekers find and apply",
      description:
        "Search verified local jobs, review the details, and apply from your profile.",
      image: image,
    },
    {
      title: "Recruiters post and review",
      description:
        "Publish openings, discover relevant candidates, and manage applications in one place.",
      image: image4,
    },
    {
      title: "Keep everything on track",
      description:
        "Job seekers follow application updates while recruiters move the right candidates forward.",
      image: image5,
    },
  ];

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const active = steps[activeStep];

  useEffect(() => {
    const timer = window.setInterval(
      () => setActiveStep((step) => (step + 1) % steps.length),
      3500,
    );
    return () => window.clearInterval(timer);
  }, [activeStep]); // restart the timer when the user clicks a step

  return (
    <section
      className="border-t border-[#dfe2e0] bg-[#f7f8f7] py-24 sm:py-32"
      id="how-it-works"
    >
      <div className="mx-auto grid w-[calc(100%-2rem)] max-w-[1200px] grid-cols-1 items-center gap-12 md:w-[calc(100%-4.5rem)] md:grid-cols-[minmax(0,522px)_minmax(0,1fr)] md:gap-16 xl:gap-[232px]">
        {/* Card */}
        <motion.div
          className="relative grid h-[560px] place-items-center overflow-hidden rounded-[20px] bg-gradient-to-br from-[#1b1a17] via-[#0d0d0c] to-[#050505] sm:h-[566px]"
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/Kanchipuram-working.png"
            alt=""
            fill
            aria-hidden="true"
            className="object-cover object-center opacity-70"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-br from-black/75 via-black/45 to-[#ac1e44]/60"
          />


          {/* Phone: centered, padded, never cropped */}
          <div className="absolute inset-0 z-10 flex items-center justify-center px-2 pt-2 pb-10 sm:px-8 sm:pt-6 sm:pb-24">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.96 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="flex h-full w-full items-center justify-center"
              >
                <Image
                  src={steps[activeStep].image}
                  alt={steps[activeStep].title}
                  width={steps[activeStep].image.width}
                  height={steps[activeStep].image.height}
                 className="block h-auto w-auto max-h-[92%] max-w-[92%] scale-100 object-contain object-center"
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation dots - separate from image */}
          <div
            aria-label="How it works slides"
            className="absolute bottom-7 left-1/2 z-30 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-black/40 px-3 py-2 backdrop-blur-sm"
          >
            {steps.map((step, index) => (
              <button
                key={step.title}
                type="button"
                onClick={() => setActiveStep(index)}
                aria-label={`Show step ${index + 1}: ${step.title}`}
                aria-current={index === activeStep ? "true" : undefined}
                className="flex h-3 items-center justify-center"
              >
                <motion.span
                  animate={{
                    width: index === activeStep ? 20 : 6,
                    opacity: index === activeStep ? 1 : 0.45,
                  }}
                  className="block h-1.5 rounded-full bg-white"
                />
              </button>
            ))}
          </div>
          <motion.div
            aria-hidden="true"
            className="absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 gap-1.5 rounded-full bg-black/30 px-3 py-2 backdrop-blur-sm"
          >
            {steps.map((step, index) => (
              <motion.span
                key={step.title}
                animate={{
                  width: index === activeStep ? 20 : 6,
                  opacity: index === activeStep ? 1 : 0.45,
                }}
                className="h-1.5 rounded-full bg-white"
              />
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="mb-7 text-4xl leading-none tracking-[-1.5px] text-teal-700">
            How it works
          </h2>
          <p className="mb-10 max-w-[520px] text-sm leading-[1.45] text-[#765361]">
            One simple platform for people looking for their next opportunity
            and businesses looking for the right people.
          </p>
          <div className="border-t border-[#c9d8cc]">
            {steps.map((step, index) => {
              const isActive = index === activeStep;
              return (
                <motion.button
                  key={step.title}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  whileHover={{ x: 6 }}
                  whileTap={{ scale: 0.99 }}
                  className="group flex w-full cursor-pointer gap-[22px] border-b border-[#c9d8cc] bg-transparent py-6 text-left text-[13px] leading-[1.4]"
                >
                  <small
                    className={`grid h-[30px] w-[30px] min-w-[30px] place-items-center rounded-full text-base text-white transition-colors duration-300 ${
                      isActive ? "bg-[#c91643]" : "bg-[#d9d9d9]"
                    }`}
                  >
                    {index + 1}
                  </small>
                  <span
                    className={`transition-colors duration-300 ${isActive ? "text-[#765361]" : "text-[#a3a9a5]"}`}
                  >
                    <b
                      className={`text-lg transition-colors duration-300 ${isActive ? "text-[#151515]" : "text-[#8a8f8c]"}`}
                    >
                      {step.title}
                    </b>
                    <br />
                    {step.description}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
