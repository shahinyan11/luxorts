import { Skeleton } from 'antd';

import useListingLocation from 'hooks/listing/useListingLocation';

import EditListingLayout from 'views/layouts/EditListing';
import EditListingFooter from 'views/shared/footers/EditListing';
import ListingLocation from 'views/shared/listing/Location';

import { getInitialProps } from './hook';

const Location = () => {
  const { formik, showSkeleton, isLoading } = useListingLocation({
    message: { description: { id: 'shared.changesHaveBeenSaved' } },
  });

  if (showSkeleton) {
    return (
      <div className="new-listing__container mb-8">
        <Skeleton active />
      </div>
    );
  }

  return (
    <>
      <ListingLocation formik={formik} />
      <EditListingFooter
        disabled={showSkeleton}
        isLoading={isLoading}
        onSave={formik.handleSubmit}
      />
    </>
  );
};

Location.Layout = EditListingLayout;

Location.getInitialProps = getInitialProps;

export default Location;
