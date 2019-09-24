const addErrorIfNotValid = (validationFn, type) => (errorObj, object, key) => {
  if (!validationFn(object[key])) {
    Object.assign(errorObj, { [key]: `${object[key]} is not a valid value of type ${key}. Required type: ${type}` });
  }
  return errorObj;
};

export default addErrorIfNotValid;
