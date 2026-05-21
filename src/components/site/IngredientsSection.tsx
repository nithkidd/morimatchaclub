import type { IngredientsContent } from "../../data/moriMatchaShowcase";
import ScrollReveal from "../animation/ScrollReveal";

interface IngredientsSectionProps {
  content: IngredientsContent;
}

export default function IngredientsSection({ content }: IngredientsSectionProps) {
  return (
    <section id="process" className="mx-auto min-h-[100svh] w-full max-w-[1240px] px-6 py-16 sm:py-24 lg:px-10">
      <div className="grid items-start justify-between gap-6 lg:grid-cols-[1.2fr_0.5fr]">
        <ScrollReveal className="order-2 lg:order-1">
          <p className="text-xs uppercase tracking-[0.22em] text-[var(--brand-500)]">{content.eyebrow}</p>
          <h2 className="mt-3 max-w-4xl text-4xl font-semibold leading-[0.96] text-[var(--ink)] sm:text-5xl lg:text-6xl">
            {content.headline}
          </h2>
        </ScrollReveal>
        <ScrollReveal className="lg:justify-self-end">
          {content.ctaLabel ? (
            <a
              href={content.ctaHref}
              className="brand-cta inline-flex bg-[var(--brand-500)] px-10 py-4 text-2xl font-medium text-white hover:bg-[var(--brand-700)]"
            >
              {content.ctaLabel}
            </a>
          ) : null}
        </ScrollReveal>
      </div>

      <div className="mt-10 grid gap-8 sm:mt-12 sm:gap-10 lg:grid-cols-[1.08fr_0.92fr]">
        <ScrollReveal>
          <img
            src={content.image.src}
            alt={content.image.alt}
            className="motion-image h-[340px] w-full object-cover sm:h-[580px] lg:h-full lg:min-h-[760px]"
            loading="lazy"
          />
        </ScrollReveal>

        <div className="order-1 grid gap-8 sm:grid-cols-2 lg:order-2">
          {content.features.map((feature, index) => (
            <ScrollReveal key={feature.title} delayMs={index * 90}>
              <article className="border-b border-[var(--line)] pb-7">
                <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--brand-100)] text-xl font-semibold text-[var(--brand-700)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 text-3xl font-medium leading-tight text-[var(--ink)] sm:text-[38px]">
                  {feature.title}
                </h3>
                <p className="mt-3 text-base leading-7 text-[var(--ink-soft)] sm:text-xl sm:leading-9">{feature.copy}</p>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
