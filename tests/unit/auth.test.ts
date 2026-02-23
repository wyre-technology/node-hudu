import { describe, it, expect } from 'vitest';
import { AuthManager } from '../../src/auth.js';
import { resolveConfig } from '../../src/config.js';

describe('AuthManager', () => {
  const config = resolveConfig({
    baseUrl: 'https://test.huducloud.com',
    apiKey: 'test-api-key-12345',
  });

  const authManager = new AuthManager(config);

  describe('getApiKey', () => {
    it('should return the API key', () => {
      expect(authManager.getApiKey()).toBe('test-api-key-12345');
    });
  });

  describe('getAuthHeaders', () => {
    it('should return x-api-key header', () => {
      const headers = authManager.getAuthHeaders();
      expect(headers).toEqual({ 'x-api-key': 'test-api-key-12345' });
    });
  });
});
