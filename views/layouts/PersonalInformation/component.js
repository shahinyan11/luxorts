import PropTypes from 'prop-types';

import Header from 'views/shared/headers/Header';

const PersonalInformationLayout = ({ children }) => (
  <div className="main-layout">
    <Header />
    <div className="main-layout__content">{children}</div>
  </div>
);

PersonalInformationLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PersonalInformationLayout;
