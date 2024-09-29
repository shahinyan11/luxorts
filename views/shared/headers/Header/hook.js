import { useSelector } from 'react-redux';
import { useFormik } from 'formik';

import { USER_TYPE } from 'constants';
import ROUTES from 'constants/routes';

import isPresent from 'utils/isPresent';

import { currentUserSelector } from 'state/concepts/session/selectors';

function useContainer({ isSignIn, isSignUp, isGuest }) {
  const currentUser = useSelector(currentUserSelector);
  const isUserLoggedIn = isPresent(currentUser);

  const isAuthFlow = isSignIn || isSignUp || isGuest;
  const isLoggedOutUserWidgetVisible = !isAuthFlow && !isUserLoggedIn;
  const isLoggedInUserWidgetVisible = !isAuthFlow && isUserLoggedIn;

  const switchToHostingRoute =
    currentUser?.userType === USER_TYPE.TRAVELLER
      ? ROUTES.ADD_NEW_LISTING.INDEX.PATH
      : ROUTES.DASHBOARD.LISTINGS.PATH;

  /**
   * Formik initialization
   */
  const formik = useFormik({
    initialValues: {
      location: '',
      date: '',
      guests: '',
    },
  });

  return {
    isLoggedOutUserWidgetVisible,
    isLoggedInUserWidgetVisible,
    formik,
    switchToHostingRoute,
  };
}

export default useContainer;
