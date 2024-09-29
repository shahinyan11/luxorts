import { stringify } from 'qs';

import isPresent from 'utils/isPresent';

// eslint-disable-next-line import/prefer-default-export
export const createRoute = ({ pathname, id, query }) => {
  let route = pathname;

  if (isPresent(id)) {
    route = pathname.replace(/\[id]/, id);
  }

  if (isPresent(query)) {
    route = `${route}?${stringify(query)}`;
  }

  return route;
};
