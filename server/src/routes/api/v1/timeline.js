import { Router } from 'express';
import {
  getAllTimeline,
  getTimelineById,
  deleteTimeline,
  postTimeline,
  updateTimeline
} from '../../../controllers/timeline';
import {
  verifyTimelineId,
  verifyTimelineObject,
  verifyPostsInTimeline,
  verifyPostsLengthInTimeline,
  sortPostsByDisplayTime
} from '../../../middlewares/timeline';

const router = Router();

router
  .route('/')
  .get(getAllTimeline)
  .post(verifyTimelineObject, postTimeline);
router
  .route('/:id')
  .get(verifyTimelineId, getTimelineById)
  .delete(verifyTimelineId, deleteTimeline)
  .put(
    verifyTimelineId,
    verifyTimelineObject,
    verifyPostsInTimeline,
    verifyPostsLengthInTimeline,
    sortPostsByDisplayTime,
    updateTimeline);


export default router;