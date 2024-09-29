import { Select } from 'antd';
import PropTypes from 'prop-types';

const RegionOption = ({ name }) => (
  <Select.Option value={name} key={name} label={name}>
    {name}
  </Select.Option>
);

RegionOption.propTypes = {
  name: PropTypes.string.isRequired,
};

export default RegionOption;
