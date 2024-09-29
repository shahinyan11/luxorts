import { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import moment from 'moment';
import { head, includes, last } from 'ramda';

import ROUTES from 'constants/routes';
import { DATE_FORMAT } from 'constants';
import { TIME_PERIOD_KIND } from 'constants/listing';

import { createRoute } from 'utils/createRouteHelpers';
import isPresent from 'utils/isPresent';
import checkUserVerification from 'utils/auth/checkUserVerification';
import checkListingCompleteness from 'utils/listing/checkListingCompleteness';
import getTimePeriodBoundaries from 'utils/listing/getTimePeriodBoundaries';

import useParametricSelector from 'hooks/useParametricSelector';
import useImmutableCallback from 'hooks/useImmutableCallback';
import useCalendar from 'hooks/calendar/useCalendar';

import {
  createListingTimePeriods,
  fetchListing,
  fetchListingTimePeriods,
  updateListingAvailability,
} from 'state/concepts/listings/actions';
import { dataDeleteEntity } from 'state/data/actions';
import {
  listingBlockedTimePeriodsSelector,
  listingSelector,
} from 'state/concepts/listings/selectors';
import {
  createListingTimePeriodsEndpoint,
  fetchListingEndpoint,
  fetchListingTimePeriodsEndpoint,
  updateListingAvailabilityEndpoint,
} from 'state/concepts/listings/endpoints';
import { loadingSelectorCreator } from 'state/data/selectors';

function useContainer() {
  const router = useRouter();
  const dispatch = useDispatch();

  const listingId = router.query?.listingId;

  const { currentDate, setCurrentDate, onNavigate } = useCalendar({ listingId });

  // endpoints
  const { endpoint } = fetchListingEndpoint(listingId);
  const { endpoint: fetchEndpoint } = fetchListingTimePeriodsEndpoint(listingId);
  const { endpoint: createEndpoint } = createListingTimePeriodsEndpoint(listingId);
  const { endpoint: updateEndpoint } = updateListingAvailabilityEndpoint(listingId);

  // selectors
  const listing = useSelector((state) => listingSelector(state, listingId));
  const listingBlockedTimePeriods = useSelector(listingBlockedTimePeriodsSelector);
  const isFetching = useParametricSelector(loadingSelectorCreator, endpoint);
  const isLoading = useParametricSelector(loadingSelectorCreator, fetchEndpoint);
  const isTimePeriodsCreating = useParametricSelector(loadingSelectorCreator, createEndpoint);
  const isListingUpdating = useParametricSelector(loadingSelectorCreator, updateEndpoint);

  // loaders and skeletons conditions
  const showSkeleton = isFetching || !isPresent(listing);

  // prepare data from listing
  const stepStatus = listing?.applicationStep;
  const onBackRoute = createRoute({
    pathname: ROUTES.ADD_NEW_LISTING.RESERVATION_PREFERENCES.PATH,
    id: listingId,
  });

  /**
   * On next button handler
   */
  const onNext = useImmutableCallback(() => {
    dispatch(
      updateListingAvailability({
        listingId,
        redirectRoute: createRoute({
          pathname: ROUTES.ADD_NEW_LISTING.PRICING_AND_DISCOUNTS.PATH,
          id: listingId,
        }),
      }),
    );
  });

  /**
   * On slots select handler
   * @param data {object}
   */
  const onSelectSlot = useCallback(
    (data) => {
      const prevDay = moment().subtract(1, 'days').endOf('day').toDate();
      const nextMonthFirstDay = moment(currentDate).add(1, 'months').startOf('month').toDate();
      const prevMonthLastDay = moment(currentDate).subtract(1, 'months').endOf('month').toDate();

      const filtered = data.slots.filter((item) => {
        const itemTime = item.getTime();

        return (
          itemTime > prevDay.getTime() &&
          itemTime < nextMonthFirstDay.getTime() &&
          itemTime > prevMonthLastDay.getTime()
        );
      });

      if (!isPresent(filtered)) {
        return;
      }

      const hasBlockedPeriods =
        filtered.filter((item) =>
          includes(moment(item).format(DATE_FORMAT), listingBlockedTimePeriods),
        ).length > 0;

      const { startDate, endDate } = getTimePeriodBoundaries(currentDate);

      dispatch(
        createListingTimePeriods({
          listingId,
          startDate: moment(head(filtered)).format(DATE_FORMAT),
          endDate: moment(last(filtered)).format(DATE_FORMAT),
          fetchStartDate: startDate,
          fetchEndDate: endDate,
          kind: hasBlockedPeriods ? TIME_PERIOD_KIND.AVAILABLE : TIME_PERIOD_KIND.BLOCKED,
        }),
      );
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentDate, listingBlockedTimePeriods],
  );

  /**
   * Get available start date in current month
   * @param date {Date}
   * @return {moment.Moment}
   */
  const getAvailableStartDate = (date) => {
    const start = moment(date).startOf('months');
    const prevDay = moment().subtract(1, 'days').endOf('day');

    while (start < prevDay) {
      start.add(1, 'days');
    }

    return start;
  };

  /**
   * Calculate is full month blocked
   * @type {boolean}
   */
  const isFullMonthBlocked = useMemo(() => {
    const availableStartDate = getAvailableStartDate(currentDate);
    const currentDayNumber = availableStartDate.date();
    const daysInMonth = moment(currentDate).daysInMonth();
    const monthLastDay = moment(currentDate).endOf('month');
    const totalAvailableDays = daysInMonth - currentDayNumber + 1;
    let blockedDaysInCurrentMonth = 0;

    if (!isPresent(listingBlockedTimePeriods) || monthLastDay < availableStartDate) {
      return false;
    }

    const availableStartDateClone = availableStartDate.clone();

    while (availableStartDateClone < monthLastDay) {
      if (listingBlockedTimePeriods.includes(availableStartDateClone.format(DATE_FORMAT))) {
        blockedDaysInCurrentMonth += 1;
      }

      availableStartDateClone.add(1, 'days');
    }

    return totalAvailableDays === blockedDaysInCurrentMonth;
  }, [currentDate, listingBlockedTimePeriods]);

  /**
   * Block or unblock this month
   */
  const toggleMonthAvailability = useCallback(() => {
    const start = getAvailableStartDate(currentDate);
    const end = moment(currentDate).endOf('months');

    if (start < end) {
      const { startDate, endDate } = getTimePeriodBoundaries(currentDate);
      dispatch(
        createListingTimePeriods({
          listingId,
          startDate: start.format(DATE_FORMAT),
          endDate: end.format(DATE_FORMAT),
          fetchStartDate: startDate,
          fetchEndDate: endDate,
          kind: isFullMonthBlocked ? TIME_PERIOD_KIND.AVAILABLE : TIME_PERIOD_KIND.BLOCKED,
        }),
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentDate, isFullMonthBlocked]);

  return {
    showSkeleton,
    stepStatus,
    onNext,
    onBackRoute,
    isLoading,
    isTimePeriodsCreating,
    isListingUpdating,
    isFullMonthBlocked,
    onNavigate,
    listingBlockedTimePeriods,
    onSelectSlot,
    toggleMonthAvailability,
    getAvailableStartDate,
    setCurrentDate,
  };
}

export const getInitialProps = async (ctx) => {
  const listingId = ctx.query?.listingId;
  const isListingIdPresent = isPresent(listingId);
  const isServer = Boolean(ctx.req);
  const isUserVerified = checkUserVerification(ctx);

  if (!isUserVerified) {
    return;
  }

  ctx.store.dispatch(dataDeleteEntity('listingTimePeriod'));

  if (isListingIdPresent) {
    ctx.store.dispatch(fetchListing(listingId));
  }

  if (isServer) {
    await ctx.store.logicMiddleware.whenComplete(() => {
      checkListingCompleteness(ctx);
    });
  }

  // fetch after check listing completeness
  if (isListingIdPresent) {
    ctx.store.dispatch(fetchListingTimePeriods({ listingId }));
  }
};

export default useContainer;
