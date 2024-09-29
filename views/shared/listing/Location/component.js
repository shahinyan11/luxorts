import React from 'react';
import { FormattedMessage } from 'react-intl';
import { Form } from 'antd';
import { FormikProvider } from 'formik';
import PropTypes from 'prop-types';

import Address from 'views/shared/form/Address';

const ListingLocation = ({ formik }) => (
  <div className="new-listing__container mb-8">
    <h1 className="new-listing__title mb-32">
      <FormattedMessage id="addNewListing.location.title" />
    </h1>
    <Form layout="vertical" size="large">
      <FormikProvider value={formik}>
        <div className="new-listing__item mb-24">
          <Address />
        </div>
      </FormikProvider>
    </Form>
  </div>
);

ListingLocation.propTypes = {
  formik: PropTypes.shape().isRequired,
};

export default ListingLocation;
