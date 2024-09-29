import PropTypes from 'prop-types';
import { Form, Select } from 'antd';
import { FormattedMessage } from 'react-intl';
import { last } from 'ramda';
import { isArray } from 'lodash';

import useFormattedOrRawMessage from 'hooks/useFormattedOrRawMessage';

import InputHelp from 'views/shared/form/InputHelp';
import SvgIcon from 'views/shared/SvgIcon';

import SelectOption from './SelectOption';
import useContainer from './hook';

const SelectField = ({
  label,
  name,
  formItemClassName,
  placeholder,
  tooltip,
  options,
  optionComponent: Option,
  ...props
}) => {
  const formattedOrRawMessage = useFormattedOrRawMessage();
  const { field, meta, onChangeHandler, onBlurHandler } = useContainer({ name });
  const hasError = meta.touched && meta.error;
  const Error = hasError && (
    <InputHelp type="error" text={isArray(meta.error) ? last(meta.error) : meta.error} />
  );
  const Tooltip = tooltip && <InputHelp text={tooltip} />;

  return (
    <Form.Item
      className={formItemClassName}
      label={label && <FormattedMessage {...label} />}
      htmlFor={name}
      validateStatus={hasError && 'error'}
      help={Error || Tooltip}
    >
      <Select
        {...props}
        id={name}
        value={field.value}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
        placeholder={formattedOrRawMessage(placeholder)}
        suffixIcon={<SvgIcon icon="arrow-down" />}
      >
        {options.map(Option)}
      </Select>
    </Form.Item>
  );
};

SelectField.defaultProps = {
  formItemClassName: undefined,
  label: undefined,
  placeholder: undefined,
  tooltip: undefined,
  options: [],
  optionComponent: SelectOption,
};

SelectField.propTypes = {
  name: PropTypes.string.isRequired,
  formItemClassName: PropTypes.string,
  label: PropTypes.shape({
    id: PropTypes.string.isRequired,
    values: PropTypes.shape(),
  }),
  placeholder: PropTypes.oneOfType([PropTypes.shape(), PropTypes.string]),
  tooltip: PropTypes.oneOfType([PropTypes.shape(), PropTypes.string]),
  options: PropTypes.arrayOf(PropTypes.shape()),
  optionComponent: PropTypes.elementType,
};

export default SelectField;
