import type { HeroContent } from "../../data/moriMatchaShowcase";
import ScrollReveal from "../animation/ScrollReveal";

interface HeroSectionProps {
  content: HeroContent;
}

export default function HeroSection({ content }: HeroSectionProps) {
  return (
    <section className="mx-auto grid min-h-[100svh] w-full max-w-[1240px] items-center gap-6 px-6 pb-16 pt-12 sm:gap-8 sm:pb-20 sm:pt-16 lg:grid-cols-[1fr_1.25fr] lg:px-10 lg:pt-24">
      <ScrollReveal className="flex flex-col justify-center">
        <p className="text-xs uppercase tracking-[0.22em] text-[var(--brand-500)]">
          {content.eyebrow}
        </p>
        <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-[0.96] text-[var(--ink)] sm:text-5xl lg:text-7xl">
          {content.headline}
        </h1>
        <p className="mt-5 max-w-xl text-base leading-7 text-[var(--ink-soft)] sm:mt-6 sm:text-lg sm:leading-8">
          {content.copy}
        </p>
        <div className="mt-10">
          <a
            id="order"
            href={content.ctaHref}
            target="_blank"
            rel="noreferrer"
            className="brand-cta inline-flex bg-[var(--brand-500)] px-8 py-4 text-xl font-medium text-white hover:bg-[var(--brand-700)]"
          >
            {content.ctaLabel}
          </a>
        </div>
      </ScrollReveal>
      <ScrollReveal delayMs={120}>
        <img
          src={content.heroImage.src}
          alt={content.heroImage.alt}
          className="motion-image h-[320px] w-full object-cover sm:h-[420px] lg:h-full lg:min-h-[460px]"
          loading="eager"
        />
      </ScrollReveal>
    </section>
  );
}
