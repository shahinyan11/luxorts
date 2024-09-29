import React from 'react';
import { Rate, Button, Form, Input } from 'antd';
import MainHeader from '../layout/header';
import SvgIcon from '../shared/SvgIcon';

const Review = () => (
  <div className="main-layout">
    <MainHeader />
    <div className="main-layout__content main-layout__content--full-width">
      <section className="profile profile--one-column pt-32">
        <div className="profile__container">
          <h1 className="profile__title mb-32">
            How was your experience renting to Marvin McKinney?
          </h1>
          <Form layout="vertical" size="large" className="mb-40">
            <h2 className="profile__subtitle mb-8">Overall rating</h2>
            <p className="profile__label mb-16">Your overall rating for this review.</p>
            <Rate character={<SvgIcon icon="rate" className="profile__rate mb-24" />} />
            <h2 className="profile__subtitle mb-8">Title</h2>
            <p className="profile__label mb-16">One-line summary for review.</p>
            <Form.Item htmlFor="response" className="mb-32">
              <Input id="title" />
            </Form.Item>
            <div className="profile__description mb-24">
              <h2 className="profile__subtitle mb-8">Review</h2>
              <p className="profile__label mb-16">Share details of your experience.</p>
              <Form.Item htmlFor="response" className="mb-24">
                <Input.TextArea id="response" />
              </Form.Item>
            </div>
            <h2 className="profile__subtitle mb-8">Images (optional)</h2>
            <p className="profile__label mb-16">Image format: JPG or PNG. Max size: 10 Mb.</p>
            <Button htmlType="button" className="main-text-btn">
              Upload images
            </Button>
          </Form>
        </div>
        <div className="profile__buttons w-100 pt-24 pb-24">
          <div className="profile__container d-flex justify-content-space-between">
            <Button htmlType="reset" className="main-btn main-btn--tertiary min-width-140">
              Cancel
            </Button>
            <Button htmlType="submit" className="main-btn main-btn--primary min-width-140">
              Submit
            </Button>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default Review;
