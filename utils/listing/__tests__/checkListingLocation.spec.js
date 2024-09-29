import getFullAddress from 'utils/users/getFullAddress';

import { listingSelector } from 'state/concepts/listings/selectors';
import { fetchGeocoder } from 'state/concepts/googleMaps/actions';

import { store } from '__mocks__/react-redux';
import mockedListing from 'views/__mocks__/mockedListing';

import checkListingLocation from '../checkListingLocation';

jest.mock('state/concepts/listings/selectors', () => ({
  listingSelector: jest.fn(() => mockedListing),
}));

describe('checkListingLocation util', () => {
  const ctx = {
    store,
    query: {
      listingId: 'listingId',
    },
  };

  it('shouldn`t dispatches fetchGeocoder when longitude and latitude are present', () => {
    checkListingLocation(ctx);

    expect(store.dispatch).not.toHaveBeenCalled();
  });

  it('shouldn`t dispatches fetchGeocoder when listingLocation isn`t present', () => {
    listingSelector.mockReturnValueOnce({
      ...mockedListing,
      listingLocation: null,
    });

    checkListingLocation(ctx);

    expect(store.dispatch).not.toHaveBeenCalled();
  });

  it('should dispatches fetchGeocoder when listingLocation is present, and longitude and latitude aren`t present', () => {
    listingSelector.mockReturnValueOnce({
      ...mockedListing,
      listingLocation: {
        ...mockedListing.listingLocation,
        longitude: null,
        latitude: null,
      },
    });

    checkListingLocation(ctx);

    const query = getFullAddress(mockedListing.listingLocation);

    expect(store.dispatch).toHaveBeenCalledWith(fetchGeocoder({ query }));
  });
});
