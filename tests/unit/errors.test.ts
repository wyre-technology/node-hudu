import { describe, it, expect } from 'vitest';
import {
  HuduError,
  HuduAuthenticationError,
  HuduForbiddenError,
  HuduNotFoundError,
  HuduValidationError,
  HuduRateLimitError,
  HuduServerError,
} from '../../src/errors.js';

describe('HuduError', () => {
  it('should create base error', () => {
    const error = new HuduError('Test error', 400, { detail: 'bad' });
    expect(error.message).toBe('Test error');
    expect(error.statusCode).toBe(400);
    expect(error.response).toEqual({ detail: 'bad' });
    expect(error.name).toBe('HuduError');
    expect(error).toBeInstanceOf(Error);
    expect(error).toBeInstanceOf(HuduError);
  });

  it('should default statusCode to 0', () => {
    const error = new HuduError('Test');
    expect(error.statusCode).toBe(0);
  });
});

describe('HuduAuthenticationError', () => {
  it('should create authentication error', () => {
    const error = new HuduAuthenticationError('Auth failed');
    expect(error.statusCode).toBe(401);
    expect(error.name).toBe('HuduAuthenticationError');
    expect(error).toBeInstanceOf(HuduError);
    expect(error).toBeInstanceOf(HuduAuthenticationError);
  });
});

describe('HuduForbiddenError', () => {
  it('should create forbidden error', () => {
    const error = new HuduForbiddenError('Forbidden');
    expect(error.statusCode).toBe(403);
    expect(error.name).toBe('HuduForbiddenError');
    expect(error).toBeInstanceOf(HuduError);
  });
});

describe('HuduNotFoundError', () => {
  it('should create not found error', () => {
    const error = new HuduNotFoundError('Not found');
    expect(error.statusCode).toBe(404);
    expect(error.name).toBe('HuduNotFoundError');
    expect(error).toBeInstanceOf(HuduError);
  });
});

describe('HuduValidationError', () => {
  it('should create validation error with field errors', () => {
    const errors = [{ field: 'name', message: 'is required' }];
    const error = new HuduValidationError('Validation failed', errors);
    expect(error.statusCode).toBe(400);
    expect(error.errors).toEqual(errors);
    expect(error.name).toBe('HuduValidationError');
    expect(error).toBeInstanceOf(HuduError);
  });

  it('should default to empty errors array', () => {
    const error = new HuduValidationError('Validation failed');
    expect(error.errors).toEqual([]);
  });
});

describe('HuduRateLimitError', () => {
  it('should create rate limit error', () => {
    const error = new HuduRateLimitError('Rate limited', 10000);
    expect(error.statusCode).toBe(429);
    expect(error.retryAfter).toBe(10000);
    expect(error.name).toBe('HuduRateLimitError');
    expect(error).toBeInstanceOf(HuduError);
  });

  it('should default retryAfter to 5000', () => {
    const error = new HuduRateLimitError('Rate limited');
    expect(error.retryAfter).toBe(5000);
  });
});

describe('HuduServerError', () => {
  it('should create server error', () => {
    const error = new HuduServerError('Server error', 502);
    expect(error.statusCode).toBe(502);
    expect(error.name).toBe('HuduServerError');
    expect(error).toBeInstanceOf(HuduError);
  });

  it('should default to 500', () => {
    const error = new HuduServerError('Server error');
    expect(error.statusCode).toBe(500);
  });
});
