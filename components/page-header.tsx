import type { ReactNode } from "react";

/* Inner pages open with just the headline and one line under it. Static so
   the h1 paints immediately. */
export default function PageHeader({
  title,
  sub,
  children,
}: {
  title: string;
  sub?: string;
  children?: ReactNode;
}) {
  return (
    <section className="container-x pt-14 md:pt-20">
      <h1 className="max-w-3xl text-[2.25rem] leading-[1.08] font-semibold tracking-[-0.035em] text-balance text-ink md:text-[3.25rem]">
        {title}
      </h1>
      {sub ? <p className="mt-5 max-w-xl text-[1.0625rem] leading-relaxed text-pretty text-muted">{sub}</p> : null}
      {children}
    </section>
  );
}
