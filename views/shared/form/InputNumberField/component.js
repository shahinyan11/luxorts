import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Form, InputNumber } from 'antd';

import InputHelp from 'views/shared/form/InputHelp';
import SvgIcon from 'views/shared/SvgIcon';

import useContainer from './hook';

const InputNumberField = ({ label, name, formItemClassName, onChange, withFormItem, ...props }) => {
  const { field, meta, onChangeHandler } = useContainer({ name, onChange });

  const hasError = meta.touched && meta.error;
  const Error = hasError ? <InputHelp type="error" text={meta.error} /> : undefined;

  if (!withFormItem) {
    return (
      <InputNumber
        {...field}
        {...props}
        id={name}
        onChange={onChangeHandler}
        controls={{
          upIcon: <SvgIcon icon="plus-circle" />,
          downIcon: <SvgIcon icon="minus-circle" />,
        }}
      />
    );
  }

  return (
    <Form.Item
      className={formItemClassName}
      label={label && <FormattedMessage {...label} />}
      htmlFor={name}
      validateStatus={hasError && 'error'}
      help={Error}
    >
      <InputNumber
        {...field}
        {...props}
        id={name}
        onChange={onChangeHandler}
        controls={{
          upIcon: <SvgIcon icon="plus-circle" />,
          downIcon: <SvgIcon icon="minus-circle" />,
        }}
      />
    </Form.Item>
  );
};

InputNumberField.defaultProps = {
  label: undefined,
  formItemClassName: undefined,
  onChange: undefined,
  withFormItem: true,
};

InputNumberField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.shape({
    id: PropTypes.string.isRequired,
    values: PropTypes.shape(),
  }),
  formItemClassName: PropTypes.string,
  onChange: PropTypes.func,
  withFormItem: PropTypes.bool,
};

export default InputNumberField;
