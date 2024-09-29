import React from 'react';
import { Progress, Button, Checkbox, Tooltip, Form, Input } from 'antd';
import SvgIcon from '../../shared/SvgIcon';
import MainHeader from '../../layout/header';

const AmenitiesAddAmenity = () => (
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
              <Checkbox checked>Hair dryer</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox checked>Shampoo</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox checked>Hot water</Checkbox>
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
              <Checkbox checked>Washer</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox checked>Dryer</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox checked>Essentials</Checkbox>
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
              <Checkbox checked>Iron</Checkbox>
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
              <Checkbox checked>TV</Checkbox>
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
              <Checkbox checked>Air conditioning</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox checked>Heating</Checkbox>
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
              <Checkbox checked>Smoke alarm</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox checked>Carbon monoxide alarm</Checkbox>
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
              <Checkbox checked>Wifi</Checkbox>
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
              <Checkbox checked>Kitchen</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox checked>Refrigerator</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox checked>Microwave</Checkbox>
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
              <Checkbox checked>Stove</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox checked>Oven</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
            <div className="new-listig__option mb-16">
              <Checkbox checked>Coffee maker</Checkbox>
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
              <Checkbox checked>Self check-in</Checkbox>
              <Tooltip title="Tooltip content" placement="topLeft">
                <span className="tooltip">
                  <SvgIcon icon="info" className="new-listig__option-icon" />
                </span>
              </Tooltip>
            </div>
          </div>
          <h2 className="new-listing__subtitle mb-24">Additional amenities</h2>
          <div className="new-listing__additional-box mb-16">
            <div className="new-listing__additional-info">
              <h3 className="new-listing__additional-title mb-4">Smart home system</h3>
              <p className="new-listing__text mb-0">
                A smart home system allows homeowners to control appliances, thermostats, lights,
                and other devices remotely using a smartphone or tablet through an internet
                connection.
              </p>
            </div>
            <Button htmlType="button" className="main-btn main-btn--tertiary main-btn--icon">
              <SvgIcon icon="cross" className="icon-right" />
            </Button>
          </div>
          <div className="new-listing__additional-box mb-16">
            <div className="new-listing__additional-info">
              <h3 className="new-listing__additional-title mb-4">Media room</h3>
              <p className="new-listing__text mb-0">
                The multipurpose space is outfitted with a large flat-screen television, surround
                sound, and cozy seating.
              </p>
            </div>
            <Button htmlType="button" className="main-btn main-btn--tertiary main-btn--icon">
              <SvgIcon icon="cross" className="icon-right" />
            </Button>
          </div>
          <div className="new-listing__additional-box mb-24">
            <div className="new-listing__additional-info">
              <h3 className="new-listing__additional-title mb-4">Wet bar</h3>
              <p className="new-listing__text mb-0">
                A wet bar is a small bar used for mixing and serving alcoholic beverages that
                includes a sink with running water, as opposed to a &quot;dry bar&quot; that does
                not include a sink.
              </p>
            </div>
            <Button htmlType="button" className="main-btn main-btn--tertiary main-btn--icon">
              <SvgIcon icon="cross" className="icon-right" />
            </Button>
          </div>
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

export default AmenitiesAddAmenity;
