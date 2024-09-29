import { useSelector } from 'react-redux';
import { useFormik } from 'formik';

import validationSchema from 'lib/yupLocalised/scheme/updateEmail';

import { currentUserEmailSelector } from 'state/concepts/session/selectors';
import { userSendUpdateEmail } from 'state/concepts/session/actions';
import useFormSubmit from 'hooks/useFormSubmit';

function useContainer() {
  const email = useSelector(currentUserEmailSelector);
  const onSubmit = useFormSubmit(userSendUpdateEmail, true);

  /**
   * Formik initialization
   */
  const formik = useFormik({
    initialValues: {
      email,
      password: '',
    },
    validationSchema,
    onSubmit,
  });

  return {
    formik,
    email,
  };
}

export default useContainer;
