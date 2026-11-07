"use client";

import React, { useRef, useCallback } from "react";
import {
  Send,
  CheckCircle2,
  Loader2,
  AlertCircle,
} from "lucide-react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { FadeIn } from "./FadeIn";
import { Button } from "./Button";
import { ModernInput } from "./ModernInput";
import { SocialLinkItem } from "./SocialLinkItem";
import { useContactForm } from "@/hooks/useContactForm";
import { GithubIcon, LinkedinIcon } from "./icons/SocialIcons";

// --- Constants ---

const SOCIAL_LINKS = [
  {
    icon: <GithubIcon className="w-5 h-5" />,
    label: "GitHub",
    href: "https://github.com/saju2468",
    id: "01",
  },
  {
    icon: <LinkedinIcon className="w-5 h-5" />,
    label: "LinkedIn",
    href: "https://linkedin.com/in/sajinpp77",
    id: "02",
  },
];

export function Contact() {
  const {
    formData,
    errors,
    isSubmitting,
    isSuccess,
    submitError,
    focusedField,
    setFocusedField,
    handleChange,
    handleSubmit,
  } = useContactForm();

  // Optimized Mouse Spotlight tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(
    ({ clientX, clientY }: React.MouseEvent) => {
      if (!containerRef.current) return;
      const { left, top } = containerRef.current.getBoundingClientRect();
      mouseX.set(clientX - left);
      mouseY.set(clientY - top);
    },
    [mouseX, mouseY],
  );

  const spotlightBg = useTransform(
    [mouseX, mouseY],
    ([x, y]) =>
      `radial-gradient(600px circle at ${x}px ${y}px, rgba(255, 77, 0, 0.08), transparent 80%)`,
  );

  return (
    <section
      id="contact"
      className="px-6 md:px-24 py-12 md:py-48 bg-background relative overflow-hidden border-t border-grid-line/50"
    >
      {/* Decorative Grid */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.05] light:opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(var(--foreground) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
        aria-hidden="true"
      />

      <div className="max-w-400 mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 xl:gap-24">
          {/* Info Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <FadeIn delay={0.1}>
                <div className="flex flex-col gap-4 md:gap-6">
                  <div
                    className="technical-label flex items-center gap-4"
                    aria-hidden="true"
                  >
                    <span className="w-12 h-px bg-accent" />
                    <span className="text-accent">ESTABLISH_UPLINK</span>
                  </div>
                  <h2 className="text-5xl sm:text-7xl md:text-8xl 2xl:text-[11rem] font-black tracking-tighter uppercase leading-[0.85] mb-6 md:mb-12">
                    Let&apos;s
                    <br />
                    <span className="text-accent italic">Create.</span>
                  </h2>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-xl sm:text-2xl md:text-3xl font-medium text-muted light:text-neutral-800 max-w-xl leading-snug tracking-tight mb-8 md:mb-20">
                  Currently open for strategic partnerships and high-impact
                  digital ventures.
                </p>
              </FadeIn>
            </div>

            <div className="flex flex-col gap-8 md:gap-16">
              <FadeIn delay={0.3}>
                <div className="flex flex-col gap-3 md:gap-4">
                  <span
                    className="technical-label text-muted! light:text-neutral-700! font-bold!"
                    aria-hidden="true"
                  >
                    PRIMARY_NODE
                  </span>
                  <a
                    href="mailto:sajinpp77@gmail.com"
                    className="group flex items-center gap-4 w-fit"
                    aria-label="Send an email to sajinpp77@gmail.com"
                  >
                    <span className="text-xl sm:text-2xl md:text-4xl font-bold tracking-tighter group-hover:text-accent transition-colors">
                      sajinpp77@gmail.com
                    </span>
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-card-border bg-card flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-all">
                      <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </a>
                </div>
              </FadeIn>

              <div className="grid grid-cols-2 gap-3 sm:gap-8">
                {SOCIAL_LINKS.map((link, i) => (
                  <SocialLinkItem key={link.label} link={link} index={i} />
                ))}
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="lg:col-span-7">
            <FadeIn delay={0.5}>
              <div
                ref={containerRef}
                onMouseMove={handleMouseMove}
                className="relative group/form"
              >
                {/* Spotlight Interaction */}
                <motion.div
                  className="absolute inset-0 pointer-events-none rounded-4xl z-0 transition-opacity duration-500 opacity-0 group-hover/form:opacity-100"
                  style={{ background: spotlightBg }}
                  aria-hidden="true"
                />

                <div className="relative z-10 bg-card border border-card-border shadow-xl light:shadow-2xl light:shadow-black/10 p-5 sm:p-8 md:p-16 rounded-2xl md:rounded-4xl overflow-hidden">
                  <div className="flex justify-between items-start mb-6 md:mb-16">
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight mb-1 md:mb-2 text-foreground">
                        Initialize Protocol
                      </h3>
                      <p
                        className="text-[10px] sm:text-xs font-mono font-bold text-muted light:text-neutral-700 uppercase tracking-wider"
                        aria-hidden="true"
                      >
                        ENCRYPTION: AES-256-GCM
                      </p>
                    </div>
                    <div
                      className="items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 light:bg-green-500/15 light:border-green-600/30 hidden sm:flex"
                      role="status"
                      aria-label="System status: nominal"
                    >
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[10px] font-bold text-green-600 light:text-green-800 uppercase tracking-widest">
                        Live_Status: Nominal
                      </span>
                    </div>
                  </div>

                  <form
                    className="flex flex-col gap-8 md:gap-12"
                    onSubmit={handleSubmit}
                    noValidate
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                      <ModernInput
                        id="name"
                        name="name"
                        label="Identity / Name"
                        value={formData.name}
                        error={errors.name}
                        isSubmitting={isSubmitting || isSuccess}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("name")}
                        onBlur={() => setFocusedField(null)}
                        isFocused={focusedField === "name"}
                      />
                      <ModernInput
                        id="email"
                        name="email"
                        label="Channel / Email"
                        type="email"
                        value={formData.email}
                        error={errors.email}
                        isSubmitting={isSubmitting || isSuccess}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        isFocused={focusedField === "email"}
                      />
                    </div>

                    <ModernInput
                      id="subject"
                      name="subject"
                      label="Manifest / Subject"
                      value={formData.subject}
                      error={errors.subject}
                      isSubmitting={isSubmitting || isSuccess}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("subject")}
                      onBlur={() => setFocusedField(null)}
                      isFocused={focusedField === "subject"}
                    />

                    <ModernInput
                      id="message"
                      name="message"
                      label="Payload / Message"
                      value={formData.message}
                      error={errors.message}
                      isSubmitting={isSubmitting || isSuccess}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      isFocused={focusedField === "message"}
                      isTextArea
                    />

                    <div className="pt-4 md:pt-6 flex flex-col gap-4">
                      {submitError && (
                        <div
                          className="flex items-center gap-2 p-3 bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-mono uppercase tracking-wider rounded-lg"
                          role="alert"
                        >
                          <AlertCircle className="w-4 h-4 shrink-0" />
                          <span>Transmission error: {submitError}</span>
                        </div>
                      )}
                      <Button
                        type="submit"
                        disabled={isSubmitting || isSuccess}
                        className={`
                          relative w-full py-4 sm:py-5 md:py-8 rounded-xl md:rounded-2xl font-black text-sm sm:text-base md:text-xl uppercase tracking-[0.2em] md:tracking-[0.3em] transition-all duration-700 overflow-hidden
                          ${
                            isSuccess
                              ? "bg-green-500! text-white! shadow-lg shadow-green-500/30"
                              : ""
                          }
                        `}
                        aria-live="polite"
                        aria-busy={isSubmitting}
                      >
                        <AnimatePresence mode="wait">
                          {isSubmitting ? (
                            <motion.div
                              key="loading"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -20 }}
                              className="flex items-center justify-center gap-4"
                            >
                              <Loader2 className="w-6 h-6 animate-spin" />
                              <span>Processing_</span>
                            </motion.div>
                          ) : isSuccess ? (
                            <motion.div
                              key="success"
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 1.1 }}
                              className="flex items-center justify-center gap-4"
                            >
                              <CheckCircle2 className="w-6 h-6" />
                              <span>Data_Synced</span>
                            </motion.div>
                          ) : (
                            <motion.div
                              key="idle"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -20 }}
                              className="flex items-center justify-center gap-4"
                            >
                              <span>Transmit_Data</span>
                              <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </Button>
                    </div>
                  </form>
                </div>

                {/* Background Blobs */}
                <div
                  className="absolute -bottom-12 -right-12 w-64 h-64 bg-accent/10 blur-[100px] rounded-full pointer-events-none"
                  aria-hidden="true"
                />
                <div
                  className="absolute -top-12 -left-12 w-64 h-64 bg-accent/5 blur-[100px] rounded-full pointer-events-none"
                  aria-hidden="true"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
