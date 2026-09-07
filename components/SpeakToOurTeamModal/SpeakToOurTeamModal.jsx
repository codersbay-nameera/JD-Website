"use client";

import { useCallback, useEffect, useState } from "react";

const initialFormState = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  company: "",
  message: "",
};

const fieldClassName =
  "h-11 w-full rounded-lg border border-[#DCE2E7] bg-white px-4 text-sm text-[var(--header-navy)] outline-none";
const labelClassName = "text-sm font-medium text-[var(--header-navy)]";

async function submitDemoBooking(formData) {
  const baseUrl = process.env.NEXT_PUBLIC_BACKEND_BASE_URL;

  if (!baseUrl) {
    throw new Error("Backend URL is not configured.");
  }

  const response = await fetch(`${baseUrl}/api/demo-bookings`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      source: "website",
      message: formData.message,
    }),
  });

  const data = await response.json().catch(() => null);

  if (!response.ok) {
    throw new Error(data?.message || "Something went wrong. Please try again.");
  }

  return data;
}

function CloseIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M5 5L15 15M15 5L5 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function SpeakToOurTeamModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const resetFormState = useCallback(() => {
    setFormData(initialFormState);
    setSubmitStatus(null);
    setErrorMessage("");
  }, []);

  const handleClose = useCallback(() => {
    if (isSubmitting) {
      return;
    }

    onClose();
    resetFormState();
  }, [isSubmitting, onClose, resetFormState]);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("keydown", handleEscape);
    };
  }, [handleClose, isOpen]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    if (
      !formData.firstName.trim() ||
      !formData.email.trim() ||
      !formData.phone.trim()
    ) {
      setSubmitStatus("error");
      setErrorMessage("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);
    setErrorMessage("");

    try {
      await submitDemoBooking(formData);
      setSubmitStatus("success");
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="speak-to-team-modal-title"
    >
      <div
        className="absolute inset-0 bg-[#0b2140]/50"
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-[560px] overflow-hidden rounded-[30px] border border-[#DCE2E7] bg-white p-6 sm:p-8">
        <button
          type="button"
          onClick={handleClose}
          disabled={isSubmitting}
          className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-lg text-[var(--header-navy)] disabled:opacity-50"
          aria-label="Close modal"
        >
          <CloseIcon />
        </button>

        <h2
          id="speak-to-team-modal-title"
          className="pr-10 text-xl font-semibold text-[var(--header-navy)]"
        >
          Speak to Our Team
        </h2>

        {submitStatus === "success" ? (
          <div className="mt-6">
            <p className="text-sm leading-relaxed text-[var(--header-navy)]">
              Thank you. Your request has been submitted successfully. Our team
              will get back to you soon.
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="mt-6 inline-flex min-h-11 items-center justify-center rounded-lg border border-[var(--header-navy)] bg-[var(--header-navy)] px-5 text-sm font-semibold text-white"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-5" noValidate>
            <div>
              <p className={labelClassName}>Name *</p>
              <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <input
                  id="speak-to-team-first-name"
                  name="firstName"
                  type="text"
                  required
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={fieldClassName}
                />
                <input
                  id="speak-to-team-last-name"
                  name="lastName"
                  type="text"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={fieldClassName}
                />
              </div>
            </div>

            <div>
              <label htmlFor="speak-to-team-email" className={labelClassName}>
                Email *
              </label>
              <input
                id="speak-to-team-email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                className={`mt-2 ${fieldClassName}`}
              />
            </div>

            <div>
              <label htmlFor="speak-to-team-phone" className={labelClassName}>
                Phone *
              </label>
              <input
                id="speak-to-team-phone"
                name="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={handleChange}
                className={`mt-2 ${fieldClassName}`}
              />
            </div>

            <div>
              <label htmlFor="speak-to-team-company" className={labelClassName}>
                Company
              </label>
              <input
                id="speak-to-team-company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                className={`mt-2 ${fieldClassName}`}
              />
            </div>

            <div>
              <label htmlFor="speak-to-team-message" className={labelClassName}>
                Message
              </label>
              <textarea
                id="speak-to-team-message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                className="mt-2 min-h-[140px] w-full rounded-lg border border-[#DCE2E7] bg-white px-4 py-3 text-sm text-[var(--header-navy)] outline-none"
              />
            </div>

            {submitStatus === "error" ? (
              <p className="text-sm text-red-600" role="alert">
                {errorMessage}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex min-h-11 w-full items-center justify-center rounded-lg border border-[var(--header-navy)] bg-[var(--header-navy)] px-5 text-sm font-semibold text-white disabled:opacity-50 sm:w-auto"
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
