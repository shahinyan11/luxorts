import React from 'react';
import { Modal, Button } from 'antd';
import SvgIcon from 'views/stubs/shared/SvgIcon';

const SightDetailsMap = () => (
  <Modal
    visible
    closable
    title="Share this place with friends and family"
    className="modal"
    width={412}
    closeIcon={<SvgIcon icon="modal-cross" className="modal__icon" />}
    footer={null}
  >
    <div className="modal__content">
      <div className="modal__share">
        <Button htmlType="button" className="main-btn main-btn--social min-width-170">
          <SvgIcon icon="facebook-colored" className="icon-left" />
          Facebook
        </Button>
        <Button htmlType="button" className="main-btn main-btn--social min-width-170">
          <SvgIcon icon="instagram-colored" className="icon-left" />
          Instagram
        </Button>
        <Button htmlType="button" className="main-btn main-btn--social min-width-170">
          <SvgIcon icon="twitter-colored" className="icon-left" />
          Twitter
        </Button>
        <Button htmlType="button" className="main-btn main-btn--social min-width-170">
          <SvgIcon icon="snapchat-colored" className="icon-left" />
          Snapchat
        </Button>
        <Button htmlType="button" className="main-btn main-btn--social min-width-170">
          <SvgIcon icon="email-colored" className="icon-left" />
          Email
        </Button>
        <Button htmlType="button" className="main-btn main-btn--social min-width-170">
          <SvgIcon icon="sms-colored" className="icon-left" />
          SMS
        </Button>
      </div>
    </div>
  </Modal>
);

export default SightDetailsMap;
