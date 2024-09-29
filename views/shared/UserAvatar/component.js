import { Avatar } from 'antd';
import { path } from 'ramda';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { AVATAR_SIZES } from 'constants';

import getUserInitials from 'utils/users/getUserInitials';

const UserAvatar = ({ currentUser, size, className, ...props }) => {
  const avatarImgUrl = path(['userProfile', 'avatarUrls', 'original'], currentUser);
  const userInitials = getUserInitials(currentUser);

  return (
    <Avatar
      {...props}
      className={classNames(`ant-avatar--${size}`, className && className)}
      src={avatarImgUrl}
    >
      {userInitials}
    </Avatar>
  );
};

UserAvatar.defaultProps = {
  className: undefined,
  currentUser: undefined,
  size: 'md',
};

UserAvatar.propTypes = {
  currentUser: PropTypes.shape(),
  size: PropTypes.oneOf(AVATAR_SIZES),
  className: PropTypes.string,
};

export default UserAvatar;
