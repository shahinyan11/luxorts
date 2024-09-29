import PropTypes from 'prop-types';
import { Checkbox } from 'antd';
import { useField } from 'formik';

import FormattedOrRawMessage from 'views/shared/FormattedOrRawMessage';

const CheckboxField = ({ title, name, ...props }) => {
  const [field] = useField(name);

  return (
    <Checkbox {...field} {...props} checked={field.value}>
      <FormattedOrRawMessage message={title} />
    </Checkbox>
  );
};

CheckboxField.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.oneOfType([
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      values: PropTypes.shape(),
    }),
    PropTypes.string,
  ]).isRequired,
};

export default CheckboxField;
