import { describe, it, expect } from 'vitest';
import { HuduClient } from '../../src/client.js';
import { HuduNotFoundError } from '../../src/errors.js';

describe('AssetLayoutsResource', () => {
  const client = new HuduClient({
    baseUrl: 'https://test.huducloud.com',
    apiKey: 'test-api-key',
  });

  describe('list', () => {
    it('should list asset layouts', async () => {
      const layouts = await client.assetLayouts.list();
      expect(layouts).toHaveLength(2);
      expect(layouts[0]?.name).toBe('Server');
    });
  });

  describe('get', () => {
    it('should get a single asset layout', async () => {
      const layout = await client.assetLayouts.get(1);
      expect(layout.id).toBe(1);
      expect(layout.name).toBe('Server');
      expect(layout.fields).toHaveLength(2);
    });

    it('should throw NotFoundError for non-existent layout', async () => {
      await expect(client.assetLayouts.get(999)).rejects.toThrow(HuduNotFoundError);
    });
  });

  describe('create', () => {
    it('should create an asset layout', async () => {
      const layout = await client.assetLayouts.create({ name: 'New Layout' });
      expect(layout.id).toBe(3);
      expect(layout.name).toBe('New Layout');
    });
  });

  describe('update', () => {
    it('should update an asset layout', async () => {
      const layout = await client.assetLayouts.update(1, { name: 'Updated Server Layout' });
      expect(layout.id).toBe(1);
      expect(layout.name).toBe('Updated Server Layout');
    });
  });
});
