import React from 'react';
import { Progress, Form, Button, Input } from 'antd';
import SvgIcon from 'views/stubs/shared/SvgIcon';
import MainHeader from '../../layout/header';

const PricingAndDiscounts = () => (
  <div className="main-layout">
    <MainHeader isNewListing newListingText="Pricing & discounts" />
    <div className="main-layout__content main-layout__content--full-width">
      <Progress percent={18.75} showInfo={false} className="main-layout__progress" />
      <section className="new-listing pt-32">
        <div className="new-listing__container mb-8">
          <h1 className="new-listing__title mb-32">Price your space</h1>
          <Form layout="vertical" size="large">
            <h2 className="new-listing__subtitle mb-8">Set price for your space</h2>
            <p className="new-listing__description mb-24">
              Set competitive base price. You can always set different pricing for specific days in
              your calendar.
            </p>
            <div className="new-listing__item mb-24 pb-8">
              <Form.Item label="Base Price" htmlFor="base-price">
                <Input placeholder="$0 / per night" id="base-price" />
              </Form.Item>
            </div>
            <h2 className="new-listing__subtitle mb-8">Length-of-stay discounts</h2>
            <p className="new-listing__description mb-24">
              Encourage guests to stay longer by offering a weekly or monthly discount - you&apos;ll
              spend less time turning over your space between guests.
            </p>
            <div className="new-listing__item mb-24">
              <Form.Item label="Weekly Discount" htmlFor="weekly-discount" className="mb-8">
                <Input placeholder="0% off" id="weekly-discount" />
              </Form.Item>
              <p className="subline-message mb-20">
                <SvgIcon icon="info" />
                To help increase your chances of getting weekly stays, try setting a discount
              </p>
              <Form.Item label="Monthly Discount" htmlFor="monthly-discount" className="mb-8">
                <Input placeholder="0% off" id="monthly-discount" />
              </Form.Item>
              <p className="subline-message mb-24">
                <SvgIcon icon="info" />
                Most travelers stay longer than one month, booking listings with discounts greater
                than 25%
              </p>
            </div>
            <h2 className="new-listing__subtitle mb-8">Extra charges</h2>
            <p className="new-listing__description mb-24">Set extra charges for your guests.</p>
            <div className="new-listing__item mb-24">
              <Form.Item label="Cleaning Fee" htmlFor="cleaning-fee" className="mb-8">
                <Input placeholder="$0" id="cleaning-fee" />
              </Form.Item>
              <p className="subline-message mb-0">
                <SvgIcon icon="info" />
                This fee will apply to every reservation
              </p>
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

export default PricingAndDiscounts;
