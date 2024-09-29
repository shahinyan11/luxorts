import { FormattedMessage } from 'react-intl';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import classNames from 'classnames';

import withAdditionalProps from 'hocs/withAdditionalProps';

import AddNewListingLayout from 'views/layouts/AddNewListing';

import Toolbar from './Toolbar';
import DateCellWrapper from './DateCellWrapper';
import useContainer, { getInitialProps } from './hook';

const localizer = momentLocalizer(moment);

const Availability = () => {
  const {
    showSkeleton,
    stepStatus,
    isLoading,
    isTimePeriodsCreating,
    isListingUpdating,
    isFullMonthBlocked,
    onNext,
    onBackRoute,
    onNavigate,
    listingBlockedTimePeriods,
    onSelectSlot,
    toggleMonthAvailability,
  } = useContainer();

  return (
    <AddNewListingLayout
      onNext={onNext}
      onBackRoute={onBackRoute}
      title={{ id: 'shared.availability' }}
      showSkeleton={showSkeleton}
      isLoading={isListingUpdating}
      stepStatus={stepStatus}
    >
      <div className="new-listing__container mb-8">
        <h1 className="new-listing__title mb-8">
          <FormattedMessage id="shared.setAvailability" />
        </h1>
        <p className="new-listing__description mb-32">
          <FormattedMessage id="listing.availability.description" />
        </p>
        <div className="calendar-legend mb-32">
          <div className="calendar-legend__item">
            <p className="calendar-legend__sign m-0">
              <FormattedMessage id="shared.n" />
            </p>
            <p className="calendar-legend__description m-0">
              <FormattedMessage id="shared.available" />
            </p>
          </div>
          <div className="calendar-legend__item">
            <p className="calendar-legend__sign calendar-legend__sign--blocked m-0">
              <FormattedMessage id="shared.n" />
            </p>
            <p className="calendar-legend__description m-0">
              <FormattedMessage id="shared.blocked" />
            </p>
          </div>
        </div>
        <Calendar
          selectable
          className={classNames(
            'aviability-calendar mb-32',
            isLoading && 'aviability-calendar--loading',
          )}
          localizer={localizer}
          components={{
            toolbar: withAdditionalProps(Toolbar, {
              toggleMonthAvailability,
              isFullMonthBlocked,
              isTimePeriodsCreating,
            }),
            dateCellWrapper: withAdditionalProps(DateCellWrapper, { listingBlockedTimePeriods }),
          }}
          onNavigate={onNavigate}
          onSelectSlot={onSelectSlot}
        />
      </div>
    </AddNewListingLayout>
  );
};

Availability.getInitialProps = getInitialProps;

export default Availability;
