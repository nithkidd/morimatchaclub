import type { BlogContent } from "../../data/moriMatchaShowcase";
import ScrollReveal from "../animation/ScrollReveal";

interface BlogSectionProps {
  content: BlogContent;
}

export default function BlogSection({ content }: BlogSectionProps) {
  return (
    <section id="journal" className="mx-auto w-full max-w-[1240px] px-6 py-16 sm:py-24 lg:px-10">
      <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
        <ScrollReveal>
          <p className="text-xs uppercase tracking-[0.22em] text-[var(--brand-500)]">{content.eyebrow}</p>
          <h2 className="mt-3 text-4xl font-semibold leading-[0.96] text-[var(--ink)] sm:text-5xl lg:text-7xl">
            {content.headline}
          </h2>
        </ScrollReveal>
        <ScrollReveal className="lg:justify-self-end">
          {content.ctaLabel ? (
            <a
              href={content.ctaHref}
              className="inline-flex border border-[var(--line-strong)] px-8 py-4 text-lg font-medium text-[var(--ink)] transition-colors hover:bg-[var(--surface)] sm:text-2xl"
            >
              {content.ctaLabel}
            </a>
          ) : null}
        </ScrollReveal>
      </div>

      <div className="mt-10 grid gap-0 border border-[var(--line-strong)] sm:mt-12 lg:grid-cols-2">
        {content.posts.map((post, index) => (
          <ScrollReveal key={post.title} delayMs={index * 80}>
            <article className={`p-4 sm:p-5 ${index === 0 ? "lg:border-r lg:border-[var(--line-strong)]" : ""}`}>
              <div className="mx-auto w-full max-w-[360px] overflow-hidden border border-[var(--line)] bg-black">
                <video className="motion-image aspect-[9/16] w-full object-contain" controls preload="metadata" playsInline>
                  <source src={post.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
