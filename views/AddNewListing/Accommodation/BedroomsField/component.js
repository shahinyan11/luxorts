import { useField } from 'formik';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import BedroomField from './BedroomField';

const BedroomsField = ({
  handleAddCustomBedCreator,
  handleRemoveCustomBedCreator,
  onBedAmountChangeHandlerCreator,
}) => {
  const [field] = useField('bedrooms');

  return (
    <div className="new-listing__item mb-24">
      <h2 className="new-listing__subtitle mb-8">
        <FormattedMessage id="sleepingArrangements.title" />
      </h2>
      <p className="new-listing__description mb-24">
        <FormattedMessage id="sleepingArrangements.description" />
      </p>
      {field.value.map((bedroom, index) => (
        <BedroomField
          key={bedroom.id || bedroom.uuid}
          index={index}
          handleAddCustomBed={handleAddCustomBedCreator(index)}
          handleRemoveCustomBedCreator={handleRemoveCustomBedCreator}
          onBedAmountChangeHandlerCreator={onBedAmountChangeHandlerCreator}
        />
      ))}
    </div>
  );
};

BedroomsField.propTypes = {
  handleAddCustomBedCreator: PropTypes.func.isRequired,
  handleRemoveCustomBedCreator: PropTypes.func.isRequired,
  onBedAmountChangeHandlerCreator: PropTypes.func.isRequired,
};

export default BedroomsField;
