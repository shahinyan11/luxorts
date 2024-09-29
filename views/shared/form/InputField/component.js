import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'antd';
import { FormattedMessage } from 'react-intl';

import useFormattedOrRawMessage from 'hooks/useFormattedOrRawMessage';

import InputHelp from 'views/shared/form/InputHelp';

import useContainer from './hook';

const InputField = ({
  label,
  name,
  placeholder,
  tooltip,
  formItemClassName,
  asComponent: Component,
  withFormItem,
  numbersOnly,
  ...props
}) => {
  const formattedOrRawMessage = useFormattedOrRawMessage();
  const { field, meta, onKeyDown } = useContainer({ name, numbersOnly });

  const hasError = meta.touched && meta.error;
  const Error = hasError ? <InputHelp type="error" text={meta.error} /> : undefined;
  const Tooltip = tooltip && <InputHelp text={tooltip} />;

  if (!withFormItem) {
    return (
      <Component
        {...field}
        {...props}
        id={name}
        placeholder={formattedOrRawMessage(placeholder)}
        onKeyDown={onKeyDown}
      />
    );
  }

  return (
    <Form.Item
      className={formItemClassName}
      label={label && <FormattedMessage {...label} />}
      htmlFor={name}
      validateStatus={hasError && 'error'}
      help={Error || Tooltip}
    >
      <Component
        {...field}
        {...props}
        id={name}
        placeholder={formattedOrRawMessage(placeholder)}
        onKeyDown={onKeyDown}
      />
    </Form.Item>
  );
};

InputField.defaultProps = {
  label: undefined,
  placeholder: undefined,
  tooltip: undefined,
  formItemClassName: undefined,
  asComponent: Input,
  withFormItem: true,
  numbersOnly: false,
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.shape({
    id: PropTypes.string.isRequired,
    values: PropTypes.shape(),
  }),
  placeholder: PropTypes.oneOfType([PropTypes.shape(), PropTypes.string]),
  tooltip: PropTypes.oneOfType([PropTypes.shape(), PropTypes.string]),
  formItemClassName: PropTypes.string,
  asComponent: PropTypes.elementType,
  withFormItem: PropTypes.bool,
  numbersOnly: PropTypes.bool,
};

export default InputField;
