import type { Metadata } from "next";
import { ProductsPage } from "@/components/pages";

export const metadata: Metadata = {
  title: "Products — ResumeJP, VisaTomo & Sarathi Connect",
  description: "ResumeJP builds a print-ready Japanese resume (履歴書). VisaTomo fills Japan visa forms in plain English. Sarathi Connect is a voice-first phone helper for older parents.",
  alternates: { canonical: "/products" },
};

export default function Page() {
  return <ProductsPage />;
}
