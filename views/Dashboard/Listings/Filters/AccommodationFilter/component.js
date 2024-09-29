import { Dropdown, Form } from 'antd';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { FormikProvider } from 'formik';
import classNames from 'classnames';

import { ACCOMMODATION_VALIDATION, LISTING_FILTER_KEY } from 'constants/listing/manageListings';

import SvgIcon from 'views/shared/SvgIcon';
import GradientButton from 'views/shared/GradientButton';
import InputNumberField from 'views/shared/form/InputNumberField';

import useContainer from './hook';

const AccommodationFilter = ({ filters, onFilter }) => {
  const {
    visible,
    clearButtonVisible,
    formik,
    appliedFilters,
    onVisibilityChangeHandler,
    onApply,
    onClear,
  } = useContainer({
    onFilter,
    filters,
  });
  const hasFilters = appliedFilters > 0;

  return (
    <Dropdown
      trigger="click"
      visible={visible}
      onVisibleChange={onVisibilityChangeHandler}
      placement="bottomLeft"
      className="table-head__dropdown-payment"
      overlay={
        <div className="table-head__dropdown-content">
          <div className="d-flex flex-column mb-0 table-head__content">
            <Form layout="vertical" size="large" className="pl-24 pr-24 pt-24 pb-24">
              <FormikProvider value={formik}>
                <InputNumberField
                  name={LISTING_FILTER_KEY.GUESTS_NUMBER_EQ}
                  formItemClassName="mb-8 width-312 ant-form-item--light"
                  addonBefore={<FormattedMessage id="shared.guests" />}
                  min={ACCOMMODATION_VALIDATION.MIN}
                  max={ACCOMMODATION_VALIDATION.MAX}
                />
                <InputNumberField
                  name={LISTING_FILTER_KEY.BEDROOMS_AMOUNT_EQ}
                  formItemClassName="mb-8 width-312 ant-form-item--light"
                  addonBefore={<FormattedMessage id="shared.bedrooms" />}
                  min={ACCOMMODATION_VALIDATION.MIN}
                  max={ACCOMMODATION_VALIDATION.MAX}
                />
                <InputNumberField
                  name={LISTING_FILTER_KEY.BEDS_AMOUNT_EQ}
                  formItemClassName="mb-8 width-312 ant-form-item--light"
                  addonBefore={<FormattedMessage id="shared.beds" />}
                  min={ACCOMMODATION_VALIDATION.MIN}
                  max={ACCOMMODATION_VALIDATION.MAX}
                />
                <InputNumberField
                  name={LISTING_FILTER_KEY.BATHROOMS_AMOUNT_EQ}
                  formItemClassName="mb-0 width-312 ant-form-item--light"
                  addonBefore={<FormattedMessage id="shared.baths" />}
                  min={ACCOMMODATION_VALIDATION.MIN}
                  max={ACCOMMODATION_VALIDATION.MAX}
                />
              </FormikProvider>
            </Form>
          </div>
          <div className="table-head__actions pt-24 pb-24 d-flex justify-content-flex-end">
            {clearButtonVisible && (
              <GradientButton
                onClick={onClear}
                className="main-btn--medium mr-16"
                variant="tertiary"
                text={{ id: 'shared.clear' }}
              />
            )}
            <GradientButton
              onClick={onApply}
              className="main-btn--medium min-width-120"
              text={{ id: 'shared.apply' }}
            />
          </div>
        </div>
      }
    >
      <GradientButton
        className={classNames('main-btn--medium', hasFilters && 'main-btn--filter-active')}
        variant="filter"
        text={
          hasFilters
            ? {
                id: 'shared.accommodationCount',
                values: { count: <span className="main-btn__amount">{appliedFilters}</span> },
              }
            : { id: 'shared.accommodation' }
        }
        addonAfter={<SvgIcon icon="arrow-down" className="icon-right" />}
      />
    </Dropdown>
  );
};

AccommodationFilter.propTypes = {
  filters: PropTypes.shape().isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default AccommodationFilter;
