import React from 'react';
import { Button } from 'antd';
import SvgIcon from 'views/stubs/shared/SvgIcon';
import MainHeader from '../layout/header';

const SightDetails = () => (
  <div className="main-layout">
    <MainHeader isWithFilter isAuthorized isAvatarUpload />
    <div className="main-layout__content main-layout__content--full-width">
      <section className="sight">
        <div className="sight__images d-flex">
          <img
            alt=""
            width="480"
            height="380"
            src="/images/sight-001.jpg"
            className="sight__image"
          />
          <img
            alt=""
            width="480"
            height="380"
            src="/images/sight-002.jpg"
            className="sight__image"
          />
          <img
            alt=""
            width="480"
            height="380"
            src="/images/sight-003.jpg"
            className="sight__image"
          />
        </div>
        <div className="sight__container">
          <div className="sight__buttons d-flex">
            <Button htmlType="button" className="main-btn main-btn--white mr-8">
              <SvgIcon icon="gallery" className="icon-left" />
              Show all photos
            </Button>
            <Button htmlType="button" className="main-btn main-btn--white mr-8">
              <SvgIcon icon="like" className="icon-left" />
              Save
            </Button>
            <Button htmlType="button" className="main-btn main-btn--white">
              <SvgIcon icon="share" className="icon-left" />
              Share
            </Button>
          </div>
          <div className="sight__info mb-64 mb-xl-160">
            <div className="sight__content">
              <h1 className="sight__title">Philadelphia Museum of Art</h1>
              <div className="sight__header mb-32">
                <h2 className="sight__subtitle">Art museum</h2>
                <p className="sight__rating">
                  <SvgIcon icon="star" />
                  <span className="sight__rate">4.8</span>
                  (20 reviews)
                </p>
                <p className="sight__address">
                  2600 Benjamin Franklin Pkwy, Philadelphia, PA 19130, United States
                </p>
              </div>
              <h3 className="sight__about mb-24">About</h3>
              <p className="sight__text sight__text--overflow mb-8">
                Majestic space with famed entry staircase featuring Renaissance classics & special
                exhibits. A music scene that soothes the soul. A cultural atmosphere beaming with
                artistic expression. Take a step inside your comfortable, creative space at The
                Heid, nestled in the spirited Callowhill neighborhood. Originally home to a major
                manufacturer, this industrial-style building features beautiful open-concept spaces
                highlighted by tall paneled windows and vivid-hand-painted murals designed by local
                artists. Let yourself sleep past sunrise and then grab brunch at Cafe Lift. Savor
                each bite of th...
              </p>
              <Button htmlType="button" className="main-text-btn">
                Show more
              </Button>
            </div>
            <div className="sight__map">
              <img alt="" width="364" height="364" src="/images/sight-map.png" />
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default SightDetails;
