import PropTypes from 'prop-types';

import Header from 'views/shared/headers/Header';

const InviteFriendsLayout = ({ children }) => (
  <div className="main-layout">
    <Header />
    <div className="main-layout__content">{children}</div>
  </div>
);

InviteFriendsLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default InviteFriendsLayout;
