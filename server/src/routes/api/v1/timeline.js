import { Router } from 'express';
import {
  getAllTimeline,
  getTimelineById,
  deleteTimeline,
  postTimeline,
  updateTimeline,
  getTimelineByUserId,
} from '../../../controllers/v1/timeline';
import {
  verifyMongooseId,
  verifyTimelineObject,
  verifyPostsInTimeline,
  verifyPostsLengthInTimeline,
  sortPostsByDisplayTime,
  verifyPosts,
} from '../../../middlewares/timeline';
import {
  verifyIfUserSignedIn,
  getTokenFromSignedInUser,
  verifyUserPermission,
} from '../../../middlewares/auth';

const router = Router();

router
  .route('/')
  .get(getAllTimeline)
  .post(verifyTimelineObject, sortPostsByDisplayTime, postTimeline);

router
  .route('/:id')
  .get(verifyMongooseId, getTimelineById)
  .delete(verifyMongooseId, deleteTimeline)
  .put(
    verifyMongooseId,
    verifyTimelineObject,
    verifyUserPermission,
    verifyPostsInTimeline,
    verifyPostsLengthInTimeline,
    verifyPosts,
    sortPostsByDisplayTime,
    updateTimeline,
  );

router
  .get('/all/:id',
    verifyMongooseId,
    verifyIfUserSignedIn,
    getTokenFromSignedInUser,
    getTimelineByUserId);

export default router;
