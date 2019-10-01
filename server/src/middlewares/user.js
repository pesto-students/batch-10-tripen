import mongoose from 'mongoose';
import errorMessage from '../utils/errorMessage';
import { verifyToken } from '../utils/helpers/jwtHelper';
import User from '../models/user';

const verifyObjectId = (req, res, next) => {
  try {
    const entries = req.params;
    const invalidEntries = Object.keys(entries).filter((key) => key.includes('Id') && !(mongoose.Types.ObjectId.isValid(entries[key])));
    if (!invalidEntries.length) {
      return next();
    }
    return errorMessage({
      status: 400,
      message: `${invalidEntries} are not valid object ids`,
    }, req, res);
  } catch (error) {
    return errorMessage({
      status: 500,
      message: 'Server error',
    }, req, res);
  }
};

const isValidUser = (req, res, next) => {
  try {
    const { token } = req.headers;
    const decodedUser = verifyToken(token);
    const user = User.findOne({ email: decodedUser.email });
    if (user) {
      return next();
    }
    return errorMessage({
      status: 400,
      message: 'No user with given id.',
    }, req, res);
  } catch (error) {
    return errorMessage({
      status: 500,
      message: 'Server error',
    }, req, res);
  }
};

export {
  verifyObjectId,
  isValidUser,
};
