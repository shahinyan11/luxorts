import React, { useState } from 'react';
import {
  Form,
  Select,
  Radio,
  Button,
  Tabs,
  InputNumber,
  Input,
  Checkbox,
  Tooltip,
  Upload,
  Switch,
  Dropdown,
} from 'antd';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import SvgIcon from 'views/stubs/shared/SvgIcon';
import events from '../../shared/Calendar/events';
import BookingCalendarToolbar from '../../shared/Calendar/bookingCalendarToolbar';
import BookingCalendarDate from '../../shared/Calendar/bookingCalendarDate';
import BookingDayEvent from '../../shared/Calendar/bookingDayEvent';
import MainHeader from '../../layout/header';

const { Option } = Select;
const { TabPane } = Tabs;
const props = {
  defaultFileList: [
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: '/images/upload-01.png',
    },
    {
      uid: '-2',
      name: 'image.png',
      status: 'done',
      url: '/images/upload-02.png',
    },
    {
      uid: '-3',
      name: 'image.png',
      status: 'done',
      url: '/images/upload-03.png',
    },
    {
      uid: '-4',
      name: 'image.png',
      status: 'done',
      url: '/images/upload-04.png',
    },
    {
      uid: '-5',
      name: 'image.png',
      status: 'done',
      url: '/images/upload-05.png',
    },
    {
      uid: '-6',
      name: 'image.png',
      status: 'done',
      url: '/images/upload-06.png',
    },
    {
      uid: '-7',
      name: 'image.png',
      status: 'done',
      url: '/images/upload-07.png',
    },
    {
      uid: '-8',
      name: 'image.png',
      status: 'done',
      url: '/images/upload-08.png',
    },
  ],

  showUploadList: {
    showPreviewIcon: true,
    previewIcon: <SvgIcon icon="edit" className="icon-left" />,
    showRemoveIcon: true,
    removeIcon: <SvgIcon icon="cross" className="icon-left" />,
  },
};
const localizer = momentLocalizer(moment);
const components = {
  toolbar: BookingCalendarToolbar,
  month: {
    event: BookingDayEvent,
    dateHeader: BookingCalendarDate,
  },
};

const EditListing = () => {
  const [value, setValue] = useState();

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="main-layout">
      <MainHeader isNewListing newListingText="Property type" />
      <div className="main-layout__content main-layout__content--full-width">
        <div className="listing-panel">
          <div className="listing-panel__container">
            <Dropdown
              placement="bottomLeft"
              overlay={
                <ul className="listing-panel__list">
                  <li className="listing-panel__item">
                    <img
                      alt=""
                      width="68"
                      height="48"
                      src="/images/housing-preview-01.png"
                      className="listing-panel__image"
                    />
                    <p className="listing-panel__name mb-0">Charming and comfortable house</p>
                  </li>
                  <li className="listing-panel__item">
                    <img
                      alt=""
                      width="68"
                      height="48"
                      src="/images/housing-preview-02.png"
                      className="listing-panel__image"
                    />
                    <p className="listing-panel__name mb-0">
                      Luxury Bi-Level in Heart of Center City
                    </p>
                  </li>
                  <li className="listing-panel__item">
                    <img
                      alt=""
                      width="68"
                      height="48"
                      src="/images/housing-preview-03.png"
                      className="listing-panel__image"
                    />
                    <p className="listing-panel__name mb-0">
                      Sosuite | Art deco dream in University City
                    </p>
                  </li>
                  <li className="listing-panel__item">
                    <img
                      alt=""
                      width="68"
                      height="48"
                      src="/images/housing-preview-04.png"
                      className="listing-panel__image"
                    />
                    <p className="listing-panel__name mb-0">Pink Modern Apartment</p>
                  </li>
                  <li className="listing-panel__item">
                    <img
                      alt=""
                      width="68"
                      height="48"
                      src="/images/housing-preview-05.png"
                      className="listing-panel__image"
                    />
                    <p className="listing-panel__name mb-0">Sweet home with private entrance</p>
                  </li>
                  <li className="listing-panel__item">
                    <img
                      alt=""
                      width="68"
                      height="48"
                      src="/images/housing-preview-06.png"
                      className="listing-panel__image"
                    />
                    <p className="listing-panel__name mb-0">Pink Modern Apartment</p>
                  </li>
                  <li className="listing-panel__item">
                    <img
                      alt=""
                      width="68"
                      height="48"
                      src="/images/housing-preview-07.png"
                      className="listing-panel__image"
                    />
                    <p className="listing-panel__name mb-0">
                      Luxury Bi-Level in Heart of Center City
                    </p>
                  </li>
                  <li className="listing-panel__item">
                    <img
                      alt=""
                      width="68"
                      height="48"
                      src="/images/housing-preview-08.png"
                      className="listing-panel__image"
                    />
                    <p className="listing-panel__name mb-0">Sweet home with private entrance</p>
                  </li>
                </ul>
              }
            >
              <div className="listing-panel__column">
                <img
                  alt=""
                  width="68"
                  height="48"
                  src="/images/housing-preview-01.png"
                  className="listing-panel__image"
                />
                <div className="listing-panel__content">
                  <h2 className="listing-panel__title mb-0">Charming and comfortable house</h2>
                  <p className="listing-panel__text mb-0">Entire apartment in Center City</p>
                </div>
                <Button
                  htmlType="button"
                  className="listing-panel__btn main-btn main-btn--medium main-btn--tertiary main-btn--icon"
                >
                  <SvgIcon icon="arrow-down" className="icon-right" />
                </Button>
              </div>
            </Dropdown>
            <Button htmlType="button" className="main-btn main-btn--primary main-btn--medium">
              Listing preview
            </Button>
          </div>
        </div>
        <Tabs
          defaultActiveKey="1"
          className="w-100 max-width-1440 mr-auto ml-auto"
          tabPosition="left"
        >
          <TabPane tab="Property type" key="1">
            <section className="new-listing pt-32">
              <div className="new-listing__container mb-24">
                <h1 className="new-listing__title mb-32">What kind of place are you listing?</h1>
                <Form layout="vertical" size="large">
                  <div className="new-listig__item mb-24">
                    <Form.Item label="Property Type" htmlFor="property-type" className="mb-8">
                      <Select
                        placeholder="Select property type"
                        className="w-100"
                        id="property-type"
                        value="apartment"
                        suffixIcon={<SvgIcon icon="arrow-down" />}
                      >
                        <Option value="apartment">Apartment</Option>
                        <Option value="bed-and-breakfast">Bed and breakfast</Option>
                        <Option value="bungalow">Bungalow</Option>
                        <Option value="campground">Campground</Option>
                        <Option value="chalet">Chalet</Option>
                      </Select>
                    </Form.Item>
                    <p className="subline-message align-items-flex-start">
                      <SvgIcon icon="info" />
                      Apartment: Typically located in multi-unit residential buildings or complexes
                      where other
                      <br />
                      people live
                    </p>
                  </div>
                  <h2 className="new-listing__subtitle mb-24">Type of place guests will have</h2>
                  <Radio.Group onChange={onChange} value={value} className="d-flex flex-column">
                    <Radio value="entire">Entire place</Radio>
                    <Radio value="private">Private room</Radio>
                    <Radio value="shared">Shared room</Radio>
                  </Radio.Group>
                </Form>
              </div>
              <div className="new-listing__footer pt-24 pb-24">
                <div className="new-listing__container d-flex flex-column flex-sm-row justify-content-space-between">
                  <Button
                    htmlType="reset"
                    className="main-btn main-btn--tertiary mb-12 mb-sm-0 min-width-140"
                  >
                    Discard
                  </Button>
                  <Button
                    htmlType="submit"
                    className="main-btn main-btn--primary min-width-140 ml-sm-auto"
                  >
                    Save
                  </Button>
                </div>
              </div>
            </section>
          </TabPane>
          <TabPane tab="Accommodation" key="2">
            <section className="new-listing pt-32">
              <div className="new-listing__container mb-8">
                <h1 className="new-listing__title mb-8">
                  How many guests can your place accommodate?
                </h1>
                <p className="new-listing__description mb-32">
                  Check that you have enough beds to accommodate all your guests comfortably.
                </p>
                <Form layout="vertical" size="large">
                  <div className="new-listing__item mb-24 pb-24">
                    <Form.Item
                      label="Number of guests you will accommodate?"
                      htmlFor="guests"
                      className="ant-form-item--light"
                    >
                      <InputNumber
                        addonBefore="Guests"
                        min={0}
                        defaultValue={0}
                        value={3}
                        id="guests"
                        controls={{
                          upIcon: <SvgIcon icon="plus-circle" />,
                          downIcon: <SvgIcon icon="minus-circle" />,
                        }}
                      />
                    </Form.Item>
                    <Form.Item
                      label="How many bedrooms can your guests use?"
                      htmlFor="bedrooms"
                      className="ant-form-item--light"
                    >
                      <InputNumber
                        addonBefore="Bedrooms"
                        min={0}
                        defaultValue={0}
                        value={2}
                        id="bedrooms"
                        controls={{
                          upIcon: <SvgIcon icon="plus-circle" />,
                          downIcon: <SvgIcon icon="minus-circle" />,
                        }}
                      />
                    </Form.Item>
                    <Form.Item
                      label="How many beds can your guests use?"
                      htmlFor="beds"
                      className="ant-form-item--light"
                    >
                      <InputNumber
                        addonBefore="Beds"
                        min={0}
                        defaultValue={0}
                        value={3}
                        id="beds"
                        controls={{
                          upIcon: <SvgIcon icon="plus-circle" />,
                          downIcon: <SvgIcon icon="minus-circle" />,
                        }}
                      />
                    </Form.Item>
                    <Form.Item
                      label="How many bathrooms can your guests use?"
                      htmlFor="bathrooms"
                      className="ant-form-item--light"
                    >
                      <InputNumber
                        addonBefore="Bathrooms"
                        min={0}
                        defaultValue={0}
                        value={2}
                        id="bathrooms"
                        controls={{
                          upIcon: <SvgIcon icon="plus-circle" />,
                          downIcon: <SvgIcon icon="minus-circle" />,
                        }}
                      />
                    </Form.Item>
                  </div>
                  <div className="new-listing__item mb-24">
                    <h2 className="new-listing__subtitle mb-8">Sleeping arrangements</h2>
                    <p className="new-listing__description mb-24">
                      Sharing the types of beds in each room can help guests understand the sleeping
                      arrangements.
                    </p>
                    <div className="new-listing__add mb-24 pb-8">
                      <div className="new-listing__add-header d-flex justify-content-space-between align-item-center mb-8">
                        <h3 className="new-listing__add-title mb-0">Bedroom 1</h3>
                        <Button htmlType="button" className="main-link">
                          Edit beds
                        </Button>
                      </div>
                      <p className="new-listing__add-info new-listing__add-info--filled mb-16">
                        1 queen bed, 1 bunk bed
                      </p>
                    </div>
                    <div className="new-listing__add mb-24 pb-8">
                      <div className="new-listing__add-header d-flex justify-content-space-between align-item-center mb-8">
                        <h3 className="new-listing__add-title mb-0">Bedroom 2</h3>
                        <Button htmlType="button" className="main-link">
                          Edit beds
                        </Button>
                      </div>
                      <p className="new-listing__add-info new-listing__add-info--filled mb-16">
                        1 single bed
                      </p>
                    </div>
                  </div>
                  <div className="new-listing__item mb-24">
                    <h2 className="new-listing__subtitle mb-8">Bathroom arrangements</h2>
                    <p className="new-listing__description mb-24">
                      Sharing the types of baths in each bathroom can help guests understand the
                      bathroom arrangements.
                    </p>
                    <div className="new-listing__add mb-24 pb-8">
                      <div className="new-listing__add-header d-flex justify-content-space-between align-item-center mb-8">
                        <h3 className="new-listing__add-title mb-0">Bathroom 1</h3>
                        <Button htmlType="button" className="main-link">
                          Edit baths
                        </Button>
                      </div>
                      <p className="new-listing__add-info new-listing__add-info--filled mb-16">
                        1 bathtub, 1 shower, 1 baby bath
                      </p>
                    </div>
                    <div className="new-listing__add mb-24 pb-8">
                      <div className="new-listing__add-header d-flex justify-content-space-between align-item-center mb-8">
                        <h3 className="new-listing__add-title mb-0">Bathroom 2</h3>
                        <Button htmlType="button" className="main-link">
                          Edit baths
                        </Button>
                      </div>
                      <p className="new-listing__add-info new-listing__add-info--filled mb-16">
                        1 shower
                      </p>
                    </div>
                  </div>
                </Form>
              </div>
              <div className="new-listing__footer pt-24 pb-24">
                <div className="new-listing__container d-flex flex-column flex-sm-row justify-content-space-between">
                  <Button
                    htmlType="submit"
                    className="main-btn main-btn--primary min-width-140 ml-sm-auto"
                    disabled
                  >
                    Save
                  </Button>
                </div>
              </div>
            </section>
          </TabPane>
          <TabPane tab="Location" key="3">
            <section className="new-listing pt-32">
              <div className="new-listing__container mb-8">
                <h1 className="new-listing__title mb-32">Where is your apartment located?</h1>
                <Form layout="vertical" size="large">
                  <div className="new-listing__item mb-24">
                    <Form.Item label="Country" htmlFor="country">
                      <Select
                        showSearch
                        placeholder="Select country"
                        value="United States"
                        id="country"
                        suffixIcon={<SvgIcon icon="arrow-down" />}
                      >
                        <Option value="">Ukraine</Option>
                        <Option value="">United Arab Emirates</Option>
                        <Option value="">United Kingdom</Option>
                        <Option value="">United States</Option>
                        <Option value="">Uruguay</Option>
                      </Select>
                    </Form.Item>
                    <Form.Item label="Street" htmlFor="street">
                      <Input placeholder="" value="1529 Walnut St" id="street" />
                    </Form.Item>
                    <Form.Item label="Suite, Apartment Number (Optional)" htmlFor="apartment">
                      <Input placeholder="" value="120" id="apartment" />
                    </Form.Item>
                    <div className="container-two-items">
                      <Form.Item label="City" htmlFor="city">
                        <Input placeholder="" value="Philadelphia" id="city" />
                      </Form.Item>
                      <Form.Item label="State/Region" htmlFor="region">
                        <Select
                          showSearch
                          placeholder="Select state/region"
                          value="Pennsylvania"
                          id="region"
                          suffixIcon={<SvgIcon icon="arrow-down" />}
                        >
                          <Option value="">Ukraine</Option>
                          <Option value="">United Arab Emirates</Option>
                          <Option value="">United Kingdom</Option>
                          <Option value="">United States</Option>
                          <Option value="">Uruguay</Option>
                        </Select>
                      </Form.Item>
                    </div>
                    <div className="container-two-items">
                      <Form.Item label="Zip Code" htmlFor="zip" className="mb-24">
                        <Input placeholder="Placeholder" value="19102" id="zip" />
                      </Form.Item>
                    </div>
                  </div>
                  <h1 className="new-listing__title mb-8">Is the pin in the right place?</h1>
                  <p className="new-listing__description mb-32">
                    If needed you can adjust the map so the pin is in the right location. Only
                    confirmed guests will see this, so they will know how to get to your place.
                  </p>
                  <p className="new-listing__address mb-16">
                    1529 Walnut St, Philadelphia, PA 19102, USA
                  </p>
                  <div className="new-listing__map mb-24">
                    {/* replace by interactive map */}
                    <img alt="" width="558" height="362" src="/images/map.jpg" />
                  </div>
                </Form>
              </div>
              <div className="new-listing__footer pt-24 pb-24">
                <div className="new-listing__container d-flex flex-column flex-sm-row justify-content-space-between">
                  <Button
                    htmlType="submit"
                    className="main-btn main-btn--primary min-width-140 ml-sm-auto"
                    disabled
                  >
                    Save
                  </Button>
                </div>
              </div>
            </section>
          </TabPane>
          <TabPane tab="Amenities" key="4">
            <section className="new-listing pt-32">
              <div className="new-listing__container mb-32">
                <h1 className="new-listing__title mb-32">
                  What amenities do you offer for guests?
                </h1>
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
                      A smart home system allows homeowners to control appliances, thermostats,
                      lights, and other devices remotely using a smartphone or tablet through an
                      internet connection.
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
                      The multipurpose space is outfitted with a large flat-screen television,
                      surround sound, and cozy seating.
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
                      includes a sink with running water, as opposed to a &quot;dry bar&quot; that
                      does not include a sink.
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
                <div className="new-listing__container d-flex flex-column flex-sm-row justify-content-space-between">
                  <Button
                    htmlType="submit"
                    className="main-btn main-btn--primary min-width-140 ml-sm-auto"
                    disabled
                  >
                    Save
                  </Button>
                </div>
              </div>
            </section>
          </TabPane>
          <TabPane tab="Capabilities" key="5">
            <section className="new-listing pt-32">
              <div className="new-listing__container mb-32">
                <h1 className="new-listing__title mb-32">
                  What capabilities do you offer for guests?
                </h1>
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
                      An amusement park is a park that features various attractions, such as rides
                      and games, as well as other events for entertainment purposes.
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
                <div className="new-listing__container d-flex flex-column flex-sm-row justify-content-space-between">
                  <Button
                    htmlType="submit"
                    className="main-btn main-btn--primary min-width-140 ml-sm-auto"
                    disabled
                  >
                    Save
                  </Button>
                </div>
              </div>
            </section>
          </TabPane>
          <TabPane tab="Services" key="6">
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
                <div className="new-listing__additional-box mb-24">
                  <div className="new-listing__additional-info">
                    <h3 className="new-listing__additional-title mb-4">
                      Mini bar
                      <SvgIcon
                        icon="dot"
                        className="new-listing__additional-icon new-listing__additional-icon--free"
                      />
                    </h3>
                    <p className="new-listing__text mb-0">
                      A small refrigerator with alcoholic beverages and snacks for guests.
                    </p>
                  </div>
                  <Button htmlType="button" className="main-btn main-btn--tertiary main-btn--icon">
                    <SvgIcon icon="cross" className="icon-right" />
                  </Button>
                </div>
                <div className="new-listing__additional-box mb-24">
                  <div className="new-listing__additional-info">
                    <h3 className="new-listing__additional-title mb-4">
                      Mini bar
                      <SvgIcon
                        icon="dot"
                        className="new-listing__additional-icon new-listing__additional-icon--paid"
                      />
                    </h3>
                    <p className="new-listing__text mb-0">
                      A small refrigerator with alcoholic beverages and snacks for guests.
                    </p>
                  </div>
                  <Button htmlType="button" className="main-btn main-btn--tertiary main-btn--icon">
                    <SvgIcon icon="cross" className="icon-right" />
                  </Button>
                </div>
                <Form layout="vertical" size="large">
                  <Form.Item>
                    <Input placeholder="Enter service title" />
                  </Form.Item>
                  <Form.Item className="mb-16">
                    <Input placeholder="Describe service" />
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
                <div className="new-listing__container d-flex flex-column flex-sm-row justify-content-space-between">
                  <Button
                    htmlType="submit"
                    className="main-btn main-btn--primary min-width-140 ml-sm-auto"
                    disabled
                  >
                    Save
                  </Button>
                </div>
              </div>
            </section>
          </TabPane>
          <TabPane tab="Photos" key="7">
            <section className="new-listing pt-32">
              <div className="new-listing__container new-listing__container--wide mb-8">
                <h1 className="new-listing__title mb-8">Upload listing photos</h1>
                <p className="new-listing__description mb-32">
                  Image format: JPG or PNG. Photo quality: Min. 1024 x 683, Max. 3840 x 2160.
                </p>
                <Upload
                  listType="picture-card"
                  {...props}
                  className="new-listing__upload ant-upload ant-upload--light"
                >
                  <Button
                    htmlType="button"
                    className="main-btn main-btn--primary min-width-216 ml-auto mr-auto mt-16"
                  >
                    <SvgIcon icon="upload" className="icon-left" />
                    Upload photos
                  </Button>
                </Upload>
              </div>
              <div className="new-listing__footer pt-24 pb-24">
                <div className="new-listing__container d-flex flex-column flex-sm-row justify-content-space-between">
                  <Button
                    htmlType="submit"
                    className="main-btn main-btn--primary min-width-140 ml-sm-auto"
                    disabled
                  >
                    Save
                  </Button>
                </div>
              </div>
            </section>
          </TabPane>
          <TabPane tab="Description" key="8">
            <section className="new-listing pt-32">
              <div className="new-listing__container mb-8">
                <h1 className="new-listing__title mb-8">Describe your place</h1>
                <p className="new-listing__description mb-32">
                  Catch guests&apos; attention with a listing title and description that highlights
                  what makes your place special.
                </p>
                <Form layout="vertical" size="large">
                  <Form.Item label="Listing Title" htmlFor="title">
                    <Input placeholder="" id="title" value="Charming and comfortable house" />
                  </Form.Item>
                  <Form.Item label="Hidden Title" htmlFor="hidden-title" className="mb-8">
                    <Input placeholder="" id="hidden-title" value="1529 Walnut St" />
                  </Form.Item>
                  <p className="subline-message mb-16">
                    <SvgIcon icon="info" />
                    This title will be visible only to you
                  </p>
                  <Form.Item htmlFor="description" label="Description">
                    <Input.TextArea
                      placeholder=""
                      id="description"
                      autoSize
                      value="A music scene that soothes the soul. A cultural atmosphere beaming with artistic expression. Take a step inside your comfortable, creative space at The Heid, nestled in the spirited Callowhill neighborhood. Originally home to a major manufacturer, this industrial-style building features beautiful open-concept spaces highlighted by tall paneled windows and vivid-hand-painted murals designed by local artists. Let yourself sleep past sunrise and then grab brunch at Cafe Lift. Savor each bite of their delicious malted milk pancakes. After your belly is full, take a five-minute stroll to The Rail Park, a nature walk gem cozied up between the skyscrapers. Harness your artistic side and catch a live show at Union Transfer. Or head over to Underground Arts, which features a variety of performances - music, comedy, poetry, and theater. Ready for non-stop entertainment? The Heid is ready to welcome you."
                    />
                  </Form.Item>
                </Form>
              </div>
              <div className="new-listing__footer pt-24 pb-24">
                <div className="new-listing__container d-flex flex-column flex-sm-row justify-content-space-between">
                  <Button
                    htmlType="submit"
                    className="main-btn main-btn--primary min-width-140 ml-sm-auto"
                    disabled
                  >
                    Save
                  </Button>
                </div>
              </div>
            </section>
          </TabPane>
          <TabPane tab="House rules" key="9">
            <section className="new-listing pt-32">
              <div className="new-listing__container mb-32">
                <h1 className="new-listing__title mb-8">Set house rules for your guests</h1>
                <p className="new-listing__description mb-32">
                  Guests must agree to your house rules before they book.
                </p>
                <div className="new-listing__switches mb-24">
                  <div className="switch mb-24">
                    <Switch defaultChecked className="switch__button" />
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
                    <Switch defaultChecked className="switch__button" />
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
                    <Switch defaultChecked className="switch__button" />
                    <span className="new-listing__switch-label switch__label">
                      Suitable for pets
                    </span>
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
                    <span className="new-listing__switch-label switch__label">
                      Must climb stairs
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
                      Potential for noise
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
                <div className="new-listing__additional-box mb-16">
                  <div className="new-listing__additional-info">
                    <p className="new-listing__additional-title mb-0">
                      1. Smoking, parties, and excessive noise are not allowed, including on
                      balconies and in shared spaces. Smoking violations are subject to a $250 fine
                      plus the cost to clean, deodorize, and repair damages.
                    </p>
                  </div>
                  <Button htmlType="button" className="main-btn main-btn--tertiary main-btn--icon">
                    <SvgIcon icon="cross" className="icon-right" />
                  </Button>
                </div>
                <div className="new-listing__additional-box mb-16">
                  <div className="new-listing__additional-info">
                    <p className="new-listing__additional-title mb-0">
                      2. Commercial photography/videography without written consent, illegal
                      activity, prostitution, and possession of firearms is strictly prohibited.
                    </p>
                  </div>
                  <Button htmlType="button" className="main-btn main-btn--tertiary main-btn--icon">
                    <SvgIcon icon="cross" className="icon-right" />
                  </Button>
                </div>
                <div className="new-listing__additional-box mb-24">
                  <div className="new-listing__additional-info">
                    <p className="new-listing__additional-title mb-0">
                      3. Overnight guests that exceed the number stated in the reservation are not
                      allowed.
                    </p>
                  </div>
                  <Button htmlType="button" className="main-btn main-btn--tertiary main-btn--icon">
                    <SvgIcon icon="cross" className="icon-right" />
                  </Button>
                </div>
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
                <div className="new-listing__container d-flex flex-column flex-sm-row justify-content-space-between">
                  <Button
                    htmlType="submit"
                    className="main-btn main-btn--primary min-width-140 ml-sm-auto"
                    disabled
                  >
                    Save
                  </Button>
                </div>
              </div>
            </section>
          </TabPane>
          <TabPane tab="Reservation preferences" key="10">
            <section className="new-listing pt-32">
              <div className="new-listing__container mb-8">
                <h1 className="new-listing__title mb-32">
                  Set reservation preferences for your apartment
                </h1>
                <Form layout="vertical" size="large">
                  <h2 className="new-listing__subtitle mb-8">
                    When do you need to be notified prior to the arrival of the guests?
                  </h2>
                  <p className="new-listing__description mb-24">
                    At least 1-day notice can help you plan for guests&apos; arrival, but you might
                    miss out on last-minute trips.
                  </p>
                  <div className="new-listing__item mb-24">
                    <Radio.Group
                      onChange={onChange}
                      value={value}
                      className="mb-24 d-flex flex-column"
                    >
                      <Radio checked value="same-day">
                        Same day
                      </Radio>
                      <div className="container-two-items">
                        <Form.Item
                          label="Guests can book before"
                          htmlFor="book-before"
                          className="mb-0"
                        >
                          <Select
                            placeholder="Select time"
                            value="10:00 AM"
                            id="book-before"
                            suffixIcon={<SvgIcon icon="arrow-down" />}
                          >
                            <Option value="">6:00 AM</Option>
                            <Option value="">7:00 AM</Option>
                            <Option value="">8:00 AM</Option>
                            <Option value="">9:00 AM</Option>
                            <Option value="">10:00 AM</Option>
                            <Option value="">11:00 AM</Option>
                            <Option value="">12:00 PM</Option>
                            <Option value="">1:00 PM</Option>
                            <Option value="">2:00 PM</Option>
                            <Option value="">3:00 PM</Option>
                            <Option value="">4:00 PM</Option>
                            <Option value="">5:00 PM</Option>
                            <Option value="">6:00 PM</Option>
                            <Option value="">7:00 PM</Option>
                            <Option value="">8:00 PM</Option>
                            <Option value="">9:00 PM</Option>
                            <Option value="">10:00 PM</Option>
                            <Option value="">11:00 PM</Option>
                            <Option value="">12:00 AM</Option>
                            <Option value="">1:00 AM</Option>
                            <Option value="">2:00 AM</Option>
                            <Option value="">3:00 AM</Option>
                            <Option value="">4:00 AM</Option>
                            <Option value="">5:00 AM</Option>
                          </Select>
                        </Form.Item>
                      </div>
                      <Radio value="1">1 day</Radio>
                      <Radio value="2">2 days</Radio>
                      <Radio value="3">3 days</Radio>
                      <Radio value="7">7 days</Radio>
                    </Radio.Group>
                  </div>
                  <h2 className="new-listing__subtitle mb-8">When can guests check in?</h2>
                  <p className="new-listing__description mb-24">
                    Select a time range when your guests can check in.
                  </p>
                  <div className="new-listing__item mb-24">
                    <div className="container-two-items">
                      <Form.Item label="From" htmlFor="time-from">
                        <Select
                          placeholder="Select time"
                          value="3:00 PM"
                          id="time-from"
                          suffixIcon={<SvgIcon icon="arrow-down" />}
                        >
                          <Option value="">6:00 AM</Option>
                          <Option value="">7:00 AM</Option>
                          <Option value="">8:00 AM</Option>
                          <Option value="">9:00 AM</Option>
                          <Option value="">10:00 AM</Option>
                          <Option value="">11:00 AM</Option>
                          <Option value="">12:00 PM</Option>
                          <Option value="">1:00 PM</Option>
                          <Option value="">2:00 PM</Option>
                          <Option value="">3:00 PM</Option>
                          <Option value="">4:00 PM</Option>
                          <Option value="">5:00 PM</Option>
                          <Option value="">6:00 PM</Option>
                          <Option value="">7:00 PM</Option>
                          <Option value="">8:00 PM</Option>
                          <Option value="">9:00 PM</Option>
                          <Option value="">10:00 PM</Option>
                          <Option value="">11:00 PM</Option>
                          <Option value="">12:00 AM</Option>
                          <Option value="">1:00 AM</Option>
                          <Option value="">2:00 AM</Option>
                          <Option value="">3:00 AM</Option>
                          <Option value="">4:00 AM</Option>
                          <Option value="">5:00 AM</Option>
                        </Select>
                      </Form.Item>
                      <Form.Item label="To" htmlFor="time-to" className="mb-24">
                        <Select
                          placeholder="Select time"
                          value="9:00 PM"
                          id="time-to"
                          suffixIcon={<SvgIcon icon="arrow-down" />}
                        >
                          <Option value="">6:00 AM</Option>
                          <Option value="">7:00 AM</Option>
                          <Option value="">8:00 AM</Option>
                          <Option value="">9:00 AM</Option>
                          <Option value="">10:00 AM</Option>
                          <Option value="">11:00 AM</Option>
                          <Option value="">12:00 PM</Option>
                          <Option value="">1:00 PM</Option>
                          <Option value="">2:00 PM</Option>
                          <Option value="">3:00 PM</Option>
                          <Option value="">4:00 PM</Option>
                          <Option value="">5:00 PM</Option>
                          <Option value="">6:00 PM</Option>
                          <Option value="">7:00 PM</Option>
                          <Option value="">8:00 PM</Option>
                          <Option value="">9:00 PM</Option>
                          <Option value="">10:00 PM</Option>
                          <Option value="">11:00 PM</Option>
                          <Option value="">12:00 AM</Option>
                          <Option value="">1:00 AM</Option>
                          <Option value="">2:00 AM</Option>
                          <Option value="">3:00 AM</Option>
                          <Option value="">4:00 AM</Option>
                          <Option value="">5:00 AM</Option>
                        </Select>
                      </Form.Item>
                    </div>
                  </div>
                  <h2 className="new-listing__subtitle mb-8">
                    How far in advance can guests book?
                  </h2>
                  <p className="new-listing__description mb-24">
                    Most hosts keep their calendars updated up to 6 months out.
                  </p>
                  <div className="new-listing__item mb-24">
                    <Radio.Group
                      onChange={onChange}
                      value={value}
                      className="mb-4 d-flex flex-column"
                    >
                      <Radio value="any-time">Any time</Radio>
                      <Radio value="3-months">3 months in advance</Radio>
                      <Radio value="6-months">6 months in advance</Radio>
                      <Radio value="9-months">9 months in advance</Radio>
                      <Radio value="1-year">1 year</Radio>
                      <Radio value="unavailable">Dates unavailable by default</Radio>
                    </Radio.Group>
                    <p className="new-listing__caption pl-32 mb-24">
                      Your entire calendar will be blocked by default, which means you&apos;ll have
                      to manually unblock dates to get booked.
                    </p>
                  </div>
                  <h2 className="new-listing__subtitle mb-8">How long can guests stay?</h2>
                  <p className="new-listing__description mb-24">
                    Short trips can mean more bookings, but you&apos;ll turn over your space more
                    often.
                  </p>
                  <div className="new-listing__item mb-24">
                    <div className="container-two-items">
                      <Form.Item label="Nights Min" htmlFor="nights-min">
                        <InputNumber
                          min={1}
                          defaultValue={1}
                          value={2}
                          id="nights-min"
                          className="ant-input-number-wide"
                          controls={{
                            upIcon: <SvgIcon icon="plus-circle" />,
                            downIcon: <SvgIcon icon="minus-circle" />,
                          }}
                        />
                      </Form.Item>
                      <Form.Item label="Nights Max" htmlFor="nights-max" className="mb-24">
                        <InputNumber
                          min={0}
                          defaultValue={0}
                          id="nights-max"
                          className="ant-input-number-wide"
                          controls={{
                            upIcon: <SvgIcon icon="plus-circle" />,
                            downIcon: <SvgIcon icon="minus-circle" />,
                          }}
                        />
                      </Form.Item>
                    </div>
                  </div>
                  <h2 className="new-listing__subtitle mb-8">
                    How much time do you need to prepare your space between reservations?
                  </h2>
                  <p className="new-listing__description mb-24">
                    The availability of your listings largely depends on the length of preparation
                    time you need between reservations.
                  </p>
                  <div className="new-listing__item mb-24">
                    <Form.Item
                      label="Preparation Time"
                      htmlFor="preparation-time"
                      className="mb-24"
                    >
                      <Select
                        placeholder="None"
                        value="Block 1 night before and after each reservation"
                        id="preparation-time"
                        suffixIcon={<SvgIcon icon="arrow-down" />}
                      >
                        <Option value="">None</Option>
                        <Option value="">Block 1 night before and after each reservation</Option>
                        <Option value="">Block 2 nights before and after each reservation</Option>
                      </Select>
                    </Form.Item>
                  </div>
                  <h2 className="new-listing__subtitle mb-8">Booking approval policy</h2>
                  <p className="new-listing__description mb-24">
                    Select your default booking approval policy.
                  </p>
                  <div className="new-listing__item mb-24">
                    <Radio.Group
                      onChange={onChange}
                      value={value}
                      className="mb-4 d-flex flex-column ant-radio-group-with-captions"
                    >
                      <Radio value="instant-book">Instant book</Radio>
                      <p className="new-listing__description mb-16 pl-32">
                        Allows booking immediately without sending a request for approval.
                      </p>
                      <Radio value="24-hour">24 hour review</Radio>
                      <p className="new-listing__description mb-16 pl-32">
                        Allows 24 hours to accept a booking request.
                      </p>
                    </Radio.Group>
                  </div>
                  <h2 className="new-listing__subtitle mb-8">Cancellation policy</h2>
                  <p className="new-listing__description mb-24">
                    Select your policy for trip cancellations by guests.
                  </p>
                  <div className="new-listing__item mb-24">
                    <Radio.Group
                      onChange={onChange}
                      value={value}
                      className="mb-4 d-flex flex-column ant-radio-group-with-captions"
                    >
                      <Radio value="flexible">Flexible</Radio>
                      <p className="new-listing__description mb-16 pl-32">
                        Full refund 1 day prior to arrival.
                      </p>
                      <Radio value="moderate">Moderate</Radio>
                      <p className="new-listing__description mb-16 pl-32">
                        Full refund 5 days prior to arrival.
                      </p>
                      <Radio value="strict">Strict</Radio>
                      <p className="new-listing__description mb-0 pl-32">
                        50% refund up until 1 week prior to arrival.
                      </p>
                    </Radio.Group>
                  </div>
                </Form>
              </div>
              <div className="new-listing__footer pt-24 pb-24">
                <div className="new-listing__container d-flex flex-column flex-sm-row justify-content-space-between">
                  <Button
                    htmlType="submit"
                    className="main-btn main-btn--primary min-width-140 ml-sm-auto"
                    disabled
                  >
                    Save
                  </Button>
                </div>
              </div>
            </section>
          </TabPane>
          <TabPane tab="Availability & pricing" key="11">
            <section className="new-listing pt-32">
              <div className="new-listing__container new-listing__container--full-width mb-8">
                <h1 className="new-listing__title mb-8">Set availability & pricing</h1>
                <p className="new-listing__description mb-32">
                  Manage availability and pricing for your place.
                </p>
              </div>
              <div className="booking-calendar booking-calendar--tab">
                <Calendar
                  className="booking-calendar__container mb-32"
                  events={events}
                  localizer={localizer}
                  components={components}
                  date={new Date(2022, 3, 5)}
                />
                <div className="booking-calendar__panel">
                  <div className="booking-calendar__panel-header">
                    <div className="booking-calendar__panel-column">
                      <h4 className="booking-calendar__panel-title mb-0">Selected dates</h4>
                      <p className="booking-calendar__dates">Jan 13 - Jan 15</p>
                    </div>
                    <Button
                      htmlType="button"
                      className="main-btn main-btn--icon booking-calendar__panel-close"
                    >
                      <SvgIcon icon="cross" className="icon-right" />
                    </Button>
                  </div>
                  <div className="booking-calendar__panel-content">
                    <Form layout="vertical" size="large">
                      <p className="booking-calendar__label mb-16">Availability</p>
                      <Radio.Group value="available" className="d-flex flex-column mb-24">
                        <Radio value="available">Available</Radio>
                        <Radio value="blocked">Blocked</Radio>
                      </Radio.Group>

                      <div className="booking-calendar__panel-section mb-24">
                        <Button htmlType="button" className="main-btn booking-calendar__toggle">
                          Price
                          <SvgIcon icon="arrow-down" className="icon-right" />
                        </Button>
                      </div>
                      <div className="booking-calendar__panel-section mb-24">
                        <Button htmlType="button" className="main-btn booking-calendar__toggle">
                          Length-of-stay discounts
                          <SvgIcon icon="arrow-down" className="icon-right" />
                        </Button>
                      </div>
                    </Form>
                  </div>
                  <div className="booking-calendar__panel-footer d-flex justify-content-flex-end">
                    <Button
                      htmlType="submit"
                      className="main-btn main-btn--primary min-width-120"
                      disabled
                    >
                      Save
                    </Button>
                  </div>
                </div>
              </div>
            </section>
          </TabPane>
          <TabPane tab="Pricing & discounts" key="12">
            <section className="new-listing pt-32">
              <div className="new-listing__container mb-8">
                <h1 className="new-listing__title mb-32">Price your space</h1>
                <Form layout="vertical" size="large">
                  <h2 className="new-listing__subtitle mb-8">Set price for your space</h2>
                  <p className="new-listing__description mb-24">
                    Set competitive base price. You can always set different pricing for specific
                    days in your calendar.
                  </p>
                  <div className="new-listing__item mb-24 pb-8">
                    <Form.Item label="Base Price" htmlFor="base-price">
                      <Input placeholder="$0 / per night" value="$64 / per night" id="base-price" />
                    </Form.Item>
                  </div>
                  <h2 className="new-listing__subtitle mb-8">Length-of-stay discounts</h2>
                  <p className="new-listing__description mb-24">
                    Encourage guests to stay longer by offering a weekly or monthly discount -
                    you&apos;ll spend less time turning over your space between guests.
                  </p>
                  <div className="new-listing__item mb-24">
                    <Form.Item label="Weekly Discount" htmlFor="weekly-discount" className="mb-8">
                      <Input placeholder="0% off" value="10% off" id="weekly-discount" />
                    </Form.Item>
                    <p className="subline-message mb-20">
                      <SvgIcon icon="info" />
                      To help increase your chances of getting weekly stays, try setting a discount
                    </p>
                    <Form.Item label="Monthly Discount" htmlFor="monthly-discount" className="mb-8">
                      <Input placeholder="0% off" value="20% off" id="monthly-discount" />
                    </Form.Item>
                    <p className="subline-message mb-24">
                      <SvgIcon icon="info" />
                      Most travelers stay longer than one month, booking listings with discounts
                      greater than 25%
                    </p>
                  </div>
                  <h2 className="new-listing__subtitle mb-8">Extra charges</h2>
                  <p className="new-listing__description mb-24">
                    Set extra charges for your guests.
                  </p>
                  <div className="new-listing__item mb-24">
                    <Form.Item label="Cleaning Fee" htmlFor="cleaning-fee" className="mb-8">
                      <Input placeholder="$0" value="$20" id="cleaning-fee" />
                    </Form.Item>
                    <p className="subline-message mb-0">
                      <SvgIcon icon="info" />
                      This fee will apply to every reservation
                    </p>
                  </div>
                </Form>
              </div>
              <div className="new-listing__footer pt-24 pb-24">
                <div className="new-listing__container d-flex flex-column flex-sm-row justify-content-space-between">
                  <Button
                    htmlType="submit"
                    className="main-btn main-btn--primary min-width-140 ml-sm-auto"
                    disabled
                  >
                    Save
                  </Button>
                </div>
              </div>
            </section>
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};

export default EditListing;
