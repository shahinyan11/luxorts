import classNames from 'classnames';
import PropTypes from 'prop-types';

import InputHelp from 'views/shared/form/InputHelp';

const PasswordHelper = ({ icon, text, type, hasError, error }) => (
  <div className="password-progress mt-4">
    <div
      className={classNames('password-progress__line', type && `password-progress__line--${type}`)}
    />
    {hasError ? (
      <InputHelp type="error" text={error} />
    ) : (
      <InputHelp icon={icon} type={type} text={text} />
    )}
  </div>
);

PasswordHelper.defaultProps = {
  icon: 'alert',
  type: undefined,
  hasError: undefined,
  error: undefined,
};

PasswordHelper.propTypes = {
  icon: PropTypes.oneOf(['alert', 'checked']),
  type: PropTypes.oneOf(['success', 'alert', 'error']),
  text: PropTypes.oneOfType([PropTypes.shape(), PropTypes.string]).isRequired,
  error: PropTypes.oneOfType([PropTypes.shape(), PropTypes.string]),
  hasError: PropTypes.oneOfType([
    PropTypes.shape({
      id: PropTypes.string,
    }),
    PropTypes.bool,
  ]),
};

export default PasswordHelper;
