import { Form, Modal } from 'antd';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { FormikProvider } from 'formik';

import ROUTES from 'constants/routes';

import SvgIcon from 'views/shared/SvgIcon';
import GradientButton from 'views/shared/GradientButton';
import PasswordField from 'views/shared/form/PasswordField';

import useContainer from './hook';

const DeactivateAccountModal = ({ onClose }) => {
  const { formik, isLoading } = useContainer();

  return (
    <Modal
      title={<FormattedMessage id="shared.deactivateAccount" />}
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
            onClick={onClose}
            text={{ id: 'shared.cancel' }}
            className="main-btn--medium mr-16"
            variant="tertiary"
          />
          <GradientButton
            loading={isLoading}
            onClick={formik.handleSubmit}
            text={{ id: 'shared.deactivate' }}
            className="main-btn--medium min-width-120"
            variant="warning"
          />
        </div>
      }
    >
      <div className="modal__content">
        <div className="d-flex flex-column">
          <p className="text-body mb-16">
            <FormattedMessage id="shared.deactivateQuestion" />
          </p>
          <p className="text-body mb-24">
            <FormattedMessage id="shared.deactivateDescription" />
          </p>
          <Form layout="vertical" size="large">
            <FormikProvider value={formik}>
              <div className="d-flex justify-content-space-between">
                <label className="input-text__label" htmlFor="currentPassword">
                  <FormattedMessage id="shared.password" />
                </label>
                <Link href={ROUTES.RESET_PASSWORD.PATH}>
                  <a onClick={onClose} role="button" className="main-text-btn fz-12">
                    <FormattedMessage id="shared.forgotPassword" />
                  </a>
                </Link>
              </div>
              <PasswordField name="currentPassword" placeholder={{ id: 'shared.password' }} />
            </FormikProvider>
          </Form>
        </div>
      </div>
    </Modal>
  );
};

DeactivateAccountModal.defaultProps = {
  onClose: null,
};

DeactivateAccountModal.propTypes = {
  onClose: PropTypes.func,
};

export default DeactivateAccountModal;
