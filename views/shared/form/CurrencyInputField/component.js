import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Form } from 'antd';
import CurrencyInput from 'react-currency-input-field';

import useFormattedOrRawMessage from 'hooks/useFormattedOrRawMessage';

import InputHelp from 'views/shared/form/InputHelp';

import useContainer from './hook';

const CurrencyInputField = ({
  label,
  name,
  placeholder,
  tooltip,
  formItemClassName,
  suffix,
  allowNegativeValue,
  ...props
}) => {
  const formattedOrRawMessage = useFormattedOrRawMessage();
  const { meta, field, onValueChangeHandler } = useContainer({ name });

  const hasError = meta.touched && meta.error;
  const Error = hasError ? <InputHelp type="error" text={meta.error} /> : undefined;
  const Tooltip = tooltip && <InputHelp text={tooltip} />;

  return (
    <Form.Item
      className={formItemClassName}
      label={label && <FormattedMessage {...label} />}
      htmlFor={name}
      validateStatus={hasError && 'error'}
      help={Error || Tooltip}
    >
      <CurrencyInput
        {...props}
        className="ant-input ant-input-lg"
        id={name}
        name={name}
        placeholder={formattedOrRawMessage(placeholder)}
        suffix={formattedOrRawMessage(suffix)}
        onValueChange={onValueChangeHandler}
        value={field.value}
        onBlur={field.onBlur}
        allowNegativeValue={allowNegativeValue}
      />
    </Form.Item>
  );
};

CurrencyInputField.defaultProps = {
  label: undefined,
  placeholder: undefined,
  tooltip: undefined,
  formItemClassName: undefined,
  suffix: undefined,
  allowNegativeValue: false,
};

CurrencyInputField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.shape({
    id: PropTypes.string.isRequired,
    values: PropTypes.shape(),
  }),
  placeholder: PropTypes.oneOfType([PropTypes.shape(), PropTypes.string]),
  tooltip: PropTypes.oneOfType([PropTypes.shape(), PropTypes.string]),
  suffix: PropTypes.oneOfType([PropTypes.shape(), PropTypes.string]),
  formItemClassName: PropTypes.string,
  allowNegativeValue: PropTypes.bool,
};

export default CurrencyInputField;
