import { formik } from '__mocks__/formik';

import resetSpecificFields from '../resetSpecificFields';

formik.values.firstName = 'name';

describe('resetSpecificFields helper', () => {
  it('should call form setFieldValue', () => {
    const fieldNames = ['firstName'];

    resetSpecificFields(formik, fieldNames);

    expect(formik.setFieldValue).toHaveBeenCalledWith('firstName', formik.values.firstName);
  });
});
