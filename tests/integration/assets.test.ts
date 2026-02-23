import { describe, it, expect } from 'vitest';
import { HuduClient } from '../../src/client.js';
import { HuduNotFoundError } from '../../src/errors.js';

describe('AssetsResource', () => {
  const client = new HuduClient({
    baseUrl: 'https://test.huducloud.com',
    apiKey: 'test-api-key',
  });

  describe('list', () => {
    it('should list assets', async () => {
      const assets = await client.assets.list();
      expect(assets).toHaveLength(2);
      expect(assets[0]?.name).toBe('Server-01');
    });
  });

  describe('get', () => {
    it('should get a single asset', async () => {
      const asset = await client.assets.get(1);
      expect(asset.id).toBe(1);
      expect(asset.name).toBe('Server-01');
      expect(asset.primary_serial).toBe('SN12345');
    });

    it('should throw NotFoundError for non-existent asset', async () => {
      await expect(client.assets.get(999)).rejects.toThrow(HuduNotFoundError);
    });
  });

  describe('create', () => {
    it('should create an asset', async () => {
      const asset = await client.assets.create({
        company_id: 1,
        asset_layout_id: 1,
        name: 'New Server',
      });
      expect(asset.id).toBe(3);
      expect(asset.name).toBe('New Server');
    });
  });

  describe('update', () => {
    it('should update an asset', async () => {
      const asset = await client.assets.update(1, { name: 'Updated Server-01' });
      expect(asset.id).toBe(1);
      expect(asset.name).toBe('Updated Server-01');
    });
  });

  describe('delete', () => {
    it('should delete an asset', async () => {
      await expect(client.assets.delete(1)).resolves.toBeUndefined();
    });
  });

  describe('archive', () => {
    it('should archive an asset', async () => {
      await expect(client.assets.archive(1)).resolves.toBeUndefined();
    });
  });
});
