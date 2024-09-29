import yup from 'lib/yupLocalised';

const validationSchema = yup.object().shape({
  phoneNumber: yup.string().required(),
});

export default validationSchema;
