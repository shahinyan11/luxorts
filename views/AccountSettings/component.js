import { Button, Dropdown } from 'antd';
import { FormattedMessage } from 'react-intl';

import { MENU_ITEMS } from 'constants/accountSettings';
import { ACCEPT_AVATAR_TYPES } from 'constants/validations';

import getUserFullName from 'utils/users/getUserFullName';

import SvgIcon from 'views/shared/SvgIcon';
import MenuItem from 'views/AccountSettings/MenuItem';
import AccountSettingsLayout from 'views/layouts/AccountSettings';
import UserAvatar from 'views/shared/UserAvatar';

import useContainer, { getInitialProps } from './hook';

const AccountSettings = () => {
  const {
    handleUploadAvatarClick,
    handleRemoveAvatarClick,
    handleChangeFile,
    handleChangeAvatarImage,
    currentUser,
    avatarImgUrl,
    inputFileRef,
  } = useContainer();

  return (
    <>
      <input
        ref={inputFileRef}
        className="d-none"
        type="file"
        accept={ACCEPT_AVATAR_TYPES}
        onChange={handleChangeFile}
      />
      <div className="account">
        <div className="d-flex justify-content-space-between flex-column flex-sm-row align-items-center mb-40 mb-lg-80">
          <h1 className="text-display-2 mb-16 mb-sm-0">
            <FormattedMessage id="accountSettings.title" />
          </h1>
        </div>
        <div className="account__user-header d-flex flex-column align-items-center mb-64">
          <div className="account__user-avatar mb-16">
            <UserAvatar size="xxxl" currentUser={currentUser} />
            {avatarImgUrl && (
              <Dropdown
                overlay={
                  <ul className="account-controls">
                    <li className="account-controls__item">
                      <a
                        role="button"
                        className="account-controls__link d-block w-100"
                        onClick={handleChangeAvatarImage}
                      >
                        <FormattedMessage id="shared.change" />
                      </a>
                    </li>
                    <li className="account-controls__item">
                      <a
                        role="button"
                        className="account-controls__link d-block w-100"
                        onClick={handleRemoveAvatarClick}
                      >
                        <FormattedMessage id="shared.remove" />
                      </a>
                    </li>
                  </ul>
                }
                placement="bottomCenter"
              >
                <Button htmlType="button" className="account__user-upload">
                  <SvgIcon icon="camera" className="account__user-icon" />
                </Button>
              </Dropdown>
            )}
            {!avatarImgUrl && (
              <Button
                htmlType="button"
                className="account__user-upload"
                onClick={handleUploadAvatarClick}
              >
                <SvgIcon icon="camera" className="account__user-icon" />
              </Button>
            )}
          </div>
          <p className="account__user-name mb-4 text-headline-2">{getUserFullName(currentUser)}</p>
          <p className="account__user-mail mb-0 text-body">{currentUser?.email}</p>
        </div>
      </div>
      <ul className="account-menu mb-40 mb-md-80 mb-lg-160">
        {MENU_ITEMS.map((data) => (
          <MenuItem key={data.title.id} {...data} />
        ))}
      </ul>
    </>
  );
};

AccountSettings.getInitialProps = getInitialProps;

AccountSettings.Layout = AccountSettingsLayout;

export default AccountSettings;
