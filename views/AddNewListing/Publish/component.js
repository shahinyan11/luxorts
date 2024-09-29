import Image from 'next/image';
import { FormattedMessage } from 'react-intl';
import { Skeleton } from 'antd';

import GuestLayout from 'views/layouts/Guest';
import GradientButton from 'views/shared/GradientButton';

import useContainer, { getInitialProps } from './hook';

const Publish = () => {
  const { isLoading, showSkeleton, onSaveAsDraftClickHandler, onPublishListingClickHandler } =
    useContainer();

  if (showSkeleton) {
    return (
      <section className="publish pt-40 pt-md-80 mb-32">
        <Skeleton active />;
      </section>
    );
  }

  return (
    <section className="publish pt-40 pt-md-80 mb-32">
      <div className="mb-32">
        <Image alt="" width="136" height="136" src="/images/publish.png" />
      </div>
      <h1 className="publish__title mb-8">
        <FormattedMessage id="shared.youAreReadyToPublish" />
      </h1>
      <p className="publish__description mb-32">
        <FormattedMessage id="publish.description" />
      </p>
      <div className="d-flex justify-content-center mb-32">
        <GradientButton
          disabled={isLoading}
          onClick={onPublishListingClickHandler}
          className="min-width-140"
          text={{ id: 'shared.publishListing' }}
        />
        <GradientButton
          disabled={isLoading}
          onClick={onSaveAsDraftClickHandler}
          className="min-width-140 ml-16"
          text={{ id: 'shared.saveAsDraft' }}
          variant="secondary"
        />
      </div>
    </section>
  );
};

Publish.Layout = GuestLayout;

Publish.getInitialProps = getInitialProps;

export default Publish;
