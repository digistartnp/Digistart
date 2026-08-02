import type { Metadata } from "next";
import RevealProvider from "@/components/digistart/reveal-provider";
import {
  AboutSection,
  ContactSection,
  FaqSection,
  HeroSection,
  ServicesSection,
} from "@/components/digistart/sections";
import LineChatButton from "@/components/line-chat-button";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <div className="flex flex-col">
      <RevealProvider>
        <HeroSection />
        <ServicesSection />
        <AboutSection />
        <FaqSection />
        <ContactSection />
      </RevealProvider>
      <LineChatButton />
    </div>
  );
}
