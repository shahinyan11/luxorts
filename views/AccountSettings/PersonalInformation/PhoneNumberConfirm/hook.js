import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import validationSchema from 'lib/yupLocalised/scheme/codeVerification';

import useParametricSelector from 'hooks/useParametricSelector';
import useImmutableCallback from 'hooks/useImmutableCallback';
import useFormSubmit from 'hooks/useFormSubmit';
import { loadingSelectorCreator } from 'state/data/selectors';
import { userNewPhoneSelector } from 'state/concepts/session/selectors';
import { userResendUpdatePhone, userUpdatePhone } from 'state/concepts/session/actions';
import { userUpdatePhoneEndpoint } from 'state/concepts/session/endpoints';

function useContainer() {
  const dispatch = useDispatch();
  const onSubmit = useFormSubmit(userUpdatePhone);
  const { endpoint } = userUpdatePhoneEndpoint;
  const isLoading = useParametricSelector(loadingSelectorCreator, endpoint);
  const newPhone = useSelector(userNewPhoneSelector);

  /**
   * Formik initialization
   */
  const formik = useFormik({
    initialValues: {
      code: '',
    },
    validationSchema,
    onSubmit,
  });

  /**
   * Handle resend button click
   */
  const onResendClickHandler = useImmutableCallback(() => {
    dispatch(userResendUpdatePhone());
  });

  return {
    formik,
    isLoading,
    newPhone,
    onResendClickHandler,
  };
}

export default useContainer;
