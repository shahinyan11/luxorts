import { Skeleton } from 'antd';

import useListingPropertyType from 'hooks/listing/useListingPropertyType';

import EditListingLayout from 'views/layouts/EditListing';
import EditListingFooter from 'views/shared/footers/EditListing';
import ListingPropertyType from 'views/shared/listing/PropertyType';

import { getInitialProps } from './hook';

const PropertyType = () => {
  const { formik, propertyTypesOptions, showSkeleton, isLoading, tooltip } = useListingPropertyType(
    {
      shouldRedirect: false,
      message: { description: { id: 'shared.changesHaveBeenSaved' } },
    },
  );

  if (showSkeleton) {
    return (
      <div className="new-listing__container mb-24">
        <Skeleton active />
      </div>
    );
  }

  return (
    <>
      <ListingPropertyType
        formik={formik}
        propertyTypesOptions={propertyTypesOptions}
        tooltip={tooltip}
      />
      <EditListingFooter
        disabled={showSkeleton}
        isLoading={isLoading}
        onSave={formik.handleSubmit}
      />
    </>
  );
};

PropertyType.Layout = EditListingLayout;

PropertyType.getInitialProps = getInitialProps;

export default PropertyType;
