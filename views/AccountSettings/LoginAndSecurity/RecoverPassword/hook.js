import { useFormik } from 'formik';
import { useRouter } from 'next/router';

import ROUTES from 'constants/routes';

import validationSchema from 'lib/yupLocalised/scheme/newPassword';

import useParametricSelector from 'hooks/useParametricSelector';
import useFormSubmit from 'hooks/useFormSubmit';
import useImmutableCallback from 'hooks/useImmutableCallback';

import { loadingSelectorCreator } from 'state/data/selectors';
import { userUpdatePassword } from 'state/concepts/session/actions';
import { userUpdatePasswordEndpoint } from 'state/concepts/session/endpoints';

function useContainer() {
  const router = useRouter();
  const onSubmit = useFormSubmit(userUpdatePassword);
  const { endpoint } = userUpdatePasswordEndpoint;
  const isLoading = useParametricSelector(loadingSelectorCreator, endpoint);

  /**
   * Formik initialization
   */
  const formik = useFormik({
    validateOnMount: true,
    initialValues: {
      password: '',
      redirectRoute: ROUTES.ACCOUNT_SETTINGS.LOGIN_AND_SECURITY.PATH,
      message: {
        description: {
          id: 'shared.yourPasswordHasBeenUpdated',
        },
      },
    },
    validationSchema,
    onSubmit,
  });

  /**
   *  Cancel click handler
   */
  const onCancel = useImmutableCallback(async () => {
    router.back();
  });

  return {
    formik,
    isLoading,
    onCancel,
  };
}

export default useContainer;
