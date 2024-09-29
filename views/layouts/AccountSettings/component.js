import PropTypes from 'prop-types';

import Header from 'views/shared/headers/Header';
import Footer from 'views/shared/footers/Footer';

const AccountSettingsLayout = ({ children }) => (
  <div className="main-layout">
    <Header />
    <div className="main-layout__content">{children}</div>
    <Footer isAccount />
  </div>
);

AccountSettingsLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AccountSettingsLayout;
