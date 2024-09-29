import { has } from 'ramda';

import isPresent from 'utils/isPresent';

const makeSelectedItem = (idSlug) => (item) => ({
  [idSlug]: item.id,
  delete: isPresent(item.selectedId) ? !item.checked : false,
  name: item.name,
  description: item.description,
  ...(has('paid', item) && { paid: item.paid }),
});

export default makeSelectedItem;
