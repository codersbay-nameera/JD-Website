"use client";

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

export default function CaseStudyCommentForm() {
  return (
    <form
      className="relative overflow-hidden rounded-[30px] border border-[#DCE2E7] bg-white p-6 sm:p-8"
      onSubmit={(event) => event.preventDefault()}
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
          <label htmlFor="case-study-comment" className="sr-only">
            Comment
          </label>
          <textarea
            id="case-study-comment"
            name="comment"
            rows={6}
            placeholder="Type here...."
            className="min-h-[140px] w-full rounded-lg border border-[#DCE2E7] bg-white px-4 py-3 text-sm text-[var(--header-navy)] outline-none"
          />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div>
            <label
              htmlFor="case-study-name"
              className="text-sm font-medium text-[var(--header-navy)]"
            >
              Name*
            </label>
            <input
              id="case-study-name"
              name="name"
              type="text"
              className="mt-2 h-11 w-full rounded-lg border border-[#DCE2E7] bg-white px-4 text-sm text-[var(--header-navy)] outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="case-study-email"
              className="text-sm font-medium text-[var(--header-navy)]"
            >
              Email*
            </label>
            <input
              id="case-study-email"
              name="email"
              type="email"
              className="mt-2 h-11 w-full rounded-lg border border-[#DCE2E7] bg-white px-4 text-sm text-[var(--header-navy)] outline-none"
            />
          </div>
          <div>
            <label
              htmlFor="case-study-website"
              className="text-sm font-medium text-[var(--header-navy)]"
            >
              Website*
            </label>
            <input
              id="case-study-website"
              name="website"
              type="url"
              className="mt-2 h-11 w-full rounded-lg border border-[#DCE2E7] bg-white px-4 text-sm text-[var(--header-navy)] outline-none"
            />
          </div>
        </div>

        <label className="flex items-start gap-3 text-sm leading-relaxed text-[var(--muted-foreground)]">
          <input
            type="checkbox"
            name="saveInfo"
            className="mt-1 h-4 w-4 shrink-0 rounded border-[#DCE2E7]"
          />
          Save my name, email, and website in this browser for the next time I
          comment.
        </label>

        <button
          type="submit"
          className="inline-flex min-h-11 items-center justify-center gap-2 rounded-lg border border-[var(--header-navy)] bg-[var(--header-navy)] px-5 text-sm font-semibold text-white"
        >
          Post Comment
          <ArrowRightIcon />
        </button>
      </div>
    </form>
  );
}
