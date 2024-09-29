import { useSelector } from 'react-redux';
import { useFormik } from 'formik';

import validationSchema from 'lib/yupLocalised/scheme/updatePhoneNumber';

import useParametricSelector from 'hooks/useParametricSelector';
import useFormSubmit from 'hooks/useFormSubmit';
import { loadingSelectorCreator } from 'state/data/selectors';
import { userSendUpdatePhoneEndpoint } from 'state/concepts/session/endpoints';
import { userSendUpdatePhone } from 'state/concepts/session/actions';
import { currentUserSelector, userNewPhoneSelector } from 'state/concepts/session/selectors';

function useContainer() {
  const newPhone = useSelector(userNewPhoneSelector);
  const currentUser = useSelector(currentUserSelector);
  const onSubmit = useFormSubmit(userSendUpdatePhone);
  const { endpoint } = userSendUpdatePhoneEndpoint;
  const isLoading = useParametricSelector(loadingSelectorCreator, endpoint);

  /**
   * Formik initialization
   */
  const formik = useFormik({
    initialValues: {
      phoneNumber: currentUser.userProfile.phoneNumber,
    },
    validationSchema,
    onSubmit,
  });

  return {
    formik,
    newPhone,
    isLoading,
  };
}

export default useContainer;
