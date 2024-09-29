import { FormattedMessage } from 'react-intl';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import classNames from 'classnames';
import { Skeleton } from 'antd';

import withAdditionalProps from 'hocs/withAdditionalProps';

import EditListingLayout from 'views/layouts/EditListing';

import DateCellWrapper from './DateCellWrapper';
import Event from './Event';
import Toolbar from './Toolbar';
import DateHeader from './DateHeader';

import useContainer, { getInitialProps } from './hook';

const localizer = momentLocalizer(moment);

const Availability = () => {
  const { showSkeleton, isLoading, events, pricePerDay, customPrice, currentDate, onNavigate } =
    useContainer();

  if (showSkeleton) {
    return (
      <div className="new-listing__container new-listing__container--full-width mb-8">
        <Skeleton active />
      </div>
    );
  }

  return (
    <>
      <div className="new-listing__container new-listing__container--full-width mb-8">
        <h1 className="new-listing__title mb-8">
          <FormattedMessage id="shared.setAvailabilityAndPricing" />
        </h1>
        <p className="new-listing__description mb-32">
          <FormattedMessage id="edit.listing.availability.description" />
        </p>
      </div>
      <div className="booking-calendar booking-calendar--tab">
        <Calendar
          selectable
          className={classNames(
            'booking-calendar__container mb-32',
            isLoading && 'booking-calendar__container--loading',
          )}
          events={events}
          localizer={localizer}
          components={{
            toolbar: Toolbar,
            dateHeader: DateHeader,
            event: withAdditionalProps(Event, { currentDate }),
            dateCellWrapper: withAdditionalProps(DateCellWrapper, { pricePerDay, customPrice }),
          }}
          onNavigate={onNavigate}
        />
      </div>
    </>
  );
};

Availability.Layout = EditListingLayout;

Availability.getInitialProps = getInitialProps;

export default Availability;
