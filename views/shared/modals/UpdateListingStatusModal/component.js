import { Modal } from 'antd';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';

import GradientButton from 'views/shared/GradientButton';
import SvgIcon from 'views/shared/SvgIcon';

import useContainer from './hook';

const UpdateListingStatusModal = ({
  title,
  subtitle,
  description,
  confirmBtnText,
  confirmBtnProps,
  id,
  status,
  onClose,
  ...props
}) => {
  const { isLoading, onConfirm } = useContainer({ id, status });

  return (
    <Modal
      {...props}
      title={<FormattedMessage {...title} />}
      visible
      width={412}
      className="modal"
      onCancel={onClose}
      closeIcon={<SvgIcon icon="modal-cross" className="modal__icon" />}
      footer={
        <div className="confirm__buttons d-flex flex-column flex-sm-row justify-content-space-between w-100">
          <GradientButton
            disabled={isLoading}
            onClick={onClose}
            className="main-btn--medium mr-16 ml-sm-auto mb-8 mb-sm-0"
            variant="tertiary"
            text={{ id: 'shared.cancel' }}
          />
          <GradientButton
            {...confirmBtnProps}
            onClick={onConfirm}
            loading={isLoading}
            className="main-btn--medium min-width-120"
            text={confirmBtnText}
          />
        </div>
      }
    >
      <div className="modal__content">
        <p className="modal__text mb-16">
          <FormattedMessage {...subtitle} />
        </p>
        <p className="modal__text mb-0">
          <FormattedMessage {...description} />
        </p>
      </div>
    </Modal>
  );
};

UpdateListingStatusModal.defaultProps = {
  onClose: undefined,
  confirmBtnProps: undefined,
};

UpdateListingStatusModal.propTypes = {
  title: PropTypes.shape().isRequired,
  subtitle: PropTypes.shape().isRequired,
  description: PropTypes.shape().isRequired,
  confirmBtnText: PropTypes.shape().isRequired,
  confirmBtnProps: PropTypes.shape(),
  id: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  onClose: PropTypes.func,
};

export default UpdateListingStatusModal;
