import React from 'react';
import { Progress, Button, Form, Input, Switch, Tooltip } from 'antd';
import SvgIcon from '../../shared/SvgIcon';
import MainHeader from '../../layout/header';

const HouseRules = () => (
  <div className="main-layout">
    <MainHeader isNewListing newListingText="House rules" />
    <div className="main-layout__content main-layout__content--full-width">
      <Progress percent={18.75} showInfo={false} className="main-layout__progress" />
      <section className="new-listing pt-32">
        <div className="new-listing__container mb-32">
          <h1 className="new-listing__title mb-8">Set house rules for your guests</h1>
          <p className="new-listing__description mb-32">
            Guests must agree to your house rules before they book.
          </p>
          <div className="new-listing__switches mb-24">
            <div className="switch mb-24">
              <Switch className="switch__button" />
              <span className="new-listing__switch-label switch__label">
                Suitable for children (2-12 years)
              </span>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="switch mb-24">
              <Switch className="switch__button" />
              <span className="new-listing__switch-label switch__label">
                Suitable for infants (Under 2 years)
              </span>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="switch mb-24">
              <Switch className="switch__button" />
              <span className="new-listing__switch-label switch__label">Suitable for pets</span>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="switch mb-24">
              <Switch className="switch__button" />
              <span className="new-listing__switch-label switch__label">Smoking allowed</span>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="switch mb-24">
              <Switch className="switch__button" />
              <span className="new-listing__switch-label switch__label">Events allowed</span>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="switch mb-24">
              <Switch className="switch__button" />
              <span className="new-listing__switch-label switch__label">Must climb stairs</span>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="switch mb-24">
              <Switch className="switch__button" />
              <span className="new-listing__switch-label switch__label">Potential for noise</span>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="switch mb-24">
              <Switch className="switch__button" />
              <span className="new-listing__switch-label switch__label">
                Pet(s) live on property
              </span>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="switch mb-24">
              <Switch className="switch__button" />
              <span className="new-listing__switch-label switch__label">
                No parking on property
              </span>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
          </div>
          <h2 className="new-listing__subtitle mb-24">Additional rules</h2>
          <Form layout="vertical" size="large">
            <Form.Item className="mb-24">
              <Input placeholder="Enter rule" />
            </Form.Item>
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
            <Button htmlType="submit" className="main-btn main-btn--primary min-width-140 ml-auto">
              Next
            </Button>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default HouseRules;
