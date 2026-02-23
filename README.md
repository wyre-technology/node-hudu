# @wyre-technology/node-hudu

Comprehensive, fully-typed Node.js/TypeScript library for the Hudu IT documentation API.

## Features

- Full TypeScript support with comprehensive type definitions
- API key authentication
- Built-in rate limiting (300 req/min default) with configurable thresholds
- Automatic retry logic for rate limits and server errors
- 11 resource endpoints with full CRUD support
- Automatic pagination with `listAll()` methods
- Zero runtime dependencies — uses native fetch

## Installation

```bash
npm install @wyre-technology/node-hudu
```

This package is published to GitHub Packages. Add the following to your `.npmrc` file:

```
# .npmrc
@wyre-technology:registry=https://npm.pkg.github.com
```

## Quick Start

```typescript
import { HuduClient } from '@wyre-technology/node-hudu';

const client = new HuduClient({
  baseUrl: 'https://acme.huducloud.com',
  apiKey: 'your-api-key',
});

// List companies
const companies = await client.companies.list();

// Get a specific asset
const asset = await client.assets.get(123);
```

## Configuration

### Basic Configuration

```typescript
const client = new HuduClient({
  baseUrl: 'https://acme.huducloud.com',
  apiKey: 'your-api-key',
});
```

### Rate Limiting Configuration

All rate limiting options are optional and have sensible defaults:

```typescript
const client = new HuduClient({
  baseUrl: 'https://acme.huducloud.com',
  apiKey: 'your-api-key',
  rateLimit: {
    enabled: true,            // Enable/disable rate limiting (default: true)
    maxRequests: 300,         // Max requests per window (default: 300)
    windowMs: 60_000,         // Window duration in ms (default: 60000)
    throttleThreshold: 0.8,   // Start throttling at 80% capacity (default: 0.8)
    retryAfterMs: 5_000,      // Retry delay on rate limit hit (default: 5000)
    maxRetries: 3,            // Max retry attempts (default: 3)
  },
});
```

## API Reference

### Companies

```typescript
// List companies (paginated)
const companies = await client.companies.list({ page: 1 });

// List all companies (auto-paginated)
const allCompanies = await client.companies.listAll();

// Get a single company
const company = await client.companies.get(1);

// Create a company
const newCompany = await client.companies.create({ name: 'Acme Corp' });

// Update a company
const updated = await client.companies.update(1, { name: 'Acme Inc' });

// Delete a company
await client.companies.delete(1);

// Archive / unarchive
await client.companies.archive(1);
await client.companies.unarchive(1);
```

### Assets

```typescript
const assets = await client.assets.list({ company_id: 1 });
const allAssets = await client.assets.listAll({ company_id: 1 });
const asset = await client.assets.get(1);
const newAsset = await client.assets.create({ name: 'Server-01', company_id: 1, asset_layout_id: 1 });
const updated = await client.assets.update(1, { name: 'Server-01-Updated' });
await client.assets.delete(1);
await client.assets.archive(1);
```

### Asset Layouts

```typescript
const layouts = await client.assetLayouts.list();
const allLayouts = await client.assetLayouts.listAll();
const layout = await client.assetLayouts.get(1);
const newLayout = await client.assetLayouts.create({ name: 'Server', fields: [] });
const updated = await client.assetLayouts.update(1, { name: 'Server v2' });
```

### Asset Passwords

```typescript
const passwords = await client.assetPasswords.list();
const allPasswords = await client.assetPasswords.listAll();
const password = await client.assetPasswords.get(1);
const newPassword = await client.assetPasswords.create({ name: 'Admin', password: 'secret' });
const updated = await client.assetPasswords.update(1, { name: 'Admin v2' });
await client.assetPasswords.delete(1);
```

### Articles

```typescript
const articles = await client.articles.list();
const allArticles = await client.articles.listAll();
const article = await client.articles.get(1);
const newArticle = await client.articles.create({ name: 'Setup Guide', content: '...' });
const updated = await client.articles.update(1, { name: 'Setup Guide v2' });
await client.articles.delete(1);
await client.articles.archive(1);
```

### Websites

```typescript
const websites = await client.websites.list();
const allWebsites = await client.websites.listAll();
const website = await client.websites.get(1);
const newWebsite = await client.websites.create({ name: 'acme.com' });
const updated = await client.websites.update(1, { name: 'acme.io' });
await client.websites.delete(1);
```

### Folders

```typescript
const folders = await client.folders.list();
const allFolders = await client.folders.listAll();
const folder = await client.folders.get(1);
const newFolder = await client.folders.create({ name: 'Documentation' });
const updated = await client.folders.update(1, { name: 'Docs' });
await client.folders.delete(1);
```

### Procedures

```typescript
const procedures = await client.procedures.list();
const allProcedures = await client.procedures.listAll();
const procedure = await client.procedures.get(1);
const newProcedure = await client.procedures.create({ name: 'Onboarding' });
const updated = await client.procedures.update(1, { name: 'Onboarding v2' });
await client.procedures.delete(1);
```

### Activity Logs

```typescript
const logs = await client.activityLogs.list();
const allLogs = await client.activityLogs.listAll();
```

### Relations

```typescript
const relations = await client.relations.list();
const allRelations = await client.relations.listAll();
const newRelation = await client.relations.create({
  toable_type: 'Asset',
  toable_id: 1,
  fromable_type: 'Asset',
  fromable_id: 2,
});
await client.relations.delete(1);
```

### Magic Dash

```typescript
const dashItems = await client.magicDash.list();
const allDashItems = await client.magicDash.listAll();
const dashItem = await client.magicDash.get(1);
const newDash = await client.magicDash.create({ title: 'Status', company_name: 'Acme' });
const updated = await client.magicDash.update(1, { title: 'Updated Status' });
await client.magicDash.delete(1);
```

## Error Handling

The library provides specific error classes for different failure scenarios:

```typescript
import {
  HuduError,
  HuduAuthenticationError,
  HuduForbiddenError,
  HuduNotFoundError,
  HuduValidationError,
  HuduRateLimitError,
  HuduServerError,
} from '@wyre-technology/node-hudu';

try {
  const company = await client.companies.get(999);
} catch (error) {
  if (error instanceof HuduNotFoundError) {
    console.error('Company not found:', error.message);
  } else if (error instanceof HuduAuthenticationError) {
    console.error('Invalid API key:', error.message);
  } else if (error instanceof HuduForbiddenError) {
    console.error('Access denied:', error.message);
  } else if (error instanceof HuduValidationError) {
    console.error('Validation failed:', error.errors);
  } else if (error instanceof HuduRateLimitError) {
    console.error('Rate limited, retry after:', error.retryAfter, 'ms');
  } else if (error instanceof HuduServerError) {
    console.error('Server error:', error.statusCode, error.message);
  } else if (error instanceof HuduError) {
    console.error('Hudu API error:', error.statusCode, error.message);
  }
}
```

## TypeScript Support

All request and response types are exported for full type safety:

```typescript
import type {
  Company,
  CreateCompanyParams,
  UpdateCompanyParams,
  Asset,
  CreateAssetParams,
  AssetLayout,
  AssetPassword,
  Article,
  Website,
  Folder,
  Procedure,
  ActivityLog,
  Relation,
  MagicDash,
  PaginationParams,
} from '@wyre-technology/node-hudu';
```

## Rate Limit Status

Monitor your current rate limit usage:

```typescript
const status = client.getRateLimitStatus();
console.log(`Remaining requests: ${status.remaining}`);
console.log(`Current rate: ${status.rate} req/min`);
```

## License

Apache-2.0

## Author

[Wyre Technology](https://github.com/wyre-technology)
