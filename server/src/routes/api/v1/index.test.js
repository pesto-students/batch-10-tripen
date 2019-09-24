import request from 'supertest';
import app from '../../../configs/server';

describe('ROUTES TEST - /api/v1', () => {
  let server;
  const application = app();
  beforeEach(() => {
    server = application.create();
    jest.resetModules();
  });

  describe('/auth', () => {
    describe('POST /signin', () => {
      it('should return 200 for correct credentials', async () => {
        const res = await request(server).post('/api/v1/auth/signin');
        expect(res.status).toBe(200);
      });
    });

    describe('POST /signup', () => {
      it('should return 201 for correct inputs', async () => {
        const res = await request(server).post('/api/v1/auth/signup');
        expect(res.status).toBe(201);
      });
    });

    describe('POST /forgot-password', () => {
      it('should return 200 for correct email id', async () => {
        const res = await request(server).post('/api/v1/auth/forgot-password');
        expect(res.status).toBe(200);
      });
    });
  });

  describe('/categories', () => {
    describe('GET /', () => {
      it('should return 200', async () => {
        const res = await request(server).get('/api/v1/categories');
        expect(res.status).toBe(200);
      });
    });
  });

  describe('/user routes', () => {
    describe('GET /:userID', () => {
      it('should return 200 for correct user ID', async () => {
        const res = await request(server).get('/api/v1/user/anyUserID');
        expect(res.status).toBe(200);
      });
    });

    describe('PUT /:userID', () => {
      it('should return 201 for correct inputs', async () => {
        const res = await request(server).put('/api/v1/user/anyOtherUserID');
        expect(res.status).toBe(201);
      });
    });

    describe('DELETE /:userID', () => {
      it('should return 200 for correct user ID', async () => {
        const res = await request(server).delete('/api/v1/user/userIdToDelete');
        expect(res.status).toBe(200);
      });
    });
  });

  describe('/timeline', () => {
    describe('GET /all', () => {
      it('should return 200', async () => {
        const res = await request(server).get('/api/v1/timeline/all');
        expect(res.status).toBe(200);
      });
    });

    describe('GET /:timelineId', () => {
      it('should return 200 for correct timeline ID', async () => {
        const res = await request(server).get('/api/v1/timeline/someTimelineID');
        expect(res.status).toBe(200);
      });
    });

    describe('DELETE /:timelineId', () => {
      it('should return 200 for correct timeline ID', async () => {
        const res = await request(server).delete('/api/v1/timeline/someTimelineID');
        expect(res.status).toBe(200);
      });
    });

    describe('POST /', () => {
      it('should return 201 on timeline creation', async () => {
        const res = await request(server).post('/api/v1/timeline/');
        expect(res.status).toBe(201);
      });
    });

    describe('PUT /', () => {
      it('should return 200 for correct timeline ID', async () => {
        const res = await request(server).put('/api/v1/timeline/');
        expect(res.status).toBe(200);
      });
    });
  });
});
