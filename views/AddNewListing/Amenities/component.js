import { Fragment } from 'react';
import { Form } from 'antd';
import { FormikProvider } from 'formik';
import { FormattedMessage } from 'react-intl';

import AddNewListingLayout from 'views/layouts/AddNewListing';
import AdditionalItems from 'views/shared/listing/AdditionalItems';
import CheckboxGroup from 'views/shared/listing/CheckboxGroup';

import useContainer, { getInitialProps } from './hook';

const Amenities = () => {
  const {
    formik,
    showSkeleton,
    stepStatus,
    isLoading,
    isAddButtonDisabled,
    approvedAmenities,
    notApprovedAmenities,
    onBackRoute,
    handleSubmit,
    handleAddNotApprovedAmenity,
    handleRemoveNotApprovedAmenityCreator,
  } = useContainer();

  return (
    <AddNewListingLayout
      onNext={handleSubmit}
      onBackRoute={onBackRoute}
      title={{ id: 'shared.amenities' }}
      showSkeleton={showSkeleton}
      stepStatus={stepStatus}
      isLoading={isLoading}
      formik={formik}
    >
      <div className="new-listing__container mb-32">
        <h1 className="new-listing__title mb-32">
          <FormattedMessage id="addNewListing.amenities.title" />
        </h1>
        <Form layout="vertical" size="large">
          <FormikProvider value={formik}>
            {Object.keys(approvedAmenities).map((key) => (
              <Fragment key={key}>
                <h2 className="new-listing__subtitle mb-24">{key}</h2>
                <CheckboxGroup
                  path={`amenities.${key}`}
                  items={Object.values(approvedAmenities[key])}
                />
              </Fragment>
            ))}
            <h2 className="new-listing__subtitle mb-24">
              <FormattedMessage id="shared.additionalAmenities" />
            </h2>
            <AdditionalItems
              items={notApprovedAmenities}
              isLoading={isLoading}
              isAddButtonDisabled={isAddButtonDisabled}
              onAdd={handleAddNotApprovedAmenity}
              onRemove={handleRemoveNotApprovedAmenityCreator}
              namePlaceholder={{ id: 'shared.enterAmenityTitle' }}
              descriptionPlaceholder={{ id: 'shared.describeAmenity' }}
            />
          </FormikProvider>
        </Form>
      </div>
    </AddNewListingLayout>
  );
};

Amenities.getInitialProps = getInitialProps;

export default Amenities;
