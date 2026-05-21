import type { ExperienceContent } from "../../data/moriMatchaShowcase";
import ScrollReveal from "../animation/ScrollReveal";

interface ExperienceSectionProps {
  content: ExperienceContent;
}

export default function ExperienceSection({ content }: ExperienceSectionProps) {
  return (
    <section className="mx-auto grid w-full max-w-[1240px] gap-6 px-6 py-16 sm:gap-8 sm:py-24 lg:min-h-[100svh] lg:grid-cols-[1.28fr_0.72fr] lg:items-center lg:px-10">
      <ScrollReveal className="order-2 lg:order-1">
        <img
          src={content.mainImage.src}
          alt={content.mainImage.alt}
          className="motion-image h-[340px] w-full object-cover sm:h-[560px] lg:h-full lg:min-h-[860px]"
          loading="lazy"
        />
      </ScrollReveal>

      <div className="order-1 space-y-8 lg:order-2">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.22em] text-[var(--brand-500)]">{content.eyebrow}</p>
          <h2 className="mt-3 text-4xl font-semibold leading-[0.96] text-[var(--ink)] sm:text-5xl lg:text-6xl">
            {content.headline}
          </h2>
          <p className="mt-4 text-lg leading-8 text-[var(--ink-soft)] sm:mt-5 sm:text-2xl sm:leading-10">{content.copy}</p>
          {content.ctaLabel ? (
            <a
              href={content.ctaHref}
              className="brand-cta mt-8 inline-flex bg-[var(--brand-500)] px-10 py-4 text-2xl font-medium text-white hover:bg-[var(--brand-700)]"
            >
              {content.ctaLabel}
            </a>
          ) : null}
        </ScrollReveal>

        <ScrollReveal delayMs={120} className="hidden lg:block">
          <img
            src={content.sideImage.src}
            alt={content.sideImage.alt}
            className="motion-image h-[260px] w-full object-cover sm:h-[420px]"
            loading="lazy"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
