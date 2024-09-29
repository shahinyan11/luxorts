import { Form } from 'antd';
import { FormikProvider } from 'formik';
import { FormattedMessage } from 'react-intl';

import AddNewListingLayout from 'views/layouts/AddNewListing';
import UploadPhotosField from 'views/shared/form/UploadPhotosField';

import useContainer, { getInitialProps } from './hook';

const Photos = () => {
  const { formik, showSkeleton, stepStatus, isLoading, onBackRoute, onRemovePhotoCallback } =
    useContainer();

  return (
    <AddNewListingLayout
      onNext={formik.handleSubmit}
      onBackRoute={onBackRoute}
      title={{ id: 'shared.photos' }}
      showSkeleton={showSkeleton}
      stepStatus={stepStatus}
      isLoading={isLoading}
      formik={formik}
    >
      <div className="new-listing__container new-listing__container--wide mb-8">
        <h1 className="new-listing__title mb-8">
          <FormattedMessage id="shared.uploadListingPhotos" />
        </h1>
        <p className="new-listing__description mb-32">
          <FormattedMessage id="listing.photos.imageFormat" />
        </p>
        <Form layout="vertical" size="large">
          <FormikProvider value={formik}>
            <UploadPhotosField name="listingPhotos" onRemove={onRemovePhotoCallback} />
          </FormikProvider>
        </Form>
      </div>
    </AddNewListingLayout>
  );
};

Photos.getInitialProps = getInitialProps;

export default Photos;
