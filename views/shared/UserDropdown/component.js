import { Dropdown, Menu } from 'antd';
import { FormattedMessage } from 'react-intl';
import Link from 'next/link';
import PropTypes from 'prop-types';

import { AVATAR_SIZES } from 'constants';
import ROUTES from 'constants/routes';

import useAntdDropdownVisible from 'hooks/useAntdDropdownVisible';

import UserAvatar from 'views/shared/UserAvatar';

import useContainer from './hook';

const FIRST_MENU_ITEMS = [
  {
    key: 'shared.messages',
    label: (
      <>
        <FormattedMessage id="shared.messages" />
        <span className="main-header__menu-counter">2</span>
      </>
    ),
  },
  {
    key: 'shared.notifications',
    label: (
      <>
        <FormattedMessage id="shared.notifications" />
        <span className="main-header__menu-counter">8</span>
      </>
    ),
  },
  {
    key: 'shared.bookings',
    label: <FormattedMessage id="shared.bookings" />,
  },
  {
    key: 'shared.favorites',
    label: <FormattedMessage id="shared.favorites" />,
  },
];

const SECOND_MENU_ITEMS = [
  {
    key: 'shared.listYourProperty',
    label: (
      <Link href={ROUTES.ADD_NEW_LISTING.INDEX.PATH}>
        <a>
          <FormattedMessage id="shared.listYourProperty" />
        </a>
      </Link>
    ),
  },
  {
    key: 'shared.accountSettings',
    label: (
      <Link href={ROUTES.ACCOUNT_SETTINGS.INDEX.PATH}>
        <a>
          <FormattedMessage id="accountSettings.title" />
        </a>
      </Link>
    ),
  },
];

const UserDropdown = ({ size }) => {
  const [visible, onVisibilityChangeHandler] = useAntdDropdownVisible();
  const { onLogOutHandler, currentUser } = useContainer();

  return (
    <Dropdown
      trigger="click"
      visible={visible}
      onVisibleChange={onVisibilityChangeHandler}
      overlay={
        <div className="main-header__nav">
          <Menu className="main-header__menu" items={FIRST_MENU_ITEMS} />
          <Menu className="main-header__menu" items={SECOND_MENU_ITEMS} />
          <Menu
            className="main-header__menu"
            items={[
              {
                key: 'shared.logOut',
                onClick: onLogOutHandler,
                label: <FormattedMessage id="shared.logOut" />,
              },
            ]}
          />
        </div>
      }
      placement="bottomRight"
    >
      <UserAvatar className="cursor-pointer" size={size} currentUser={currentUser} />
    </Dropdown>
  );
};

UserDropdown.defaultProps = {
  size: 'md',
};

UserDropdown.propTypes = {
  size: PropTypes.oneOf(AVATAR_SIZES),
};

export default UserDropdown;
