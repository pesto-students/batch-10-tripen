import { Router } from 'express';
import {
  getPost,
  createPost,
  updatePost,
  deletePost,
} from '../../../controllers/v1/timeline';
import {
  verifyMongooseId as verifyObjectId,
} from '../../../middlewares/timeline';

const router = Router();

router
  .route('/')
  .post(createPost);

router
  .route('/:postId')
  .get(getPost)
  .put(updatePost)
  .delete(deletePost);

export default router;
