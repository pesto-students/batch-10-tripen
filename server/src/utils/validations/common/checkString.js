import addErrorIfNotValid from '../addErrorIfNotValid';

const isString = (str) => typeof str === 'string' || str instanceof String;

const checkIfNotString = addErrorIfNotValid(isString, 'string');

export {
  isString,
  checkIfNotString,
};
