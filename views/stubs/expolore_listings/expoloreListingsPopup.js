import React from 'react';
import { Modal, Button, Form, InputNumber, Checkbox } from 'antd';
import SvgIcon from 'views/stubs/shared/SvgIcon';

const ExpoloreListingsPopup = () => (
  <Modal
    title="More filters"
    visible
    closable
    className="modal"
    width={752}
    closeIcon={<SvgIcon icon="modal-cross" className="modal__icon" />}
    footer={
      <div className="d-flex flex-column flex-sm-row justify-content-space-between w-100">
        <Button
          htmlType="reset"
          className="main-btn main-btn--medium main-btn--tertiary mr-16 ml-sm-auto mb-8 mb-sm-0"
        >
          Clear all
        </Button>
        <Button
          htmlType="submit"
          className="main-btn main-btn--medium main-btn--primary min-width-120"
        >
          Apply
        </Button>
      </div>
    }
  >
    <div className="modal__content">
      <div className=" d-flex flex-column align-items-center">
        <Form layout="vertical" size="large" className="w-100">
          <div className="modal__section mb-24">
            <h3 className="modal__title mb-24">Rooms & beds</h3>
            <Form.Item htmlFor="beds" className="ant-form-item--light mb-8">
              <InputNumber
                addonBefore="Beds"
                min={0}
                defaultValue={0}
                value={0}
                id="beds"
                controls={{
                  upIcon: <SvgIcon icon="plus-circle" />,
                  downIcon: <SvgIcon icon="minus-circle" />,
                }}
              />
            </Form.Item>
            <Form.Item htmlFor="bedrooms" className="ant-form-item--light mb-8">
              <InputNumber
                addonBefore="Bedrooms"
                min={0}
                defaultValue={0}
                value={0}
                id="bedrooms"
                controls={{
                  upIcon: <SvgIcon icon="plus-circle" />,
                  downIcon: <SvgIcon icon="minus-circle" />,
                }}
              />
            </Form.Item>
            <Form.Item htmlFor="bathrooms" className="ant-form-item--light mb-24">
              <InputNumber
                addonBefore="Bathrooms"
                min={0}
                defaultValue={0}
                value={0}
                id="bathrooms"
                controls={{
                  upIcon: <SvgIcon icon="plus-circle" />,
                  downIcon: <SvgIcon icon="minus-circle" />,
                }}
              />
            </Form.Item>
          </div>
          <div className="modal__section mb-24">
            <h3 className="modal__title mb-24">Amenities</h3>
            <div className="modal__choice-container modal__choice-container--overflow mb-16">
              <Checkbox className="modal__choice-item">Wifi</Checkbox>
              <Checkbox className="modal__choice-item">Kitchen</Checkbox>
              <Checkbox className="modal__choice-item">Self check-in</Checkbox>
              <Checkbox className="modal__choice-item">Pool</Checkbox>
              <Checkbox className="modal__choice-item">Hot tub</Checkbox>
              <Checkbox className="modal__choice-item">Washer</Checkbox>
              <Checkbox className="modal__choice-item">Dryer</Checkbox>
              <Checkbox className="modal__choice-item">Air conditioning</Checkbox>
              <Checkbox className="modal__choice-item">Heating</Checkbox>
              <Checkbox className="modal__choice-item">Dedicated workspace</Checkbox>
              <Checkbox className="modal__choice-item">Indoor fireplace</Checkbox>
              <Checkbox className="modal__choice-item">Gym</Checkbox>
              <Checkbox className="modal__choice-item">Hair dryer</Checkbox>
              <Checkbox className="modal__choice-item">Iron TV Stove</Checkbox>
              <Checkbox className="modal__choice-item">Terrace</Checkbox>
              <Checkbox className="modal__choice-item">Balcony</Checkbox>
              <Checkbox className="modal__choice-item">Soundproof</Checkbox>
              <Checkbox className="modal__choice-item">Electric kettle</Checkbox>
              <Checkbox className="modal__choice-item">Coffe machine</Checkbox>
              <Checkbox className="modal__choice-item">Dishwasher</Checkbox>
              <Checkbox className="modal__choice-item">Patio</Checkbox>
              <Checkbox className="modal__choice-item">Microvawe</Checkbox>
            </div>
            <Button htmlType="button" className="main-text-btn modal__choice-show mb-24">
              Show all amenities
            </Button>
          </div>
          <div className="modal__section mb-24">
            <h3 className="modal__title mb-24">Capabilities</h3>
            <div className="modal__choice-container modal__choice-container--overflow mb-16">
              <Checkbox className="modal__choice-item">Lake access</Checkbox>
              <Checkbox className="modal__choice-item">Away from it all</Checkbox>
              <Checkbox className="modal__choice-item">Adventure</Checkbox>
              <Checkbox className="modal__choice-item">Budget</Checkbox>
            </div>
            <Button htmlType="button" className="main-text-btn modal__choice-show mb-24">
              Show all capabilities
            </Button>
          </div>
          <div className="modal__section mb-24">
            <h3 className="modal__title mb-24">Services</h3>
            <div className="modal__choice-container mb-16">
              <Checkbox className="modal__choice-item">Breakfast</Checkbox>
              <Checkbox className="modal__choice-item">Cleaning</Checkbox>
              <Checkbox className="modal__choice-item">Transfer from airport</Checkbox>
            </div>
          </div>
          <div className="modal__section mb-24">
            <h3 className="modal__title mb-24">Property types</h3>
            <div className="modal__choice-container modal__choice-container--overflow mb-16">
              <Checkbox className="modal__choice-item">House</Checkbox>
              <Checkbox className="modal__choice-item" checked>
                Apartment
              </Checkbox>
              <Checkbox className="modal__choice-item">Room</Checkbox>
              <Checkbox className="modal__choice-item">Cottage</Checkbox>
            </div>
            <Button htmlType="button" className="main-text-btn modal__choice-show mb-24">
              Show all property types
            </Button>
          </div>
          <div className="modal__section">
            <h3 className="modal__title mb-24">House rules</h3>
            <div className="modal__choice-container mb-16">
              <Checkbox className="modal__choice-item">Pets allowed</Checkbox>
              <Checkbox className="modal__choice-item">Events allowed</Checkbox>
              <Checkbox className="modal__choice-item">Smoking allowed</Checkbox>
              <Checkbox className="modal__choice-item">Children welcome</Checkbox>
            </div>
          </div>
        </Form>
      </div>
    </div>
  </Modal>
);

export default ExpoloreListingsPopup;
