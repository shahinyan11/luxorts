import { Form, Input } from 'antd';
import { FormikProvider } from 'formik';
import { FormattedMessage } from 'react-intl';

import AddNewListingLayout from 'views/layouts/AddNewListing';
import InputField from 'views/shared/form/InputField';

import useContainer, { getInitialProps } from './hook';

const Description = () => {
  const { formik, showSkeleton, stepStatus, isLoading, onBackRoute } = useContainer();

  return (
    <AddNewListingLayout
      onNext={formik.handleSubmit}
      onBackRoute={onBackRoute}
      title={{ id: 'shared.description' }}
      showSkeleton={showSkeleton}
      stepStatus={stepStatus}
      isLoading={isLoading}
      formik={formik}
    >
      <div className="new-listing__container mb-8">
        <h1 className="new-listing__title mb-8">
          <FormattedMessage id="listing.describe.title" />
        </h1>
        <p className="new-listing__description mb-32">
          <FormattedMessage id="listing.describe.description" />
        </p>
        <Form layout="vertical" size="large">
          <FormikProvider value={formik}>
            <InputField name="title" label={{ id: 'shared.listingTitle' }} />
            <InputField
              name="hiddenTitle"
              formItemClassName="mb-16"
              label={{ id: 'shared.hiddenTitle' }}
              tooltip={{ id: 'listing.describe.info' }}
            />
            <InputField
              name="description"
              label={{ id: 'shared.description' }}
              asComponent={Input.TextArea}
            />
          </FormikProvider>
        </Form>
      </div>
    </AddNewListingLayout>
  );
};

Description.getInitialProps = getInitialProps;

export default Description;
