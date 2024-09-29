import { Dropdown } from 'antd';
import PropTypes from 'prop-types';
import { FormikProvider } from 'formik';
import classNames from 'classnames';

import { LISTING_FILTER_KEY, LISTING_STATUS_OPTIONS } from 'constants/listing/manageListings';

import SvgIcon from 'views/shared/SvgIcon';
import CheckboxGroupField from 'views/shared/form/CheckboxGroupField';
import GradientButton from 'views/shared/GradientButton';

import useContainer from './hook';

const StatusFilter = ({ filters, onFilter }) => {
  const { visible, formik, onVisibilityChangeHandler, onApply, onClear } = useContainer({
    onFilter,
    filters,
  });
  const appliedFilters = filters[LISTING_FILTER_KEY.STATUS_IN].length;
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
          <FormikProvider value={formik}>
            <CheckboxGroupField
              className="d-flex flex-column mb-0 table-head__checkboxes"
              name={LISTING_FILTER_KEY.STATUS_IN}
              items={LISTING_STATUS_OPTIONS}
            />
          </FormikProvider>
          <div className="table-head__actions pt-24 pb-24 d-flex justify-content-flex-end">
            {formik.values[LISTING_FILTER_KEY.STATUS_IN].length > 0 && (
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
                id: 'shared.statusCount',
                values: { count: <span className="main-btn__amount">{appliedFilters}</span> },
              }
            : { id: 'shared.status' }
        }
        addonAfter={<SvgIcon icon="arrow-down" className="icon-right" />}
      />
    </Dropdown>
  );
};

StatusFilter.propTypes = {
  filters: PropTypes.shape().isRequired,
  onFilter: PropTypes.func.isRequired,
};

export default StatusFilter;
