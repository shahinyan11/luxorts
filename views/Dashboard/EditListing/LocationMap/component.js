import getFullAddress from 'utils/users/getFullAddress';

import useListingLocationMap from 'hooks/listing/useListingLocationMap';

import withGoogleMaps from 'hocs/withGoogleMaps';

import EditListingLayout from 'views/layouts/EditListing';
import EditListingFooter from 'views/shared/footers/EditListing';
import ListingLocationMap from 'views/shared/listing/LocationMap';

import { getInitialProps } from './hook';

const LocationMap = () => {
  const { formik, showSkeleton, isLoading, mapContainerRef } = useListingLocationMap({
    message: { description: { id: 'shared.changesHaveBeenSaved' } },
  });

  return (
    <>
      <ListingLocationMap
        mapContainerRef={mapContainerRef}
        address={getFullAddress(formik.values)}
      />
      <EditListingFooter
        disabled={showSkeleton}
        isLoading={isLoading}
        onSave={formik.handleSubmit}
      />
    </>
  );
};

LocationMap.Layout = EditListingLayout;

LocationMap.getInitialProps = getInitialProps;

export default withGoogleMaps(LocationMap);
