import isPresent from 'utils/isPresent';

const makeAccommodationItem = (item) => ({
  ...(isPresent(item.id) && { id: item.id }),
  kind: item.kind,
  amount: item.amount,
});

export default makeAccommodationItem;
