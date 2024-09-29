import React from 'react';
import { Progress, Button, Checkbox, Tooltip, Form, Input } from 'antd';
import SvgIcon from '../../shared/SvgIcon';
import MainHeader from '../../layout/header';

const CapabilitiesAddCapability = () => (
  <div className="main-layout">
    <MainHeader isNewListing newListingText="Capabilities" />
    <div className="main-layout__content main-layout__content--full-width">
      <Progress percent={18.75} showInfo={false} className="main-layout__progress" />
      <section className="new-listing pt-32">
        <div className="new-listing__container mb-32">
          <h1 className="new-listing__title mb-32">What capabilities do you offer for guests?</h1>
          <div className="new-listig__options mb-24 pb-8">
            <div className="new-listig__option mb-16">
              <Checkbox checked>Lake access</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox>Away from it all</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox checked>Adventure</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox>Budget</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox>Farm holidays</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox checked>Historic</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox checked>Holiday complex</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox checked>Romantic</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox checked>Photography</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox checked>Downtown</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox>Near the ocean</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox>Resort</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox>Rural</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox>Ski in</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox>Ski out</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox>Village</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox checked>Laptop friendly</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox>Wheel chair accessible</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox>Beach front</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox>Beach view</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox>Conservation view</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox>Golf course front</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox>Golf course view</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox>Ground floor</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox>Lake front</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox>Lake view</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox checked>Monument view</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox>Mountain view</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox>Ocean front</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox checked>Ocean view</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox>Water front</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox>Water view</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
          </div>
          <h2 className="new-listing__subtitle mb-24">Additional capabilities</h2>
          <div className="new-listing__additional-box mb-24">
            <div className="new-listing__additional-info">
              <h3 className="new-listing__additional-title mb-4">Amusement park</h3>
              <p className="new-listing__text mb-0">
                An amusement park is a park that features various attractions, such as rides and
                games, as well as other events for entertainment purposes.
              </p>
            </div>
            <Button htmlType="button" className="main-btn main-btn--tertiary main-btn--icon">
              <SvgIcon icon="cross" className="icon-right" />
            </Button>
          </div>
          <Form layout="vertical" size="large">
            <Form.Item>
              <Input placeholder="Enter capability title" />
            </Form.Item>
            <Form.Item className="mb-24">
              <Input placeholder="Describe capability" />
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

export default CapabilitiesAddCapability;
