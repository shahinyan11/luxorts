import { act, renderHook } from '@testing-library/react-hooks';

import { fetchListingTimePeriods } from 'state/concepts/listings/actions';
import { dispatch } from '__mocks__/react-redux';

import useCalendar from '../useCalendar';

const mockedTimePeriodsBoundaries = { startDate: 'startDate', endDate: 'endDate' };
jest.mock('utils/listing/getTimePeriodBoundaries', () =>
  jest.fn(() => mockedTimePeriodsBoundaries),
);

describe('useCalendar hook', () => {
  let result = null;
  const listingId = 'listingId';

  beforeAll(() => {
    jest.useFakeTimers('modern');
    jest.setSystemTime(new Date(2022, 1, 1));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  beforeEach(() => {
    jest.clearAllMocks();

    ({ result } = renderHook(() => useCalendar({ listingId })));
  });

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  describe('onNavigate method', () => {
    beforeEach(() => {
      act(() => {
        result.current.onNavigate('date');
      });
    });

    it('should dispatches fetchListingTimePeriods with listingId, startDate and endDate', () => {
      expect(dispatch).toHaveBeenCalledWith(
        fetchListingTimePeriods({ listingId, ...mockedTimePeriodsBoundaries }),
      );
    });

    it('should sets currentDate with passed date', () => {
      expect(result.current.currentDate).toBe('date');
    });
  });
});
