"use client";

import React, { memo, ChangeEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle } from "lucide-react";
import { FormState } from "@/hooks/useContactForm";

export interface ModernInputProps {
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
  rows?: number;
}

/**
 * A highly interactive input field with animated labels, floating underline,
 * and cyberpunk validation feedback.
 */
export const ModernInput = memo(
  ({
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
    isTextArea = false,
    rows = 2,
  }: ModernInputProps) => {
    const hasValue = value.length > 0;
    const errorId = `${id}-error`;

    return (
      <div className="flex flex-col gap-2 relative w-full group">
        <div
          className={`relative transition-all duration-700 ${
            isFocused ? "opacity-100" : "opacity-80"
          }`}
        >
          <label
            htmlFor={id}
            className={`absolute left-0 transition-all duration-500 pointer-events-none font-mono uppercase tracking-[0.2em] ${
              isFocused || hasValue
                ? "-top-6 text-[10px] text-accent"
                : "top-4 text-xs opacity-40"
            }`}
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
                rows={rows}
                placeholder=" "
                aria-invalid={!!error}
                aria-describedby={error ? errorId : undefined}
                className="w-full bg-transparent outline-none text-base md:text-lg font-medium tracking-tight resize-none placeholder:opacity-0 disabled:opacity-50 min-h-[56px] md:min-h-[120px] transition-all duration-300"
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
                className="w-full bg-transparent outline-none text-base md:text-lg font-medium tracking-tight placeholder:opacity-0 disabled:opacity-50 transition-all duration-300"
              />
            )}

            {/* Animated underline */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-foreground/10" />
            <motion.div
              initial={false}
              animate={{
                width: isFocused ? "100%" : "0%",
                backgroundColor: error ? "#ef4444" : "var(--accent)",
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
              <span className="text-[10px] font-mono uppercase tracking-widest">
                {error}
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  },
);

ModernInput.displayName = "ModernInput";
