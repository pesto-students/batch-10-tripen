import isEmpty from './isEmpty';

const checkEmpty = (errorObj, object, key) => {
  if (isEmpty(object[key])) {
    Object.assign(errorObj, { [key]: `${key} field is required` });
  }
  return errorObj;
};

export default checkEmpty;
