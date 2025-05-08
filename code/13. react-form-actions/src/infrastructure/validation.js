export function isEmail(value) {
  return value.includes('@') && isNullOrWhitespace(value) == false;
}

export function isNullOrWhitespace(value) {
  return value === null || value === undefined || value.trim() === '';
}

export function hasMinLength(value, minLength) {
  return value.length >= minLength;
}

export function isPassordValid(value, minLength = 6) {
  return isNullOrWhitespace(value) == false && hasMinLength(value, minLength);
}

export function isMatch(value, otherValue) {
  return value === otherValue;
}

export function hasNonEmptyValue(value) {
  const hasValue = value != undefined && value != null && value.length > 0;

  return hasValue;
}

export function isTruthy(value) {
  return Boolean(value);
}