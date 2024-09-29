import { compose, join, pick, propOr, values } from 'ramda';

const getUserFullName = (user) =>
  compose(join(' '), values, pick(['firstName', 'lastName']), propOr({}, 'userProfile'))(user);

export default getUserFullName;
