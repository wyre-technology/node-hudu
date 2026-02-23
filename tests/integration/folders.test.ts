import { describe, it, expect } from 'vitest';
import { HuduClient } from '../../src/client.js';
import { HuduNotFoundError } from '../../src/errors.js';

describe('FoldersResource', () => {
  const client = new HuduClient({
    baseUrl: 'https://test.huducloud.com',
    apiKey: 'test-api-key',
  });

  describe('list', () => {
    it('should list folders', async () => {
      const folders = await client.folders.list();
      expect(folders).toHaveLength(2);
      expect(folders[0]?.name).toBe('Documentation');
    });
  });

  describe('get', () => {
    it('should get a single folder', async () => {
      const folder = await client.folders.get(1);
      expect(folder.id).toBe(1);
      expect(folder.name).toBe('Documentation');
    });

    it('should throw NotFoundError for non-existent folder', async () => {
      await expect(client.folders.get(999)).rejects.toThrow(HuduNotFoundError);
    });
  });

  describe('create', () => {
    it('should create a folder', async () => {
      const folder = await client.folders.create({ name: 'New Folder' });
      expect(folder.id).toBe(3);
      expect(folder.name).toBe('New Folder');
    });
  });

  describe('update', () => {
    it('should update a folder', async () => {
      const folder = await client.folders.update(1, { name: 'Updated Documentation' });
      expect(folder.id).toBe(1);
      expect(folder.name).toBe('Updated Documentation');
    });
  });

  describe('delete', () => {
    it('should delete a folder', async () => {
      await expect(client.folders.delete(1)).resolves.toBeUndefined();
    });
  });
});
