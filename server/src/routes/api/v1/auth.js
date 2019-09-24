import { Router } from 'express';
import {
  controllerStatus,
  signinController,
  signupController,
} from '../../../controllers/v1/auth';
import {
  signinValidation,
  signupValidation,
} from '../../../middlewares/auth';

const router = Router();

router.get('/status', controllerStatus);
router.post('/signin', signinValidation, signinController);
router.post('/signup', signupValidation, signupController);

export default router;
