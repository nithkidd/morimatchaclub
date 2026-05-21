import { onScroll } from "animejs";
import { useEffect, useMemo, useRef, useState, type RefObject } from "react";
import type { IntroSequenceContent } from "../../data/moriMatchaShowcase";
import { withAnimeScope } from "../../lib/animation/withAnimeScope";

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
  const autoSnapDoneRef = useRef(false);
  const rafIdRef = useRef<number | null>(null);
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
    const section = sectionRef.current;
    if (!section) return;

    const setProgressSafe = (nextValue: number) => {
      const nextProgress = Number.isFinite(nextValue) ? clamp(nextValue, 0, 1) : 0;
      setProgress((current) =>
        Math.abs(current - nextProgress) < 0.0005 ? current : nextProgress
      );
      onProgressChange?.(nextProgress);
    };

    const updateViewport = () => {
      setViewport({ width: window.innerWidth, height: window.innerHeight });
    };

    const setupManualFallback = () => {
      const updateProgress = () => {
        const rect = section.getBoundingClientRect();
        const maxScrollableDistance = rect.height - window.innerHeight;
        const nextProgress =
          maxScrollableDistance <= 0
            ? 1
            : -rect.top / maxScrollableDistance;

        setProgressSafe(nextProgress);
      };

      const onScrollOrResize = () => {
        if (rafIdRef.current !== null) {
          window.cancelAnimationFrame(rafIdRef.current);
        }

        rafIdRef.current = window.requestAnimationFrame(() => {
          updateViewport();
          updateProgress();
        });
      };

      onScrollOrResize();
      window.addEventListener("scroll", onScrollOrResize, { passive: true });
      window.addEventListener("resize", onScrollOrResize);

      return () => {
        if (rafIdRef.current !== null) {
          window.cancelAnimationFrame(rafIdRef.current);
        }
        window.removeEventListener("scroll", onScrollOrResize);
        window.removeEventListener("resize", onScrollOrResize);
      };
    };

    updateViewport();

    try {
      return withAnimeScope(section, () => {
        let observer: ReturnType<typeof onScroll>;
        try {
          observer = onScroll({
            target: section,
            sync: true,
            enter: "top top",
            leave: "bottom bottom",
            onUpdate: (self) => {
              setProgressSafe(self.progress);
            },
          });
        } catch {
          return setupManualFallback();
        }

        observer.refresh();
        setProgressSafe(observer.progress);
        window.addEventListener("resize", updateViewport);

        return () => {
          window.removeEventListener("resize", updateViewport);
          observer.revert();
        };
      });
    } catch {
      return setupManualFallback();
    }
  }, [onProgressChange]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (progress <= 0.25) {
      autoSnapDoneRef.current = false;
      return;
    }

    if (progress < 0.9 || autoSnapDoneRef.current) return;

    const section = sectionRef.current;
    const nextSection = section?.nextElementSibling as HTMLElement | null;
    if (!nextSection) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    autoSnapDoneRef.current = true;
    nextSection.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  }, [progress]);

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
            <p className="brand-logo w-[min(92vw,980px)] px-2 text-center text-[clamp(1rem,8.6vw,1.85rem)] uppercase leading-[1.08] tracking-[0.06em] text-[var(--intro-text)] sm:text-[clamp(1.25rem,6.8vw,2.7rem)] sm:tracking-[0.1em] lg:whitespace-nowrap lg:text-[clamp(1.8rem,4.8vw,4.5rem)] lg:tracking-[0.16em]">
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
