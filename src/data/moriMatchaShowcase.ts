export interface IntroSequenceContent {
  logoSrc: string;
  logoAlt: string;
  brandWordmark: string;
  tagline: string;
  lines: [string, string, string];
}

export interface HeroContent {
  eyebrow: string;
  headline: string;
  copy: string;
  ctaLabel: string;
  ctaHref: string;
  heroImage: {
    src: string;
    alt: string;
  };
}

export interface WhyUsItem {
  title: string;
  copy: string;
}

export interface WhyUsContent {
  eyebrow: string;
  headline: string;
  copy: string;
  image: {
    src: string;
    alt: string;
  };
  ctaLabel: string;
  ctaHref: string;
  items: WhyUsItem[];
}

export interface ExperienceContent {
  eyebrow: string;
  headline: string;
  copy: string;
  ctaLabel: string;
  ctaHref: string;
  mainImage: {
    src: string;
    alt: string;
  };
  sideImage: {
    src: string;
    alt: string;
  };
}

export interface OriginTrustItem {
  title: string;
  copy: string;
}

export interface OriginTrustContent {
  eyebrow: string;
  headline: string;
  copy: string;
  image: {
    src: string;
    alt: string;
  };
  points: OriginTrustItem[];
}

export interface IngredientFeature {
  title: string;
  copy: string;
}

export interface IngredientsContent {
  eyebrow: string;
  headline: string;
  ctaLabel: string;
  ctaHref: string;
  image: {
    src: string;
    alt: string;
  };
  features: IngredientFeature[];
}

export interface ContactBandContent {
  eyebrow: string;
  headline: string;
  copy: string;
  ctaLabel: string;
  ctaHref: string;
  socials: Array<{
    label: string;
    href: string;
  }>;
  image: {
    src: string;
    alt: string;
  };
}

export interface QuoteItem {
  quote: string;
  name: string;
  handle: string;
  avatar: string;
}

export interface BlogPostItem {
  title: string;
  category: string;
  date: string;
  video: string;
}

export interface BlogContent {
  eyebrow: string;
  headline: string;
  ctaLabel: string;
  ctaHref: string;
  posts: BlogPostItem[];
}

export interface FollowContent {
  eyebrow: string;
  headline: string;
  copy: string;
  ctaLabel: string;
  ctaHref: string;
  gallery: { src: string; alt: string }[];
}

export interface FooterLinkGroup {
  heading: string;
  links: string[];
}

export interface FooterContent {
  darkPanelTitle: string;
  darkPanelCopy: string;
  darkPanelImageA: string;
  darkPanelImageB: string;
  columns: FooterLinkGroup[];
  contact: {
    email: string;
    phone: string;
    address?: string;
  };
  socialLinks: Array<{
    platform: "Instagram" | "Facebook" | "TikTok";
    href: string;
  }>;
  legalLine: string;
  creditLine: string;
}

export const introSequenceContent: IntroSequenceContent = {
  logoSrc: "/LOGO/morimatchalogo-mark.png",
  logoAlt: "Mori Matcha Club logo",
  brandWordmark: "MORI MATCHA CLUB",
  tagline: "Your New Everyday Ritual",
  lines: [
    "One craft. One grade. One ritual.",
    "Shade-grown leaves, stone-milled in small batches.",
    "Scroll to enter the Mori Matcha Club showcase.",
  ],
};

export const heroContent: HeroContent = {
  eyebrow: "Daily Matcha",
  headline: "Purposefully crafted matcha for calm, clean focus.",
  copy: "Mori Matcha Club offers one thing only: premium ceremonial matcha for daily ritual and uncompromising quality.",
  ctaLabel: "Order Now",
  ctaHref: "https://www.instagram.com/morimatcha.club/",
  heroImage: {
    src: "/HERO/hero1.jpg",
    alt: "Freshly whisked matcha in bowl",
  },
};

export const whyUsContent: WhyUsContent = {
  eyebrow: "Why us?",
  headline: "What makes us different from the rest",
  copy: "Everything is built around obsessive discipline: sourcing, milling, freshness, and ritual.",
  image: {
    src: "/WHYUS/whyus1.jpg",
    alt: "Bamboo whisk preparing bright green matcha",
  },
  ctaLabel: "",
  ctaHref: "#order",
  items: [
    {
      title: "Ceremonial-grade quality",
      copy: "First-flush tencha leaves only, selected for clean umami and natural sweetness.",
    },
    {
      title: "Stone-ground freshness",
      copy: "Low-heat stone milling preserves aroma and keeps texture silky and fine.",
    },
    {
      title: "Shade-grown nutrients",
      copy: "Extended shading boosts chlorophyll and L-theanine for balanced daily focus.",
    },
  ],
};

export const experienceContent: ExperienceContent = {
  eyebrow: "The natural difference",
  headline: "Experience the power of pure matcha",
  copy: "No flavor blends. No culinary substitutes. Just ceremonial matcha meant to be enjoyed as-is.",
  ctaLabel: "",
  ctaHref: "#order",
  mainImage: {
    src: "/EXPERIENCE/experience1.jpg",
    alt: "Iced matcha latte being poured",
  },
  sideImage: {
    src: "/EXPERIENCE/experience2.jpg",
    alt: "Matcha dessert closeup",
  },
};

export const originTrustContent: OriginTrustContent = {
  eyebrow: "Origin transparency",
  headline: "From China, selected with strict quality standards.",
  copy: "Yes, our matcha is sourced from China. We are transparent about that. Instead of hype, we focus on consistent taste, clean aroma, and reliable quality from every batch we choose.",
  image: {
    src: "/EXPERIENCE/experience2.jpg",
    alt: "Premium matcha powder texture and whisking setup",
  },
  points: [
    {
      title: "Transparent origin labeling",
      copy: "We clearly label our matcha as sourced from China and focus on selecting batches that meet our quality expectations.",
    },
    {
      title: "Selection by cup quality",
      copy: "We prioritize taste, color, aroma, and smooth finish, so customers judge by experience, not assumptions.",
    },
    {
      title: "Consistency you can trust",
      copy: "Our goal is simple: a clean profile with low bitterness and dependable daily drinking quality.",
    },
  ],
};

export const ingredientsContent: IngredientsContent = {
  eyebrow: "Our process",
  headline: "Meet the essentials behind every ceremonial cup",
  ctaLabel: "",
  ctaHref: "#order",
  image: {
    src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1400&q=80",
    alt: "Matcha pastry and tea setup",
  },
  features: [
    {
      title: "First harvest",
      copy: "Only spring-picked leaves for vivid green color and layered umami depth.",
    },
    {
      title: "Slow milling",
      copy: "Traditional stone grinding maintains texture and avoids heat damage.",
    },
    {
      title: "Small batches",
      copy: "Packed in tight runs to keep aroma fresh and flavor stable from tin to cup.",
    },
    {
      title: "Ceremonial focus",
      copy: "We sell one product category only, so every decision serves that standard.",
    },
  ],
};

export const contactBandContent: ContactBandContent = {
  eyebrow: "Get in touch",
  headline: "Elevate your daily matcha ritual",
  copy: "Questions about whisking, ratios, or flavor profile? We are here to guide your ceremonial matcha journey.",
  ctaLabel: "",
  ctaHref: "#order",
  socials: [
    {
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61585484391973",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/morimatcha.club/",
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@morimatchaclub",
    },
  ],
  image: {
    src: "/GETINTOUCH/getintouch1.png",
    alt: "Three iced matcha drinks in light setting",
  },
};

export const quoteItems: QuoteItem[] = [
  {
    quote: "A very nice matcha for that price! Bright green in color, with a fresh matcha aroma, and no bitterness.",
    name: "",
    handle: "@muyhor",
    avatar:
      "",
  },
  {
    quote:
      "The matcha is good. the packaging is good",
    name: "",
    handle: "@vattey",
    avatar:
      "",
  },
  {
    quote: "It is too good",
    name: "",
    handle: "@sonida",
    avatar:
      "",
  },
  {
    quote: "Matcha ng taste so good, the color, fragrance, and the packaging is sooo premium. I love it😍😍😍 the best mg",
    name: "",
    handle: "@savinna",
    avatar:
      "",
  },
];

export const blogContent: BlogContent = {
  eyebrow: "Our shorts",
  headline: "Latest video moments",
  ctaLabel: "",
  ctaHref: "#",
  posts: [
    {
      title: "Mori Matcha Club Shorts 01",
      category: "Shorts",
      date: "May 2026",
      video: "/BLOG/vdo1.mp4",
    },
    {
      title: "Mori Matcha Club Shorts 02",
      category: "Shorts",
      date: "May 2026",
      video: "/BLOG/vdo2.mp4",
    },
  ],
};

export const followContent: FollowContent = {
  eyebrow: "Follow us",
  headline: "Matcha moments for mindful days",
  copy: "A closer look at the Mori Matcha Club ritual, from whisking to serving.",
  ctaLabel: "",
  ctaHref: "#order",
  gallery: [],
};

export const footerContent: FooterContent = {
  darkPanelTitle: "Mori Matcha Club",
  darkPanelCopy:
    "Ceremonial-grade matcha for modern ritual and purposeful focus.",
  darkPanelImageA:
    "https://images.unsplash.com/photo-1515823064-d6e0c04616a7?auto=format&fit=crop&w=700&q=80",
  darkPanelImageB:
    "https://images.unsplash.com/photo-1515823662972-da6a2e4d3002?auto=format&fit=crop&w=700&q=80",
  columns: [
    {
      heading: "Main pages",
      links: ["Home", "Why us", "Process", "Testimonials", "Blog"],
    },
  ],
  contact: {
    email: "morimatchaclub@gmail.com",
    phone: "+855 71 995 272 5",
  },
  socialLinks: [
    {
      platform: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61585484391973",
    },
    {
      platform: "Instagram",
      href: "https://www.instagram.com/morimatcha.club/",
    },
    {
      platform: "TikTok",
      href: "https://www.tiktok.com/@morimatchaclub",
    },
  ],
  legalLine: "Copyright 2026 Mori Matcha Club. All rights reserved.",
  creditLine: "Powered By SAYANA",
};
