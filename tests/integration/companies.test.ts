import { describe, it, expect } from 'vitest';
import { HuduClient } from '../../src/client.js';
import { HuduNotFoundError } from '../../src/errors.js';

describe('CompaniesResource', () => {
  const client = new HuduClient({
    baseUrl: 'https://test.huducloud.com',
    apiKey: 'test-api-key',
  });

  describe('list', () => {
    it('should list companies', async () => {
      const companies = await client.companies.list();
      expect(companies).toHaveLength(2);
      expect(companies[0]?.name).toBe('Acme Corp');
    });
  });

  describe('get', () => {
    it('should get a single company', async () => {
      const company = await client.companies.get(1);
      expect(company.id).toBe(1);
      expect(company.name).toBe('Acme Corp');
    });

    it('should throw NotFoundError for non-existent company', async () => {
      await expect(client.companies.get(999)).rejects.toThrow(HuduNotFoundError);
    });
  });

  describe('create', () => {
    it('should create a company', async () => {
      const company = await client.companies.create({ name: 'New Company' });
      expect(company.id).toBe(3);
      expect(company.name).toBe('New Company');
    });
  });

  describe('update', () => {
    it('should update a company', async () => {
      const company = await client.companies.update(1, { name: 'Updated Acme Corp' });
      expect(company.id).toBe(1);
      expect(company.name).toBe('Updated Acme Corp');
    });
  });

  describe('delete', () => {
    it('should delete a company', async () => {
      await expect(client.companies.delete(1)).resolves.toBeUndefined();
    });
  });

  describe('archive', () => {
    it('should archive a company', async () => {
      await expect(client.companies.archive(1)).resolves.toBeUndefined();
    });
  });

  describe('unarchive', () => {
    it('should unarchive a company', async () => {
      await expect(client.companies.unarchive(1)).resolves.toBeUndefined();
    });
  });
});
