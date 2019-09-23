import request from 'supertest';
import app from '../configs/server';

let server;
const appl = app();
// server = appl.start(); 

describe('cntl: timeline', () => {
    beforeEach(() => {
        server = appl.start();
        jest.resetModules();
      });
    // describe('sm', () =>{
        it('get / should return 200',async () => {
            const res = await request(server).get('/api/v1/timeline/all');
            expect(res.status).toBe(200);
        });
    // });
    
})