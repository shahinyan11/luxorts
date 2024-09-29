import React from 'react';
import { Progress, Button, Form, Input } from 'antd';
import SvgIcon from '../../shared/SvgIcon';
import MainHeader from '../../layout/header';

const Description = () => (
  <div className="main-layout">
    <MainHeader isNewListing newListingText="Description" />
    <div className="main-layout__content main-layout__content--full-width">
      <Progress percent={18.75} showInfo={false} className="main-layout__progress" />
      <section className="new-listing pt-32">
        <div className="new-listing__container mb-8">
          <h1 className="new-listing__title mb-8">Describe your place</h1>
          <p className="new-listing__description mb-32">
            Catch guests&apos; attention with a listing title and description that highlights what
            makes your place special.
          </p>
          <Form layout="vertical" size="large">
            <Form.Item label="Listing Title" htmlFor="title">
              <Input placeholder="" id="title" />
            </Form.Item>
            <Form.Item label="Hidden Title" htmlFor="hidden-title" className="mb-8">
              <Input placeholder="" id="hidden-title" />
            </Form.Item>
            <p className="subline-message mb-16">
              <SvgIcon icon="info" />
              This title will be visible only to you
            </p>
            <Form.Item htmlFor="description" label="Description">
              <Input.TextArea placeholder="" id="description" />
            </Form.Item>
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

export default Description;
