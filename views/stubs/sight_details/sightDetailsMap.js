import React from 'react';
import { Modal } from 'antd';
import SvgIcon from 'views/stubs/shared/SvgIcon';

const SightDetailsMap = () => (
  <Modal
    visible
    closable
    className="modal modal-gallery"
    width={1440}
    closeIcon={<SvgIcon icon="modal-cross" className="modal__icon" />}
    footer={null}
  >
    <div className="modal__content">
      <div className="mr-auto ml-auto text-align-center">
        <img alt="" width="1140" height="960" src="/images/full-map.png" />
      </div>
    </div>
  </Modal>
);

export default SightDetailsMap;
