"use client";

import Image from "next/image";
import { useState } from "react";
import { blogPosts } from "@/config/blog-posts";

const TOTAL_PAGES = 4;

function BlogCard({ post }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#e2e8f0] bg-white">
      <div className="rounded-t-2xl bg-[var(--header-navy)] p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <p className="min-w-0 flex-1 text-sm font-semibold leading-snug text-white">
            {post.title}
          </p>
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-lg border-2 border-[#2daa5a] bg-white sm:h-16 sm:w-16">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              sizes="64px"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="relative flex flex-1 flex-col px-4 py-4 sm:px-5 sm:py-5">
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 top-0 opacity-35"
          style={{
            backgroundImage:
              "radial-gradient(circle, #d4e3ef 1px, transparent 1px)",
            backgroundSize: "10px 10px",
          }}
          aria-hidden="true"
        />

        <div className="relative flex flex-1 flex-col">
          <h3 className="text-[clamp(0.9375rem,1.5vw,1.0625rem)] font-bold leading-snug text-[var(--header-navy)]">
            {post.title}
          </h3>

          <p className="mt-3 text-sm text-[var(--muted-foreground)]">
            <span className="text-[#2daa5a]">Blog</span>
            <span aria-hidden="true"> · </span>
            <span>By {post.author}</span>
          </p>
        </div>
      </div>
    </article>
  );
}

export default function BlogSection() {
  const [activePage, setActivePage] = useState(1);

  return (
    <section
      className="w-full min-w-0 py-10 sm:py-12 lg:py-14"
      aria-labelledby="blog-heading"
    >
      <h1
        id="blog-heading"
        className="text-center text-[clamp(1.25rem,2.5vw,1.75rem)] font-bold leading-snug text-[var(--header-navy)]"
      >
        Insights that keep your business moving
      </h1>

      <div className="mt-8 sm:mt-10">
        {Array.from({ length: TOTAL_PAGES }).map((_, pageIndex) => {
          const pageNumber = pageIndex + 1;
          const isActive = activePage === pageNumber;

          return (
            <div
              key={`blog-page-${pageNumber}`}
              className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-5"
              hidden={!isActive}
              aria-hidden={!isActive || undefined}
            >
              {blogPosts.map((post) => (
                <BlogCard key={`${post.id}-page-${pageNumber}`} post={post} />
              ))}
            </div>
          );
        })}
      </div>

      <nav
        className="mt-8 flex items-center justify-center gap-2 sm:mt-10"
        aria-label="Blog pagination"
      >
        {Array.from({ length: TOTAL_PAGES }).map((_, pageIndex) => {
          const pageNumber = pageIndex + 1;
          const isActive = activePage === pageNumber;

          return (
            <button
              key={`blog-pagination-${pageNumber}`}
              type="button"
              onClick={() => setActivePage(pageNumber)}
              aria-label={`Go to page ${pageNumber}`}
              aria-current={isActive ? "page" : undefined}
              className={`inline-flex h-9 w-9 items-center justify-center rounded-lg text-sm font-semibold transition-colors ${
                isActive
                  ? "bg-[var(--header-navy)] text-white"
                  : "border border-[#e2e8f0] bg-white text-[var(--header-navy)]"
              }`}
            >
              {pageNumber}
            </button>
          );
        })}
      </nav>
    </section>
  );
}
