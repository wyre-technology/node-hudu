import { describe, it, expect } from 'vitest';
import { HuduClient } from '../../src/client.js';
import { HuduNotFoundError } from '../../src/errors.js';

describe('MagicDashResource', () => {
  const client = new HuduClient({
    baseUrl: 'https://test.huducloud.com',
    apiKey: 'test-api-key',
  });

  describe('list', () => {
    it('should list magic dash items', async () => {
      const items = await client.magicDash.list();
      expect(items).toHaveLength(2);
      expect(items[0]?.title).toBe('Server Health');
    });
  });

  describe('get', () => {
    it('should get a single magic dash item', async () => {
      const item = await client.magicDash.get(1);
      expect(item.id).toBe(1);
      expect(item.title).toBe('Server Health');
    });

    it('should throw NotFoundError for non-existent item', async () => {
      await expect(client.magicDash.get(999)).rejects.toThrow(HuduNotFoundError);
    });
  });

  describe('create', () => {
    it('should create a magic dash item', async () => {
      const item = await client.magicDash.create({
        title: 'New Dashboard',
        content: 'Custom content',
      });
      expect(item.id).toBe(3);
      expect(item.title).toBe('New Dashboard');
    });
  });

  describe('update', () => {
    it('should update a magic dash item', async () => {
      const item = await client.magicDash.update(1, { title: 'Updated Server Health' });
      expect(item.id).toBe(1);
      expect(item.title).toBe('Updated Server Health');
    });
  });

  describe('delete', () => {
    it('should delete a magic dash item', async () => {
      await expect(client.magicDash.delete(1)).resolves.toBeUndefined();
    });
  });
});
