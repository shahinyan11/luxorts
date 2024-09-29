import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';

import validationSchema from 'lib/yupLocalised/scheme/codeVerification';

import useFormSubmit from 'hooks/useFormSubmit';
import useParametricSelector from 'hooks/useParametricSelector';
import useImmutableCallback from 'hooks/useImmutableCallback';

import { loadingSelectorCreator } from 'state/data/selectors';
import { userResendUpdateEmail, userUpdateEmail } from 'state/concepts/session/actions';
import {
  userResendUpdateEmailEndpoint,
  userUpdateEmailEndpoint,
} from 'state/concepts/session/endpoints';

function useContainer({ email }) {
  const dispatch = useDispatch();
  const onSubmit = useFormSubmit(userUpdateEmail);
  const { endpoint } = userUpdateEmailEndpoint;
  const { endpoint: resendEndpoint } = userResendUpdateEmailEndpoint;
  const isLoading = useParametricSelector(loadingSelectorCreator, endpoint);
  const isResendLoading = useParametricSelector(loadingSelectorCreator, resendEndpoint);

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
    dispatch(userResendUpdateEmail());
  });

  return {
    formik,
    isLoading,
    isResendLoading,
    onResendClickHandler,
    email,
  };
}

export default useContainer;
