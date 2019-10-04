import { Router } from 'express';
import authRoutes from './auth';
import userRoutes from './user';
import timelineRoutes from './timeline';
import categoriesRoutes from './categories';
import postRoutes from './post';


const router = Router();

router.use('/auth', authRoutes);
router.use('/user', userRoutes);
router.use('/timeline', timelineRoutes);
router.use('/categories', categoriesRoutes);
router.use('/post', postRoutes);

export default router;
