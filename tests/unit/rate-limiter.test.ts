import { describe, it, expect, vi, beforeEach } from 'vitest';
import { RateLimiter } from '../../src/rate-limiter.js';
import { DEFAULT_RATE_LIMIT_CONFIG } from '../../src/config.js';

describe('RateLimiter', () => {
  let rateLimiter: RateLimiter;

  beforeEach(() => {
    rateLimiter = new RateLimiter(DEFAULT_RATE_LIMIT_CONFIG);
  });

  describe('waitForSlot', () => {
    it('should resolve immediately when rate limiting is disabled', async () => {
      const disabledLimiter = new RateLimiter({ ...DEFAULT_RATE_LIMIT_CONFIG, enabled: false });
      await expect(disabledLimiter.waitForSlot()).resolves.toBeUndefined();
    });

    it('should resolve immediately when under threshold', async () => {
      await expect(rateLimiter.waitForSlot()).resolves.toBeUndefined();
    });
  });

  describe('recordRequest', () => {
    it('should not record when disabled', () => {
      const disabledLimiter = new RateLimiter({ ...DEFAULT_RATE_LIMIT_CONFIG, enabled: false });
      disabledLimiter.recordRequest();
      expect(disabledLimiter.getRemainingRequests()).toBe(300);
    });

    it('should track requests', () => {
      rateLimiter.recordRequest();
      rateLimiter.recordRequest();
      expect(rateLimiter.getRemainingRequests()).toBe(298);
    });
  });

  describe('getCurrentRate', () => {
    it('should return 0 when no requests made', () => {
      expect(rateLimiter.getCurrentRate()).toBe(0);
    });

    it('should calculate rate correctly', () => {
      for (let i = 0; i < 30; i++) {
        rateLimiter.recordRequest();
      }
      expect(rateLimiter.getCurrentRate()).toBeCloseTo(0.1);
    });
  });

  describe('getRemainingRequests', () => {
    it('should return max when no requests made', () => {
      expect(rateLimiter.getRemainingRequests()).toBe(300);
    });

    it('should decrease with each request', () => {
      rateLimiter.recordRequest();
      expect(rateLimiter.getRemainingRequests()).toBe(299);
    });
  });

  describe('shouldRetry', () => {
    it('should return true when under max retries', () => {
      expect(rateLimiter.shouldRetry(0)).toBe(true);
      expect(rateLimiter.shouldRetry(1)).toBe(true);
      expect(rateLimiter.shouldRetry(2)).toBe(true);
    });

    it('should return false when at or over max retries', () => {
      expect(rateLimiter.shouldRetry(3)).toBe(false);
      expect(rateLimiter.shouldRetry(4)).toBe(false);
    });
  });

  describe('parseRetryAfter', () => {
    it('should return default when header is null', () => {
      expect(rateLimiter.parseRetryAfter(null)).toBe(5_000);
    });

    it('should parse seconds value', () => {
      expect(rateLimiter.parseRetryAfter('10')).toBe(10_000);
    });

    it('should parse HTTP date', () => {
      const futureDate = new Date(Date.now() + 30_000);
      const result = rateLimiter.parseRetryAfter(futureDate.toUTCString());
      expect(result).toBeGreaterThan(25_000);
      expect(result).toBeLessThanOrEqual(30_000);
    });

    it('should return default for invalid values', () => {
      expect(rateLimiter.parseRetryAfter('invalid')).toBe(5_000);
    });
  });
});
