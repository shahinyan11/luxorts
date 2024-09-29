import { Form } from 'antd';
import { FormikProvider } from 'formik';
import { FormattedMessage } from 'react-intl';

import AddNewListingLayout from 'views/layouts/AddNewListing';
import CurrencyInputField from 'views/shared/form/CurrencyInputField';

import useContainer, { getInitialProps } from './hook';

const PricingAndDiscounts = () => {
  const {
    formik,
    showSkeleton,
    stepStatus,
    isLoading,
    onBackRoute,
    weeklyDiscountTooltip,
    monthlyDiscountTooltip,
  } = useContainer();

  return (
    <AddNewListingLayout
      onNext={formik.handleSubmit}
      onBackRoute={onBackRoute}
      title={{ id: 'shared.pricingAndDiscounts' }}
      showSkeleton={showSkeleton}
      stepStatus={stepStatus}
      isLoading={isLoading}
      formik={formik}
    >
      <div className="new-listing__container mb-8">
        <h1 className="new-listing__title mb-32">
          <FormattedMessage id="shared.priceYourSpace" />
        </h1>
        <Form layout="vertical" size="large">
          <FormikProvider value={formik}>
            <h2 className="new-listing__subtitle mb-8">
              <FormattedMessage id="shared.setPriceForYourSpace" />
            </h2>
            <p className="new-listing__description mb-24">
              <FormattedMessage id="listing.pricingAndDiscounts.pricePerDay.description" />
            </p>
            <div className="new-listing__item mb-24 pb-8">
              <CurrencyInputField
                name="pricePerDay"
                prefix="$"
                label={{ id: 'shared.basePrice' }}
                suffix={{ id: 'shared.valuePerNight', values: { value: '' } }}
                placeholder={{ id: 'shared.valuePerNight', values: { value: '$0' } }}
              />
            </div>
            <h2 className="new-listing__subtitle mb-8">
              <FormattedMessage id="shared.lengthOfStayDiscounts" />
            </h2>
            <p className="new-listing__description mb-24">
              <FormattedMessage id="listing.pricingAndDiscounts.weeklyDiscount.description" />
            </p>
            <div className="new-listing__item mb-24">
              <CurrencyInputField
                name="weeklyDiscount"
                label={{ id: 'shared.weeklyDiscount' }}
                suffix={{ id: 'shared.valueOff', values: { value: '%' } }}
                placeholder={{ id: 'shared.valueOff', values: { value: '0%' } }}
                tooltip={weeklyDiscountTooltip}
                disableGroupSeparators
              />
              <CurrencyInputField
                name="mounthlyDiscount"
                label={{ id: 'shared.monthlyDiscount' }}
                suffix={{ id: 'shared.valueOff', values: { value: '%' } }}
                placeholder={{ id: 'shared.valueOff', values: { value: '0%' } }}
                tooltip={monthlyDiscountTooltip}
                disableGroupSeparators
              />
            </div>
            <h2 className="new-listing__subtitle mb-8">
              <FormattedMessage id="shared.extraCharges" />
            </h2>
            <p className="new-listing__description mb-24">
              <FormattedMessage id="listing.pricingAndDiscounts.extraCharges.description" />
            </p>
            <div className="new-listing__item mb-24">
              <CurrencyInputField
                name="extraCharges"
                prefix="$"
                label={{ id: 'shared.cleaningFee' }}
                placeholder="$0"
                tooltip={{ id: 'listing.pricingAndDiscounts.extraCharges.tooltip' }}
              />
            </div>
          </FormikProvider>
        </Form>
      </div>
    </AddNewListingLayout>
  );
};

PricingAndDiscounts.getInitialProps = getInitialProps;

export default PricingAndDiscounts;
