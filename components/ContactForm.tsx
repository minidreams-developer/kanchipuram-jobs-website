"use client";

import { FormEvent, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FiCheck, FiMail, FiX } from "react-icons/fi";

type ContactFormProps = { open: boolean; onClose: () => void };

export default function ContactForm({ open, onClose }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!open || !mounted) return null;
  const close = () => { setSubmitted(false); onClose(); };
  const submit = (event: FormEvent<HTMLFormElement>) => { event.preventDefault(); setSubmitted(true); };

  return createPortal(
    (
    <div className="fixed inset-0 z-[70] flex items-center justify-center overflow-y-auto bg-[#24151a]/55 px-4 py-6 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="contact-form-title">
      <div className="relative my-auto max-h-[calc(100vh-3rem)] w-full max-w-lg overflow-y-auto rounded-[28px] bg-white p-6 text-[#24151a] shadow-2xl sm:p-8">
        <button type="button" onClick={close} aria-label="Close contact form" className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-[#fff1f5] text-[#ac1e44]"><FiX size={20} /></button>
        {submitted ? <div className="py-10 text-center"><span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#e8f7ee] text-2xl text-[#218449]"><FiCheck /></span><h2 className="mt-5 text-2xl font-bold">Thank you for reaching out!</h2><p className="mt-3 text-sm leading-6 text-[#68636a]">We have received your message and will get back to you soon.</p><button type="button" onClick={close} className="mt-7 rounded-lg bg-[#ac1e44] px-6 py-3 text-sm font-bold text-white">Close</button></div> : <><div className="mb-6 pr-10"><span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] text-[#ac1e44]"><FiMail /> Contact us</span><h2 id="contact-form-title" className="mt-2 text-2xl font-bold sm:text-3xl">How can we help?</h2><p className="mt-2 text-sm leading-6 text-[#68636a]">Send us a message and our team will connect with you.</p></div><form onSubmit={submit} className="space-y-4"><label className="block text-sm font-semibold">Name<input required name="name" className="mt-2 w-full rounded-xl border border-[#ead9de] px-4 py-3 font-normal outline-none focus:border-[#ac1e44]" placeholder="Your name" /></label><label className="block text-sm font-semibold">Email<input required type="email" name="email" className="mt-2 w-full rounded-xl border border-[#ead9de] px-4 py-3 font-normal outline-none focus:border-[#ac1e44]" placeholder="you@example.com" /></label><label className="block text-sm font-semibold">Message<textarea required name="message" rows={4} className="mt-2 w-full resize-none rounded-xl border border-[#ead9de] px-4 py-3 font-normal outline-none focus:border-[#ac1e44]" placeholder="Tell us how we can help" /></label><button type="submit" className="w-full rounded-xl bg-[#ac1e44] px-5 py-3.5 text-sm font-bold text-white">Send message</button></form></>}
      </div>
    </div>
    ),
    document.body
  );
}
