const makeFormSubmitAction = (type) => (values, form) => ({
  type,
  values,
  form,
});

export default makeFormSubmitAction;
