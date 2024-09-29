import PropTypes from 'prop-types';
import { Checkbox } from 'antd';

import FormattedOrRawMessage from 'views/shared/FormattedOrRawMessage';

import useContainer from './hook';

const CheckboxGroupField = ({ items, name, ...props }) => {
  const { field, onChangeHandler } = useContainer({ name });

  return (
    <Checkbox.Group {...field} {...props} onChange={onChangeHandler}>
      {items.map(({ value, label }) => (
        <Checkbox key={value} value={value}>
          <FormattedOrRawMessage message={label} />
        </Checkbox>
      ))}
    </Checkbox.Group>
  );
};

CheckboxGroupField.defaultProps = {
  items: [],
};

CheckboxGroupField.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape()),
};

export default CheckboxGroupField;
