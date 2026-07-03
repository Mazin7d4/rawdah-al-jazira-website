/**
 * Simple in-memory sliding-window rate limiter for the contact endpoint.
 *
 * On serverless hosting each instance keeps its own window, so this is
 * best-effort rather than a hard global limit — which is proportionate for
 * a contact form that is also protected by Turnstile and a honeypot.
 */
const WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const MAX_REQUESTS = 5;

const hits = new Map<string, number[]>();

export function isRateLimited(key: string): boolean {
  const now = Date.now();
  const windowStart = now - WINDOW_MS;
  const recent = (hits.get(key) ?? []).filter((t) => t > windowStart);

  if (recent.length >= MAX_REQUESTS) {
    hits.set(key, recent);
    return true;
  }

  recent.push(now);
  hits.set(key, recent);

  // Prevent unbounded growth from many distinct IPs.
  if (hits.size > 10_000) {
    for (const [k, timestamps] of hits) {
      if (timestamps.every((t) => t <= windowStart)) hits.delete(k);
    }
  }
  return false;
}
