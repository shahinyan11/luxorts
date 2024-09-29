import moment from 'moment';

import { SIGN_UP_VALIDATION } from 'constants/validations';

import yup from '../..';

describe('minAge validator', () => {
  const testSchema = yup.string().minAge(SIGN_UP_VALIDATION.AGE.MIN);

  it('shouldn`t return error when user older or equal 18', async () => {
    const date = moment().subtract(SIGN_UP_VALIDATION.AGE.MIN, 'years');

    const result = await testSchema.validate(date);

    expect(result.errors).not.toBeDefined();
  });

  it('shouldn`t return error when date isn`t present', async () => {
    const result = await testSchema.validate('');

    expect(result.errors).not.toBeDefined();
  });

  it('should return error when user younger than 18', async () => {
    const date = moment();
    const expected = {
      id: 'validations.minAge',
      values: {
        years: SIGN_UP_VALIDATION.AGE.MIN,
      },
    };

    try {
      await testSchema.validate(date);
    } catch (error) {
      expect(error.message).toEqual(expected);
    }
  });
});
