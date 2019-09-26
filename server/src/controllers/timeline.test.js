import InMemDb from '../configs/dbtest';
import {
  createTimeline,
  getAllTestTimeline,
  getTestTimelineById,
  createTestTimeline,
  getMongooseId,
} from '../utils/dummyData';
import Timeline from '../models/timeline';
import {
  getAllTimeline,
  getTimelineById,
  postTimeline,
  updateTimeline,
  deleteTimeline,
} from './timeline';
import mongoose from '../configs/database';


beforeAll(async () => {
  await InMemDb.connect();
});

afterAll(async () => {
  await InMemDb.disconnect();
});

afterEach(async () => {
  await InMemDb.cleanup();
});

describe('timeline cntrl test', () => {
  describe('get all', () => {
    let mockReq;
    let mockRes;
    beforeEach(async () => {
      mockReq = (page, limit) => ({ query: { page, limit } });
      mockRes = () => {
        const res = {};
        res.status = jest.fn().mockReturnValue(res);
        res.json = jest.fn().mockReturnValue(res);
        return res;
      };
      await createTimeline();
    });
    it('should return same number of timelines as created', async () => {
      const res = mockRes();
      const timelines = await getAllTestTimeline();
      await getAllTimeline(mockReq(1, 1), res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ data: timelines, error: null });
    });
    it('should return data type []', async () => {
      const res = mockRes();
      const timelines = await getAllTestTimeline();
      await getAllTimeline(mockReq(1, 1), res);
      expect(timelines).toBeInstanceOf(Array);
    });
    it('should return timeline in given limit', async () => {
      const res = mockRes();
      const timelines1 = await getAllTestTimeline();
      await createTimeline();
      const timelines2 = await getAllTestTimeline();
      await getAllTimeline(mockReq(1, 1), res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ data: timelines1, error: null });
      expect(timelines1.length).not.toBe(timelines2.length);
    });
    it('should return only timeline Objects', async () => {
      const res = mockRes();
      const timelines = await getAllTestTimeline();
      const t1 = timelines[0];
      await getAllTimeline(mockReq(1, 1), res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ data: timelines, error: null });
      expect(t1).toBeInstanceOf(Timeline);
    });
  });
  describe('get timeline by id', () => {
    let mockReq;
    let mockRes;
    beforeEach(async () => {
      mockReq = (id) => ({ params: { id } });
      mockRes = () => {
        const res = {};
        res.status = jest.fn().mockReturnValue(res);
        res.json = jest.fn().mockReturnValue(res);
        return res;
      };
      await createTimeline();
    });
    it('should return status:400 and data:{}', async () => {
      const id = '5d8c9b6b6a4c632371c95557';
      const req = mockReq(id);
      const res = mockRes();
      await getTimelineById(req, res);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith({ data: {}, error: `No document for id:${id}` });
    });
    describe('should return status:200', () => {
      let timelines;
      let timeline;
      let req;
      let res;
      let id;
      beforeEach(async () => {
        timelines = await getAllTestTimeline();
        id = timelines[0]._id;
        req = mockReq(id);
        res = mockRes();
        await getTimelineById(req, res);
        timeline = await getTestTimelineById(id);
      });
      it('should return correct timeline', () => {
        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith({ data: timeline, error: null });
      });
      it('should return instance of Timeline', () => {
        expect(timeline).toBeInstanceOf(Timeline);
      });
    });
  });
  describe('post timeline', () => {
    let mockReq;
    let mockRes;
    let mockTimeline;
    beforeEach(async () => {
      mockReq = (obj) => ({ body: obj });
      mockRes = () => {
        const res = {};
        res.status = jest.fn().mockReturnValue(res);
        res.json = jest.fn().mockReturnValue(res);
        return res;
      };
    });
    it('should return 400 & err msg: required fields', async () => {
      mockTimeline = {
        tagline: 'some tagline',
        coverImg: 'https://source.unsplash.com/random',
        posts: [],
      };
      const req = mockReq(mockTimeline);
      const res = mockRes();
      await postTimeline(req, res);
      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalledWith(
        {
          data: {},
          error: `${Timeline.modelName} validation failed: userId: `
          + 'No userId provided, title: No title provided',
        },
      );
    });
    it('should return 201 & timeline data', async () => {
      mockTimeline = {
        title: 'some title',
        userId: mongoose.Types.ObjectId(),
        tagline: 'some tagline',
        coverImg: 'https://source.unsplash.com/random',
        posts: [],
      };
      const req = mockReq(mockTimeline);
      const res = mockRes();
      await postTimeline(req, res);
      expect(res.status).toHaveBeenCalledWith(201);
    });
  });
  describe('update timeline', () => {
    let mockReq;
    let mockRes;
    let mockTimeline;
    beforeEach(async () => {
      mockReq = (body, params) => ({ body, params });
      mockRes = () => {
        const res = {};
        res.status = jest.fn().mockReturnValue(res);
        res.json = jest.fn().mockReturnValue(res);
        return res;
      };
      mockTimeline = {
        title: 'some title',
        _id: getMongooseId(),
        userId: getMongooseId(),
        tagline: 'some tagline',
        coverImg: 'https://source.unsplash.com/random',
        posts: [],
      };
      await createTestTimeline(mockTimeline);
    });
    it('should update data', async () => {
      mockTimeline.title = 'bart updated 8)';
      const req = mockReq(mockTimeline, { id: mockTimeline._id });
      const res = mockRes();
      await updateTimeline(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      const tl = await getTestTimelineById(mockTimeline._id);
      expect(tl.title).toBe(mockTimeline.title);
    });
  });
  describe('delete timeline', () => {
    let mockReq;
    let mockRes;
    let mockTimeline;
    beforeEach(async () => {
      mockReq = (id) => ({ params: { id } });
      mockRes = () => {
        const res = {};
        res.status = jest.fn().mockReturnValue(res);
        res.json = jest.fn().mockReturnValue(res);
        return res;
      };
      mockTimeline = {
        title: 'some title',
        _id: getMongooseId(),
        userId: getMongooseId(),
        tagline: 'some tagline',
        coverImg: 'https://source.unsplash.com/random',
        posts: [],
      };
      await createTestTimeline(mockTimeline);
    });
    it('should delete data', async () => {
      mockTimeline.title = 'bart updated 8)';
      const req = mockReq(mockTimeline);
      const res = mockRes();
      await deleteTimeline(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      const tl = await getTestTimelineById(mockTimeline._id);
      expect(tl).toBe(null);
    });
  });
});
