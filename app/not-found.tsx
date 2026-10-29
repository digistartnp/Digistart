import Link from "next/link";
import { Mark } from "@/components/logo";

export default function NotFound() {
  return (
    <section className="container-x flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <Mark className="size-16" />
      <p className="mt-8 font-mono text-sm text-accent-ink">404</p>
      <h1 className="mt-2 text-4xl font-semibold tracking-[-0.03em]">This page isn’t here.</h1>
      <p className="mt-3 text-muted">ページが見つかりませんでした。</p>
      <Link href="/" className="btn btn-primary mt-8">
        Back to home · ホームへ
      </Link>
    </section>
  );
}
