import PropTypes from 'prop-types';
import Link from 'next/link';

import SvgIcon from 'views/shared/SvgIcon';
import GradientButton from 'views/shared/GradientButton';

import UserDropdown from 'views/shared/UserDropdown';

const LoggedInUserWidget = ({ switchToHostingRoute }) => (
  <div className="d-flex flex-wrap justify-content-flex-end align-items-center">
    <Link href={switchToHostingRoute}>
      <a>
        <GradientButton
          text={{ id: 'shared.switchToHosting' }}
          variant="tertiary"
          className="mb-8 mb-sm-0"
        />
      </a>
    </Link>
    <GradientButton
      variant="default"
      className="main-btn--icon ml-12 mr-12 main-header__language"
      addonAfter={<SvgIcon icon="globe" className="icon-right" />}
    />
    <UserDropdown size="sm" />
  </div>
);

LoggedInUserWidget.propTypes = {
  switchToHostingRoute: PropTypes.string.isRequired,
};

export default LoggedInUserWidget;
