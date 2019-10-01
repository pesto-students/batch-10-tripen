import { Router } from 'express';
import { verifyObjectId, isValidUser } from '../../../middlewares/user';
import {
  controllerStatus, getUser, updateUser, deleteUser, getPublicProfile,
} from '../../../controllers/v1/user';

const router = Router();

router
  .route('/')
  .all(isValidUser)
  .get(getUser)
  .put(updateUser)
  .delete(deleteUser);

router
  .route('/status')
  .get(controllerStatus);

router
  .route('/:userId')
  .all(verifyObjectId)
  .get(getPublicProfile);

export default router;
