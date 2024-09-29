import { Select } from 'antd';
import PropTypes from 'prop-types';

import FormattedOrRawMessage from 'views/shared/FormattedOrRawMessage';

const SelectOption = ({ value, label }) => (
  <Select.Option value={value} key={value} label={<FormattedOrRawMessage message={label} />}>
    <FormattedOrRawMessage message={label} />
  </Select.Option>
);

SelectOption.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.shape(), PropTypes.string]).isRequired,
};

export default SelectOption;
