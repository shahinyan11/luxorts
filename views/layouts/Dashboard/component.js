import PropTypes from 'prop-types';

import DashboardHeader from 'views/shared/headers/DashboardHeader';

const DashboardLayout = ({ children }) => (
  <div className="main-layout">
    <DashboardHeader />
    <div className="main-layout__content main-layout__content--wide">{children}</div>
  </div>
);

DashboardLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DashboardLayout;
