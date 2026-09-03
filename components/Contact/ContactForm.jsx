"use client";

import { useState } from "react";

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
  notRobot: false,
};

function ArrowRightIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M3.5 8H12.5M12.5 8L9 4.5M12.5 8L9 11.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export async function submitContactForm(formData) {
  // Future API integration point.
  return formData;
}

export default function ContactForm() {
  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await submitContactForm(formData);
  };

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      className="relative overflow-hidden rounded-[30px] border border-[#DCE2E7] bg-white p-6 sm:p-8"
      noValidate
    >
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[55%] opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle, #DCE2E7 0.75px, transparent 0.75px)",
          backgroundSize: "10px 10px",
        }}
        aria-hidden="true"
      />

      <div className="relative space-y-5">
        <div>
          <label
            htmlFor="contact-name"
            className="text-sm font-medium text-[var(--header-navy)]"
          >
            Name*
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            value={formData.name}
            onChange={handleChange}
            className="mt-2 h-11 w-full rounded-lg border border-[#DCE2E7] bg-white px-4 text-sm text-[var(--header-navy)] outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="contact-email"
            className="text-sm font-medium text-[var(--header-navy)]"
          >
            Email*
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-2 h-11 w-full rounded-lg border border-[#DCE2E7] bg-white px-4 text-sm text-[var(--header-navy)] outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="contact-phone"
            className="text-sm font-medium text-[var(--header-navy)]"
          >
            Phone number*
          </label>
          <input
            id="contact-phone"
            name="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={handleChange}
            className="mt-2 h-11 w-full rounded-lg border border-[#DCE2E7] bg-white px-4 text-sm text-[var(--header-navy)] outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="contact-message"
            className="text-sm font-medium text-[var(--header-navy)]"
          >
            Message*
          </label>
          <textarea
            id="contact-message"
            name="message"
            required
            rows={5}
            value={formData.message}
            onChange={handleChange}
            className="mt-2 min-h-[140px] w-full rounded-lg border border-[#DCE2E7] bg-white px-4 py-3 text-sm text-[var(--header-navy)] outline-none"
          />
        </div>

        <label className="flex items-center gap-3 text-sm text-[var(--header-navy)]">
          <input
            type="checkbox"
            name="notRobot"
            checked={formData.notRobot}
            onChange={handleChange}
            className="h-4 w-4 rounded border-[#DCE2E7]"
          />
          I&apos;m not a robot
        </label>

        <button
          type="submit"
          className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-lg border border-[var(--header-navy)] bg-[var(--header-navy)] px-5 text-sm font-semibold text-white sm:w-auto"
        >
          Send Message
          <ArrowRightIcon />
        </button>
      </div>
    </form>
  );
}
