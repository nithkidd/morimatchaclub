import type { QuoteItem } from "../../data/moriMatchaShowcase";

interface TestimonialRailSectionProps {
  items: QuoteItem[];
}

export default function TestimonialRailSection({ items }: TestimonialRailSectionProps) {
  const track = [...items, ...items];

  return (
    <section className="flex min-h-[100svh] items-center overflow-hidden border-y border-[var(--line)] py-16">
      <div className="testimonial-track flex min-w-max gap-6 px-6 lg:px-10">
        {track.map((item, index) => (
          <article key={`${item.name}-${index}`} className="flex min-h-[380px] w-[82vw] max-w-[560px] flex-none flex-col rounded-none border border-[var(--line)] bg-[var(--surface)] p-5 sm:min-h-[460px] sm:p-8">
            <p className="text-3xl font-medium leading-[1.1] text-[var(--ink)] sm:text-5xl">"{item.quote}"</p>
            <p className="mt-auto pt-6 text-base text-[var(--ink-soft)] sm:pt-8 sm:text-lg">{item.handle}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
