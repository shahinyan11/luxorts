import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import { ACCOMMODATION_VALIDATION } from 'constants/listing';
import InputNumberField from 'views/shared/form/InputNumberField';

const AmountsForm = ({ onListingBedroomsChange, onListingBathroomsChange }) => (
  <div className="new-listing__item mb-24">
    <InputNumberField
      name="guestsNumber"
      formItemClassName="ant-form-item--light"
      label={{ id: 'shared.numberOfGuestsYouWillAccommodate' }}
      addonBefore={<FormattedMessage id="shared.guests" />}
      min={ACCOMMODATION_VALIDATION.BASE.MIN}
      max={ACCOMMODATION_VALIDATION.BASE.MAX}
    />
    <InputNumberField
      name="listingBedrooms"
      formItemClassName="ant-form-item--light"
      label={{ id: 'shared.howManyBedroomsCanYourGuestsUse' }}
      addonBefore={<FormattedMessage id="shared.bedrooms" />}
      min={ACCOMMODATION_VALIDATION.BASE.MIN}
      max={ACCOMMODATION_VALIDATION.BASE.MAX}
      onChange={onListingBedroomsChange}
    />
    <InputNumberField
      name="bedsAmount"
      formItemClassName="ant-form-item--light"
      label={{ id: 'shared.howManyBedsCanYourGuestsUse' }}
      addonBefore={<FormattedMessage id="shared.beds" />}
      min={ACCOMMODATION_VALIDATION.BASE.MIN}
      max={ACCOMMODATION_VALIDATION.BASE.MAX}
    />
    <InputNumberField
      name="listingBathrooms"
      formItemClassName="ant-form-item--light"
      label={{ id: 'shared.howManyBathroomsCanYourGuestsUse' }}
      addonBefore={<FormattedMessage id="shared.bathrooms" />}
      min={ACCOMMODATION_VALIDATION.BASE.MIN}
      max={ACCOMMODATION_VALIDATION.BASE.MAX}
      onChange={onListingBathroomsChange}
    />
  </div>
);

AmountsForm.propTypes = {
  onListingBedroomsChange: PropTypes.func.isRequired,
  onListingBathroomsChange: PropTypes.func.isRequired,
};

export default AmountsForm;
