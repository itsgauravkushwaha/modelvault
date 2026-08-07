/**
 * Production-safe in-memory rate limiter for serverless API routes.
 * Tracks request counts per client IP over sliding time windows.
 */

interface RateLimitRecord {
  count: number;
  resetTime: number;
}

const ipMap = new Map<string, RateLimitRecord>();

// Clean up expired IP records every 5 minutes to prevent memory leaks
setInterval(() => {
  const now = Date.now();
  for (const [key, value] of ipMap.entries()) {
    if (now > value.resetTime) {
      ipMap.delete(key);
    }
  }
}, 5 * 60 * 1000);

export function getClientIp(req: Request): string {
  const forwarded = req.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }
  const realIp = req.headers.get("x-real-ip");
  if (realIp) {
    return realIp.trim();
  }
  return "127.0.0.1";
}

/**
 * Checks rate limit for a request.
 * Returns { allowed: true } if within limit, or { allowed: false, remainingMs } if rate-limited.
 */
export function checkRateLimit(
  req: Request,
  routeKey: string,
  limit: number = 10,
  windowMs: number = 60 * 1000
): { allowed: boolean; remainingMs: number } {
  const ip = getClientIp(req);
  const key = `${routeKey}:${ip}`;
  const now = Date.now();

  const record = ipMap.get(key);

  if (!record || now > record.resetTime) {
    ipMap.set(key, { count: 1, resetTime: now + windowMs });
    return { allowed: true, remainingMs: windowMs };
  }

  if (record.count >= limit) {
    return { allowed: false, remainingMs: record.resetTime - now };
  }

  record.count += 1;
  return { allowed: true, remainingMs: record.resetTime - now };
}
