import { Modal } from 'antd';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import SvgIcon from 'views/shared/SvgIcon';
import GradientButton from 'views/shared/GradientButton';

import useContainer from './hook';

const RemovePhotoModal = ({ onClose, title }) => {
  const { handleRemove, isLoading } = useContainer();

  return (
    <Modal
      title={<FormattedMessage {...title} />}
      visible
      closable
      className="modal"
      width={412}
      onCancel={onClose}
      closeIcon={<SvgIcon icon="modal-cross" className="modal__icon" />}
      footer={
        <div className="d-flex justify-content-flex-end">
          <GradientButton
            onClick={onClose}
            disabled={isLoading}
            text={{ id: 'shared.cancel' }}
            className="main-btn--medium mr-16"
            variant="tertiary"
          />
          <GradientButton
            onClick={handleRemove}
            loading={isLoading}
            text={{ id: 'shared.remove' }}
            className="main-btn--medium min-width-120"
            variant="primary"
          />
        </div>
      }
    >
      <div className="modal__content">
        <p className="modal__text mb-0">
          <FormattedMessage id="shared.areYouSureYouWantToRemoveProfileImage" />
        </p>
      </div>
    </Modal>
  );
};

RemovePhotoModal.defaultProps = {
  title: { id: 'shared.removeProfileImage' },
};

RemovePhotoModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  title: PropTypes.shape(),
};

export default RemovePhotoModal;
