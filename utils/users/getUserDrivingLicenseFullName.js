import { compose, join, pick, propOr, trim, values } from 'ramda';

const getUserDrivingLicenseFullName = (user) =>
  compose(
    trim,
    join(' '),
    values,
    pick(['drivingLicenseFirstName', 'drivingLicenseLastName']),
    propOr({}, 'userProfile'),
  )(user);

export default getUserDrivingLicenseFullName;
