import { has, prop } from 'ramda';

import { ACTIVE } from 'constants/statuses';

import isPresent from 'utils/isPresent';
import makeSelectedItem from 'utils/listing/makeSelectedItem';

const prepareDataForRequest = (data, idSlug = 'id') => {
  const items = data
    .filter(
      (item) =>
        (item.checked && !isPresent(item.selectedId)) ||
        (item.checked &&
          isPresent(item.selectedId) &&
          has('paid', item) &&
          item.status === ACTIVE) ||
        (!item.checked && isPresent(item.selectedId)),
    )
    .map(makeSelectedItem(idSlug));

  const ids = data.filter((item) => !item.checked && item.status !== ACTIVE).map(prop('id'));

  const relatedIds = data
    .filter((item) => isPresent(item.selectedId) && !item.checked)
    .map(prop('selectedId'));

  return {
    items,
    ids,
    relatedIds,
  };
};

export default prepareDataForRequest;
