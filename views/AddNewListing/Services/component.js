import { Form } from 'antd';
import { FormikProvider } from 'formik';
import { FormattedMessage } from 'react-intl';

import { APPROVED } from 'constants';

import AddNewListingLayout from 'views/layouts/AddNewListing';
import AdditionalItems from 'views/shared/listing/AdditionalItems';
import CheckboxGroup from 'views/shared/listing/CheckboxGroup';

import useContainer, { getInitialProps } from './hook';

const Services = () => {
  const {
    formik,
    showSkeleton,
    stepStatus,
    isLoading,
    isAddButtonDisabled,
    approvedServices,
    notApprovedServices,
    onBackRoute,
    handleSubmit,
    handleAddNotApprovedService,
    handleRemoveNotApprovedServiceCreator,
  } = useContainer();

  return (
    <AddNewListingLayout
      onNext={handleSubmit}
      onBackRoute={onBackRoute}
      title={{ id: 'shared.services' }}
      showSkeleton={showSkeleton}
      stepStatus={stepStatus}
      isLoading={isLoading}
      formik={formik}
    >
      <div className="new-listing__container mb-32">
        <h1 className="new-listing__title mb-32">
          <FormattedMessage id="addNewListing.services.title" />
        </h1>
        <Form layout="vertical" size="large">
          <FormikProvider value={formik}>
            <CheckboxGroup
              path={`listingServices.${APPROVED}`}
              items={Object.values(approvedServices)}
              withPaid
            />
            <h2 className="new-listing__subtitle mb-24">
              <FormattedMessage id="shared.additionalServices" />
            </h2>
            <AdditionalItems
              items={notApprovedServices}
              onRemove={handleRemoveNotApprovedServiceCreator}
              onAdd={handleAddNotApprovedService}
              isAddButtonDisabled={isAddButtonDisabled}
              isLoading={isLoading}
              namePlaceholder={{ id: 'shared.enterServiceTitle' }}
              descriptionPlaceholder={{ id: 'shared.describeService' }}
              withPaid
            />
          </FormikProvider>
        </Form>
      </div>
    </AddNewListingLayout>
  );
};

Services.getInitialProps = getInitialProps;

export default Services;
