import { useState } from 'react';
import { useDispatch } from 'react-redux';

import getTimePeriodBoundaries from 'utils/listing/getTimePeriodBoundaries';

import useImmutableCallback from 'hooks/useImmutableCallback';

import { fetchListingTimePeriods } from 'state/concepts/listings/actions';

const useCalendar = ({ listingId }) => {
  const dispatch = useDispatch();

  // local state
  const [currentDate, setCurrentDate] = useState(new Date());

  /**
   * Handle date changes
   * @param date {Date}
   */
  const onNavigate = useImmutableCallback((date) => {
    const { startDate, endDate } = getTimePeriodBoundaries(date);

    setCurrentDate(date);
    dispatch(fetchListingTimePeriods({ listingId, startDate, endDate }));
  });

  return {
    currentDate,
    setCurrentDate,
    onNavigate,
  };
};

export default useCalendar;
