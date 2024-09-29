import PropTypes from 'prop-types';
import { Form, Input } from 'antd';
import { FormattedMessage } from 'react-intl';

import PasswordHelper from 'views/shared/form/PasswordHelper';
import InputHelp from 'views/shared/form/InputHelp';

import useContainer from './hook';

const PasswordField = ({ label, name, formItemClassName, withProgress, placeholder, ...props }) => {
  const {
    value,
    helperProps,
    onChangeHandler,
    onBlurHandler,
    renderVisibilityIcon,
    formattedOrRawMessage,
  } = useContainer({ name });

  const Error = helperProps.hasError ? <InputHelp type="error" text={helperProps.error} /> : null;
  const Helper = withProgress ? <PasswordHelper {...helperProps} /> : Error;

  return (
    <Form.Item
      className={formItemClassName}
      label={label && <FormattedMessage {...label} />}
      htmlFor={name}
      validateStatus={helperProps.hasError && 'error'}
      help={Helper}
    >
      <Input.Password
        {...props}
        id={name}
        value={value}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        iconRender={renderVisibilityIcon}
        placeholder={formattedOrRawMessage(placeholder)}
      />
    </Form.Item>
  );
};

PasswordField.defaultProps = {
  formItemClassName: undefined,
  label: undefined,
  withProgress: false,
  placeholder: undefined,
};

PasswordField.propTypes = {
  name: PropTypes.string.isRequired,
  formItemClassName: PropTypes.string,
  label: PropTypes.shape({
    id: PropTypes.string.isRequired,
    values: PropTypes.shape(),
  }),
  withProgress: PropTypes.bool,
  placeholder: PropTypes.oneOfType([PropTypes.shape(), PropTypes.string]),
};

export default PasswordField;
