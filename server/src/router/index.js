import { Router } from 'express';
import timelineController from '../controllers/timeline';

const router = Router();

router.use('/timeline', timelineController);

export default router;