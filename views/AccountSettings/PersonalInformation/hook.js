import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import moment from 'moment';

import { DATE_FORMAT } from 'constants';

import validationSchema from 'lib/yupLocalised/scheme/personalInformation';

import checkUserVerification from 'utils/auth/checkUserVerification';

import { currentUserSelector } from 'state/concepts/session/selectors';
import { userUpdateProfile } from 'state/concepts/session/actions';
import useFormSubmit from 'hooks/useFormSubmit';

function useContainer() {
  const currentUser = useSelector(currentUserSelector);
  const onSubmit = useFormSubmit(userUpdateProfile);

  const {
    userProfile: {
      firstName,
      lastName,
      gender,
      dateOfBirth,
      about,
      country,
      street,
      apartmentNumber,
      city,
      state,
      zipCode,
      drivingLicenseFirstName,
      drivingLicenseLastName,
    },
  } = currentUser || {}; // {} in order not to throw an error when there is no current user;

  /**
   * Formik initialization
   */
  const formik = useFormik({
    initialValues: {
      firstName,
      lastName,
      gender,
      dateOfBirth: moment(dateOfBirth).format(DATE_FORMAT),
      about,
      country,
      street,
      apartmentNumber,
      city,
      state,
      zipCode,
      drivingLicenseFirstName,
      drivingLicenseLastName,
    },
    validationSchema,
    onSubmit,
  });

  return {
    formik,
  };
}

export const getInitialProps = async (ctx) => {
  checkUserVerification(ctx);
};

export default useContainer;
