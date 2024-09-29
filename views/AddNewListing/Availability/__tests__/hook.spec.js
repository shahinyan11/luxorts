import { act, renderHook } from '@testing-library/react-hooks';
import moment from 'moment';

import { DATE_FORMAT } from 'constants';
import { TIME_PERIOD_KIND } from 'constants/listing';
import ROUTES from 'constants/routes';

import { createRoute } from 'utils/createRouteHelpers';
import checkUserVerification from 'utils/auth/checkUserVerification';

import {
  createListingTimePeriods,
  fetchListing,
  fetchListingTimePeriods,
  updateListingAvailability,
} from 'state/concepts/listings/actions';
import { dataDeleteEntity } from 'state/data/actions';
import { dispatch, store } from '__mocks__/react-redux';
import mockedListing from 'views/__mocks__/mockedListing';
import mockedListingBlockedTimePeriods from 'views/__mocks__/mockedListingBlockedTimePeriods';

import useContainer, { getInitialProps } from '../hook';

jest.mock('utils/auth/checkUserVerification', () => jest.fn(() => true));
jest.mock('hooks/useParametricSelector', () => jest.fn(() => false));
const mockedMoment = moment().format(DATE_FORMAT);
jest.mock('state/concepts/listings/selectors', () => ({
  listingSelector: jest.fn(() => mockedListing),
  listingBlockedTimePeriodsSelector: jest.fn(() => [
    ...mockedListingBlockedTimePeriods,
    mockedMoment,
  ]),
}));
jest.mock('utils/listing/checkListingCompleteness');

const mockedTimePeriodsBoundaries = { startDate: 'startDate', endDate: 'endDate' };
jest.mock('utils/listing/getTimePeriodBoundaries', () =>
  jest.fn(() => mockedTimePeriodsBoundaries),
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

  describe('onSelectSlot method', () => {
    it('should dispatches createListingTimePeriods when date is actual', () => {
      const data = { slots: [new Date()] };
      result.current.onSelectSlot(data);

      expect(dispatch).toHaveBeenCalledWith(
        createListingTimePeriods({
          listingId: mockedListingId,
          startDate: moment(data.slots[0]).format(DATE_FORMAT),
          endDate: moment(data.slots[0]).format(DATE_FORMAT),
          fetchStartDate: 'startDate',
          fetchEndDate: 'endDate',
          kind: TIME_PERIOD_KIND.AVAILABLE,
        }),
      );
    });

    it('shouldn`t dispatches createListingTimePeriods when date isn`t actual', () => {
      const date = new Date();
      date.setDate(date.getDate() - 1);

      const data = { slots: [date] };
      result.current.onSelectSlot(data);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });

  it('getAvailableStartDate should returns date that more than previous day', () => {
    const date = new Date();
    const start = moment(date).startOf('months');
    const prevDay = moment().subtract(1, 'days').endOf('day');

    while (start < prevDay) {
      start.add(1, 'days');
    }

    expect(result.current.getAvailableStartDate(date)).toEqual(start);
  });

  describe('toggleMonthAvailability method', () => {
    it('should dispatches createListingTimePeriods when currentDate is actual', () => {
      const { currentDate, getAvailableStartDate, toggleMonthAvailability } = result.current;

      toggleMonthAvailability();

      const start = getAvailableStartDate(currentDate);
      const end = moment(currentDate).endOf('months');

      expect(dispatch).toHaveBeenCalledWith(
        createListingTimePeriods({
          listingId: mockedListingId,
          startDate: start.format(DATE_FORMAT),
          endDate: end.format(DATE_FORMAT),
          fetchStartDate: 'startDate',
          fetchEndDate: 'endDate',
          kind: TIME_PERIOD_KIND.BLOCKED,
        }),
      );
    });

    it('shouldn`t dispatches createListingTimePeriods when currentDate isn`t actual', () => {
      const date = new Date();
      date.setMonth(date.getMonth() - 1);

      act(() => {
        result.current.setCurrentDate(date);
      });

      result.current.toggleMonthAvailability();

      expect(dispatch).not.toHaveBeenCalled();
    });
  });

  it('onNext method should dispatches updateListingAvailability', () => {
    result.current.onNext();

    expect(dispatch).toHaveBeenCalledWith(
      updateListingAvailability({
        listingId: mockedListingId,
        redirectRoute: createRoute({
          pathname: ROUTES.ADD_NEW_LISTING.PRICING_AND_DISCOUNTS.PATH,
          id: mockedListingId,
        }),
      }),
    );
  });

  describe('getInitialProps method', () => {
    const ctx = {
      store,
      query: {
        listingId: mockedListingId,
      },
      req: {},
    };

    it('should dispatches all actions when user is verified and listingId is present', async () => {
      await getInitialProps(ctx);

      expect(store.dispatch).toHaveBeenCalledTimes(3);

      expect(store.dispatch).toHaveBeenNthCalledWith(1, dataDeleteEntity('listingTimePeriod'));
      expect(store.dispatch).toHaveBeenNthCalledWith(2, fetchListing(mockedListingId));
      expect(store.dispatch).toHaveBeenNthCalledWith(
        3,
        fetchListingTimePeriods({ listingId: mockedListingId }),
      );
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

    it('should calls whenComplete callback when is server', async () => {
      await getInitialProps(ctx);

      expect(store.logicMiddleware.whenComplete).toHaveBeenCalled();
    });

    it('shouldn`t calls whenComplete callback when isn`t server', async () => {
      await getInitialProps({
        ...ctx,
        req: null,
      });

      expect(store.logicMiddleware.whenComplete).not.toHaveBeenCalled();
    });
  });
});
