const isEmpty = (value) => {
  const isEmptyValue = value === undefined || value === null;
  if (isEmptyValue) {
    return true;
  }
  const isEmptyString = typeof value === 'string' && value.trim().length === 0;
  const isEmptyObject = typeof value === 'object' && Object.keys(value).length === 0;
  return isEmptyValue || isEmptyString || isEmptyObject;
};

export default isEmpty;
