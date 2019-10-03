import errorMessage from '../utils/errorMessage';
import validateSignup from '../utils/validations/signup';
import validateSignin from '../utils/validations/signin';
import { verifyToken, extractTokenFromHeader } from '../utils/helpers/jwtHelper';

export const signupValidation = (req, res, next) => {
  const user = req.body;
  const inputFieldsValidation = validateSignup(user);
  if (!inputFieldsValidation.isValid) {
    return errorMessage({
      status: 400,
      error: inputFieldsValidation.errors,
      message: 'Incorrect / incomplete field values. Please correct.',
    }, req, res);
  }
  return next();
};

export const signinValidation = (req, res, next) => {
  const user = req.body;
  const inputFieldsValidation = validateSignin(user);
  if (!inputFieldsValidation.isValid) {
    return errorMessage({
      status: 400,
      error: inputFieldsValidation.errors,
      message: 'Incorrect / incomplete field values. Please correct.',
    }, req, res);
  }
  return next();
};

export const verifiedUser = (req, res, next) => {
  const token = req.headers.authorization;
  const userInfo = verifyToken(token);
  if (userInfo) {
    return next();
  }
  return errorMessage({
    status: 403,
    message: 'User token missing. Please login.',
  }, req, res);
};

export const verifyUserPermission = (req, res, next) => {
  const bearerToken = req.headers.authorization;
  const { userId } = req.body;
  let userInfo = {};
  try {
    userInfo = extractTokenFromHeader(bearerToken);
    if (userInfo._id !== userId) {
      return errorMessage({
        status: 403,
        message: 'Unauthorized api call.',
      }, req, res);
    }
    return next();
  } catch (error) {
    return errorMessage({
      status: 403,
      message: error.message,
    }, req, res);
  }
};

export const getTokenFromSignedInUser = (req, res, next) => {
  if (req.query.isFetchAll === true && req.bearerToken) {
    const userId = req.params.id;

    try {
      const requesterInfo = extractTokenFromHeader(req.bearerToken);
      if (userId !== requesterInfo._id) {
        req.query.isFetchAll = false;
      }
    } catch (err) {
      return errorMessage({
        status: 403,
        message: 'Unable to decode jwt token',
      }, req, res);
    }
  }
  return next();
};


export const verifyIfUserSignedIn = (req, res, next) => {
  if (req.headers.authorization) {
    const bearerToken = req.headers.authorization;
    req.bearerToken = bearerToken;
    req.query.isFetchAll = true;
  } else {
    req.query.isFetchAll = false;
  }
  next();
};
