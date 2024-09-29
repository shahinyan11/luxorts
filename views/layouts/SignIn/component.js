import PropTypes from 'prop-types';

import Header from 'views/shared/headers/Header';

const SignInLayout = ({ children }) => (
  <div className="main-layout">
    <Header isSignIn />
    <div className="main-layout__content">{children}</div>
  </div>
);

SignInLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default SignInLayout;
