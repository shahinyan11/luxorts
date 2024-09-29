import * as formikPackage from 'formik';

export const formik = {
  dirty: true,
  isValid: true,
  setFieldValue: jest.fn(),
  setFieldTouched: jest.fn(),
  setValues: jest.fn(),
  handleSubmit: jest.fn(),
  validateForm: jest.fn(),
  resetForm: jest.fn(),
  values: {},
};

export const useFormik = (config = {}) => ({
  ...formik,
  ...config,
});

export const useFieldFormikHelpers = { setValue: jest.fn(), setTouched: jest.fn() };
export const useField = () => [{}, {}, useFieldFormikHelpers];
export const useFormikContext = () => formik;

export const { Field } = formikPackage;
export const { FormikProvider } = formikPackage;
export const { getIn } = formikPackage;
