import mapErrorsToProperties from './mapErrorsToProperties';
import { checkIfNotEmail } from './common/isEmail';
import { checkIfNotString } from './common/checkString';
import checkEmpty from './common/checkEmpty';

const validateInputs = (input) => {
  const propertiesToCheck = [
    ['email', [checkEmpty, checkIfNotString, checkIfNotEmail]],
  ];
  const isValidOrThrowErrors = mapErrorsToProperties(propertiesToCheck, input);
  return isValidOrThrowErrors;
};

export default validateInputs;
