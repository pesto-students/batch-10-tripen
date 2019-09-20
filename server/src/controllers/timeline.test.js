import app from '../configs/server';
import request from 'supertest';
import timeline from './timeline';

describe('timeline controller', () => {
    let server;
    beforeEach(() => {
        server = app().start();
    });

    describe('GET /', () => {
        it('should return 404', async () => {
            const response = await request(server).get('/');
            expect(response.status).toBe(404);
        });        
    });
});