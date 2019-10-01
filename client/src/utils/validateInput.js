import isString from './isString';
import isEmail from './isEmail';
import isEmpty from './isEmpty';
import hasLengthInRange from './hasLengthInRange';

const validateEmail = (inputValue) => hasLengthInRange(inputValue, 5, 254) && isEmail(inputValue);
const validatePassword = (inputValue) => hasLengthInRange(inputValue, 10, 127);
const validateName = (inputValue) => hasLengthInRange(inputValue, 2, 50);

const validateInput = (inputType, inputValue) => {
  if (isEmpty(inputValue) || !isString(inputValue)) {
    return false;
  }
  switch (inputType) {
    case 'email':
      return validateEmail(inputValue);
    case 'password':
      return validatePassword(inputValue);
    case 'name':
      return validateName(inputValue);
    default:
      return false;
  }
};
export default validateInput;
