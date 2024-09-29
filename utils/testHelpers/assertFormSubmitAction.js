const assertFormSubmitAction = (action, type) => {
  const form = {
    setErrors: jest.fn(),
    setSubmitting: jest.fn(),
    setStatus: jest.fn(),
    resetForm: jest.fn(),
    setValues: jest.fn(),
  };
  const values = { formValue: 'mock' };

  const expectedAction = {
    type,
    values,
    form,
  };

  expect(action(values, form)).toEqual(expectedAction);
};

export default assertFormSubmitAction;
