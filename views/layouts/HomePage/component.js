import PropTypes from 'prop-types';

import Header from 'views/shared/headers/Header';
import Footer from 'views/shared/footers/Footer';

const HomePageLayout = ({ children }) => (
  <div className="main-layout">
    <Header />
    <div className="main-layout__content main-layout__content--full-width">{children}</div>
    <Footer isFooterMenu isLanding />
  </div>
);

HomePageLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HomePageLayout;
