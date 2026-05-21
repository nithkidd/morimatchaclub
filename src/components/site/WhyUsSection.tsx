import { useState } from "react";
import type { WhyUsContent } from "../../data/moriMatchaShowcase";
import ScrollReveal from "../animation/ScrollReveal";

interface WhyUsSectionProps {
  content: WhyUsContent;
}

export default function WhyUsSection({ content }: WhyUsSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="why-us" className="mx-auto min-h-[100svh] w-full max-w-[1240px] px-6 py-16 sm:py-24 lg:px-10">
      <ScrollReveal className="mx-auto max-w-4xl text-center">
        <p className="text-xs uppercase tracking-[0.22em] text-[var(--brand-500)]">{content.eyebrow}</p>
        <h2 className="mt-4 text-4xl font-semibold leading-[0.97] text-[var(--ink)] sm:text-5xl lg:text-7xl">
          {content.headline}
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-[var(--ink-soft)] sm:mt-5 sm:text-xl sm:leading-8">{content.copy}</p>
      </ScrollReveal>

      <div className="mt-10 grid gap-8 sm:mt-14 sm:gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
        <ScrollReveal className="order-2 lg:order-1">
          <img
            src={content.image.src}
            alt={content.image.alt}
            className="motion-image h-[320px] w-full object-cover sm:h-[520px] lg:h-full lg:min-h-[620px]"
            loading="lazy"
          />
        </ScrollReveal>

        <div className="order-1 border-t border-[var(--line)] lg:order-2">
          {content.items.map((item, index) => {
            const open = activeIndex === index;
            return (
              <article key={item.title} className="border-b border-[var(--line)] py-6 sm:py-8">
                <button
                  type="button"
                  className="flex w-full items-start justify-between gap-8 text-left"
                  onClick={() => setActiveIndex((current) => (current === index ? null : index))}
                  aria-expanded={open}
                  aria-controls={`why-us-panel-${index}`}
                >
                  <h3 className="text-3xl font-medium leading-tight text-[var(--ink)] sm:text-4xl lg:text-[46px]">
                    {item.title}
                  </h3>
                  <span
                    className={`mt-1 inline-flex h-10 w-10 items-center justify-center border text-xl transition-colors duration-300 sm:mt-2 sm:h-11 sm:w-11 sm:text-2xl ${
                      open
                        ? "border-[var(--brand-700)] bg-[var(--brand-700)] text-white"
                        : "border-[var(--line-strong)] text-[var(--ink-soft)]"
                    }`}
                    aria-hidden="true"
                  >
                    {open ? "-" : "+"}
                  </span>
                </button>

                <div
                  id={`why-us-panel-${index}`}
                  className={`grid overflow-hidden transition-all duration-500 ease-out ${
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="mt-4 max-w-xl text-lg leading-8 text-[var(--ink-soft)] sm:mt-6 sm:text-2xl sm:leading-10">{item.copy}</p>
                  </div>
                </div>
              </article>
            );
          })}

          {content.ctaLabel ? (
            <a
              href={content.ctaHref}
              className="brand-cta mt-10 inline-flex bg-[var(--brand-500)] px-10 py-4 text-2xl font-medium text-white hover:bg-[var(--brand-700)]"
            >
              {content.ctaLabel}
            </a>
          ) : null}
        </div>
      </div>
    </section>
  );
}
