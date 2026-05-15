import type { FollowContent } from "../../data/moriMatchaShowcase";
import ScrollReveal from "../animation/ScrollReveal";

interface FollowSectionProps {
  content: FollowContent;
}

export default function FollowSection({ content }: FollowSectionProps) {
  const hasGallery = content.gallery.length > 0;

  return (
    <section
      className={`mx-auto w-full max-w-[1240px] gap-6 px-6 pb-16 sm:pb-24 lg:px-10${
        hasGallery ? " grid lg:grid-cols-[1.2fr_1.8fr]" : ""
      }`}
    >
      <ScrollReveal className="self-start lg:sticky lg:top-24">
        <p className="text-xs uppercase tracking-[0.22em] text-[var(--brand-500)]">
          {content.eyebrow}
        </p>
        <h2 className="mt-3 text-4xl font-semibold leading-[0.96] text-[var(--ink)] sm:text-5xl lg:text-7xl">
          {content.headline}
        </h2>
        <p className="mt-4 text-base leading-7 text-[var(--ink-soft)] sm:mt-6 sm:text-2xl sm:leading-10">
          {content.copy}
        </p>
        {content.ctaLabel ? (
          <a
            href={content.ctaHref}
            className="brand-cta mt-8 inline-flex bg-[var(--brand-500)] px-10 py-4 text-2xl font-medium text-white hover:bg-[var(--brand-700)]"
          >
            {content.ctaLabel}
          </a>
        ) : null}
      </ScrollReveal>

      {hasGallery ? (
        <div className="grid gap-3 sm:grid-cols-3">
          {content.gallery.map((item, index) => (
            <ScrollReveal key={item.src} delayMs={index * 80}>
              <img
                src={item.src}
                alt={item.alt}
                className="motion-image h-[260px] w-full object-cover sm:h-[430px]"
                loading="lazy"
              />
            </ScrollReveal>
          ))}
        </div>
      ) : null}
    </section>
  );
}
