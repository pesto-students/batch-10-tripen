import addErrorIfNotValid from '../addErrorIfNotValid';

const isGeoJson = (locationObject) => {
  const keys = Object.getOwnPropertyNames(locationObject);
  const hasExpectedKeys = keys.includes('type') && keys.includes('coordinates') && keys.length === 2;
  const hasExpectedCoordinatesArray = (value) => {
    const isExpectedArray = Array.isArray(value) && value.length === 2;
    const isNumericArray = value.every((number) => Number.isFinite(number));
    return isExpectedArray && isNumericArray;
  };
  return hasExpectedKeys && hasExpectedCoordinatesArray(locationObject.coordinates);
};

const checkIfNotGeoJson = addErrorIfNotValid(isGeoJson, 'location');

export {
  isGeoJson,
  checkIfNotGeoJson,
};
