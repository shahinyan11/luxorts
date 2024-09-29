import React from 'react';
import { Progress, Form, Button, Select, Input } from 'antd';
import SvgIcon from 'views/stubs/shared/SvgIcon';
import MainHeader from '../../layout/header';

const { Option } = Select;

const Location = () => (
  <div className="main-layout">
    <MainHeader isNewListing newListingText="Location" />
    <div className="main-layout__content main-layout__content--full-width">
      <Progress percent={18.75} showInfo={false} className="main-layout__progress" />
      <section className="new-listing pt-32">
        <div className="new-listing__container mb-8">
          <h1 className="new-listing__title mb-32">Where is your apartment located?</h1>
          <Form layout="vertical" size="large">
            <div className="new-listing__item mb-24">
              <Form.Item label="Country" htmlFor="country">
                <Select
                  showSearch
                  placeholder="Select country"
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
                <Input placeholder="" id="street" />
              </Form.Item>
              <Form.Item label="Suite, Apartment Number (Optional)" htmlFor="apartment">
                <Input placeholder="" id="apartment" />
              </Form.Item>
              <div className="container-two-items">
                <Form.Item label="City" htmlFor="city">
                  <Input placeholder="" id="city" />
                </Form.Item>
                <Form.Item label="State/Region" htmlFor="region">
                  <Select
                    showSearch
                    placeholder="Select state/region"
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
                  <Input placeholder="Placeholder" id="zip" />
                </Form.Item>
              </div>
            </div>
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

export default Location;
