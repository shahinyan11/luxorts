import { Modal } from 'antd';
import { FormattedMessage } from 'react-intl';

import GradientButton from 'views/shared/GradientButton';

import useContainer from './hook';

const DeactivatedByUserModal = (props) => {
  const { onCancelHandler, onConfirmHandler, isLoading } = useContainer(props);

  return (
    <Modal
      visible
      closable={false}
      className="modal"
      footer={
        <div className="d-flex justify-content-flex-end">
          <GradientButton
            disabled={isLoading}
            onClick={onCancelHandler}
            className="main-btn--medium mr-16"
            variant="tertiary"
            text={{ id: 'signIn.deactivatedByUserModal.cancel' }}
          />
          <GradientButton
            loading={isLoading}
            onClick={onConfirmHandler}
            className="main-btn--medium"
            text={{ id: 'signIn.deactivatedByUserModal.confirm' }}
          />
        </div>
      }
    >
      <div className="modal__content">
        <p className="modal__text">
          <FormattedMessage id="signIn.deactivatedByUserModal.description" />
        </p>
      </div>
    </Modal>
  );
};

export default DeactivatedByUserModal;
