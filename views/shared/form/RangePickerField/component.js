import PropTypes from 'prop-types';
import { DatePicker, Form } from 'antd';
import { FormattedMessage } from 'react-intl';

import { DATE_FORMAT } from 'constants';

import useFormattedOrRawMessage from 'hooks/useFormattedOrRawMessage';

import InputHelp from 'views/shared/form/InputHelp';

import useContainer from './hook';

const { RangePicker } = DatePicker;

const RangePickerField = ({ label, name, formItemClassName, placeholder, tooltip, ...props }) => {
  const formattedOrRawMessage = useFormattedOrRawMessage();
  const { error, touched, onChangeHandler, onBlurHandler } = useContainer({ name });
  const hasError = touched && error;
  const Error = hasError && <InputHelp type="error" text={error} />;
  const Tooltip = tooltip && <InputHelp text={tooltip} />;

  return (
    <Form.Item
      className={formItemClassName}
      label={label && <FormattedMessage {...label} />}
      htmlFor={name}
      validateStatus={hasError && 'error'}
      help={Error || Tooltip}
    >
      <RangePicker
        {...props}
        id={name}
        placeholder={[
          formattedOrRawMessage(placeholder?.[0]),
          formattedOrRawMessage(placeholder?.[1]),
        ]}
        format={DATE_FORMAT}
        onBlur={onBlurHandler}
        onChange={onChangeHandler}
      />
    </Form.Item>
  );
};

RangePickerField.defaultProps = {
  formItemClassName: undefined,
  label: undefined,
  placeholder: undefined,
  tooltip: undefined,
};

RangePickerField.propTypes = {
  name: PropTypes.string.isRequired,
  formItemClassName: PropTypes.string,
  label: PropTypes.shape({
    id: PropTypes.string.isRequired,
    values: PropTypes.shape(),
  }),
  placeholder: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.shape(), PropTypes.string])),
  tooltip: PropTypes.oneOfType([PropTypes.shape(), PropTypes.string]),
};

export default RangePickerField;
