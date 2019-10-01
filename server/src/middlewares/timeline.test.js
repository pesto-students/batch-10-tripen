import { verifyTimelineId, verifyTimelineObject, sortPostsByDisplayTime } from './timeline';

describe('middleware: timeline', () => {
  describe('verifyTimelineId: req handler create', () => {
    let mw;
    beforeAll(() => {
      mw = verifyTimelineId;
    });
    it('should take 3 args', () => {
      expect(mw.length).toBe(3);
    });
    it('should return a function', () => {
      expect(mw).toBeInstanceOf(Function);
    });
  });
  describe('verifyTimelineId: req handler calling', () => {
    let mockReq, mockRes;
    beforeEach(() => {
      mockReq = (value) => {
        return {
          params: {
            id: value
          }
        };
      },
      mockRes = () => {
        const res = {};
        res.status = jest.fn().mockReturnValue(res);
        res.json = jest.fn().mockReturnValue(res);
        return res;
      };
    })
    it('should call next() once', async () => {
      const req = mockReq('551137c2f9e1fac808a5f572'); /*TODO: add generic utils func mongoID */
      const res = mockRes();
      const nextSpy = jest.fn();
      await verifyTimelineId(req, res, nextSpy);
      expect(nextSpy).toHaveBeenCalledTimes(1);
    });
    describe('should not call next()',() => {
      it('response status 400',async () => {
        const req = mockReq('invalid_id');
        const res = mockRes();
        const nextSpy = jest.fn();
        await verifyTimelineId(req, res, nextSpy);
        expect(nextSpy).toHaveBeenCalledTimes(0);
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.json).toHaveBeenCalledWith({
          msg: `Given param Id ${req.params.id} is invalid`
        });
      });
    });
  });
  describe('verifyTimelineObject: req handler create', () => {
    let mw;
    beforeAll(() => {
      mw = verifyTimelineObject;
    });
    it('should take 3 args', () => {
      expect(mw.length).toBe(3);
    });
    it('should return a function', () => {
      expect(mw).toBeInstanceOf(Function);
    });
  });
  describe('sortPosts: req handler create', () => {
    let mw;
    beforeAll(() => {
      mw = verifyTimelineId;
    });
    it('should take 3 args', () => {
      expect(mw.length).toBe(3);
    });
    it('should return a function', () => {
      expect(mw).toBeInstanceOf(Function);
    });
  });
  describe('sortPosts: req handler calling', () => {
    let mockReq;
    let mockRes;
    let res;
    let mockTimeline;
    const timeNow = new Date();
    beforeAll(() => {
      mockReq = (body) => {
        return { body: body };
      };
      mockRes = () => {
        const res = {};
        res.status = jest.fn().mockReturnValue(res);
        res.json = jest.fn().mockReturnValue(res);
        return res;
      };
      res = mockRes();
      mockTimeline = {
        "tagline": "some tagline",
        "coverImg": "https://source.unsplash.com/random",
        "userId": "551137c2f9e1fac808a5f572",
        "posts": [
          {
            "title": "some card title",
            "coverImg": "https://source.unsplash.com/random",
            "content": "some content abt the card",
            "location": {
              "type": "Point",
              "coordinates":[1, 2]
            },
            "displayTime": "2019-10-01T12:50:11Z"
          },
          {
            "title": "some card title 2",
            "coverImg": "https://source.unsplash.com/random",
            "content": "some content abt the card",
            "location": {
              "type": "Point",
              "coordinates":[1, 2]
            },
            "displayTime": "2019-10-01T12:50:01Z"
          }
        ],
        "title": "some title"
      }
      Object.freeze(mockTimeline);
    });
    it('should sort timeline.posts by post.displayTime', async () => {
      // mockTimeline.posts.map((post) => post.displayTime = new Date());
      const reqBody = mockTimeline;
      const req = mockReq(JSON.parse(JSON.stringify(reqBody)));
      const nextSpy = jest.fn();
      await sortPostsByDisplayTime(req, res, nextSpy);
      expect(req.body.posts).not.toEqual(reqBody.posts);
    });
    it('should return the same timeline object', async () => {
      const reqBody = mockTimeline;
      reqBody.posts.map((post) => post.displayTime = timeNow.toString());
      const req = mockReq(JSON.parse(JSON.stringify(reqBody)));
      const nextSpy = jest.fn();
      await sortPostsByDisplayTime(req, res, nextSpy);
      expect(req.body.posts).toEqual(reqBody.posts);
    });
  });
});