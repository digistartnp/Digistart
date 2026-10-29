/*
 * The mark: a D made of three lines of code. The middle line is still being
 * written — the vermilion block cursor is the "start" in digistart.
 * Built on a 32-unit grid; every gap is 2.4 units so it holds at 16px.
 */
export const MARK_LINES =
  "M7.75 4H15a12 12 0 0 1 10.613 6.4H6V5.75A1.75 1.75 0 0 1 7.75 4Z" +
  "M6 12.8h4.4v6.4H6Z" +
  "M22.2 12.8h4.366a12 12 0 0 1 0 6.4H22.2Z" +
  "M6 21.6h19.613A12 12 0 0 1 15 28H7.75A1.75 1.75 0 0 1 6 26.25Z";
export const MARK_CURSOR = { x: 12.8, y: 12.8, width: 7, height: 6.4, rx: 0.7 };

type Tone = "ink" | "paper";

export function Mark({ className, tone = "ink" }: { className?: string; tone?: Tone }) {
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      <path d={MARK_LINES} fill={tone === "ink" ? "var(--color-ink)" : "#fff"} />
      <rect {...MARK_CURSOR} fill="var(--color-accent)" className="mark-cursor" />
    </svg>
  );
}

export function Logo({ tone = "ink" }: { tone?: Tone }) {
  return (
    <span className="group/logo inline-flex items-center gap-2">
      <Mark className="size-7" tone={tone} />
      <span
        className={`text-[1.2rem] font-semibold tracking-[-0.045em] ${
          tone === "ink" ? "text-ink" : "text-white"
        }`}
      >
        digistart
      </span>
    </span>
  );
}
