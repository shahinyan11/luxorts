import PropTypes from 'prop-types';
import { Switch, Tooltip } from 'antd';
import classNames from 'classnames';

import SvgIcon from 'views/shared/SvgIcon';
import FormattedOrRawMessage from 'views/shared/FormattedOrRawMessage';

import useContainer from './hook';

const SwitchField = ({ title, tooltip, name, className }) => {
  const { field, onChangeHandler } = useContainer({ name });

  return (
    <div className={classNames('switch', className)}>
      <Switch onChange={onChangeHandler} checked={field.value} className="switch__button" />
      {title && (
        <span className="new-listing__switch-label switch__label">
          <FormattedOrRawMessage message={title} />
        </span>
      )}
      {tooltip && (
        <Tooltip title={<FormattedOrRawMessage message={tooltip} />} placement="topLeft">
          <span className="tooltip">
            <SvgIcon icon="info" className="new-listig__option-icon" />
          </span>
        </Tooltip>
      )}
    </div>
  );
};

SwitchField.defaultProps = {
  title: undefined,
  tooltip: undefined,
  className: undefined,
};

SwitchField.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  title: PropTypes.oneOfType([
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      values: PropTypes.shape(),
    }),
    PropTypes.string,
  ]),
  tooltip: PropTypes.oneOfType([
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      values: PropTypes.shape(),
    }),
    PropTypes.string,
  ]),
};

export default SwitchField;
