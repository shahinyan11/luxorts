import { SIGN_UP_VALIDATION } from 'constants/validations';
import { SPECIAL_CHARACTERS } from 'constants';

// eslint-disable-next-line prefer-regex-literals
export const hasNumber = (value) => new RegExp(/[0-9]/).test(value);
export const hasUpperCase = (value) => value !== value.toLowerCase();
export const hasSpecialCharacters = (value) => SPECIAL_CHARACTERS.test(value);

export const getPasswordStrengthScale = (value) => {
  let strength = 0;

  if (value.length > 0) {
    strength += 1;
  }

  if (value.length > 5) {
    strength += 1;
  }

  if (hasNumber(value) && hasUpperCase(value) && hasSpecialCharacters(value)) {
    strength += 1;
  }

  return strength;
};

export const getStrengthData = (strength) => {
  if (strength === 0) {
    return {
      text: {
        id: 'password.tooltip',
        values: {
          min: SIGN_UP_VALIDATION.PASSWORD.MIN,
        },
      },
    };
  }

  if (strength === 1) {
    return {
      text: {
        id: 'password.min',
        values: {
          min: SIGN_UP_VALIDATION.PASSWORD.MIN,
        },
      },
      type: 'error',
    };
  }

  if (strength === 2) {
    return {
      text: {
        id: 'password.medium',
      },
      type: 'alert',
    };
  }

  return {
    text: {
      id: 'password.strong',
    },
    icon: 'checked',
    type: 'success',
  };
};
