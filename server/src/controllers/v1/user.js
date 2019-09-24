import User from '../../models/user';
import destructureData from '../utils/index';
import { newToken } from '../utils/jwtToken';

const controllerStatus = (req, res) => res.status(200).json({ status: 'online' });

export {
  controllerStatus,
};
