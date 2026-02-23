import { describe, it, expect } from 'vitest';
import { HuduClient } from '../../src/client.js';
import { HuduNotFoundError } from '../../src/errors.js';

describe('WebsitesResource', () => {
  const client = new HuduClient({
    baseUrl: 'https://test.huducloud.com',
    apiKey: 'test-api-key',
  });

  describe('list', () => {
    it('should list websites', async () => {
      const websites = await client.websites.list();
      expect(websites).toHaveLength(2);
      expect(websites[0]?.name).toBe('Acme Website');
    });
  });

  describe('get', () => {
    it('should get a single website', async () => {
      const website = await client.websites.get(1);
      expect(website.id).toBe(1);
      expect(website.name).toBe('Acme Website');
      expect(website.url).toBe('https://acme.com');
    });

    it('should throw NotFoundError for non-existent website', async () => {
      await expect(client.websites.get(999)).rejects.toThrow(HuduNotFoundError);
    });
  });

  describe('create', () => {
    it('should create a website', async () => {
      const website = await client.websites.create({
        name: 'New Website',
        url: 'https://new.example.com',
      });
      expect(website.id).toBe(3);
      expect(website.name).toBe('New Website');
    });
  });

  describe('update', () => {
    it('should update a website', async () => {
      const website = await client.websites.update(1, { name: 'Updated Acme Website' });
      expect(website.id).toBe(1);
      expect(website.name).toBe('Updated Acme Website');
    });
  });

  describe('delete', () => {
    it('should delete a website', async () => {
      await expect(client.websites.delete(1)).resolves.toBeUndefined();
    });
  });
});
