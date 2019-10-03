import mongoose from 'mongoose';
import errorMessage from '../utils/errorMessage';
import { extractTokenFromHeader } from '../utils/helpers/jwtHelper';
import User from '../models/user';


const verifyObjectId = (req, res, next) => {
  try {
    const entries = req.params;
    const invalidEntries = Object.keys(entries).filter((key) => key.includes('Id') && !(mongoose.Types.ObjectId.isValid(entries[key])));
    if (!invalidEntries.length) {
      console.log('correc object id');
      return next();
    }
    return errorMessage({
      status: 400,
      message: 'Invalid object id(s) received as query',
    }, req, res);
  } catch (error) {
    return errorMessage({
      status: 500,
      message: 'Server error',
    }, req, res);
  }
};

const isValidUser = async (req, res, next) => {
  let decodedUser;
  try {
    const bearerToken = req.headers.authorization;
    console.log({ bearerToken });
    decodedUser = extractTokenFromHeader(bearerToken);
    console.log({ decodedUser });
  } catch (error) {
    return errorMessage({
      status: 401,
      error: error.message,
      message: 'Invalid jwt token provided',
    }, req, res);
  }

  try {
    const user = await User.findById(decodedUser._id).lean().exec();
    console.log({ user });
    req.userFromToken = user;
    return next();
  } catch (error) {
    return errorMessage({
      status: 400,
      message: 'No user with given id.',
    }, req, res);
  }
};

export {
  verifyObjectId,
  isValidUser,
};
