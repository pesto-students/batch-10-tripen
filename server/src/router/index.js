import { Router } from 'express';
import timelineController from '../controllers/timeline';
import userController from '../controllers/user';

const router = Router();

router.use('/timeline', timelineController);
router.use('/user', userController);

export default router;