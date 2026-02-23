import { describe, it, expect } from 'vitest';
import { resolveConfig, DEFAULT_RATE_LIMIT_CONFIG } from '../../src/config.js';

describe('resolveConfig', () => {
  it('should resolve config with defaults', () => {
    const config = resolveConfig({
      baseUrl: 'https://test.huducloud.com',
      apiKey: 'test-api-key',
    });

    expect(config.baseUrl).toBe('https://test.huducloud.com');
    expect(config.apiKey).toBe('test-api-key');
    expect(config.rateLimit).toEqual(DEFAULT_RATE_LIMIT_CONFIG);
  });

  it('should strip trailing slash from baseUrl', () => {
    const config = resolveConfig({
      baseUrl: 'https://test.huducloud.com/',
      apiKey: 'test-api-key',
    });

    expect(config.baseUrl).toBe('https://test.huducloud.com');
  });

  it('should merge custom rate limit config', () => {
    const config = resolveConfig({
      baseUrl: 'https://test.huducloud.com',
      apiKey: 'test-api-key',
      rateLimit: { maxRequests: 100, maxRetries: 5 },
    });

    expect(config.rateLimit.maxRequests).toBe(100);
    expect(config.rateLimit.maxRetries).toBe(5);
    expect(config.rateLimit.windowMs).toBe(DEFAULT_RATE_LIMIT_CONFIG.windowMs);
  });

  it('should throw if baseUrl is missing', () => {
    expect(() => resolveConfig({ baseUrl: '', apiKey: 'key' })).toThrow('baseUrl is required');
  });

  it('should throw if apiKey is missing', () => {
    expect(() => resolveConfig({ baseUrl: 'https://test.com', apiKey: '' })).toThrow('apiKey is required');
  });
});

describe('DEFAULT_RATE_LIMIT_CONFIG', () => {
  it('should have correct defaults', () => {
    expect(DEFAULT_RATE_LIMIT_CONFIG.enabled).toBe(true);
    expect(DEFAULT_RATE_LIMIT_CONFIG.maxRequests).toBe(300);
    expect(DEFAULT_RATE_LIMIT_CONFIG.windowMs).toBe(60_000);
    expect(DEFAULT_RATE_LIMIT_CONFIG.throttleThreshold).toBe(0.8);
    expect(DEFAULT_RATE_LIMIT_CONFIG.retryAfterMs).toBe(5_000);
    expect(DEFAULT_RATE_LIMIT_CONFIG.maxRetries).toBe(3);
  });
});
