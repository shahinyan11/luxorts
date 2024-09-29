import Link from 'next/link';
import Image from 'next/image';
import { Menu } from 'antd';
import PropTypes from 'prop-types';

import ROUTES from 'constants/routes';

import SvgIcon from 'views/shared/SvgIcon';
import UserDropdown from 'views/shared/UserDropdown';

import useContainer from './hook';

const DashboardHeader = ({ selectedKey }) => {
  const { menuItems } = useContainer({ selectedKey });

  return (
    <header className="main-header">
      <div className="main-header__container">
        <Link href={ROUTES.INDEX.PATH}>
          <a className="main-header__logo">
            <Image src="/images/logo.svg" alt="" width="138" height="32" />
          </a>
        </Link>
        <div className="d-flex flex-wrap flex-sm-nowrap justify-content-flex-end align-items-center w-100">
          <Menu className="main-menu ant-menu--main" items={menuItems} mode="horizontal" />
          <div className="main-header__profile">
            <a className="main-header__profile-notification main-header__profile-notification--active mr-24">
              <SvgIcon icon="notification" className="main-header__notification-icon" />
            </a>
            <UserDropdown size="xs" />
          </div>
        </div>
      </div>
    </header>
  );
};

DashboardHeader.defaultProps = {
  selectedKey: undefined,
};

DashboardHeader.propTypes = {
  selectedKey: PropTypes.string,
};

export default DashboardHeader;
