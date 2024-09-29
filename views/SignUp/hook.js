import { useFormik } from 'formik';
import { useRouter } from 'next/router';

import ROUTES from 'constants/routes';
import checkAuthCompleteness from 'utils/auth/checkAuthCompleteness';
import useFormSubmit from 'hooks/useFormSubmit';
import useParametricSelector from 'hooks/useParametricSelector';

import { fetchSelf } from 'state/concepts/users/actions';
import { isUserLoggedInSelector } from 'state/concepts/session/selectors';
import { userSignUp } from 'state/concepts/session/actions';
import { createUserEndpoint } from 'state/concepts/session/endpoints';
import { loadingSelectorCreator } from 'state/data/selectors';
import validationSchema from 'lib/yupLocalised/scheme/signUp';

function useContainer() {
  const router = useRouter();
  const onSubmit = useFormSubmit(userSignUp);

  const { endpoint } = createUserEndpoint;
  const isLoading = useParametricSelector(loadingSelectorCreator, endpoint);

  /**
   * Formik initialization
   */
  const formik = useFormik({
    initialValues: {
      userProfile: {
        firstName: '',
        lastName: '',
        dateOfBirth: '',
        phoneNumber: '',
      },
      email: '',
      password: '',
      invitationID: router.query.invitation_id,
      redirectRoute: ROUTES.EMAIL_VERIFICATION.PATH,
    },
    validationSchema,
    onSubmit,
  });

  return {
    formik,
    isLoading,
  };
}

export const getInitialProps = async (ctx) => {
  const isServer = Boolean(ctx.req);
  const isUserLoggedIn = isUserLoggedInSelector(ctx.store.getState());

  if (isUserLoggedIn) {
    ctx.store.dispatch(fetchSelf());
  }

  if (isServer) {
    await ctx.store.logicMiddleware.whenComplete(() => {
      checkAuthCompleteness(ctx);
    });
  }
};

export default useContainer;
