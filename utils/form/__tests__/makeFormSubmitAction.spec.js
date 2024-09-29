import makeFormSubmitAction from '../makeFormSubmitAction';

describe('makeFormSubmitAction()', () => {
  const type = 'TEST_ACTION_TYPE';
  const values = { value1: 'value1' };
  const form = { foo: 'bar' };
  const action = makeFormSubmitAction(type);

  it('creates action that passes type, values and formik context', () => {
    expect(action(values, form)).toEqual({
      type,
      values,
      form,
    });
  });
});
