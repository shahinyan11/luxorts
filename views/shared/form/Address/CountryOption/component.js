import { Select } from 'antd';
import PropTypes from 'prop-types';

const CountryOption = ({ countryName }) => (
  <Select.Option value={countryName} key={countryName} label={countryName}>
    {countryName}
  </Select.Option>
);

CountryOption.propTypes = {
  countryName: PropTypes.string.isRequired,
};

export default CountryOption;
