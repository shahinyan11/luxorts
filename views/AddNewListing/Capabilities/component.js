import { Form } from 'antd';
import { FormikProvider } from 'formik';
import { FormattedMessage } from 'react-intl';

import { APPROVED } from 'constants';

import AddNewListingLayout from 'views/layouts/AddNewListing';
import AdditionalItems from 'views/shared/listing/AdditionalItems';
import CheckboxGroup from 'views/shared/listing/CheckboxGroup';

import useContainer, { getInitialProps } from './hook';

const Capabilities = () => {
  const {
    formik,
    showSkeleton,
    stepStatus,
    isLoading,
    isAddButtonDisabled,
    approvedCapabilities,
    notApprovedCapabilities,
    onBackRoute,
    handleSubmit,
    handleAddNotApprovedCapability,
    handleRemoveNotApprovedCapabilityCreator,
  } = useContainer();

  return (
    <AddNewListingLayout
      onNext={handleSubmit}
      onBackRoute={onBackRoute}
      title={{ id: 'shared.capabilities' }}
      showSkeleton={showSkeleton}
      stepStatus={stepStatus}
      isLoading={isLoading}
      formik={formik}
    >
      <div className="new-listing__container mb-32">
        <h1 className="new-listing__title mb-32">
          <FormattedMessage id="addNewListing.capabilities.title" />
        </h1>
        <Form layout="vertical" size="large">
          <FormikProvider value={formik}>
            <CheckboxGroup
              path={`capabilities.${APPROVED}`}
              items={Object.values(approvedCapabilities)}
            />
            <h2 className="new-listing__subtitle mb-24">
              <FormattedMessage id="shared.additionalCapabilities" />
            </h2>
            <AdditionalItems
              items={notApprovedCapabilities}
              isLoading={isLoading}
              isAddButtonDisabled={isAddButtonDisabled}
              onAdd={handleAddNotApprovedCapability}
              onRemove={handleRemoveNotApprovedCapabilityCreator}
              namePlaceholder={{ id: 'shared.enterCapabilityTitle' }}
              descriptionPlaceholder={{ id: 'shared.describeCapability' }}
            />
          </FormikProvider>
        </Form>
      </div>
    </AddNewListingLayout>
  );
};

Capabilities.getInitialProps = getInitialProps;

export default Capabilities;
