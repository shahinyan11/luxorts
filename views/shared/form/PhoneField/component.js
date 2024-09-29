import PropTypes from 'prop-types';
import { Form } from 'antd';
import { FormattedMessage } from 'react-intl';
import PhoneInput from 'react-phone-number-input';

import { DEFAULT_COUNTRY_CODE } from 'constants';
import InputHelp from 'views/shared/form/InputHelp';
import useContainer from './hook';

const PhoneField = ({ label, name, formItemClassName, ...props }) => {
  const { error, value, touched, onChangeHandler, onBlurHandler } = useContainer({ name });
  const hasError = touched && error;
  const Error = hasError ? <InputHelp type="error" text={error} /> : undefined;

  return (
    <Form.Item
      className={formItemClassName}
      label={label && <FormattedMessage {...label} />}
      htmlFor={name}
      validateStatus={hasError && 'error'}
      help={Error}
    >
      <PhoneInput
        {...props}
        id={name}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        defaultCountry={DEFAULT_COUNTRY_CODE}
        value={value}
        international
        limitMaxLength
      />
    </Form.Item>
  );
};

PhoneField.defaultProps = {
  formItemClassName: undefined,
  label: undefined,
};

PhoneField.propTypes = {
  name: PropTypes.string.isRequired,
  formItemClassName: PropTypes.string,
  label: PropTypes.shape({
    id: PropTypes.string.isRequired,
    values: PropTypes.shape(),
  }),
};

export default PhoneField;
