import React from 'react';
import { Progress, Button } from 'antd';
import MainHeader from '../../layout/header';

const LocationPin = () => (
  <div className="main-layout">
    <MainHeader isNewListing newListingText="Location" />
    <div className="main-layout__content main-layout__content--full-width">
      <Progress percent={18.75} showInfo={false} className="main-layout__progress" />
      <section className="new-listing pt-32">
        <div className="new-listing__container new-listing__container--wide mb-8">
          <h1 className="new-listing__title mb-8">Is the pin in the right place?</h1>
          <p className="new-listing__description mb-32">
            If needed you can adjust the map so the pin is in the right location. Only confirmed
            guests will see this, so they will know how to get to your place.
          </p>
          <p className="new-listing__address mb-16">1529 Walnut St, Philadelphia, PA 19102, USA</p>
          <div className="new-listing__map">
            {/* replace by interactive map */}
            <img alt="" width="752" height="448" src="/images/map.jpg" />
          </div>
        </div>
        <div className="new-listing__footer pt-24 pb-24">
          <div className="new-listing__container d-flex justify-content-space-between">
            <Button htmlType="button" className="main-btn main-btn--tertiary min-width-140">
              Back
            </Button>
            <Button htmlType="submit" className="main-btn main-btn--primary min-width-140 ml-auto">
              Confirm
            </Button>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default LocationPin;
