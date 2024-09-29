import { compose, head, join, map, pick, propOr, values } from 'ramda';

const getUserInitials = (user) =>
  compose(
    join(''),
    map(head),
    values,
    pick(['firstName', 'lastName']),
    propOr({}, 'userProfile'),
  )(user);

export default getUserInitials;
