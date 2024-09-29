import { Modal, Button } from 'antd';
import SvgIcon from 'views/stubs/shared/SvgIcon';

const PaymentsAndPayoutsMethodRemove = () => (
  <Modal
    title="Remove payment method"
    visible
    closable
    className="modal"
    width={412}
    closeIcon={<SvgIcon icon="modal-cross" className="modal__icon" />}
    footer={
      <div className="d-flex justify-content-flex-end w-100">
        <Button htmlType="button" className="main-btn main-btn--medium main-btn--tertiary mr-16">
          Cancel
        </Button>
        <Button
          htmlType="button"
          className="main-btn main-btn--medium main-btn--primary min-width-120"
        >
          Remove
        </Button>
      </div>
    }
  >
    <div className="modal__content">
      <p className="text-body mb-0">Are you sure you want to remove this payment method?</p>
    </div>
  </Modal>
);

export default PaymentsAndPayoutsMethodRemove;
