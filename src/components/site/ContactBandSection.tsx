import type { ContactBandContent } from "../../data/moriMatchaShowcase";
import ScrollReveal from "../animation/ScrollReveal";

interface ContactBandSectionProps {
  content: ContactBandContent;
}

export default function ContactBandSection({ content }: ContactBandSectionProps) {
  return (
    <section className="soft-section-wash bg-[var(--surface-soft)] px-6 py-16 sm:py-24 lg:px-10">
      <div className="mx-auto w-full max-w-[1240px]">
        <ScrollReveal className="mx-auto max-w-4xl text-center">
          <p className="text-xs uppercase tracking-[0.22em] text-[var(--brand-500)]">{content.eyebrow}</p>
          <h2 className="mt-3 text-4xl font-semibold leading-[0.96] text-[var(--ink)] sm:text-5xl lg:text-7xl">
            {content.headline}
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-base leading-7 text-[var(--ink-soft)] sm:mt-5 sm:text-2xl sm:leading-10">{content.copy}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            {content.ctaLabel ? (
              <a
                href={content.ctaHref}
                className="brand-cta inline-flex bg-[var(--brand-500)] px-10 py-4 text-2xl font-medium text-white hover:bg-[var(--brand-700)]"
              >
                {content.ctaLabel}
              </a>
            ) : null}
            <div className="flex flex-wrap items-center justify-center gap-4 text-base font-medium text-[var(--ink)] sm:gap-5 sm:text-xl">
              {content.socials.map((social) => (
                <a key={social} href="#" className="transition-colors hover:text-[var(--brand-700)]">
                  {social}
                </a>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delayMs={120} className="mt-14">
          <img
            src={content.image.src}
            alt={content.image.alt}
            className="motion-image h-[320px] w-full object-cover sm:h-[520px] lg:h-full lg:min-h-[580px]"
            loading="lazy"
          />
        </ScrollReveal>
      </div>
    </section>
  );
}
