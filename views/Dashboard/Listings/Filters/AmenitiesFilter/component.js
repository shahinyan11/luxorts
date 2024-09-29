import { Dropdown, Form, Input } from 'antd';
import PropTypes from 'prop-types';
import { FormikProvider } from 'formik';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';

import { LISTING_FILTER_KEY } from 'constants/listing/manageListings';

import useFormattedOrRawMessage from 'hooks/useFormattedOrRawMessage';

import SvgIcon from 'views/shared/SvgIcon';
import CheckboxGroupField from 'views/shared/form/CheckboxGroupField';
import GradientButton from 'views/shared/GradientButton';

import useContainer from './hook';

const AmenitiesFilter = ({ amenities, filters, onFilter }) => {
  const formattedOrRawMessage = useFormattedOrRawMessage();
  const {
    visible,
    formik,
    items,
    search,
    onVisibilityChangeHandler,
    onSearchChangeHandler,
    onApply,
    onClear,
  } = useContainer({
    amenities,
    onFilter,
    filters,
  });
  const appliedFilters = filters[LISTING_FILTER_KEY.AMENITIES_IN].length;
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
          <div className="table-head__search">
            <Form size="middle">
              <Form.Item className="mb-0">
                <Input.Search
                  allowClear={{ clearIcon: <SvgIcon icon="cross" /> }}
                  className="width-328"
                  enterButton={<SvgIcon icon="search" />}
                  placeholder={formattedOrRawMessage({ id: 'shared.searchAmenity' })}
                  onChange={onSearchChangeHandler}
                  value={search}
                />
              </Form.Item>
            </Form>
          </div>
          <FormikProvider value={formik}>
            <CheckboxGroupField
              className="d-flex flex-column mb-0 table-head__checkboxes"
              name={LISTING_FILTER_KEY.AMENITIES_IN}
              items={items}
            />
          </FormikProvider>
          <div className="table-head__actions pt-24 pb-24 d-flex justify-content-flex-end">
            {formik.values[LISTING_FILTER_KEY.AMENITIES_IN].length > 0 && (
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
      <a
        className={classNames(
          'main-btn main-btn--medium main-btn--filter',
          hasFilters && 'main-btn--filter-active',
        )}
      >
        {hasFilters && (
          <FormattedMessage
            id="shared.amenitiesCount"
            values={{ count: <span className="main-btn__amount">{appliedFilters}</span> }}
          />
        )}
        {!hasFilters && <FormattedMessage id="shared.amenities" />}
        <SvgIcon icon="arrow-down" className="icon-right" />
      </a>
    </Dropdown>
  );
};

AmenitiesFilter.propTypes = {
  amenities: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  filters: PropTypes.shape().isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default AmenitiesFilter;
