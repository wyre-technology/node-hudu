import { describe, it, expect } from 'vitest';
import { HuduClient } from '../../src/client.js';
import { HuduNotFoundError } from '../../src/errors.js';

describe('AssetPasswordsResource', () => {
  const client = new HuduClient({
    baseUrl: 'https://test.huducloud.com',
    apiKey: 'test-api-key',
  });

  describe('list', () => {
    it('should list asset passwords', async () => {
      const passwords = await client.assetPasswords.list();
      expect(passwords).toHaveLength(2);
      expect(passwords[0]?.name).toBe('Admin Password');
    });
  });

  describe('get', () => {
    it('should get a single asset password', async () => {
      const password = await client.assetPasswords.get(1);
      expect(password.id).toBe(1);
      expect(password.name).toBe('Admin Password');
      expect(password.username).toBe('admin');
    });

    it('should throw NotFoundError for non-existent password', async () => {
      await expect(client.assetPasswords.get(999)).rejects.toThrow(HuduNotFoundError);
    });
  });

  describe('create', () => {
    it('should create an asset password', async () => {
      const password = await client.assetPasswords.create({
        company_id: 1,
        name: 'New Password',
        username: 'newuser',
      });
      expect(password.id).toBe(3);
      expect(password.name).toBe('New Password');
    });
  });

  describe('update', () => {
    it('should update an asset password', async () => {
      const password = await client.assetPasswords.update(1, { name: 'Updated Password' });
      expect(password.id).toBe(1);
      expect(password.name).toBe('Updated Password');
    });
  });

  describe('delete', () => {
    it('should delete an asset password', async () => {
      await expect(client.assetPasswords.delete(1)).resolves.toBeUndefined();
    });
  });
});
