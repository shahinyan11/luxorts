import yup from '../..';

describe('stringLength validator', () => {
  const testSchema = yup.string().stringLength(4);
  const expected = {
    id: 'validations.stringLength',
    values: {
      value: 4,
    },
  };

  describe('shouldn`t return error', () => {
    it('when string length equals 4', async () => {
      const result = await testSchema.validate('1234');

      expect(result.errors).not.toBeDefined();
    });

    it('when string isn`t present', async () => {
      const result = await testSchema.validate('');

      expect(result.errors).not.toBeDefined();
    });
  });

  describe('should return error', () => {
    it('when string length more than 4', async () => {
      try {
        await testSchema.validate('12345');
      } catch (error) {
        expect(error.message).toEqual(expected);
      }
    });

    it('when string length less than 4', async () => {
      try {
        await testSchema.validate('123');
      } catch (error) {
        expect(error.message).toEqual(expected);
      }
    });
  });
});
