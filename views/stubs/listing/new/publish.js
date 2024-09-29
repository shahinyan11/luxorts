import React from 'react';
import { Button, Tag } from 'antd';
import MainHeader from '../../layout/header';

const Publish = () => (
  <div className="main-layout">
    <MainHeader />
    <div className="main-layout__content">
      <section className="publish pt-40 pt-md-80 mb-32">
        <img alt="" width="136" height="136" src="/images/publish.png" className="mb-32" />
        <h1 className="publish__title mb-8">You&apos;re ready to publish!</h1>
        <p className="publish__description mb-32">
          You are able to welcome your first guests starting January 6, 2022. If you would like to
          update your calendar or house rules, you can easily do all that after you hit publish.
        </p>
        <div className="d-flex justify-content-center mb-32">
          <Button htmlType="submit" className="main-btn main-btn--primary min-width-140">
            Publish listing
          </Button>
          <Button htmlType="button" className="main-btn main-btn--secondary min-width-140 ml-16">
            Save as draft
          </Button>
        </div>
        <div className="publish__card publish-card">
          <img
            alt=""
            width="180"
            height="120"
            src="/images/publish-card.png"
            className="publish-card__image"
          />
          <div className="publish-card__content">
            <h2 className="publish-card__title mb-16">Charming and comfortable house</h2>
            <Tag className="tag tag--primary tag--large">Listing preview</Tag>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default Publish;
