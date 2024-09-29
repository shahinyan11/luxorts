import { FormattedMessage } from 'react-intl';
import Link from 'next/link';
import PropTypes from 'prop-types';

import SvgIcon from 'views/shared/SvgIcon';

const MenuItem = ({ href, icon, title, description }) => (
  <li className="account-menu__item d-flex">
    <Link href={href}>
      <a className="account-menu__link d-flex align-items-flex-start">
        <span className="account-menu__icon-container">
          <SvgIcon icon={icon} className="account-menu__icon" />
        </span>
        <div className="account-menu__content">
          <h2 className="account-menu__title">
            <FormattedMessage {...title} />
          </h2>
          <p className="account-menu__text">
            <FormattedMessage {...description} />
          </p>
        </div>
        <SvgIcon icon="arrow-right-long" className="account-menu__arrow" />
      </a>
    </Link>
  </li>
);

MenuItem.propTypes = {
  href: PropTypes.string,
  icon: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  description: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

MenuItem.defaultProps = {
  href: '#',
  icon: '',
  title: '',
  description: '',
};

export default MenuItem;
