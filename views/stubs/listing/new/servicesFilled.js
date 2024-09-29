import React, { useState } from 'react';
import { Progress, Button, Checkbox, Tooltip, Form, Input, Radio } from 'antd';
import SvgIcon from '../../shared/SvgIcon';
import MainHeader from '../../layout/header';

const ServicesFilled = () => {
  const [value, setValue] = useState();

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="main-layout">
      <MainHeader isNewListing newListingText="Services" />
      <div className="main-layout__content main-layout__content--full-width">
        <Progress percent={18.75} showInfo={false} className="main-layout__progress" />
        <section className="new-listing pt-32">
          <div className="new-listing__container mb-32">
            <h1 className="new-listing__title mb-32">What services do you offer for guests?</h1>
            <div className="new-listig__options mb-24 pb-8">
              <div className="new-listig__option mb-16">
                <Checkbox checked>Breakfast</Checkbox>
                <Tooltip title="Tooltip content" placement="topLeft">
                  <span className="tooltip">
                    <SvgIcon icon="info" className="new-listig__option-icon" />
                  </span>
                </Tooltip>
                <Radio.Group
                  value="free-breakfast"
                  className="new-listig__radio-group mt-8 pl-32 w-100"
                >
                  <Radio value="free-breakfast" checked className="ant-radio-wrapper--positive">
                    Free
                  </Radio>
                  <Radio value="paid-breakfast" className="ant-radio-wrapper--negative">
                    Paid
                  </Radio>
                </Radio.Group>
              </div>
              <div className="new-listig__option mb-16">
                <Checkbox checked>Cleaning</Checkbox>
                <Tooltip title="Tooltip content" placement="topLeft">
                  <span className="tooltip">
                    <SvgIcon icon="info" className="new-listig__option-icon" />
                  </span>
                </Tooltip>
                <Radio.Group
                  value="paid-cleaning"
                  className="new-listig__radio-group mt-8 pl-32 w-100"
                >
                  <Radio value="free-cleaning" className="ant-radio-wrapper--positive">
                    Free
                  </Radio>
                  <Radio value="paid-cleaning" checked className="ant-radio-wrapper--negative">
                    Paid
                  </Radio>
                </Radio.Group>
              </div>
              <div className="new-listig__option mb-16">
                <Checkbox checked>Transfer from airport</Checkbox>
                <Tooltip title="Tooltip content" placement="topLeft">
                  <span className="tooltip">
                    <SvgIcon icon="info" className="new-listig__option-icon" />
                  </span>
                </Tooltip>
                <Radio.Group
                  value="paid-transfer"
                  className="new-listig__radio-group mt-8 pl-32 w-100"
                >
                  <Radio value="free-transfer" className="ant-radio-wrapper--positive">
                    Free
                  </Radio>
                  <Radio value="paid-transfer" checked className="ant-radio-wrapper--negative">
                    Paid
                  </Radio>
                </Radio.Group>
              </div>
              <div className="new-listig__option mb-16">
                <Checkbox>Taxi</Checkbox>
                <Tooltip title="Tooltip content" placement="topLeft">
                  <span className="tooltip">
                    <SvgIcon icon="info" className="new-listig__option-icon" />
                  </span>
                </Tooltip>
              </div>
              <div className="new-listig__option mb-16">
                <Checkbox>Hookah</Checkbox>
                <Tooltip title="Tooltip content" placement="topLeft">
                  <span className="tooltip">
                    <SvgIcon icon="info" className="new-listig__option-icon" />
                  </span>
                </Tooltip>
              </div>
              <div className="new-listig__option mb-16">
                <Checkbox>Massage</Checkbox>
                <Tooltip title="Tooltip content" placement="topLeft">
                  <span className="tooltip">
                    <SvgIcon icon="info" className="new-listig__option-icon" />
                  </span>
                </Tooltip>
              </div>
              <div className="new-listig__option mb-16">
                <Checkbox>Rental car</Checkbox>
                <Tooltip title="Tooltip content" placement="topLeft">
                  <span className="tooltip">
                    <SvgIcon icon="info" className="new-listig__option-icon" />
                  </span>
                </Tooltip>
              </div>
              <div className="new-listig__option mb-16">
                <Checkbox>Chauffeur</Checkbox>
                <Tooltip title="Tooltip content" placement="topLeft">
                  <span className="tooltip">
                    <SvgIcon icon="info" className="new-listig__option-icon" />
                  </span>
                </Tooltip>
              </div>
              <div className="new-listig__option mb-16">
                <Checkbox>Concierge</Checkbox>
                <Tooltip title="Tooltip content" placement="topLeft">
                  <span className="tooltip">
                    <SvgIcon icon="info" className="new-listig__option-icon" />
                  </span>
                </Tooltip>
              </div>
              <div className="new-listig__option mb-16">
                <Checkbox>Private chef</Checkbox>
                <Tooltip title="Tooltip content" placement="topLeft">
                  <span className="tooltip">
                    <SvgIcon icon="info" className="new-listig__option-icon" />
                  </span>
                </Tooltip>
              </div>
              <div className="new-listig__option mb-16">
                <Checkbox>Staff</Checkbox>
                <Tooltip title="Tooltip content" placement="topLeft">
                  <span className="tooltip">
                    <SvgIcon icon="info" className="new-listig__option-icon" />
                  </span>
                </Tooltip>
              </div>
              <div className="new-listig__option mb-16">
                <Checkbox>Check-in 24 hours</Checkbox>
                <Tooltip title="Tooltip content" placement="topLeft">
                  <span className="tooltip">
                    <SvgIcon icon="info" className="new-listig__option-icon" />
                  </span>
                </Tooltip>
              </div>
              <div className="new-listig__option mb-16">
                <Checkbox>Doorman</Checkbox>
                <Tooltip title="Tooltip content" placement="topLeft">
                  <span className="tooltip">
                    <SvgIcon icon="info" className="new-listig__option-icon" />
                  </span>
                </Tooltip>
              </div>
              <div className="new-listig__option mb-16">
                <Checkbox>Laundry service</Checkbox>
                <Tooltip title="Tooltip content" placement="topLeft">
                  <span className="tooltip">
                    <SvgIcon icon="info" className="new-listig__option-icon" />
                  </span>
                </Tooltip>
              </div>
              <div className="new-listig__option mb-16">
                <Checkbox>Babysitter</Checkbox>
                <Tooltip title="Tooltip content" placement="topLeft">
                  <span className="tooltip">
                    <SvgIcon icon="info" className="new-listig__option-icon" />
                  </span>
                </Tooltip>
              </div>
            </div>
            <h2 className="new-listing__subtitle mb-24">Additional services</h2>
            <Form layout="vertical" size="large">
              <Form.Item>
                <Input placeholder="Enter service title" value="Mini bar" />
              </Form.Item>
              <Form.Item className="mb-16">
                <Input
                  placeholder="Describe service"
                  value="A small refrigerator with alcoholic beverages and snacks for guests."
                />
              </Form.Item>
              <Radio.Group
                onChange={onChange}
                value={value}
                className="new-listig__radio-group mb-24"
              >
                <Radio value="free" checked className="ant-radio-wrapper--positive">
                  Free
                </Radio>
                <Radio value="paid" className="ant-radio-wrapper--negative">
                  Paid
                </Radio>
              </Radio.Group>
              <Button htmlType="submit" className="main-btn main-btn--secondary min-width-140">
                Add
              </Button>
            </Form>
          </div>
          <div className="new-listing__footer pt-24 pb-24">
            <div className="new-listing__container d-flex justify-content-space-between">
              <Button htmlType="button" className="main-btn main-btn--tertiary min-width-140">
                Back
              </Button>
              <Button
                htmlType="submit"
                className="main-btn main-btn--primary min-width-140 ml-auto"
              >
                Next
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicesFilled;
