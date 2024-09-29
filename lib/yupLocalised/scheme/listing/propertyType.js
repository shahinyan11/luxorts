import yup from 'lib/yupLocalised';

const validationSchema = yup.object().shape({
  listingPropertyType: yup.object().shape({
    propertyTypeId: yup.string().nullable().required(),
  }),
});

export default validationSchema;
