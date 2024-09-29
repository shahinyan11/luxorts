import PropTypes from 'prop-types';

import GradientButton from 'views/shared/GradientButton';

const EditListingFooter = ({ isLoading, disabled, onSave }) => (
  <div className="new-listing__footer pt-24 pb-24">
    <div className="new-listing__container d-flex flex-column flex-sm-row justify-content-space-between">
      <GradientButton
        disabled={disabled}
        loading={isLoading}
        onClick={onSave}
        className="min-width-140 ml-sm-auto"
        text={{ id: 'shared.save' }}
      />
    </div>
  </div>
);

EditListingFooter.defaultProps = {
  isLoading: false,
  disabled: false,
};

EditListingFooter.propTypes = {
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  onSave: PropTypes.func.isRequired,
};

export default EditListingFooter;
