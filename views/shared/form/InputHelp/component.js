import PropTypes from 'prop-types';
import classNames from 'classnames';

import FormattedOrRawMessage from 'views/shared/FormattedOrRawMessage';
import SvgIcon from 'views/shared/SvgIcon';

const InputHelp = ({ icon, type, text }) => (
  <p
    className={classNames(
      'subline-message align-items-flex-start',
      type && `subline-message--${type}`,
    )}
  >
    <SvgIcon icon={icon} />
    <FormattedOrRawMessage message={text} />
  </p>
);

InputHelp.defaultProps = {
  icon: 'alert',
  type: undefined,
};

InputHelp.propTypes = {
  icon: PropTypes.string,
  type: PropTypes.oneOf(['success', 'alert', 'error']),
  text: PropTypes.oneOfType([PropTypes.shape(), PropTypes.string]).isRequired,
};

export default InputHelp;
