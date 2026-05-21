import type { FooterContent } from "../../data/moriMatchaShowcase";

interface PremiumFooterProps {
  content: FooterContent;
}

const hiddenFooterLinks = new Set(["Process", "Blog"]);

function SocialIcon({
  platform,
}: {
  platform: "Instagram" | "Facebook" | "TikTok";
}) {
  if (platform === "Instagram") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5 fill-none stroke-current"
        strokeWidth="1.8"
      >
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.8" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (platform === "Facebook") {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="h-5 w-5 fill-current"
      >
        <path d="M13.64 21v-8.2h2.77l.41-3.2h-3.18V7.55c0-.92.27-1.55 1.59-1.55h1.7V3.14c-.3-.04-1.31-.14-2.5-.14-2.46 0-4.15 1.47-4.15 4.19v2.34H7.5v3.2h2.78V21h3.36z" />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="h-5 w-5 fill-current"
    >
      <path d="M16.3 4.5c.6 1.1 1.6 2 2.8 2.5v2.5c-1.2-.1-2.4-.5-3.4-1.2v5.1c0 3-2.4 5.4-5.4 5.4S5 16.4 5 13.4 7.4 8 10.4 8c.3 0 .6 0 .9.1v2.7a2.7 2.7 0 10 1.7 2.6V3h2.3c.2.5.5 1 .9 1.5z" />
    </svg>
  );
}

export default function PremiumFooter({ content }: PremiumFooterProps) {
  return (
    <footer className="bg-[var(--footer-bg)] text-[var(--footer-text)]">
      <div className="mx-auto w-full max-w-[1240px] px-6 pb-10 pt-12 sm:pb-14 sm:pt-16 lg:px-10">
        <div>
          <p className="brand-logo text-3xl uppercase tracking-[0.1em] sm:text-4xl">
            {content.darkPanelTitle}
          </p>
          <p className="mt-3 max-w-2xl text-base leading-7 text-[var(--footer-muted)] sm:mt-4 sm:text-xl sm:leading-9">
            {content.darkPanelCopy}
          </p>
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-[1240px] gap-10 border-t border-[var(--footer-line)] px-6 py-12 md:grid-cols-2 lg:grid-cols-3 lg:px-10">
        {content.columns.map((column) => (
          <div key={column.heading}>
            <p className="text-2xl font-medium text-[var(--footer-text)] sm:text-3xl">
              {column.heading}
            </p>
            <ul className="mt-4 space-y-3 text-lg text-[var(--footer-muted)] sm:text-xl">
              {column.links
                .filter((link) => !hiddenFooterLinks.has(link))
                .map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="transition-colors hover:text-[var(--footer-text)]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
            </ul>
          </div>
        ))}

        <div>
          <p className="text-2xl font-medium text-[var(--footer-text)] sm:text-3xl">
            Contact us
          </p>
          <ul className="mt-4 space-y-3 text-lg text-[var(--footer-muted)] sm:text-xl">
            <li>{content.contact.email}</li>
            <li>{content.contact.phone}</li>
            {content.contact.address ? (
              <li>{content.contact.address}</li>
            ) : null}
          </ul>
        </div>

        <div className="md:col-span-2 lg:col-span-1 lg:justify-self-end">
          <p className="text-2xl font-medium text-[var(--footer-text)] sm:text-3xl">
            Follow us
          </p>
          <div className="mt-4 flex items-center gap-3">
            {content.socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.platform}
                className="inline-flex h-11 w-11 items-center justify-center border border-[var(--footer-line)] text-[var(--footer-muted)] transition-colors hover:text-[var(--footer-text)]"
              >
                <SocialIcon platform={social.platform} />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-[1240px] flex-col gap-2 border-t border-[var(--footer-line)] px-6 py-5 text-sm text-[var(--footer-muted)] sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <p>{content.legalLine}</p>
        <p className="tracking-[0.16em] text-[var(--footer-text)]/75">
          {content.creditLine}
        </p>
      </div>
    </footer>
  );
}
