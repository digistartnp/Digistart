/* Practical email validation: stricter than <input type="email"> (which accepts
   "a@b"), plus typo suggestions for the domains our visitors actually use. */

const LOCAL = /^[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*$/;
const LABEL = /^[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?$/;

const COMMON_DOMAINS = [
  "gmail.com",
  "yahoo.com",
  "yahoo.co.jp",
  "outlook.com",
  "outlook.jp",
  "hotmail.com",
  "icloud.com",
  "me.com",
  "docomo.ne.jp",
  "ezweb.ne.jp",
  "au.com",
  "softbank.ne.jp",
  "i.softbank.jp",
  "proton.me",
];

/* Real-looking but non-existent TLDs that are almost always typos of .com. */
const TYPO_TLDS = new Set(["con", "cmo", "comm", "coom", "cpm", "vom", "xom", "ocm"]);

function distance(a: string, b: string) {
  const dp = Array.from({ length: a.length + 1 }, (_, i) => [i, ...Array(b.length).fill(0)]);
  for (let j = 1; j <= b.length; j++) dp[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    for (let j = 1; j <= b.length; j++) {
      dp[i][j] = Math.min(
        dp[i - 1][j] + 1,
        dp[i][j - 1] + 1,
        dp[i - 1][j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1)
      );
    }
  }
  return dp[a.length][b.length];
}

export type EmailCheck =
  | { ok: true; suggestion?: string }
  | { ok: false; reason: "empty" | "invalid"; suggestion?: string };

export function checkEmail(raw: string): EmailCheck {
  const value = raw.trim();
  if (!value) return { ok: false, reason: "empty" };

  const at = value.lastIndexOf("@");
  if (at < 1 || value.length > 254 || value.indexOf("@") !== at) return { ok: false, reason: "invalid" };

  const local = value.slice(0, at);
  const domain = value.slice(at + 1).toLowerCase();
  const labels = domain.split(".");
  const tld = labels[labels.length - 1];

  const valid =
    local.length <= 64 &&
    LOCAL.test(local) &&
    labels.length >= 2 &&
    labels.every((label) => LABEL.test(label)) &&
    /^[a-z]{2,24}$/.test(tld) &&
    !TYPO_TLDS.has(tld);

  /* Suggest a fix for near-misses like gmial.com or gmail.con — only when the
     rest of the address is sound and the domain is long enough to judge. */
  let suggestion: string | undefined;
  if (LOCAL.test(local) && domain.length >= 6 && !COMMON_DOMAINS.includes(domain)) {
    const maxEdits = domain.length >= 9 ? 2 : 1;
    const best = COMMON_DOMAINS.map((d) => ({ d, n: distance(domain, d) })).sort((x, y) => x.n - y.n)[0];
    if (best.n > 0 && best.n <= maxEdits) suggestion = `${local}@${best.d}`;
  }
  if (!suggestion && TYPO_TLDS.has(tld)) suggestion = `${local}@${labels.slice(0, -1).join(".")}.com`;

  return valid ? { ok: true, suggestion } : { ok: false, reason: "invalid", suggestion };
}
