import React from 'react';
import { Modal, Button, Form, InputNumber } from 'antd';
import SvgIcon from 'views/stubs/shared/SvgIcon';

const CheckoutGuests = () => (
  <Modal
    title={
      <>
        <h2 className="text-headline-2 mb-8">Guests</h2>
        <p className="modal__description mb-0">3 guests</p>
      </>
    }
    visible
    closable
    className="modal"
    width={380}
    closeIcon={<SvgIcon icon="modal-cross" className="modal__icon" />}
    footer={
      <div className="d-flex flex-column flex-sm-row justify-content-space-between w-100">
        <Button
          htmlType="button"
          className="main-btn main-btn--medium main-btn--primary min-width-120 ml-sm-auto"
        >
          Save
        </Button>
      </div>
    }
  >
    <div className="modal__content">
      <Form layout="horizontal" size="large">
        <Form.Item
          label={
            <p className="d-flex flex-column align-items-flex-start mb-0">
              <span className="text-subheader-2 mb-4">Adults</span>
              <span className="modal__captiom">Ages 18 or above</span>
            </p>
          }
          htmlFor="adults"
          className="modal__counter mb-20"
        >
          <InputNumber
            min={0}
            defaultValue={0}
            value={2}
            id="adults"
            controls={{
              upIcon: <SvgIcon icon="plus-circle" />,
              downIcon: <SvgIcon icon="minus-circle" />,
            }}
          />
        </Form.Item>
        <Form.Item
          label={
            <p className="d-flex flex-column align-items-flex-start mb-0">
              <span className="text-subheader-2 mb-4">Children</span>
              <span className="modal__captiom">Ages 2–17</span>
            </p>
          }
          htmlFor="children"
          className="modal__counter mb-20"
        >
          <InputNumber
            min={0}
            defaultValue={0}
            value={0}
            id="children"
            controls={{
              upIcon: <SvgIcon icon="plus-circle" />,
              downIcon: <SvgIcon icon="minus-circle" />,
            }}
          />
        </Form.Item>
        <Form.Item
          label={
            <p className="d-flex flex-column align-items-flex-start mb-0">
              <span className="text-subheader-2 mb-4">Infants</span>
              <span className="modal__captiom">Under 2</span>
            </p>
          }
          htmlFor="infants"
          className="modal__counter mb-20"
        >
          <InputNumber
            min={0}
            defaultValue={0}
            value={0}
            id="infants"
            controls={{
              upIcon: <SvgIcon icon="plus-circle" />,
              downIcon: <SvgIcon icon="minus-circle" />,
            }}
          />
        </Form.Item>
        <Form.Item
          label={
            <p className="d-flex flex-column align-items-flex-start mb-0">
              <span className="text-subheader-2 mb-4">Pets</span>
              <span className="modal__captiom">
                If you&apos;re lucky enough to have more than 2 pets with you, be sure to let your
                host know
              </span>
            </p>
          }
          htmlFor="pets"
          className="modal__counter mb-0"
        >
          <InputNumber
            min={0}
            defaultValue={0}
            value={0}
            id="pets"
            controls={{
              upIcon: <SvgIcon icon="plus-circle" />,
              downIcon: <SvgIcon icon="minus-circle" />,
            }}
          />
        </Form.Item>
      </Form>
    </div>
  </Modal>
);

export default CheckoutGuests;
