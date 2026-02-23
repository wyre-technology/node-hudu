import { describe, it, expect } from 'vitest';
import { HuduClient } from '../../src/client.js';
import { HuduNotFoundError } from '../../src/errors.js';

describe('ArticlesResource', () => {
  const client = new HuduClient({
    baseUrl: 'https://test.huducloud.com',
    apiKey: 'test-api-key',
  });

  describe('list', () => {
    it('should list articles', async () => {
      const articles = await client.articles.list();
      expect(articles).toHaveLength(2);
      expect(articles[0]?.name).toBe('Onboarding Guide');
    });
  });

  describe('get', () => {
    it('should get a single article', async () => {
      const article = await client.articles.get(1);
      expect(article.id).toBe(1);
      expect(article.name).toBe('Onboarding Guide');
    });

    it('should throw NotFoundError for non-existent article', async () => {
      await expect(client.articles.get(999)).rejects.toThrow(HuduNotFoundError);
    });
  });

  describe('create', () => {
    it('should create an article', async () => {
      const article = await client.articles.create({ name: 'New Article' });
      expect(article.id).toBe(3);
      expect(article.name).toBe('New Article');
    });
  });

  describe('update', () => {
    it('should update an article', async () => {
      const article = await client.articles.update(1, { name: 'Updated Onboarding Guide' });
      expect(article.id).toBe(1);
      expect(article.name).toBe('Updated Onboarding Guide');
    });
  });

  describe('delete', () => {
    it('should delete an article', async () => {
      await expect(client.articles.delete(1)).resolves.toBeUndefined();
    });
  });

  describe('archive', () => {
    it('should archive an article', async () => {
      await expect(client.articles.archive(1)).resolves.toBeUndefined();
    });
  });
});
