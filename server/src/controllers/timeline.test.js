import request from 'supertest';
import app from '../configs/server';

let server;
const appInstance = app();

describe('cntl: timeline', () => {
  beforeEach(() => {
    server = appInstance.create();
    jest.resetModules();
  });

  describe('GET /all', () => {
    it('should return 200', async () => {
      const resp = await request(server).get('/api/v1/timeline/all');
      expect(resp.status).toBe(200);
    });
    it('should return 404; invalid path', async () => {
      const resp = await request(server).get('/api/v1/timeline/all/wrong_path');
      expect(resp.status).toBe(404);
    });
  });
});
