"use client";

import { useState, useCallback, ChangeEvent, FormEvent } from "react";

export interface FormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type FormErrors = Partial<Record<keyof FormState, string>>;

export const ERROR_MESSAGES = {
  name: "ID_REQUIRED",
  email_required: "COMMS_REQUIRED",
  email_invalid: "MALFORMED_ADDR",
  subject: "PROTOCOL_MISSING",
  message: "DATA_INSUFFICIENT",
} as const;

export interface UseContactFormReturn {
  formData: FormState;
  errors: FormErrors;
  isSubmitting: boolean;
  isSuccess: boolean;
  submitError: string | null;
  focusedField: keyof FormState | null;
  setFocusedField: (field: keyof FormState | null) => void;
  handleChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: FormEvent) => Promise<void>;
  resetForm: () => void;
}

/**
 * Custom hook that manages contact form state, client-side validation,
 * and asynchronous transmission to the API route handler.
 */
export function useContactForm(): UseContactFormReturn {
  const [formData, setFormData] = useState<FormState>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [focusedField, setFocusedField] = useState<keyof FormState | null>(null);

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

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      setErrors((prev) => ({ ...prev, [name]: undefined }));
      setSubmitError(null);
    },
    []
  );

  const resetForm = useCallback(() => {
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSuccess(false);
    setSubmitError(null);
  }, []);

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      if (!validate()) return;

      setIsSubmitting(true);
      setSubmitError(null);
      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const data = await response.json().catch(() => ({}));

        if (!response.ok) {
          throw new Error(data.error || "TRANSMISSION_FAILED");
        }

        setIsSuccess(true);
        setTimeout(resetForm, 4000);
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : "TRANSMISSION_FAILED";
        console.error("Contact transmission failed:", err);
        setSubmitError(msg);
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData, validate, resetForm]
  );

  return {
    formData,
    errors,
    isSubmitting,
    isSuccess,
    submitError,
    focusedField,
    setFocusedField,
    handleChange,
    handleSubmit,
    resetForm,
  };
}

