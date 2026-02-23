import { describe, it, expect } from 'vitest';
import { HuduClient } from '../../src/client.js';

describe('ActivityLogsResource', () => {
  const client = new HuduClient({
    baseUrl: 'https://test.huducloud.com',
    apiKey: 'test-api-key',
  });

  describe('list', () => {
    it('should list activity logs', async () => {
      const logs = await client.activityLogs.list();
      expect(logs).toHaveLength(2);
      expect(logs[0]?.action).toBe('created');
      expect(logs[0]?.user_email).toBe('admin@acme.com');
    });
  });
});
