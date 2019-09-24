import errorMessage from '../utils/errorMessage';
import validateSignup from '../utils/validations/signup';
import validateSignin from '../utils/validations/signin';

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
