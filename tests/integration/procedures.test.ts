import { describe, it, expect } from 'vitest';
import { HuduClient } from '../../src/client.js';
import { HuduNotFoundError } from '../../src/errors.js';

describe('ProceduresResource', () => {
  const client = new HuduClient({
    baseUrl: 'https://test.huducloud.com',
    apiKey: 'test-api-key',
  });

  describe('list', () => {
    it('should list procedures', async () => {
      const procedures = await client.procedures.list();
      expect(procedures).toHaveLength(2);
      expect(procedures[0]?.name).toBe('Server Reboot Procedure');
    });
  });

  describe('get', () => {
    it('should get a single procedure', async () => {
      const procedure = await client.procedures.get(1);
      expect(procedure.id).toBe(1);
      expect(procedure.name).toBe('Server Reboot Procedure');
    });

    it('should throw NotFoundError for non-existent procedure', async () => {
      await expect(client.procedures.get(999)).rejects.toThrow(HuduNotFoundError);
    });
  });

  describe('create', () => {
    it('should create a procedure', async () => {
      const procedure = await client.procedures.create({ name: 'New Procedure' });
      expect(procedure.id).toBe(3);
      expect(procedure.name).toBe('New Procedure');
    });
  });

  describe('update', () => {
    it('should update a procedure', async () => {
      const procedure = await client.procedures.update(1, { name: 'Updated Reboot Procedure' });
      expect(procedure.id).toBe(1);
      expect(procedure.name).toBe('Updated Reboot Procedure');
    });
  });

  describe('delete', () => {
    it('should delete a procedure', async () => {
      await expect(client.procedures.delete(1)).resolves.toBeUndefined();
    });
  });
});
