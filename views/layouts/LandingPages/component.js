import PropTypes from 'prop-types';

import Header from 'views/shared/headers/Header';
import Footer from 'views/shared/footers/Footer';

const LandingPagesLayout = ({ children }) => (
  <div className="main-layout">
    <Header isWithFilter />
    <div className="main-layout__content main-layout__content--full-width">{children}</div>
    <Footer isFooterMenu isLanding />
  </div>
);

LandingPagesLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LandingPagesLayout;
