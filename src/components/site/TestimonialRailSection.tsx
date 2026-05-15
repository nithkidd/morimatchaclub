import type { QuoteItem } from "../../data/moriMatchaShowcase";

interface TestimonialRailSectionProps {
  items: QuoteItem[];
}

export default function TestimonialRailSection({ items }: TestimonialRailSectionProps) {
  const track = [...items, ...items];

  return (
    <section className="overflow-hidden border-y border-[var(--line)] py-16">
      <div className="testimonial-track flex min-w-max gap-6 px-6 lg:px-10">
        {track.map((item, index) => (
          <article key={`${item.name}-${index}`} className="w-[82vw] max-w-[560px] flex-none rounded-none border border-[var(--line)] bg-[var(--surface)] p-5 sm:p-8">
            <p className="text-3xl font-medium leading-[1.1] text-[var(--ink)] sm:text-5xl">"{item.quote}"</p>
            <div className="mt-6 flex items-center gap-4 sm:mt-8">
              <img src={item.avatar} alt={item.name} className="h-14 w-14 rounded-full object-cover" loading="lazy" />
              <div>
                <p className="text-xl font-medium text-[var(--ink)] sm:text-2xl">{item.name}</p>
                <p className="text-base text-[var(--ink-soft)] sm:text-lg">{item.handle}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
