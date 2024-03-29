import InMemDb from '../../configs/dbtest';
import { newToken, verifyToken } from '../../utils/helpers/jwtHelper';
import { signupController, signinController } from './auth';

beforeAll(async () => {
  await InMemDb.connect();
});

afterAll(async () => {
  await InMemDb.disconnect();
});

describe('Authentication controllers:', () => {
  describe('newToken:', () => {
    it('creates a new jwt for user', async () => {
      const id = 123;
      const token = newToken({ id });
      const user = verifyToken(token);
      expect(user.id).toBe(id);
    });
  });

  describe('verifyToken:', () => {
    it('validates jwt and returns payload', async () => {
      const inputUser = {
        id: 1234,
        name: 'Remula Pinto',
        username: 'remu.pinto',
        password: '1234',
        location: {
          type: 'Point',
          coordinates: [1, 2],
        },
      };
      const token = newToken(inputUser);
      const user = verifyToken(token);
      expect(user.name).toBe(inputUser.name);
    });
  });

  describe('signup: ', () => {
    it('signupController functions correctly', async () => {
      let statusLog;
      let resultLog;
      const correctMockReq = {
        body: {
          name: 'Gordon Ramsey',
          email: 'gordon@ramsey.com',
          username: 'gordon.ramsey',
          location: {
            type: 'Point',
            coordinates: [1, 2],
          },
          password: 'abcd1234',
        },
      };

      const wrongMockReq = {
        body: {
          name: 'Gordon Ramsey',
          username: 'gordon.ramsey',
          location: {
            coordinates: [1, 2],
          },
          password: true,
        },
      };

      const mockRes = {
        status(status) {
          statusLog = status;
          return this;
        },
        json(result) {
          resultLog = result;
        },
      };

      expect(signupController.length).toBe(2);

      await signupController(correctMockReq, mockRes);
      expect(statusLog).toBe(201);
      expect(resultLog.success).toBe(true);
      expect(resultLog.message).toBe('Sign-up successful');

      await signupController(wrongMockReq, mockRes);
      expect(statusLog).toBe(400);
      expect(resultLog.success).toBe(false);
      expect(resultLog).toHaveProperty('error');
      expect(resultLog.message).not.toBe('Sign-up successful');
    });

    it('requires inputs', async () => {
      expect.assertions(2);
      const req = { body: {} };
      const res = {
        status(status) {
          expect(status).toBe(400);
          return this;
        },
        json(result) {
          expect(result.success).toBe(false);
        },
      };
      await signupController(req, res);
    });

    it('creates new user and sends new token from it', async () => {
      expect.assertions(2);
      const req = {
        body: {
          name: 'Larry Page',
          email: 'hello@hello.com',
          username: 'larry.page',
          location: {
            type: 'Point',
            coordinates: [1, 2],
          },
          password: 'abcd1234',
        },
      };
      const res = {
        status(status) {
          expect(status).toBe(201);
          return this;
        },
        async json(result) {
          const user = verifyToken(result.user.token);
          expect(user.email).toBe('hello@hello.com');
        },
      };
      await signupController(req, res);
    });
  });

  describe('signin', () => {
    it('requires email and password', async () => {
      expect.assertions(2);
      const req = { body: {} };
      const res = {
        status(status) {
          expect(status).toBe(400);
          return this;
        },
        json(result) {
          expect(typeof result.message).toBe('string');
        },
      };
      await signinController(req, res);
    });

    it('log-in if user exists in database', async () => {
      expect.assertions(2);
      const req1 = { body: { email: 'hello@hello.com', password: 'abcd1234' } };
      const res1 = {
        status(status) {
          expect(status).toBe(200);
          return this;
        },
        json(result) {
          expect(typeof result.message).toBe('string');
        },
      };

      await signinController(req1, res1);
    });

    it('throw error if user does not exist in database', async () => {
      expect.assertions(2);
      const req2 = { body: { email: 'noUser@noUser.com', password: 'doesNotExist' } };
      const res2 = {
        status(status) {
          expect(status).toBe(400);
          return this;
        },
        json(result) {
          expect(result.success).toBe(false);
        },
      };

      await signinController(req2, res2);
    });
  });
});
