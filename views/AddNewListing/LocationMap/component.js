import getFullAddress from 'utils/users/getFullAddress';

import useListingLocationMap from 'hooks/listing/useListingLocationMap';

import withGoogleMaps from 'hocs/withGoogleMaps';

import AddNewListingLayout from 'views/layouts/AddNewListing';
import ListingLocationMap from 'views/shared/listing/LocationMap';

import { getInitialProps } from './hook';

const LocationMap = () => {
  const { formik, showSkeleton, stepStatus, isLoading, mapContainerRef, onBackRoute, isDirty } =
    useListingLocationMap({ shouldRedirect: true });

  return (
    <AddNewListingLayout
      onNext={formik.handleSubmit}
      onBackRoute={onBackRoute}
      title={{ id: 'shared.location' }}
      showSkeleton={showSkeleton}
      stepStatus={stepStatus}
      isLoading={isLoading}
      formik={formik}
      isDirty={isDirty}
    >
      <ListingLocationMap
        mapContainerRef={mapContainerRef}
        address={getFullAddress(formik.values)}
      />
    </AddNewListingLayout>
  );
};

LocationMap.getInitialProps = getInitialProps;

export default withGoogleMaps(LocationMap);
