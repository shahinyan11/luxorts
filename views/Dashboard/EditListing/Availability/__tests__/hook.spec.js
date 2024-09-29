import { renderHook } from '@testing-library/react-hooks';

import checkUserVerification from 'utils/auth/checkUserVerification';

import {
  fetchListing,
  fetchListingPricing,
  fetchListingTimePeriods,
} from 'state/concepts/listings/actions';
import { dataDeleteEntity } from 'state/data/actions';
import { store } from '__mocks__/react-redux';

import mockedListing from 'views/__mocks__/mockedListing';
import mockedListingCustomPrice from 'views/__mocks__/mockedListingCustomPrice';

import useContainer, { getInitialProps } from '../hook';

jest.mock('utils/auth/checkUserVerification', () => jest.fn(() => true));
jest.mock('hooks/useParametricSelector', () => jest.fn(() => false));
jest.mock('state/concepts/listings/selectors', () => ({
  listingSelector: jest.fn(() => mockedListing),
  listingTimePeriodsSelector: jest.fn(() => [{ id: 'event-1' }]),
  listingCustomPriceSelector: jest.fn(() => mockedListingCustomPrice),
}));
jest.mock('hooks/calendar/useCalendar', () =>
  jest.fn(() => ({
    onNavigate: jest.fn(),
    currentDate: 'currentDate',
  })),
);

const mockedListingId = 'listingId';
const mockedRouter = {
  query: { listingId: mockedListingId },
};
jest.mock('next/router', () => ({
  useRouter: jest.fn(() => mockedRouter),
}));

describe('Availability useContainer hook', () => {
  let result = null;

  beforeEach(() => {
    jest.clearAllMocks();

    ({ result } = renderHook(useContainer));
  });

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  describe('getInitialProps method', () => {
    const ctx = {
      store,
      query: {
        listingId: mockedListingId,
      },
    };

    it('should dispatches all actions when user is verified and listingId is present', async () => {
      await getInitialProps(ctx);

      expect(store.dispatch).toHaveBeenCalledTimes(4);

      expect(store.dispatch).toHaveBeenNthCalledWith(1, dataDeleteEntity('listingTimePeriod'));
      expect(store.dispatch).toHaveBeenNthCalledWith(2, fetchListing(mockedListingId));
      expect(store.dispatch).toHaveBeenNthCalledWith(
        3,
        fetchListingTimePeriods({ listingId: mockedListingId }),
      );
      expect(store.dispatch).toHaveBeenNthCalledWith(4, fetchListingPricing(mockedListingId));
    });

    it('should dispatches only general actions when user is verified and listingId isn`t present', async () => {
      await getInitialProps({
        ...ctx,
        query: {},
      });

      expect(store.dispatch).toHaveBeenCalledTimes(1);

      expect(store.dispatch).toHaveBeenNthCalledWith(1, dataDeleteEntity('listingTimePeriod'));
    });

    it('shouldn`t dispatches any actions when user isn`t verified', async () => {
      checkUserVerification.mockReturnValueOnce(false);

      await getInitialProps(ctx);

      expect(store.dispatch).not.toHaveBeenCalled();
    });
  });
});
