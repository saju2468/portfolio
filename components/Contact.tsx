"use client";

import React, { useState, FormEvent, ChangeEvent, useRef, useCallback, memo, useMemo } from "react";
import { Mail, Send, CheckCircle2, Loader2, AlertCircle, MapPin, Globe, MessageSquare, Zap, Cpu } from "lucide-react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FadeIn } from "./FadeIn";
import { Magnetic } from "./Magnetic";
import { Button } from "./Button";

// --- Types ---

interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormState, string>>;

// --- Constants ---

const SOCIAL_LINKS = [
  { icon: <Zap className="w-5 h-5" />, label: "GitHub", href: "https://github.com/sajin77", id: "01" },
  { icon: <Cpu className="w-5 h-5" />, label: "LinkedIn", href: "https://linkedin.com/in/sajin-pp", id: "02" },
  // { icon: <MessageSquare className="w-5 h-5" />, label: "Twitter", href: "#", id: "03" },
  // { icon: <Globe className="w-5 h-5" />, label: "Dribbble", href: "#", id: "04" },
];

const ERROR_MESSAGES = {
  name: "ID_REQUIRED",
  email_required: "COMMS_REQUIRED",
  email_invalid: "MALFORMED_ADDR",
  subject: "PROTOCOL_MISSING",
  message: "DATA_INSUFFICIENT",
};

// --- Custom Hooks ---

/**
 * Manages contact form state, validation, and submission logic.
 */
const useContactForm = () => {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = useCallback((): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.name.trim()) newErrors.name = ERROR_MESSAGES.name;

    if (!formData.email.trim()) {
      newErrors.email = ERROR_MESSAGES.email_required;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = ERROR_MESSAGES.email_invalid;
    }

    if (!formData.subject.trim()) newErrors.subject = ERROR_MESSAGES.subject;

    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = ERROR_MESSAGES.message;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData]);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for the field being edited
    setErrors(prev => ({ ...prev, [name]: undefined }));
  }, []);

  const resetForm = useCallback(() => {
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSuccess(false);
  }, []);

  const handleSubmit = useCallback(async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      // Simulate API call (replace with actual backend endpoint if needed)
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSuccess(true);
      setTimeout(resetForm, 4000);
    } catch (err) {
      console.error("Submission failed", err);
    } finally {
      setIsSubmitting(false);
    }
  }, [validate, resetForm]);

  return { formData, errors, isSubmitting, isSuccess, handleChange, handleSubmit };
};

// --- Sub-components ---

/**
 * A highly interactive input field with animated labels and validation feedback.
 */
const ModernInput = memo(({
  id,
  name,
  label,
  type = "text",
  value,
  error,
  isSubmitting,
  onChange,
  onFocus,
  onBlur,
  isFocused,
  isTextArea = false
}: {
  id: string;
  name: keyof FormState;
  label: string;
  type?: string;
  value: string;
  error?: string;
  isSubmitting: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onFocus: () => void;
  onBlur: () => void;
  isFocused: boolean;
  isTextArea?: boolean;
}) => {
  const hasValue = value.length > 0;
  const errorId = `${id}-error`;

  return (
    <div className="flex flex-col gap-2 relative w-full group">
      <div className={`relative transition-all duration-700 ${isFocused ? 'opacity-100' : 'opacity-80'}`}>
        <label
          htmlFor={id}
          className={`absolute left-0 transition-all duration-500 pointer-events-none font-mono uppercase tracking-[0.2em]
            ${(isFocused || hasValue)
              ? '-top-6 text-[10px] text-accent'
              : 'top-4 text-xs opacity-40'}
          `}
        >
          {label}
        </label>

        <div className="relative overflow-hidden pt-4 pb-2">
          {isTextArea ? (
            <textarea
              id={id}
              name={name}
              value={value}
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              disabled={isSubmitting}
              rows={4}
              placeholder=" "
              aria-invalid={!!error}
              aria-describedby={error ? errorId : undefined}
              className="w-full bg-transparent outline-none text-lg font-medium tracking-tight resize-none placeholder:opacity-0 disabled:opacity-50 min-h-[120px] transition-all duration-300"
            />
          ) : (
            <input
              id={id}
              name={name}
              type={type}
              value={value}
              onChange={onChange}
              onFocus={onFocus}
              onBlur={onBlur}
              disabled={isSubmitting}
              placeholder=" "
              aria-invalid={!!error}
              aria-describedby={error ? errorId : undefined}
              className="w-full bg-transparent outline-none text-lg font-medium tracking-tight placeholder:opacity-0 disabled:opacity-50 transition-all duration-300"
            />
          )}

          {/* Animated underline */}
          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-foreground/10" />
          <motion.div
            initial={false}
            animate={{
              width: isFocused ? "100%" : "0%",
              backgroundColor: error ? "#ef4444" : "var(--accent)"
            }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-0 left-0 h-[1.5px] z-10"
          />
        </div>
      </div>

      <AnimatePresence>
        {error && (
          <motion.div
            id={errorId}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="flex items-center gap-2 text-red-500"
            role="alert"
          >
            <AlertCircle className="w-3 h-3" />
            <span className="text-[10px] font-mono uppercase tracking-widest">{error}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

/**
 * Social media link card with magnetic interaction.
 */
const SocialLinkItem = memo(({ link, index }: { link: typeof SOCIAL_LINKS[0], index: number }) => (
  <FadeIn delay={0.4 + index * 0.1}>
    <Magnetic strength={0.2}>
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Visit my ${link.label}`}
        className="group flex flex-col gap-3 p-6 rounded-2xl bg-foreground/5 border border-transparent hover:border-accent/20 hover:bg-accent/5 transition-all duration-500"
      >
        <div className="flex justify-between items-center">
          <div className="opacity-40 group-hover:opacity-100 group-hover:text-accent transition-all">
            {link.icon}
          </div>
          <span className="text-[10px] font-mono opacity-20 group-hover:opacity-100" aria-hidden="true">{link.id}</span>
        </div>
        <span className="text-sm font-bold uppercase tracking-widest group-hover:text-accent transition-colors">
          {link.label}
        </span>
      </a>
    </Magnetic>
  </FadeIn>
));

export function Contact() {
  const { formData, errors, isSubmitting, isSuccess, handleChange, handleSubmit } = useContactForm();
  const [focusedField, setFocusedField] = useState<keyof FormState | null>(null);

  // Optimized Mouse Spotlight tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback(({ clientX, clientY }: React.MouseEvent) => {
    if (!containerRef.current) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }, [mouseX, mouseY]);

  const spotlightBg = useTransform(
    [mouseX, mouseY],
    ([x, y]) => `radial-gradient(600px circle at ${x}px ${y}px, rgba(255, 77, 0, 0.08), transparent 80%)`
  );

  return (
    <section id="contact" className="px-6 md:px-24 py-32 md:py-64 bg-background relative overflow-hidden border-t border-grid-line/50">
      {/* Decorative Grid */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-[0.03] dark:opacity-[0.05]"
        style={{ backgroundImage: `radial-gradient(var(--foreground) 1px, transparent 0)`, backgroundSize: '40px 40px' }}
        aria-hidden="true"
      />

      <div className="max-w-[1600px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 xl:gap-24">

          {/* Info Column */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <FadeIn delay={0.1}>
                <div className="flex flex-col gap-6">
                  <div className="technical-label flex items-center gap-4" aria-hidden="true">
                    <span className="w-12 h-[1px] bg-accent" />
                    <span className="text-accent">ESTABLISH_UPLINK</span>
                  </div>
                  <h2 className="text-7xl sm:text-8xl md:text-9xl xl:text-[11rem] font-black tracking-tighter uppercase leading-[0.8] mb-12">
                    Let&apos;s<br />
                    <span className="text-accent italic">Create.</span>
                  </h2>
                </div>
              </FadeIn>

              <FadeIn delay={0.2}>
                <p className="text-2xl md:text-3xl font-medium opacity-60 max-w-xl leading-snug tracking-tight mb-20">
                  Currently open for strategic partnerships and high-impact digital ventures.
                </p>
              </FadeIn>
            </div>

            <div className="flex flex-col gap-16">
              <FadeIn delay={0.3}>
                <div className="flex flex-col gap-4">
                  <span className="technical-label opacity-40" aria-hidden="true">PRIMARY_NODE</span>
                  <a href="mailto:sajinpp77@gmail.com" className="group flex items-center gap-4 w-fit" aria-label="Send an email to sajinpp77@gmail.com">
                    <span className="text-2xl md:text-4xl font-bold tracking-tighter group-hover:text-accent transition-colors">
                      sajinpp77@gmail.com
                    </span>
                    <div className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center group-hover:border-accent group-hover:bg-accent/5 transition-all">
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </div>
                  </a>
                </div>
              </FadeIn>

              <div className="grid grid-cols-2 gap-8">
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
                  className="absolute inset-0 pointer-events-none rounded-[2rem] z-0 transition-opacity duration-500 opacity-0 group-hover/form:opacity-100"
                  style={{ background: spotlightBg }}
                  aria-hidden="true"
                />

                <div className="relative z-10 bg-white/5 dark:bg-foreground/[0.02] backdrop-blur-3xl border border-foreground/5 p-8 md:p-16 rounded-[2rem] overflow-hidden shadow-2xl shadow-black/5">
                  <div className="flex justify-between items-start mb-16">
                    <div>
                      <h3 className="text-2xl font-bold uppercase tracking-tight mb-2">Initialize Protocol</h3>
                      <p className="text-sm opacity-40 font-mono" aria-hidden="true">ENCRYPTION: AES-256-GCM</p>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20" role="status" aria-label="System status: nominal">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-[10px] font-bold text-green-500 uppercase tracking-widest">Live_Status: Nominal</span>
                    </div>
                  </div>

                  <form className="flex flex-col gap-12" onSubmit={handleSubmit} noValidate>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
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

                    <div className="pt-6">
                      <Button
                        type="submit"
                        disabled={isSubmitting || isSuccess}
                        className={`
                          relative w-full py-8 rounded-2xl font-black text-xl uppercase tracking-[0.3em] transition-all duration-700 overflow-hidden
                          ${isSuccess
                            ? 'bg-green-500! text-white! shadow-lg shadow-green-500/30'
                            : ''}
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
                <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-accent/10 blur-[100px] rounded-full pointer-events-none" aria-hidden="true" />
                <div className="absolute -top-12 -left-12 w-64 h-64 bg-accent/5 blur-[100px] rounded-full pointer-events-none" aria-hidden="true" />
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

