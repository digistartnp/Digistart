import RevealProvider from "@/components/digistart/reveal-provider";
import {
  AboutSection,
  ContactSection,
  FaqSection,
  HeroSection,
  MobileStandardSection,
  ServicesSection,
} from "@/components/digistart/sections";

export default function Home() {
  return (
    <div className="flex flex-col">
      <RevealProvider>
        <HeroSection />
        <ServicesSection />
        <MobileStandardSection />
        <AboutSection />
        <FaqSection />
        <ContactSection />
      </RevealProvider>
    </div>
  );
}
