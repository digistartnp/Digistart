import Hero from "@/components/sections/hero";
import { HomeProducts, HomeServices, HomeWork } from "@/components/sections/home";
import CtaBand from "@/components/cta-band";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeProducts />
      <HomeWork />
      <HomeServices />
      <CtaBand />
    </>
  );
}
