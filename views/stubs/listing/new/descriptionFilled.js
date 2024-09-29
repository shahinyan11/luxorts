import React from 'react';
import { Progress, Button, Form, Input } from 'antd';
import SvgIcon from '../../shared/SvgIcon';
import MainHeader from '../../layout/header';

const DescriptionFilled = () => (
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

export default DescriptionFilled;
