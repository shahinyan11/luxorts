import { Tooltip } from 'antd';
import PropTypes from 'prop-types';

import { RADIO_GROUP_PAID_OPTIONS } from 'constants';

import CheckboxField from 'views/shared/form/CheckboxField';
import RadioGroupField from 'views/shared/form/RadioGroupField';
import SvgIcon from 'views/shared/SvgIcon';

const CheckboxGroup = ({ items, path, withPaid }) => (
  <div className="new-listig__options mb-24 pb-8">
    {items.map((item) => (
      <div key={item.id} className="new-listig__option mb-16">
        <CheckboxField name={`${path}.${item.id}.checked`} title={item.name} />
        <Tooltip title={item.description} placement="topLeft">
          <span className="tooltip">
            <SvgIcon icon="info" className="new-listig__option-icon" />
          </span>
        </Tooltip>
        {withPaid && item.checked && (
          <RadioGroupField
            name={`${path}.${item.id}.paid`}
            className="new-listig__radio-group mt-8 pl-32 w-100"
            items={RADIO_GROUP_PAID_OPTIONS}
          />
        )}
      </div>
    ))}
  </div>
);

CheckboxGroup.defaultProps = {
  withPaid: false,
};

CheckboxGroup.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  path: PropTypes.string.isRequired,
  withPaid: PropTypes.bool,
};

export default CheckboxGroup;
