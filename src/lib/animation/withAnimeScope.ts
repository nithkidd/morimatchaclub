import { createScope, type Scope, type ScopeCleanupCallback } from "animejs";

type ScopeSetup = (scope: Scope) => void | ScopeCleanupCallback;

export function withAnimeScope(root: HTMLElement, setup: ScopeSetup) {
  const scope = createScope({
    root,
    mediaQueries: {
      reduceMotion: "(prefers-reduced-motion: reduce)",
    },
  });

  scope.add(setup);
  return () => scope.revert();
}
