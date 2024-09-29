import { Form, Modal } from 'antd';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { FormikProvider } from 'formik';
import Image from 'next/image';

import SvgIcon from 'views/shared/SvgIcon';
import GradientButton from 'views/shared/GradientButton';
import InputField from 'views/shared/form/InputField';

import useContainer from './hook';

const UpdateEmailModal = ({ onClose, email }) => {
  const { formik, isLoading, onResendClickHandler, isResendLoading } = useContainer({ email });

  return (
    <Modal
      title={<FormattedMessage id="emailConfirmation.title" />}
      visible
      closable
      className="modal"
      width={558}
      onCancel={onClose}
      closeIcon={<SvgIcon icon="modal-cross" className="modal__icon" />}
      footer={
        <div className="d-flex justify-content-flex-end w-100">
          <GradientButton
            disabled={isLoading}
            loading={isResendLoading}
            onClick={onResendClickHandler}
            text={{ id: 'shared.resendEmail' }}
            className="main-btn--medium mr-16"
            variant="secondary"
          />
          <GradientButton
            disabled={isLoading || isResendLoading}
            onClick={onClose}
            text={{ id: 'shared.cancel' }}
            className="ml-sm-auto main-btn--medium mr-16"
            variant="tertiary"
          />
          <GradientButton
            disabled={isResendLoading}
            loading={isLoading}
            onClick={formik.handleSubmit}
            text={{ id: 'shared.confirm' }}
            className="main-btn--medium min-width-120"
          />
        </div>
      }
    >
      <div className="modal__content">
        <div className="d-flex flex-column align-items-center">
          <div className="mb-24">
            <Image src="/images/email.png" alt="" width="136" height="136" />
          </div>
          <p className="confirm__text mb-0">
            <FormattedMessage
              id="shared.weSentEmailToAddress"
              values={{
                address: <b className="confirm__text-bold">{email}</b>,
              }}
            />
          </p>
          <p className="confirm__text mb-24">
            <FormattedMessage id="emailConfirmation.enterCode" />
          </p>
          <Form layout="vertical" size="large" className="w-100">
            <FormikProvider value={formik}>
              <InputField name="code" placeholder={{ id: 'shared.enterSecurityCode' }} />
            </FormikProvider>
          </Form>
        </div>
      </div>
    </Modal>
  );
};

UpdateEmailModal.defaultProps = {
  onClose: null,
};

UpdateEmailModal.propTypes = {
  onClose: PropTypes.func,
  email: PropTypes.string.isRequired,
};

export default UpdateEmailModal;
