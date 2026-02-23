import { describe, it, expect } from 'vitest';
import { HuduClient } from '../../src/client.js';

describe('RelationsResource', () => {
  const client = new HuduClient({
    baseUrl: 'https://test.huducloud.com',
    apiKey: 'test-api-key',
  });

  describe('list', () => {
    it('should list relations', async () => {
      const relations = await client.relations.list();
      expect(relations).toHaveLength(2);
      expect(relations[0]?.fromable_type).toBe('Asset');
    });
  });

  describe('create', () => {
    it('should create a relation', async () => {
      const relation = await client.relations.create({
        fromable_type: 'Asset',
        fromable_id: 1,
        toable_type: 'Company',
        toable_id: 1,
      });
      expect(relation.id).toBe(3);
      expect(relation.description).toBe('Belongs to');
    });
  });

  describe('delete', () => {
    it('should delete a relation', async () => {
      await expect(client.relations.delete(1)).resolves.toBeUndefined();
    });
  });
});
