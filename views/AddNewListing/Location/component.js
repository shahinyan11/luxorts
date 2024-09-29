import useListingLocation from 'hooks/listing/useListingLocation';

import AddNewListingLayout from 'views/layouts/AddNewListing';
import ListingLocation from 'views/shared/listing/Location';

import { getInitialProps } from './hook';

const Location = () => {
  const { formik, showSkeleton, stepStatus, isLoading, onBackRoute } = useListingLocation({
    shouldRedirect: true,
  });

  return (
    <AddNewListingLayout
      onNext={formik.handleSubmit}
      onBackRoute={onBackRoute}
      title={{ id: 'shared.location' }}
      showSkeleton={showSkeleton}
      stepStatus={stepStatus}
      isLoading={isLoading}
      formik={formik}
    >
      <ListingLocation formik={formik} />
    </AddNewListingLayout>
  );
};

Location.getInitialProps = getInitialProps;

export default Location;
