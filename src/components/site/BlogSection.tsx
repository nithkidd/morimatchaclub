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
          <a
            href={content.ctaHref}
            className="inline-flex border border-[var(--line-strong)] px-8 py-4 text-lg font-medium text-[var(--ink)] transition-colors hover:bg-[var(--surface)] sm:text-2xl"
          >
            {content.ctaLabel}
          </a>
        </ScrollReveal>
      </div>

      <div className="mt-10 grid gap-0 border border-[var(--line-strong)] sm:mt-12 lg:grid-cols-2">
        {content.posts.map((post, index) => (
          <ScrollReveal key={post.title} delayMs={index * 80}>
            <article className={`p-4 sm:p-5 ${index === 0 ? "lg:border-r lg:border-[var(--line-strong)]" : ""}`}>
              <img src={post.image} alt={post.title} className="motion-image h-[240px] w-full object-cover sm:h-[360px]" loading="lazy" />
              <h3 className="mt-5 text-2xl font-medium leading-tight text-[var(--ink)] sm:mt-6 sm:text-4xl">{post.title}</h3>
              <div className="mt-3 flex flex-wrap items-center gap-3 text-base text-[var(--ink-soft)] sm:mt-4 sm:gap-4 sm:text-xl">
                <span className="text-[var(--brand-500)]">•</span>
                <span>{post.category}</span>
                <span>-</span>
                <span>{post.date}</span>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
