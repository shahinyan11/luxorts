const resetSpecificFields = (formik, fieldNames) => {
  fieldNames?.forEach((name) => {
    formik.setFieldValue(name, formik.values[name]);
  });
};

export default resetSpecificFields;
