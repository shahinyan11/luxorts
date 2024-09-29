import classNames from 'classnames';
import PropTypes from 'prop-types';

const SvgIcon = ({ icon, className }) => (
  <svg className={classNames('icon', `icon-${icon}`, className)}>
    <use xlinkHref={`#icon-${icon}`} />
  </svg>
);

SvgIcon.propTypes = {
  icon: PropTypes.oneOf([
    'cross',
    'checked',
    'activate',
    'alert',
    'notification',
    'eye',
    'eye-crossed',
    'plus',
    'edit',
    'globe',
    'camera',
    'profile',
    'user-shield',
    'bank-card',
    'guests',
    'arrow-right-long',
    'modal-cross',
    'arrow-right',
    'dot',
    'three-dots',
    'arrow-down',
    'file',
    'search',
    'instagram-filled',
    'facebook-filled',
    'twitter-filled',
    'arrow-left',
    'share',
    'like',
    'star',
    'property',
    'city',
    'host',
    'instagram-colored',
    'facebook-colored',
    'twitter-colored',
    'info',
    'plus-circle',
    'minus-circle',
    'upload',
    'settings',
    'clock',
    'blocked',
    'location',
    'recent',
  ]).isRequired,
  className: PropTypes.string,
};

SvgIcon.defaultProps = {
  className: undefined,
};

export default SvgIcon;
