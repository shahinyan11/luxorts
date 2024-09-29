import { SIGN_UP_VALIDATION } from 'constants/validations';
import {
  hasNumber,
  hasUpperCase,
  hasSpecialCharacters,
  getPasswordStrengthScale,
  getStrengthData,
} from '../passwordStrength';

describe('hasNumber()', () => {
  it('if string has number', () => {
    const value = 'one1';
    const result = hasNumber(value);
    expect(result).toBe(true);
  });

  it('if string does not have number', () => {
    const value = 'one';
    const result = hasNumber(value);
    expect(result).toBe(false);
  });
});

describe('hasUpperCase()', () => {
  it('if string has uppercase character', () => {
    const value = 'One';
    const result = hasUpperCase(value);
    expect(result).toBe(true);
  });

  it('if string does not have uppercase character', () => {
    const value = 'one';
    const result = hasUpperCase(value);
    expect(result).toBe(false);
  });
});

describe('hasSpecialCharacters()', () => {
  it('if string has special character', () => {
    expect(hasSpecialCharacters('one!')).toBe(true);
  });

  it('if string has not special character', () => {
    expect(hasSpecialCharacters('one')).toBe(false);
  });
});

describe('getPasswordStrengthScale()', () => {
  it('if password length is 0', () => {
    const value = '';
    const result = getPasswordStrengthScale(value);
    expect(result).toBe(0);
  });

  it('if password length is more than 0 and less that 6', () => {
    const value = 'foo';
    const result = getPasswordStrengthScale(value);
    expect(result).toBe(1);
  });

  it('if password length is more than 5', () => {
    const value = 'foobar';
    const result = getPasswordStrengthScale(value);
    expect(result).toBe(2);
  });

  it('if password length is more than 5, has uppercase, number, and special character', () => {
    const value = 'Foobar1!';
    const result = getPasswordStrengthScale(value);
    expect(result).toBe(3);
  });
});

describe('getStrengthData()', () => {
  it('if strength is 0', () => {
    const expected = {
      text: {
        id: 'password.tooltip',
        values: {
          min: SIGN_UP_VALIDATION.PASSWORD.MIN,
        },
      },
    };

    const result = getStrengthData(0);
    expect(result).toEqual(expected);
  });

  it('if strength is 1', () => {
    const expected = {
      text: {
        id: 'password.min',
        values: {
          min: SIGN_UP_VALIDATION.PASSWORD.MIN,
        },
      },
      type: 'error',
    };

    const result = getStrengthData(1);
    expect(result).toEqual(expected);
  });

  it('if strength is 2', () => {
    const expected = {
      text: {
        id: 'password.medium',
      },
      type: 'alert',
    };

    const result = getStrengthData(2);
    expect(result).toEqual(expected);
  });

  it('if strength is 3', () => {
    const expected = {
      text: {
        id: 'password.strong',
      },
      icon: 'checked',
      type: 'success',
    };

    const result = getStrengthData(3);
    expect(result).toEqual(expected);
  });
});
