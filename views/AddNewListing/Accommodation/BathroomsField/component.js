import { useField } from 'formik';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import BathroomField from './BathroomField';

const BathroomsField = ({ handleAddCustomBathCreator, handleRemoveCustomBathCreator }) => {
  const [field] = useField('bathrooms');

  return (
    <div className="new-listing__item mb-24">
      <h2 className="new-listing__subtitle mb-8">
        <FormattedMessage id="bathroomArrangements.title" />
      </h2>
      <p className="new-listing__description mb-24">
        <FormattedMessage id="bathroomArrangements.description" />
      </p>
      {field.value.map((bathroom, index) => (
        <BathroomField
          key={bathroom.id || bathroom.uuid}
          index={index}
          handleAddCustomBath={handleAddCustomBathCreator(index)}
          handleRemoveCustomBathCreator={handleRemoveCustomBathCreator}
        />
      ))}
    </div>
  );
};

BathroomsField.propTypes = {
  handleAddCustomBathCreator: PropTypes.func.isRequired,
  handleRemoveCustomBathCreator: PropTypes.func.isRequired,
};

export default BathroomsField;
