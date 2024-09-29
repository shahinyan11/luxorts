import { FIELD_NAME_BY_TYPE } from 'constants/googleMaps';

/**
 * Parse address components from Google Maps geocoding response
 * @param components {array}
 * @return {object}
 */
const parseAddressComponents = (components) =>
  components.reduce((acc, component) => {
    const type = component.types[0];
    const fieldName = FIELD_NAME_BY_TYPE[type];

    return {
      ...acc,
      ...(fieldName && { [fieldName]: component.long_name }),
    };
  }, {});

export default parseAddressComponents;
