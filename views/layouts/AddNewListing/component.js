import PropTypes from 'prop-types';
import { Progress, Skeleton } from 'antd';

import { LISTING_PROGRESS_BY_STATUS, LISTING_STEP_STATUS } from 'constants/listing';
import GradientButton from 'views/shared/GradientButton';
import AddNewListingHeader from 'views/shared/headers/AddNewListingHeader';

import useContainer from './hook';

const AddNewListingLayout = ({
  children,
  onNext,
  onBackRoute,
  title,
  stepStatus,
  isLoading,
  showSkeleton,
  formik,
  isDirty,
}) => {
  const { onExit, onBack } = useContainer({ formik, onBackRoute, isDirty });

  return (
    <div className="main-layout">
      <AddNewListingHeader title={title} onExit={onExit} btnDisabled={isLoading || showSkeleton} />
      <div className="main-layout__content main-layout__content--full-width">
        <Progress
          percent={LISTING_PROGRESS_BY_STATUS[stepStatus]}
          showInfo={false}
          className="main-layout__progress"
        />
        <section className="new-listing pt-32">
          {showSkeleton && (
            <div className="new-listing__container">
              <Skeleton active />
            </div>
          )}
          {!showSkeleton && children}
          <div className="new-listing__footer pt-24 pb-24">
            <div className="new-listing__container d-flex justify-content-space-between">
              {onBackRoute && (
                <GradientButton
                  disabled={isLoading || showSkeleton}
                  onClick={onBack}
                  className="min-width-140"
                  variant="tertiary"
                  text={{ id: 'shared.back' }}
                />
              )}
              <GradientButton
                disabled={showSkeleton}
                loading={isLoading}
                onClick={onNext}
                className="min-width-140 ml-auto"
                text={{ id: 'shared.next' }}
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

AddNewListingLayout.defaultProps = {
  onBackRoute: undefined,
  isLoading: false,
  showSkeleton: false,
  stepStatus: LISTING_STEP_STATUS.INITIAL,
  isDirty: false,
  formik: undefined,
};

AddNewListingLayout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.shape().isRequired,
  formik: PropTypes.shape(),
  onNext: PropTypes.func.isRequired,
  onBackRoute: PropTypes.string,
  stepStatus: PropTypes.string,
  isLoading: PropTypes.bool,
  showSkeleton: PropTypes.bool,
  isDirty: PropTypes.bool,
};

export default AddNewListingLayout;
