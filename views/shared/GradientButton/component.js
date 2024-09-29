import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button } from 'antd';

import isPresent from 'utils/isPresent';
import FormattedOrRawMessage from 'views/shared/FormattedOrRawMessage';

const GradientButton = ({ text, className, variant, addonAfter, addonBefore, ...props }) => (
  <Button {...props} className={classNames(`main-btn main-btn--${variant}`, className)}>
    {addonBefore}
    {isPresent(text) && (
      <span>
        <FormattedOrRawMessage message={text} />
      </span>
    )}
    {addonAfter}
  </Button>
);

GradientButton.defaultProps = {
  className: null,
  variant: 'primary',
  text: undefined,
  addonAfter: null,
  addonBefore: null,
};

GradientButton.propTypes = {
  text: PropTypes.oneOfType([PropTypes.shape(), PropTypes.string]),
  className: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'tertiary', 'warning', 'filter', 'default']),
  addonAfter: PropTypes.node,
  addonBefore: PropTypes.node,
};

export default GradientButton;
