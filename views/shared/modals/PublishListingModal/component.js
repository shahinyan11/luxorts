import { Modal } from 'antd';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';

import ROUTES from 'constants/routes';

import useHideModal from 'hooks/useHideModal';

import GradientButton from 'views/shared/GradientButton';
import SvgIcon from 'views/shared/SvgIcon';

const PublishListingModal = ({ title, description, onClose, ...props }) => {
  const hideModal = useHideModal();

  return (
    <Modal
      {...props}
      title={<FormattedMessage {...title} />}
      visible
      width={558}
      className="modal"
      onCancel={onClose}
      closeIcon={<SvgIcon icon="modal-cross" className="modal__icon" />}
      footer={
        <div className="d-flex justify-content-flex-end">
          <Link href={ROUTES.DASHBOARD.LISTINGS.PATH}>
            <a>
              <GradientButton
                onClick={hideModal}
                className="main-btn--medium min-width-120"
                text={{ id: 'shared.goToListings' }}
              />
            </a>
          </Link>
        </div>
      }
    >
      <div className="modal__content text-align-center">
        <div className="mb-24">
          <Image alt="" width="136" height="136" src="/images/upload-done.png" />
        </div>
        <p className="modal__text mb-0">
          <FormattedMessage {...description} />
        </p>
      </div>
    </Modal>
  );
};

PublishListingModal.defaultProps = {
  title: { id: 'publish.modal.reviewed.title' },
  description: { id: 'publish.modal.reviewed.description' },
  onClose: undefined,
};

PublishListingModal.propTypes = {
  title: PropTypes.shape(),
  description: PropTypes.shape(),
  onClose: PropTypes.func,
};

export default PublishListingModal;
