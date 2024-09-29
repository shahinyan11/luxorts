import { Form } from 'antd';
import { FormikProvider } from 'formik';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import { LISTING_PLACE_OPTIONS } from 'constants/listing';

import SelectField from 'views/shared/form/SelectField';
import RadioGroupField from 'views/shared/form/RadioGroupField';

const ListingPropertyType = ({ formik, propertyTypesOptions, tooltip }) => (
  <div className="new-listing__container mb-24">
    <h1 className="new-listing__title mb-32">
      <FormattedMessage id="addNewListing.propertyType.title" />
    </h1>
    <Form layout="vertical" size="large">
      <FormikProvider value={formik}>
        <div className="new-listig__item mb-24">
          <SelectField
            name="listingPropertyType.propertyTypeId"
            formItemClassName="mb-8"
            className="w-100"
            label={{ id: 'shared.propertyType' }}
            tooltip={tooltip}
            placeholder={{ id: 'shared.selectPropertyType' }}
            options={propertyTypesOptions}
          />
        </div>
        <h2 className="new-listing__subtitle mb-24">
          <FormattedMessage id="addNewListing.propertyType.place.title" />
        </h2>
        <RadioGroupField
          name="listingPropertyType.typeOfPlace"
          className="d-flex flex-column"
          items={LISTING_PLACE_OPTIONS}
        />
      </FormikProvider>
    </Form>
  </div>
);

ListingPropertyType.defaultProps = {
  tooltip: undefined,
};

ListingPropertyType.propTypes = {
  formik: PropTypes.shape().isRequired,
  propertyTypesOptions: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  tooltip: PropTypes.string,
};

export default ListingPropertyType;
