import { Form } from 'antd';
import { FormikProvider } from 'formik';
import { FormattedMessage } from 'react-intl';

import AddNewListingLayout from 'views/layouts/AddNewListing';

import AmountsForm from './AmountsForm';
import BedroomsField from './BedroomsField';
import BathroomsField from './BathroomsField';
import useContainer, { getInitialProps } from './hook';

const Accommodation = () => {
  const {
    formik,
    showSkeleton,
    stepStatus,
    isLoading,
    onBackRoute,
    onListingBedroomsChange,
    handleAddCustomBedCreator,
    handleRemoveCustomBedCreator,
    onBedAmountChangeHandlerCreator,
    onListingBathroomsChange,
    handleAddCustomBathCreator,
    handleRemoveCustomBathCreator,
  } = useContainer();

  return (
    <AddNewListingLayout
      onNext={formik.handleSubmit}
      onBackRoute={onBackRoute}
      title={{ id: 'shared.accommodation' }}
      showSkeleton={showSkeleton}
      stepStatus={stepStatus}
      isLoading={isLoading}
      formik={formik}
    >
      <div className="new-listing__container mb-8">
        <h1 className="new-listing__title mb-8">
          <FormattedMessage id="addNewListing.accommodation.title" />
        </h1>
        <p className="new-listing__description mb-32">
          <FormattedMessage id="addNewListing.accommodation.description" />
        </p>
        <Form layout="vertical" size="large">
          <FormikProvider value={formik}>
            <AmountsForm
              onListingBedroomsChange={onListingBedroomsChange}
              onListingBathroomsChange={onListingBathroomsChange}
            />
            <BedroomsField
              handleAddCustomBedCreator={handleAddCustomBedCreator}
              handleRemoveCustomBedCreator={handleRemoveCustomBedCreator}
              onBedAmountChangeHandlerCreator={onBedAmountChangeHandlerCreator}
            />
            <BathroomsField
              handleAddCustomBathCreator={handleAddCustomBathCreator}
              handleRemoveCustomBathCreator={handleRemoveCustomBathCreator}
            />
          </FormikProvider>
        </Form>
      </div>
    </AddNewListingLayout>
  );
};

Accommodation.getInitialProps = getInitialProps;

export default Accommodation;
