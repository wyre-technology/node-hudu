/**
 * MSW request handlers for mocking the Hudu API
 */

import { http, HttpResponse } from 'msw';
import * as fixtures from '../fixtures/index.js';

const BASE_URL = 'https://test.huducloud.com';

export const handlers = [
  // Companies endpoints
  http.get(`${BASE_URL}/api/v1/companies`, () => {
    return HttpResponse.json(fixtures.companies.list);
  }),

  http.get(`${BASE_URL}/api/v1/companies/:id`, ({ params }) => {
    const id = Number(params['id']);
    if (id === 999) {
      return HttpResponse.json({ error: 'not_found' }, { status: 404 });
    }
    return HttpResponse.json(fixtures.companies.single);
  }),

  http.post(`${BASE_URL}/api/v1/companies`, () => {
    return HttpResponse.json(fixtures.companies.created);
  }),

  http.put(`${BASE_URL}/api/v1/companies/:id`, ({ params }) => {
    const url = new URL(`${BASE_URL}/api/v1/companies/${params['id'] as string}`);
    // Check if this is an archive/unarchive request by looking at the original request URL
    return HttpResponse.json(fixtures.companies.updated);
  }),

  http.delete(`${BASE_URL}/api/v1/companies/:id`, () => {
    return new HttpResponse(null, { status: 204 });
  }),

  http.put(`${BASE_URL}/api/v1/companies/:id/archive`, () => {
    return new HttpResponse(null, { status: 204 });
  }),

  http.put(`${BASE_URL}/api/v1/companies/:id/unarchive`, () => {
    return new HttpResponse(null, { status: 204 });
  }),

  // Assets endpoints
  http.get(`${BASE_URL}/api/v1/assets`, () => {
    return HttpResponse.json(fixtures.assets.list);
  }),

  http.get(`${BASE_URL}/api/v1/assets/:id`, ({ params }) => {
    const id = Number(params['id']);
    if (id === 999) {
      return HttpResponse.json({ error: 'not_found' }, { status: 404 });
    }
    return HttpResponse.json(fixtures.assets.single);
  }),

  http.post(`${BASE_URL}/api/v1/assets`, () => {
    return HttpResponse.json(fixtures.assets.created);
  }),

  http.put(`${BASE_URL}/api/v1/assets/:id`, () => {
    return HttpResponse.json(fixtures.assets.updated);
  }),

  http.delete(`${BASE_URL}/api/v1/assets/:id`, () => {
    return new HttpResponse(null, { status: 204 });
  }),

  http.put(`${BASE_URL}/api/v1/assets/:id/archive`, () => {
    return new HttpResponse(null, { status: 204 });
  }),

  // Asset Layouts endpoints
  http.get(`${BASE_URL}/api/v1/asset_layouts`, () => {
    return HttpResponse.json(fixtures.assetLayouts.list);
  }),

  http.get(`${BASE_URL}/api/v1/asset_layouts/:id`, ({ params }) => {
    const id = Number(params['id']);
    if (id === 999) {
      return HttpResponse.json({ error: 'not_found' }, { status: 404 });
    }
    return HttpResponse.json(fixtures.assetLayouts.single);
  }),

  http.post(`${BASE_URL}/api/v1/asset_layouts`, () => {
    return HttpResponse.json(fixtures.assetLayouts.created);
  }),

  http.put(`${BASE_URL}/api/v1/asset_layouts/:id`, () => {
    return HttpResponse.json(fixtures.assetLayouts.updated);
  }),

  // Asset Passwords endpoints
  http.get(`${BASE_URL}/api/v1/asset_passwords`, () => {
    return HttpResponse.json(fixtures.assetPasswords.list);
  }),

  http.get(`${BASE_URL}/api/v1/asset_passwords/:id`, ({ params }) => {
    const id = Number(params['id']);
    if (id === 999) {
      return HttpResponse.json({ error: 'not_found' }, { status: 404 });
    }
    return HttpResponse.json(fixtures.assetPasswords.single);
  }),

  http.post(`${BASE_URL}/api/v1/asset_passwords`, () => {
    return HttpResponse.json(fixtures.assetPasswords.created);
  }),

  http.put(`${BASE_URL}/api/v1/asset_passwords/:id`, () => {
    return HttpResponse.json(fixtures.assetPasswords.updated);
  }),

  http.delete(`${BASE_URL}/api/v1/asset_passwords/:id`, () => {
    return new HttpResponse(null, { status: 204 });
  }),

  // Articles endpoints
  http.get(`${BASE_URL}/api/v1/articles`, () => {
    return HttpResponse.json(fixtures.articles.list);
  }),

  http.get(`${BASE_URL}/api/v1/articles/:id`, ({ params }) => {
    const id = Number(params['id']);
    if (id === 999) {
      return HttpResponse.json({ error: 'not_found' }, { status: 404 });
    }
    return HttpResponse.json(fixtures.articles.single);
  }),

  http.post(`${BASE_URL}/api/v1/articles`, () => {
    return HttpResponse.json(fixtures.articles.created);
  }),

  http.put(`${BASE_URL}/api/v1/articles/:id`, () => {
    return HttpResponse.json(fixtures.articles.updated);
  }),

  http.delete(`${BASE_URL}/api/v1/articles/:id`, () => {
    return new HttpResponse(null, { status: 204 });
  }),

  http.put(`${BASE_URL}/api/v1/articles/:id/archive`, () => {
    return new HttpResponse(null, { status: 204 });
  }),

  // Websites endpoints
  http.get(`${BASE_URL}/api/v1/websites`, () => {
    return HttpResponse.json(fixtures.websites.list);
  }),

  http.get(`${BASE_URL}/api/v1/websites/:id`, ({ params }) => {
    const id = Number(params['id']);
    if (id === 999) {
      return HttpResponse.json({ error: 'not_found' }, { status: 404 });
    }
    return HttpResponse.json(fixtures.websites.single);
  }),

  http.post(`${BASE_URL}/api/v1/websites`, () => {
    return HttpResponse.json(fixtures.websites.created);
  }),

  http.put(`${BASE_URL}/api/v1/websites/:id`, () => {
    return HttpResponse.json(fixtures.websites.updated);
  }),

  http.delete(`${BASE_URL}/api/v1/websites/:id`, () => {
    return new HttpResponse(null, { status: 204 });
  }),

  // Folders endpoints
  http.get(`${BASE_URL}/api/v1/folders`, () => {
    return HttpResponse.json(fixtures.folders.list);
  }),

  http.get(`${BASE_URL}/api/v1/folders/:id`, ({ params }) => {
    const id = Number(params['id']);
    if (id === 999) {
      return HttpResponse.json({ error: 'not_found' }, { status: 404 });
    }
    return HttpResponse.json(fixtures.folders.single);
  }),

  http.post(`${BASE_URL}/api/v1/folders`, () => {
    return HttpResponse.json(fixtures.folders.created);
  }),

  http.put(`${BASE_URL}/api/v1/folders/:id`, () => {
    return HttpResponse.json(fixtures.folders.updated);
  }),

  http.delete(`${BASE_URL}/api/v1/folders/:id`, () => {
    return new HttpResponse(null, { status: 204 });
  }),

  // Procedures endpoints
  http.get(`${BASE_URL}/api/v1/procedures`, () => {
    return HttpResponse.json(fixtures.procedures.list);
  }),

  http.get(`${BASE_URL}/api/v1/procedures/:id`, ({ params }) => {
    const id = Number(params['id']);
    if (id === 999) {
      return HttpResponse.json({ error: 'not_found' }, { status: 404 });
    }
    return HttpResponse.json(fixtures.procedures.single);
  }),

  http.post(`${BASE_URL}/api/v1/procedures`, () => {
    return HttpResponse.json(fixtures.procedures.created);
  }),

  http.put(`${BASE_URL}/api/v1/procedures/:id`, () => {
    return HttpResponse.json(fixtures.procedures.updated);
  }),

  http.delete(`${BASE_URL}/api/v1/procedures/:id`, () => {
    return new HttpResponse(null, { status: 204 });
  }),

  // Activity Logs endpoints
  http.get(`${BASE_URL}/api/v1/activity_logs`, () => {
    return HttpResponse.json(fixtures.activityLogs.list);
  }),

  // Relations endpoints
  http.get(`${BASE_URL}/api/v1/relations`, () => {
    return HttpResponse.json(fixtures.relations.list);
  }),

  http.post(`${BASE_URL}/api/v1/relations`, () => {
    return HttpResponse.json(fixtures.relations.created);
  }),

  http.delete(`${BASE_URL}/api/v1/relations/:id`, () => {
    return new HttpResponse(null, { status: 204 });
  }),

  // Magic Dash endpoints
  http.get(`${BASE_URL}/api/v1/magic_dash`, () => {
    return HttpResponse.json(fixtures.magicDash.list);
  }),

  http.get(`${BASE_URL}/api/v1/magic_dash/:id`, ({ params }) => {
    const id = Number(params['id']);
    if (id === 999) {
      return HttpResponse.json({ error: 'not_found' }, { status: 404 });
    }
    return HttpResponse.json(fixtures.magicDash.single);
  }),

  http.post(`${BASE_URL}/api/v1/magic_dash`, () => {
    return HttpResponse.json(fixtures.magicDash.created);
  }),

  http.put(`${BASE_URL}/api/v1/magic_dash/:id`, () => {
    return HttpResponse.json(fixtures.magicDash.updated);
  }),

  http.delete(`${BASE_URL}/api/v1/magic_dash/:id`, () => {
    return new HttpResponse(null, { status: 204 });
  }),
];
