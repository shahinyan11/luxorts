import React, { useState } from 'react';
import { Progress, Form, Select, Radio, Button } from 'antd';
import SvgIcon from 'views/stubs/shared/SvgIcon';
import MainHeader from '../../layout/header';

const { Option } = Select;

const PropertyType = () => {
  const [value, setValue] = useState();

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className="main-layout">
      <MainHeader isNewListing newListingText="Property type" />
      <div className="main-layout__content main-layout__content--full-width">
        <Progress percent={18.75} showInfo={false} className="main-layout__progress" />
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
            <div className="new-listing__container d-flex justify-content-space-between">
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

export default PropertyType;
