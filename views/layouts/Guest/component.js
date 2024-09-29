import PropTypes from 'prop-types';

import Header from 'views/shared/headers/Header';

const GuestLayout = ({ children }) => (
  <div className="main-layout">
    <Header isGuest />
    <div className="main-layout__content">{children}</div>
  </div>
);

GuestLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GuestLayout;
