import React from 'react';
import { Progress, Button, Checkbox, Tooltip, Form, Input } from 'antd';
import SvgIcon from '../../shared/SvgIcon';
import MainHeader from '../../layout/header';

const Amenities = () => (
  <div className="main-layout">
    <MainHeader isNewListing newListingText="Amenities" />
    <div className="main-layout__content main-layout__content--full-width">
      <Progress percent={18.75} showInfo={false} className="main-layout__progress" />
      <section className="new-listing pt-32">
        <div className="new-listing__container mb-32">
          <h1 className="new-listing__title mb-32">What amenities do you offer for guests?</h1>
          <h2 className="new-listing__subtitle mb-24">Bathroom</h2>
          <div className="new-listig__options mb-24 pb-8">
            <div className="new-listig__option mb-16">
              <Checkbox>Hair dryer</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox>Shampoo</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox>Hot water</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
          </div>
          <h2 className="new-listing__subtitle mb-24">Bedroom & laundry</h2>
          <div className="new-listig__options mb-24 pb-8">
            <div className="new-listig__option mb-16">
              <Checkbox>Washer</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox>Dryer</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox>Essentials</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox>Hangers</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox>Bed linens</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox>Iron</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
          </div>
          <h2 className="new-listing__subtitle mb-24">Entertainment</h2>
          <div className="new-listig__options mb-24 pb-8">
            <div className="new-listig__option mb-16">
              <Checkbox>TV</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
          </div>
          <h2 className="new-listing__subtitle mb-24">Heating & cooling</h2>
          <div className="new-listig__options mb-24 pb-8">
            <div className="new-listig__option mb-16">
              <Checkbox>Air conditioning</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox>Heating</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
          </div>
          <h2 className="new-listing__subtitle mb-24">Home safety</h2>
          <div className="new-listig__options mb-24 pb-8">
            <div className="new-listig__option mb-16">
              <Checkbox>Smoke alarm</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox>Carbon monoxide alarm</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox>Fire extinguisher</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox>Security cameras on property</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox>Private entrance</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
          </div>
          <h2 className="new-listing__subtitle mb-24">Internet & office</h2>
          <div className="new-listig__options mb-24 pb-8">
            <div className="new-listig__option mb-16">
              <Checkbox>Wifi</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
          </div>
          <h2 className="new-listing__subtitle mb-24">Kitchen & dining</h2>
          <div className="new-listig__options mb-24 pb-8">
            <div className="new-listig__option mb-16">
              <Checkbox>Kitchen</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox>Refrigerator</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox>Microwave</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox>Cooking basics</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox>Dishes and silverware</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox>Dishwasher</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox>Stove</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox>Oven</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox>Coffee maker</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
          </div>
          <h2 className="new-listing__subtitle mb-24">Parking & facilities</h2>
          <div className="new-listig__options mb-24 pb-8">
            <div className="new-listig__option mb-16">
              <Checkbox>Parking</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox>Elevator</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
          </div>
          <h2 className="new-listing__subtitle mb-24">Services</h2>
          <div className="new-listig__options mb-24 pb-8">
            <div className="new-listig__option mb-16">
              <Checkbox>Self check-in</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
          </div>
          <h2 className="new-listing__subtitle mb-24">Additional amenities</h2>
          <Form layout="vertical" size="large">
            <Form.Item>
              <Input placeholder="Enter amenity title" />
            </Form.Item>
            <Form.Item className="mb-24">
              <Input placeholder="Describe amenity" />
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
              Confirm
            </Button>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default Amenities;
