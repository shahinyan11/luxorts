import { Modal } from 'antd';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import GradientButton from 'views/shared/GradientButton';
import SvgIcon from 'views/shared/SvgIcon';

const InfoModal = ({
  title,
  confirmText,
  onConfirm,
  onCancel,
  cancelText,
  description,
  onClose,
  ...props
}) => (
  <Modal
    {...props}
    title={title && <FormattedMessage {...title} />}
    visible
    className="modal"
    onCancel={onClose}
    closeIcon={<SvgIcon icon="modal-cross" className="modal__icon" />}
    footer={
      (onConfirm || onCancel) && (
        <div className="d-flex justify-content-flex-end">
          {onCancel && (
            <GradientButton
              onClick={onCancel}
              className="main-btn--medium mr-16 ml-sm-auto mb-8 mb-sm-0"
              text={cancelText}
              variant="tertiary"
            />
          )}
          {onConfirm && (
            <GradientButton
              onClick={onConfirm}
              className="main-btn--medium min-width-120"
              text={confirmText}
            />
          )}
        </div>
      )
    }
  >
    <div className="modal__content">
      <p className="modal__text">
        <FormattedMessage {...description} />
      </p>
    </div>
  </Modal>
);

InfoModal.defaultProps = {
  title: undefined,
  onConfirm: null,
  onCancel: null,
  onClose: undefined,
  confirmText: { id: 'shared.ok' },
  cancelText: { id: 'shared.cancel' },
};

InfoModal.propTypes = {
  title: PropTypes.shape(),
  confirmText: PropTypes.shape(),
  cancelText: PropTypes.shape(),
  onConfirm: PropTypes.func,
  onCancel: PropTypes.func,
  onClose: PropTypes.func,
  description: PropTypes.shape().isRequired,
};

export default InfoModal;
