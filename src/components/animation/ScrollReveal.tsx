import { useEffect, useRef, useState, type ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delayMs?: number;
  distance?: "sm" | "md" | "lg";
}

export default function ScrollReveal({
  children,
  className = "",
  delayMs = 0,
  distance = "md",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const distanceClass =
    distance === "sm" ? "translate-y-3" : distance === "lg" ? "translate-y-10" : "translate-y-6";

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-900 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${
        visible ? "translate-y-0 scale-100 opacity-100 blur-0" : `${distanceClass} scale-[0.985] opacity-0 blur-[6px]`
      }`}
      style={{ transitionDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
}
