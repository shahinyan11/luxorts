/* eslint-disable react/prop-types */
import { Modal, Button } from 'antd';
import SvgIcon from 'views/stubs/shared/SvgIcon';
import UploadPhoto from 'views/stubs/shared/Upload/component';

const UploadProfileImage = ({ visible, isError, messageText }) => (
  <Modal
    title="Upload profile image"
    visible={visible}
    closable
    className="modal"
    width={558}
    closeIcon={<SvgIcon icon="modal-cross" className="modal__icon" />}
    footer={
      <div className="d-flex justify-content-flex-end">
        <Button htmlType="button" className="main-btn main-btn--medium main-btn--tertiary mr-16">
          Cancel
        </Button>
        <Button
          htmlType="button"
          className="main-btn main-btn--medium main-btn--primary min-width-120"
        >
          Save
        </Button>
      </div>
    }
  >
    <div className="modal__content">
      {isError && (
        <div className="flash-message flash-message--error mb-16">
          <SvgIcon icon="alert" className="flash-message__left-icon" />
          <span>{messageText}</span>
          <Button htmlType="button" className="flash-message__right-icon">
            <SvgIcon icon="cross" />
          </Button>
        </div>
      )}
      <p className="modal__text mb-24">Image format: JPG or PNG. Max size: 10 Mb.</p>
      <UploadPhoto />
    </div>
  </Modal>
);

export default UploadProfileImage;
