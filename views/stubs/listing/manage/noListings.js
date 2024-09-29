import React from 'react';
import { Button } from 'antd';
import MainHeader from '../../layout/header';

const NoListings = () => (
  <div className="main-layout">
    <MainHeader isMainMenu />
    <div className="main-layout__content main-layout__content--wide">
      <section className="listing">
        <div className="listing__header">
          <h1 className="listing__title">
            Your listings
            <span className="listing__counter"> 0</span>
          </h1>
        </div>
        <div className="listing__empty pt-64 pt-md-128 pb-64 pb-md-128">
          <img alt="" src="/images/empty.png" width="136" height="136" className="mb-24" />
          <p className="listing__text mb-32">No listings yet.</p>
          <Button htmlType="button" className="main-btn main-btn--primary min-width-180">
            List your property
          </Button>
        </div>
      </section>
    </div>
  </div>
);

export default NoListings;
