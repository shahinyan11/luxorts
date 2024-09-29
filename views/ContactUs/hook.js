import { useFormik } from 'formik';

import validationSchema from 'lib/yupLocalised/scheme/contactUs';
import useFormSubmit from 'hooks/useFormSubmit';
import { contactUsRequest } from 'state/concepts/publicInfo/actions';
import useParametricSelector from 'hooks/useParametricSelector';
import { loadingSelectorCreator } from 'state/data/selectors';
import { contactUsRequestEndpoint } from 'state/concepts/publicInfo/endpoints';

const useContainer = () => {
  const onSubmit = useFormSubmit(contactUsRequest, true);
  const { endpoint } = contactUsRequestEndpoint;
  const isLoading = useParametricSelector(loadingSelectorCreator, endpoint);

  /**
   * Formik initialization
   */
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      message: '',
    },
    validationSchema,
    onSubmit,
  });

  return {
    isLoading,
    formik,
  };
};

export default useContainer;
