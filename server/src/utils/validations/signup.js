import checkEmpty from './common/checkEmpty';
import { checkIfNotEmail } from './common/isEmail';
import { checkIfNotString } from './common/checkString';
import mapErrorsToProperties from './mapErrorsToProperties';

const validateInputs = (user) => {
  const propertiesToCheck = [
    ['name', [checkEmpty, checkIfNotString]],
    ['email', [checkEmpty, checkIfNotString, checkIfNotEmail]],
    ['username', [checkEmpty, checkIfNotString]],
    ['password', [checkEmpty, checkIfNotString]],
  ];

  const isValidOrThrowErrors = mapErrorsToProperties(propertiesToCheck, user);
  return isValidOrThrowErrors;
};

export default validateInputs;
