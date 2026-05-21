import type { OriginTrustContent } from "../../data/moriMatchaShowcase";
import ScrollReveal from "../animation/ScrollReveal";

interface OriginTrustSectionProps {
  content: OriginTrustContent;
}

export default function OriginTrustSection({ content }: OriginTrustSectionProps) {
  return (
    <section className="mx-auto w-full max-w-[1240px] px-6 py-16 sm:py-24 lg:px-10">
      <div className="grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-start">
        <ScrollReveal className="order-2 hidden self-start lg:order-1 lg:sticky lg:top-24 lg:block">
          <img
            src={content.image.src}
            alt={content.image.alt}
            className="motion-image h-[320px] w-full object-cover sm:h-[520px] lg:h-[calc(100svh-8rem)] lg:min-h-[680px]"
            loading="lazy"
          />
        </ScrollReveal>

        <div className="order-1 lg:order-2">
          <ScrollReveal>
            <p className="text-xs uppercase tracking-[0.22em] text-[var(--brand-500)]">{content.eyebrow}</p>
            <h2 className="mt-3 text-4xl font-semibold leading-[0.96] text-[var(--ink)] sm:text-5xl lg:text-6xl">
              {content.headline}
            </h2>
            <p className="mt-4 text-lg leading-8 text-[var(--ink-soft)] sm:mt-5 sm:text-2xl sm:leading-10">{content.copy}</p>
          </ScrollReveal>

          <ScrollReveal delayMs={60} className="mt-8 lg:hidden">
            <img
              src={content.image.src}
              alt={content.image.alt}
              className="motion-image h-[320px] w-full object-cover sm:h-[520px]"
              loading="lazy"
            />
          </ScrollReveal>

          <div className="mt-8 border-t border-[var(--line)]">
            {content.points.map((point, index) => (
              <ScrollReveal key={point.title} delayMs={index * 90}>
                <article className="border-b border-[var(--line)] py-6 sm:py-8">
                  <h3 className="text-3xl font-medium leading-tight text-[var(--ink)] sm:text-4xl">{point.title}</h3>
                  <p className="mt-3 text-lg leading-8 text-[var(--ink-soft)] sm:mt-4 sm:text-2xl sm:leading-10">{point.copy}</p>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
