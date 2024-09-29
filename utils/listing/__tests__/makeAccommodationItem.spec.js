import { omit } from 'ramda';

import makeAccommodationItem from '../makeAccommodationItem';

describe('makeAccommodationItem util', () => {
  const item = { id: 'id', amount: 1, kind: 'kind', foo: 'bar' };

  it('should returns object with id property', () => {
    expect(makeAccommodationItem(item)).toEqual(omit(['foo'], item));
  });

  it('should returns object without id property', () => {
    expect(makeAccommodationItem(omit(['id'], item))).toEqual(omit(['foo', 'id'], item));
  });
});
