import { Radio } from 'antd';
import { Fragment } from 'react';
import PropTypes from 'prop-types';
import { useField } from 'formik';

import FormattedOrRawMessage from 'views/shared/FormattedOrRawMessage';
import InputHelp from 'views/shared/form/InputHelp';

const RadioGroupField = ({ name, items, children, ...props }) => {
  const [field, meta] = useField(name);
  const hasError = meta.touched && meta.error;
  const error = hasError ? <InputHelp type="error" text={meta.error} /> : null;

  return (
    <>
      <Radio.Group {...field} {...props}>
        {children}
        {items.map(({ value, label, description, ...rest }) => (
          <Fragment key={value}>
            <Radio {...rest} value={value}>
              <FormattedOrRawMessage message={label} />
            </Radio>
            {description && (
              <p className="new-listing__description mb-16 pl-32">
                <FormattedOrRawMessage message={description} />
              </p>
            )}
          </Fragment>
        ))}
      </Radio.Group>
      {error}
    </>
  );
};

RadioGroupField.defaultProps = {
  items: [],
  children: null,
};

RadioGroupField.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape()),
  children: PropTypes.node,
};

export default RadioGroupField;
