import React from 'react';
import { Rate, Button, Form, Input, Upload } from 'antd';
import MainHeader from '../layout/header';
import SvgIcon from '../shared/SvgIcon';

const photosProps = {
  defaultFileList: [
    {
      uid: '-1',
      name: 'image.png',
      status: 'done',
      url: '/images/upload-01.png',
    },
    {
      uid: '-3',
      name: 'image.png',
      status: 'done',
      url: '/images/upload-03.png',
    },
    {
      uid: '-2',
      name: 'image.png',
      status: 'done',
      url: '/images/upload-02.png',
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
  ],

  showUploadList: {
    showPreviewIcon: true,
    previewIcon: <SvgIcon icon="edit" className="icon-left" />,
    showRemoveIcon: true,
    removeIcon: <SvgIcon icon="cross" className="icon-left" />,
  },
};

const ReviewFilled = () => (
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
            <Rate
              character={<SvgIcon icon="rate" className="profile__rate mb-24" />}
              defaultValue={4}
            />
            <h2 className="profile__subtitle mb-8">Title</h2>
            <p className="profile__label mb-16">One-line summary for review.</p>
            <Form.Item htmlFor="response" className="mb-32">
              <Input id="title" value="A perfect apartment for a perfect stay" />
            </Form.Item>
            <div className="profile__description mb-24">
              <h2 className="profile__subtitle mb-8">Review</h2>
              <p className="profile__label mb-16">Share details of your experience.</p>
              <Form.Item htmlFor="response" className="mb-24">
                <Input.TextArea
                  id="response"
                  value="The location is great for you to be able to walk to lots of food locations and bars! It is loud but you are in the middle of downtown so this should be expected."
                />
              </Form.Item>
            </div>
            <h2 className="profile__subtitle mb-8">Images (optional)</h2>
            <p className="profile__label mb-16">Image format: JPG or PNG. Max size: 10 Mb.</p>
            <Upload listType="picture-card" {...photosProps} className="profile__upload mb-16" />
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

export default ReviewFilled;
