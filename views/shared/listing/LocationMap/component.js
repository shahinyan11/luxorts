import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

const ListingLocationMap = ({ mapContainerRef, address }) => (
  <div className="new-listing__container new-listing__container--wide mb-8">
    <h1 className="new-listing__title mb-8">
      <FormattedMessage id="addNewListing.locationMap.title" />
    </h1>
    <p className="new-listing__description mb-32">
      <FormattedMessage id="addNewListing.locationMap.description" />
    </p>
    <p className="new-listing__address mb-16">{address}</p>
    <div ref={mapContainerRef} className="new-listing__map" />
  </div>
);

ListingLocationMap.defaultProps = {
  mapContainerRef: null,
};

ListingLocationMap.propTypes = {
  mapContainerRef: PropTypes.shape(),
  address: PropTypes.string.isRequired,
};

export default ListingLocationMap;
