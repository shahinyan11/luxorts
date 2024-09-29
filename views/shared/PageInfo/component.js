import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

const PageInfo = ({ icon, title, description }) => (
  <div className="personal-information__note mb-32 mb-lg-0 d-flex flex-column align-items-flex-start">
    <span className="personal-information__icon-container mb-16">{icon}</span>
    <h2 className="personal-information__subtitle text-subheader-2 mb-4">
      <FormattedMessage {...title} />
    </h2>
    <p className="personal-information__text text-body mb-0">
      <FormattedMessage {...description} />
    </p>
  </div>
);

PageInfo.propTypes = {
  title: PropTypes.shape().isRequired,
  description: PropTypes.shape().isRequired,
  icon: PropTypes.node.isRequired,
};

export default PageInfo;
