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
  verifyTimelineObject
} from '../../../middlewares/timeline';

const router = Router();

router.get('/all', getAllTimeline);
router.get('/:id', verifyTimelineId, getTimelineById);
router.delete('/:id', verifyTimelineId, deleteTimeline);
router.post('/', verifyTimelineObject, postTimeline);
router.put('/:id', verifyTimelineId, verifyTimelineObject, updateTimeline);

export default router;