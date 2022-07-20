const ERROR_CODES = {
  EMAIL_NOT_FOUND: 'Email is wrong',
  INVALID_PASSWORD: 'Password is wrong',
  TO_MANY_ATTEMPTS_TRY_LATER: 'Too many attempts, try later',
  auth: 'Authentication is required',
};

export const error = (code) => {
  return ERROR_CODES[code] ? ERROR_CODES[code] : 'Unknown error';
};
