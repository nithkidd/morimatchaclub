import { useEffect, useMemo, useRef, useState, type RefObject } from "react";
import type { IntroSequenceContent } from "../../data/moriMatchaShowcase";

interface LogoScrollIntroProps {
  content: IntroSequenceContent;
  onProgressChange?: (progress: number) => void;
  logoTargetRef?: RefObject<HTMLImageElement | null>;
  wordmarkTargetRef?: RefObject<HTMLParagraphElement | null>;
}

const clamp = (value: number, min = 0, max = 1) =>
  Math.min(max, Math.max(min, value));

const remap = (value: number, start: number, end: number) => {
  if (end <= start) return 0;
  return clamp((value - start) / (end - start));
};

const lerp = (start: number, end: number, t: number) => start + (end - start) * t;

export default function LogoScrollIntro({
  content,
  onProgressChange,
  logoTargetRef,
  wordmarkTargetRef,
}: LogoScrollIntroProps) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const rafId = useRef<number | null>(null);
  const [progress, setProgress] = useState(0);
  const [viewport, setViewport] = useState({ width: 1440, height: 900 });

  const lines = useMemo(
    () =>
      content.lines.map((line, index) => ({
        key: `intro-line-${index + 1}`,
        text: line,
        from: 0.16 + index * 0.13,
        to: 0.28 + index * 0.13,
      })),
    [content.lines]
  );

  useEffect(() => {
    if (typeof window === "undefined") return;

    const updateProgress = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const maxScrollableDistance = rect.height - window.innerHeight;
      const nextProgress =
        maxScrollableDistance <= 0
          ? 1
          : clamp(-rect.top / maxScrollableDistance, 0, 1);

      setProgress(nextProgress);
      onProgressChange?.(nextProgress);
    };

    const onScrollOrResize = () => {
      if (rafId.current !== null) {
        window.cancelAnimationFrame(rafId.current);
      }

      rafId.current = window.requestAnimationFrame(() => {
        setViewport({ width: window.innerWidth, height: window.innerHeight });
        updateProgress();
      });
    };

    setViewport({ width: window.innerWidth, height: window.innerHeight });
    updateProgress();

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      if (rafId.current !== null) {
        window.cancelAnimationFrame(rafId.current);
      }
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [onProgressChange]);

  const moveToNav = remap(progress, 0.5, 0.9);
  const handoffFade = 1 - remap(progress, 0.84, 0.98);
  const titleFade = remap(progress, 0.1, 0.32) * (1 - remap(progress, 0.72, 0.92));

  const logoStartX = viewport.width / 2;
  const logoStartY = viewport.height * 0.36;
  const logoTargetRect = logoTargetRef?.current?.getBoundingClientRect();
  const logoTargetX = logoTargetRect
    ? logoTargetRect.left + logoTargetRect.width / 2
    : 72;
  const logoTargetY = logoTargetRect
    ? logoTargetRect.top + logoTargetRect.height / 2
    : 40;
  const logoMoveX = lerp(0, logoTargetX - logoStartX, moveToNav);
  const logoMoveY = lerp(0, logoTargetY - logoStartY, moveToNav);
  const logoScale = lerp(1, 0.18, moveToNav);

  const nameStartX = viewport.width / 2;
  const nameStartY = viewport.height * 0.58;
  const nameTargetRect = wordmarkTargetRef?.current?.getBoundingClientRect();
  const nameTargetX = nameTargetRect
    ? nameTargetRect.left + nameTargetRect.width / 2
    : 210;
  const nameTargetY = nameTargetRect
    ? nameTargetRect.top + nameTargetRect.height / 2
    : 40;
  const nameMoveX = lerp(0, nameTargetX - nameStartX, moveToNav);
  const nameMoveY = lerp(0, nameTargetY - nameStartY, moveToNav);
  const nameScale = lerp(1, 0.24, moveToNav);

  return (
    <section
      ref={sectionRef}
      id="top"
      aria-label="Mori Matcha Club intro header"
      className="relative h-[185vh] sm:h-[210vh]"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <div className="aura-intro-bg absolute inset-0" />

        <div className="relative h-full w-full">
          <div
            className="absolute left-1/2 top-[36%] z-20"
            style={{
              opacity: handoffFade,
              transform: `translate(-50%, -50%) translate3d(${logoMoveX}px, ${logoMoveY}px, 0) scale(${logoScale})`,
            }}
          >
            <img
              src={content.logoSrc}
              alt={content.logoAlt}
              className="h-32 w-32 object-contain sm:h-44 sm:w-44 md:h-60 md:w-60"
              loading="eager"
            />
          </div>

          <div
            className="absolute left-1/2 top-[58%] z-20"
            style={{
              opacity: handoffFade,
              transform: `translate(-50%, -50%) translate3d(${nameMoveX}px, ${nameMoveY}px, 0) scale(${nameScale})`,
            }}
          >
            <p className="brand-logo whitespace-nowrap text-center text-[clamp(1.6rem,8.2vw,4.5rem)] uppercase tracking-[0.14em] text-[var(--intro-text)] md:tracking-[0.18em]">
              {content.brandWordmark}
            </p>
            <p className="mt-2 text-center text-[10px] uppercase tracking-[0.2em] text-[var(--intro-muted)] sm:text-xs md:text-sm md:tracking-[0.24em]">
              {content.tagline}
            </p>
          </div>

          <div className="absolute inset-x-0 bottom-14 z-20 mx-auto max-w-4xl px-6 text-center">
            <p
              className="text-[11px] uppercase tracking-[0.24em] text-[var(--intro-muted)] md:text-xs"
              style={{ opacity: 1 - remap(progress, 0.2, 0.4) }}
            >
              Scroll to enter
            </p>

            {lines.map((line) => {
              const lineVisible = remap(progress, line.from, line.to);
              return (
                <p
                  key={line.key}
                  className="mt-4 text-[11px] uppercase tracking-[0.18em] text-[var(--intro-muted)] md:text-sm"
                  style={{
                    opacity: lineVisible,
                    transform: `translateY(${lerp(14, 0, lineVisible)}px)`,
                  }}
                >
                  {line.text}
                </p>
              );
            })}
          </div>

          <div
            className="absolute inset-x-0 top-[10%] z-10 text-center"
            style={{ opacity: titleFade }}
          >
            <p className="text-xs uppercase tracking-[0.24em] text-[var(--intro-muted)] md:text-sm">
              MORI MATCHA CLUB PRESENTS
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
