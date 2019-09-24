import { Router } from 'express';
import {
  getAllTimeline,
  getTimelineById,
  deleteTimeline,
  postTimeline,
  updateTimeline,
} from '../../../controllers/timeline';

const router = Router();

router.get('/all', getAllTimeline);
router.get('/:timelineId', [/* verifyTimelineId */], getTimelineById);
router.delete('/:timelineId', [/* verifyTimelineId */], deleteTimeline);
router.post('/', [/* verifyTimelineObject */], postTimeline);
router.put('/', [/* verifyTimelineObject */], updateTimeline);

export default router;
