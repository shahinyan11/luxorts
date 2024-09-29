import getFullAddress from '../getFullAddress';

it('getFullAddress util should returns full address string', () => {
  const location = {
    street: 'street',
    city: 'city',
    state: 'state',
    zipCode: 'zipCode',
    country: 'country',
  };

  expect(getFullAddress(location)).toBe('street, city, state zipCode, country');
});
