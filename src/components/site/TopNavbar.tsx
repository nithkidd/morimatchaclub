import type { RefObject } from "react";

interface TopNavbarProps {
  logoSrc: string;
  brandName: string;
  introProgress: number;
  logoTargetRef?: RefObject<HTMLImageElement | null>;
  wordmarkTargetRef?: RefObject<HTMLParagraphElement | null>;
}

const clamp = (value: number, min = 0, max = 1) =>
  Math.min(max, Math.max(min, value));

export default function TopNavbar({
  logoSrc,
  brandName,
  introProgress,
  logoTargetRef,
  wordmarkTargetRef,
}: TopNavbarProps) {
  const visible = clamp((introProgress - 0.64) / 0.2);
  const showProcessLink = false;
  const showJournalLink = false;

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-[var(--line)]/80 bg-[color:rgba(255,249,239,0.92)] backdrop-blur-sm"
      style={{ opacity: visible }}
      aria-hidden={visible < 0.02}
    >
      <div className="mx-auto flex h-20 w-full max-w-[1240px] items-center justify-between px-6 lg:px-10">
        <a href="#top" className="flex items-center gap-3">
          <img
            ref={logoTargetRef}
            src={logoSrc}
            alt="Mori Matcha Club logo"
            className="h-10 w-10 object-contain"
            loading="eager"
          />
          <p
            ref={wordmarkTargetRef}
            className="brand-logo whitespace-nowrap text-sm uppercase tracking-[0.2em] text-[var(--brand-900)] md:text-base"
          >
            {brandName}
          </p>
        </a>
        <nav className="hidden items-center gap-8 text-[13px] uppercase tracking-[0.12em] text-[var(--ink-soft)] md:flex">
          <a
            href="#why-us"
            className="transition-colors hover:text-[var(--brand-700)]"
          >
            Why us
          </a>
          {showProcessLink ? (
            <a
              href="#process"
              className="transition-colors hover:text-[var(--brand-700)]"
            >
              Process
            </a>
          ) : null}
          {showJournalLink ? (
            <a
              href="#journal"
              className="transition-colors hover:text-[var(--brand-700)]"
            >
              Journal
            </a>
          ) : null}
          <a
            id="order"
            href="https://t.me/cattchiro"
            target="_blank"
            rel="noreferrer"
            className="brand-cta bg-[var(--brand-500)] px-4 py-2 font-medium text-white hover:bg-[var(--brand-700)]"
          >
            Order
          </a>
        </nav>
      </div>
    </header>
  );
}
