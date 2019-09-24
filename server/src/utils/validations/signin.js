import mapErrorsToProperties from './mapErrorsToProperties';
import { checkIfNotEmail } from './common/isEmail';
import { checkIfNotString } from './common/checkString';
import checkEmpty from './common/checkEmpty';

const validateInputs = (user) => {
  const propertiesToCheck = [
    ['email', [checkEmpty, checkIfNotString, checkIfNotEmail]],
    ['password', [checkEmpty, checkIfNotString]],
  ];
  const isValidOrThrowErrors = mapErrorsToProperties(propertiesToCheck, user);
  return isValidOrThrowErrors;
};

export default validateInputs;
