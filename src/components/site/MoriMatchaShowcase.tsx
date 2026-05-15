import { useRef, useState } from "react";
import LogoScrollIntro from "../animation/LogoScrollIntro";
import BlogSection from "./BlogSection";
import ContactBandSection from "./ContactBandSection";
import ExperienceSection from "./ExperienceSection";
import FollowSection from "./FollowSection";
import HeroSection from "./HeroSection";
import IngredientsSection from "./IngredientsSection";
import PremiumFooter from "./PremiumFooter";
import TestimonialRailSection from "./TestimonialRailSection";
import TopNavbar from "./TopNavbar";
import WhyUsSection from "./WhyUsSection";
import {
  blogContent,
  contactBandContent,
  experienceContent,
  followContent,
  footerContent,
  heroContent,
  ingredientsContent,
  introSequenceContent,
  quoteItems,
  whyUsContent,
} from "../../data/moriMatchaShowcase";

export default function MoriMatchaShowcase() {
  const [introProgress, setIntroProgress] = useState(0);
  const navbarLogoRef = useRef<HTMLImageElement | null>(null);
  const navbarWordmarkRef = useRef<HTMLParagraphElement | null>(null);
  const showProcessSection = false;
  const showBlogSection = false;

  return (
    <main className="bg-[var(--bg)] text-[var(--ink)]">
      <TopNavbar
        logoSrc={introSequenceContent.logoSrc}
        brandName="Mori Matcha Club"
        introProgress={introProgress}
        logoTargetRef={navbarLogoRef}
        wordmarkTargetRef={navbarWordmarkRef}
      />
      <LogoScrollIntro
        content={introSequenceContent}
        onProgressChange={setIntroProgress}
        logoTargetRef={navbarLogoRef}
        wordmarkTargetRef={navbarWordmarkRef}
      />

      <HeroSection content={heroContent} />
      <WhyUsSection content={whyUsContent} />
      <ExperienceSection content={experienceContent} />
      {showProcessSection ? (
        <IngredientsSection content={ingredientsContent} />
      ) : null}
      <ContactBandSection content={contactBandContent} />
      <TestimonialRailSection items={quoteItems} />
      {showBlogSection ? <BlogSection content={blogContent} /> : null}
      <FollowSection content={followContent} />
      <PremiumFooter content={footerContent} />
    </main>
  );
}
