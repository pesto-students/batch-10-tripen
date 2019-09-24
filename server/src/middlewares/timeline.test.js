import { verifyTimelineId, verifyTimelineObject } from './timeline';

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
      const req = mockReq('551137c2f9e1fac808a5f572');
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
});