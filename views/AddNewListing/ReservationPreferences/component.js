import { Form } from 'antd';
import { FormikProvider } from 'formik';
import { FormattedMessage } from 'react-intl';

import { TIME_OPTIONS } from 'constants';
import {
  LISTING_APPROVAL_POLICY_OPTIONS,
  LISTING_CANCELLATION_POLICY_OPTIONS,
  LISTING_IN_ADVANCE_BOOKING_OPTIONS,
  LISTING_PREPARATION_TIME_OPTIONS,
  LISTING_PRIOR_NOTIFIED_OPTIONS,
  LISTING_RESERVATION_PREFERENCES_VALIDATION,
} from 'constants/listing/reservationPreferences';

import AddNewListingLayout from 'views/layouts/AddNewListing';
import RadioGroupField from 'views/shared/form/RadioGroupField';
import SelectField from 'views/shared/form/SelectField';
import InputNumberField from 'views/shared/form/InputNumberField';

import PriorNotifiedOption from './PriorNotifiedOption';
import useContainer, { getInitialProps } from './hook';

const ReservationPreferences = () => {
  const { formik, showSkeleton, stepStatus, onBackRoute, isLoading } = useContainer();
  const { priorNotified } = formik.values;

  return (
    <AddNewListingLayout
      onNext={formik.handleSubmit}
      onBackRoute={onBackRoute}
      title={{ id: 'shared.reservationPreferences' }}
      showSkeleton={showSkeleton}
      stepStatus={stepStatus}
      isLoading={isLoading}
      formik={formik}
    >
      <div className="new-listing__container mb-8">
        <h1 className="new-listing__title mb-32">
          <FormattedMessage id="listing.reservationPreferences.title" />
        </h1>
        <Form layout="vertical" size="large">
          <FormikProvider value={formik}>
            <h2 className="new-listing__subtitle mb-8">
              <FormattedMessage id="listing.reservationPreferences.prior.title" />
            </h2>
            <p className="new-listing__description mb-24">
              <FormattedMessage id="listing.reservationPreferences.prior.description" />
            </p>
            <div className="new-listing__item mb-24">
              <RadioGroupField name="priorNotified" className="mb-24 d-flex flex-column">
                {LISTING_PRIOR_NOTIFIED_OPTIONS.map(({ value, label }) => (
                  <PriorNotifiedOption
                    key={value}
                    value={value}
                    label={label}
                    selected={priorNotified}
                  />
                ))}
              </RadioGroupField>
            </div>
            <h2 className="new-listing__subtitle mb-8">
              <FormattedMessage id="listing.reservationPreferences.checkIn.title" />
            </h2>
            <p className="new-listing__description mb-24">
              <FormattedMessage id="listing.reservationPreferences.checkIn.title" />
            </p>
            <div className="new-listing__item mb-24">
              <div className="container-two-items">
                <SelectField
                  name="checkinStart"
                  label={{ id: 'shared.from' }}
                  placeholder={{ id: 'shared.selectTime' }}
                  options={TIME_OPTIONS}
                />
                <SelectField
                  name="checkinEnd"
                  formItemClassName="mb-24"
                  label={{ id: 'shared.to' }}
                  placeholder={{ id: 'shared.selectTime' }}
                  options={TIME_OPTIONS}
                />
              </div>
            </div>
            <h2 className="new-listing__subtitle mb-8">
              <FormattedMessage id="listing.reservationPreferences.inAdvance.title" />
            </h2>
            <p className="new-listing__description mb-24">
              <FormattedMessage id="listing.reservationPreferences.inAdvance.description" />
            </p>
            <div className="new-listing__item mb-24">
              <RadioGroupField
                className="mb-4 d-flex flex-column"
                name="inAdvanceBooking"
                items={LISTING_IN_ADVANCE_BOOKING_OPTIONS}
              />
              <p className="new-listing__caption pl-32 mb-24">
                <FormattedMessage id="listing.reservationPreferences.inAdvance.caption" />
              </p>
            </div>
            <h2 className="new-listing__subtitle mb-8">
              <FormattedMessage id="listing.reservationPreferences.stay.title" />
            </h2>
            <p className="new-listing__description mb-24">
              <FormattedMessage id="listing.reservationPreferences.stay.description" />
            </p>
            <div className="new-listing__item mb-24">
              <div className="container-two-items">
                <InputNumberField
                  name="minNights"
                  label={{ id: 'shared.nightsMin' }}
                  min={LISTING_RESERVATION_PREFERENCES_VALIDATION.GUESTS_STAY_TIME.MIN}
                  max={LISTING_RESERVATION_PREFERENCES_VALIDATION.GUESTS_STAY_TIME.MAX}
                  className="ant-input-number-wide"
                />
                <InputNumberField
                  name="maxNights"
                  label={{ id: 'shared.nightsMax' }}
                  min={LISTING_RESERVATION_PREFERENCES_VALIDATION.GUESTS_STAY_TIME.MIN}
                  max={LISTING_RESERVATION_PREFERENCES_VALIDATION.GUESTS_STAY_TIME.MAX}
                  formItemClassName="mb-24"
                  className="ant-input-number-wide"
                />
              </div>
            </div>
            <h2 className="new-listing__subtitle mb-8">
              <FormattedMessage id="listing.reservationPreferences.preparationTime.title" />
            </h2>
            <p className="new-listing__description mb-24">
              <FormattedMessage id="listing.reservationPreferences.preparationTime.description" />
            </p>
            <div className="new-listing__item mb-24">
              <SelectField
                name="preparationTime"
                formItemClassName="mb-24"
                label={{ id: 'shared.preparationTime' }}
                options={LISTING_PREPARATION_TIME_OPTIONS}
              />
            </div>
            <h2 className="new-listing__subtitle mb-8">
              <FormattedMessage id="listing.reservationPreferences.approvalPolicy.title" />
            </h2>
            <p className="new-listing__description mb-24">
              <FormattedMessage id="listing.reservationPreferences.approvalPolicy.description" />
            </p>
            <div className="new-listing__item mb-24">
              <RadioGroupField
                className="mb-4 d-flex flex-column ant-radio-group-with-captions"
                name="approvalPolicy"
                items={LISTING_APPROVAL_POLICY_OPTIONS}
              />
            </div>
            <h2 className="new-listing__subtitle mb-8">
              <FormattedMessage id="listing.reservationPreferences.cancellationPolicy.title" />
            </h2>
            <p className="new-listing__description mb-24">
              <FormattedMessage id="listing.reservationPreferences.cancellationPolicy.description" />
            </p>
            <div className="new-listing__item mb-24">
              <RadioGroupField
                className="mb-4 d-flex flex-column ant-radio-group-with-captions"
                name="cancellationPolicy"
                items={LISTING_CANCELLATION_POLICY_OPTIONS}
              />
            </div>
          </FormikProvider>
        </Form>
      </div>
    </AddNewListingLayout>
  );
};

ReservationPreferences.getInitialProps = getInitialProps;

export default ReservationPreferences;
