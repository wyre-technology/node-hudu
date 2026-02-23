import { describe, it, expect } from 'vitest';
import { http, HttpResponse } from 'msw';
import { server } from '../mocks/server.js';
import { HuduClient } from '../../src/client.js';
import {
  HuduAuthenticationError,
  HuduForbiddenError,
  HuduNotFoundError,
  HuduValidationError,
  HuduRateLimitError,
  HuduServerError,
} from '../../src/errors.js';

const BASE_URL = 'https://test.huducloud.com';

describe('HttpClient error handling', () => {
  const client = new HuduClient({
    baseUrl: BASE_URL,
    apiKey: 'test-api-key',
    rateLimit: { enabled: false },
  });

  it('should throw HuduAuthenticationError on 401', async () => {
    server.use(
      http.get(`${BASE_URL}/api/v1/companies`, () => {
        return HttpResponse.json({ error: 'unauthorized' }, { status: 401 });
      })
    );

    await expect(client.companies.list()).rejects.toThrow(HuduAuthenticationError);
  });

  it('should throw HuduForbiddenError on 403', async () => {
    server.use(
      http.get(`${BASE_URL}/api/v1/companies`, () => {
        return HttpResponse.json({ error: 'forbidden' }, { status: 403 });
      })
    );

    await expect(client.companies.list()).rejects.toThrow(HuduForbiddenError);
  });

  it('should throw HuduNotFoundError on 404', async () => {
    server.use(
      http.get(`${BASE_URL}/api/v1/companies/:id`, () => {
        return HttpResponse.json({ error: 'not_found' }, { status: 404 });
      })
    );

    await expect(client.companies.get(999)).rejects.toThrow(HuduNotFoundError);
  });

  it('should throw HuduValidationError on 422', async () => {
    server.use(
      http.post(`${BASE_URL}/api/v1/companies`, () => {
        return HttpResponse.json(
          { errors: [{ field: 'name', message: 'is required' }] },
          { status: 422 }
        );
      })
    );

    await expect(client.companies.create({ name: '' })).rejects.toThrow(HuduValidationError);
  });

  it('should throw HuduRateLimitError on 429 after retries exhausted', async () => {
    const rateLimitClient = new HuduClient({
      baseUrl: BASE_URL,
      apiKey: 'test-api-key',
      rateLimit: { enabled: false, maxRetries: 0 },
    });

    server.use(
      http.get(`${BASE_URL}/api/v1/companies`, () => {
        return HttpResponse.json(
          { error: 'rate_limited' },
          { status: 429, headers: { 'Retry-After': '1' } }
        );
      })
    );

    await expect(rateLimitClient.companies.list()).rejects.toThrow(HuduRateLimitError);
  });

  it('should throw HuduServerError on 500 after retry', async () => {
    let callCount = 0;
    server.use(
      http.get(`${BASE_URL}/api/v1/companies`, () => {
        callCount++;
        return HttpResponse.json(
          { error: 'internal_server_error' },
          { status: 500 }
        );
      })
    );

    await expect(client.companies.list()).rejects.toThrow(HuduServerError);
    expect(callCount).toBe(2); // Initial + 1 retry
  });
});
