import { Form } from 'antd';
import { FormikProvider } from 'formik';
import { FormattedMessage } from 'react-intl';

import { APPROVED } from 'constants';

import AddNewListingLayout from 'views/layouts/AddNewListing';
import SwitchField from 'views/shared/form/SwitchField';
import AdditionalItems from 'views/shared/listing/AdditionalItems';

import useContainer, { getInitialProps } from './hook';

const HouseRules = () => {
  const {
    formik,
    isLoading,
    showSkeleton,
    stepStatus,
    isAddButtonDisabled,
    approvedHouseRules,
    notApprovedHouseRules,
    onBackRoute,
    handleSubmit,
    handleAddNotApprovedHouseRule,
    handleRemoveNotApprovedHouseRuleCreator,
  } = useContainer();

  return (
    <AddNewListingLayout
      onNext={handleSubmit}
      onBackRoute={onBackRoute}
      title={{ id: 'shared.houseRules' }}
      showSkeleton={showSkeleton}
      stepStatus={stepStatus}
      isLoading={isLoading}
      formik={formik}
    >
      <div className="new-listing__container mb-32">
        <h1 className="new-listing__title mb-8">
          <FormattedMessage id="listing.houseRules.title" />
        </h1>
        <p className="new-listing__description mb-32">
          <FormattedMessage id="listing.houseRules.description" />
        </p>
        <Form layout="vertical" size="large">
          <FormikProvider value={formik}>
            <div className="new-listing__switches mb-24">
              {Object.values(approvedHouseRules).map((rule) => (
                <SwitchField
                  key={rule.id}
                  className="mb-24"
                  name={`houseRules.${APPROVED}.${rule.id}.checked`}
                  title={rule.name}
                  tooltip={rule.description}
                />
              ))}
            </div>
            <h2 className="new-listing__subtitle mb-24">
              <FormattedMessage id="shared.additionalRules" />
            </h2>
            <AdditionalItems
              items={notApprovedHouseRules}
              isLoading={isLoading}
              isAddButtonDisabled={isAddButtonDisabled}
              onAdd={handleAddNotApprovedHouseRule}
              onRemove={handleRemoveNotApprovedHouseRuleCreator}
              namePlaceholder={{ id: 'shared.enterRule' }}
              withDescription={false}
            />
          </FormikProvider>
        </Form>
      </div>
    </AddNewListingLayout>
  );
};

HouseRules.getInitialProps = getInitialProps;

export default HouseRules;
