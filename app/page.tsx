import RevealProvider from "@/components/digistart/reveal-provider";
import {
  AboutSection,
  ContactSection,
  FaqSection,
  HeroSection,
  PricingSection,
  ServicesSection,
  TeamSection,
} from "@/components/digistart/sections";

export default function Home() {
  return (
    <div className="flex flex-col">
      <RevealProvider>
        <HeroSection />
        <ServicesSection />
        <PricingSection />
        <AboutSection />
        <TeamSection />
        <FaqSection />
        <ContactSection />
      </RevealProvider>
    </div>
  );
}
