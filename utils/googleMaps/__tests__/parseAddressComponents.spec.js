import fetchGeocoderResponse from 'state/concepts/googleMaps/__mocks__/fetchGeocoderResponse';

import parseAddressComponents from '../parseAddressComponents';

it('parseAddressComponents util matches snapshot', () => {
  const components = fetchGeocoderResponse.data.results[0].address_components;

  expect(parseAddressComponents(components)).toMatchSnapshot();
});
