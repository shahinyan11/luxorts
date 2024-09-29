import { usersOperations } from './users';
import { sessionOperations } from './session';
import { listingsOperations } from './listings';
import { googleMapsOperations } from './googleMaps';
import { publicInfoOperations } from './publicInfo';

export default [
  ...usersOperations,
  ...sessionOperations,
  ...listingsOperations,
  ...googleMapsOperations,
  ...publicInfoOperations,
];
