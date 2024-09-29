import useListingPropertyType from 'hooks/listing/useListingPropertyType';

import AddNewListingLayout from 'views/layouts/AddNewListing';
import ListingPropertyType from 'views/shared/listing/PropertyType';

import { getInitialProps } from './hook';

const PropertyType = () => {
  const { formik, propertyTypesOptions, showSkeleton, isLoading, stepStatus, tooltip } =
    useListingPropertyType({ shouldRedirect: true });

  return (
    <AddNewListingLayout
      onNext={formik.handleSubmit}
      title={{ id: 'shared.propertyType' }}
      showSkeleton={showSkeleton}
      isLoading={isLoading}
      stepStatus={stepStatus}
      formik={formik}
    >
      <ListingPropertyType
        formik={formik}
        propertyTypesOptions={propertyTypesOptions}
        tooltip={tooltip}
      />
    </AddNewListingLayout>
  );
};

PropertyType.getInitialProps = getInitialProps;

export default PropertyType;
