import PropTypes from 'prop-types';

import Header from 'views/shared/headers/Header';
import Footer from 'views/shared/footers/Footer';

const SignUpLayout = ({ children }) => (
  <div className="main-layout">
    <Header isSignUp />
    <div className="main-layout__content">{children}</div>
    <Footer />
  </div>
);

SignUpLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SignUpLayout;
