import React from 'react';
import { Avatar, Button, Dropdown, Menu, Carousel, Tabs } from 'antd';
import MainHeader from '../layout/header';
import SvgIcon from '../shared/SvgIcon';

const { TabPane } = Tabs;

const PublicProfileHost = () => (
  <div className="main-layout">
    <MainHeader isAuthorized isAvatarUpload />
    <div className="main-layout__content">
      <section className="profile pt-32">
        <div className="profile__header">
          <div className="profile__header-avatar mb-16">
            <Avatar className="ant-avatar--xxxl" src="/images/avatar-2.png" />
          </div>
          <h1 className="profile__header-title mb-4">Rodney Harmon</h1>
          <p className="profile__note mb-16">Joined in October 2018</p>
          <div className="profile__info mb-24">
            <p className="profile__info-text mb-0">
              <SvgIcon icon="star" className="profile__info-icon profile__info-icon--star mr-4" />
              784 reviews
            </p>
            <p className="profile__info-text mb-0">
              <SvgIcon icon="verification" className="profile__info-icon mr-4" />
              Identity verified
            </p>
          </div>
          <Button htmlType="button" className="main-btn main-btn--primary w-100 mb-24">
            Edit profile
          </Button>
          <div className="profile__confirmed pt-24">
            <p className="profile__header-title mb-16">Confirmed</p>
            <p className="profile__info-text mb-8">
              <SvgIcon icon="checked" className="profile__info-icon mr-8" />
              Identity
            </p>
            <p className="profile__info-text mb-8">
              <SvgIcon icon="checked" className="profile__info-icon mr-8" />
              Email address
            </p>
            <p className="profile__info-text mb-0">
              <SvgIcon icon="checked" className="profile__info-icon mr-8" />
              Phone number
            </p>
          </div>
        </div>
        <div className="profile__content pb-40 pb-md-80">
          <h2 className="profile__title mb-32">Hi, I&apos;m Rodney</h2>
          <h3 className="profile__subtitle mb-24">About</h3>
          <div className="profile__description pb-32 mb-32">
            <p className="profile__text profile__text--overflow mb-8">
              10 years of revolutionizing hospitality. More than 5000 Sonders in 35+ cities
              worldwide. I try to make better spaces open to all. Each one is designed by me, with
              you in mind. Always reliable, never forgettable. If you have any questions or
              comments, let me know. 10 years of revolutionizing hospitality. More than 5000 Sonders
              in 35+ cities worldwide.
            </p>
            <Button htmlType="button" className="main-text-btn">
              Show more
            </Button>
          </div>
          <div className="profile__description pb-32 mb-32">
            <h3 className="profile__subtitle mb-24">8 listings</h3>
            <div className="profile__listings mb-32">
              <div className="apartment-card">
                <Carousel className="apartment-card__slider">
                  <img
                    alt=""
                    width="364"
                    height="238"
                    className="apartment-card__image"
                    src="/images/popular-00.jpg"
                  />
                  <img
                    alt=""
                    width="364"
                    height="238"
                    className="apartment-card__image"
                    src="/images/popular-01.jpg"
                  />
                  <img
                    alt=""
                    width="364"
                    height="238"
                    className="apartment-card__image"
                    src="/images/popular-02.jpg"
                  />
                  <img
                    alt=""
                    width="364"
                    height="238"
                    className="apartment-card__image"
                    src="/images/popular-03.jpg"
                  />
                </Carousel>
                <a href="#" className="apartment-card__share">
                  <SvgIcon icon="share" />
                </a>
                <a href="#" className="apartment-card__like">
                  <SvgIcon icon="like" />
                </a>
                <div className="apartment-card__content">
                  <h3 className="apartment-card__title mb-0">
                    <a href="#">Charming and comfortable house</a>
                  </h3>
                  <p className="apartment-card__description">Entire apartment in Center City</p>
                  <div className="apartment-card__wrapper d-flex justify-content-space-between">
                    <div className="apartment-card__info d-flex align-items-center">
                      2 guests
                      <SvgIcon icon="dot" className="apartment-card__dot" />
                      1 bedroom
                      <SvgIcon icon="dot" className="apartment-card__dot" />
                      2 beds
                      <SvgIcon icon="dot" className="apartment-card__dot" />1 bath
                    </div>
                    <p className="apartment-card__price mb-0">
                      <span className="apartment-card__text">
                        <span className="apartment-card__accent">$64</span> / night
                      </span>
                    </p>
                    <p className="apartment-card__rating d-flex align-items-center">
                      <SvgIcon icon="star" className="apartment-card__star" />
                      <span className="apartment-card__value">4.91</span>
                      <a href="#" className="apartment-card__review">
                        (98 reviews)
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="apartment-card">
                <Carousel className="apartment-card__slider">
                  <img
                    alt=""
                    width="364"
                    height="238"
                    className="apartment-card__image"
                    src="/images/popular-01.jpg"
                  />
                  <img
                    alt=""
                    width="364"
                    height="238"
                    className="apartment-card__image"
                    src="/images/popular-02.jpg"
                  />
                  <img
                    alt=""
                    width="364"
                    height="238"
                    className="apartment-card__image"
                    src="/images/popular-03.jpg"
                  />
                  <img
                    alt=""
                    width="364"
                    height="238"
                    className="apartment-card__image"
                    src="/images/popular-00.jpg"
                  />
                </Carousel>
                <a href="#" className="apartment-card__share">
                  <SvgIcon icon="share" />
                </a>
                <a href="#" className="apartment-card__like">
                  <SvgIcon icon="like" />
                </a>
                <div className="apartment-card__content">
                  <h3 className="apartment-card__title mb-0">
                    <a href="#">Luxury Bi-Level in Heart of Center City</a>
                  </h3>
                  <p className="apartment-card__description">Entire apartment in Center City</p>
                  <div className="apartment-card__wrapper d-flex justify-content-space-between">
                    <div className="apartment-card__info d-flex align-items-center">
                      2 guests
                      <SvgIcon icon="dot" className="apartment-card__dot" />
                      1 bedroom
                      <SvgIcon icon="dot" className="apartment-card__dot" />
                      2 beds
                      <SvgIcon icon="dot" className="apartment-card__dot" />1 bath
                    </div>
                    <p className="apartment-card__price mb-0">
                      <span className="apartment-card__text">
                        <span className="apartment-card__accent">$64</span> / night
                      </span>
                    </p>
                    <p className="apartment-card__rating d-flex align-items-center">
                      <SvgIcon icon="star" className="apartment-card__star" />
                      <span className="apartment-card__value">4.91</span>
                      <a href="#" className="apartment-card__review">
                        (98 reviews)
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="apartment-card">
                <Carousel className="apartment-card__slider">
                  <img
                    alt=""
                    width="364"
                    height="238"
                    className="apartment-card__image"
                    src="/images/popular-02.jpg"
                  />
                  <img
                    alt=""
                    width="364"
                    height="238"
                    className="apartment-card__image"
                    src="/images/popular-03.jpg"
                  />
                  <img
                    alt=""
                    width="364"
                    height="238"
                    className="apartment-card__image"
                    src="/images/popular-00.jpg"
                  />
                  <img
                    alt=""
                    width="364"
                    height="238"
                    className="apartment-card__image"
                    src="/images/popular-01.jpg"
                  />
                </Carousel>
                <a href="#" className="apartment-card__share">
                  <SvgIcon icon="share" />
                </a>
                <a href="#" className="apartment-card__like">
                  <SvgIcon icon="like" />
                </a>
                <div className="apartment-card__content">
                  <h3 className="apartment-card__title mb-0">
                    <a href="#">Charming and comfortable house</a>
                  </h3>
                  <p className="apartment-card__description">
                    Sosuite | Art deco dream in University
                  </p>
                  <div className="apartment-card__wrapper d-flex justify-content-space-between">
                    <div className="apartment-card__info d-flex align-items-center">
                      2 guests
                      <SvgIcon icon="dot" className="apartment-card__dot" />
                      1 bedroom
                      <SvgIcon icon="dot" className="apartment-card__dot" />
                      2 beds
                      <SvgIcon icon="dot" className="apartment-card__dot" />1 bath
                    </div>
                    <p className="apartment-card__price mb-0">
                      <span className="apartment-card__text">
                        <span className="apartment-card__accent">$64</span> / night
                      </span>
                    </p>
                    <p className="apartment-card__rating d-flex align-items-center">
                      <SvgIcon icon="star" className="apartment-card__star" />
                      <span className="apartment-card__value">4.91</span>
                      <a href="#" className="apartment-card__review">
                        (98 reviews)
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              <div className="apartment-card">
                <Carousel className="apartment-card__slider">
                  <img
                    alt=""
                    width="364"
                    height="238"
                    className="apartment-card__image"
                    src="/images/popular-03.jpg"
                  />
                  <img
                    alt=""
                    width="364"
                    height="238"
                    className="apartment-card__image"
                    src="/images/popular-00.jpg"
                  />
                  <img
                    alt=""
                    width="364"
                    height="238"
                    className="apartment-card__image"
                    src="/images/popular-01.jpg"
                  />
                  <img
                    alt=""
                    width="364"
                    height="238"
                    className="apartment-card__image"
                    src="/images/popular-02.jpg"
                  />
                </Carousel>
                <a href="#" className="apartment-card__share">
                  <SvgIcon icon="share" />
                </a>
                <a href="#" className="apartment-card__like">
                  <SvgIcon icon="like" />
                </a>
                <div className="apartment-card__content">
                  <h3 className="apartment-card__title mb-0">
                    <a href="#">Pink Modern Apartment</a>
                  </h3>
                  <p className="apartment-card__description">Entire apartment in Center City</p>
                  <div className="apartment-card__wrapper d-flex justify-content-space-between">
                    <div className="apartment-card__info d-flex align-items-center">
                      2 guests
                      <SvgIcon icon="dot" className="apartment-card__dot" />
                      1 bedroom
                      <SvgIcon icon="dot" className="apartment-card__dot" />
                      2 beds
                      <SvgIcon icon="dot" className="apartment-card__dot" />1 bath
                    </div>
                    <p className="apartment-card__price mb-0">
                      <span className="apartment-card__text">
                        <span className="apartment-card__accent">$64</span> / night
                      </span>
                    </p>
                    <p className="apartment-card__rating d-flex align-items-center">
                      <SvgIcon icon="star" className="apartment-card__star" />
                      <span className="apartment-card__value">4.91</span>
                      <a href="#" className="apartment-card__review">
                        (98 reviews)
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <a href="#" className="main-btn main-btn--secondary d-inline-block">
              Show more listings
            </a>
          </div>
          <h3 className="profile__subtitle mb-12">784 reviews</h3>
          <Tabs defaultActiveKey="1" className="w-100">
            <TabPane tab="From Guests (780)" key="1">
              <article className="profile__review review mb-24 pb-24">
                <div className="review__header mb-8">
                  <h4 className="review__title mb-0">A perfect apartment for a perfect stay</h4>
                  <div className="rating ml-auto">
                    <SvgIcon icon="star" className="rating__icon mr-4" />
                    <p className="rating__value mb-0">
                      <span className="rating__amount">4</span> / 5
                    </p>
                  </div>
                  <Dropdown
                    placement="bottomRight"
                    overlay={
                      <Menu className="review__settings width-180">
                        <Menu.Item>Responde</Menu.Item>
                      </Menu>
                    }
                  >
                    <Button
                      htmlType="button"
                      className="review__settings-btn main-btn main-btn--icon"
                    >
                      <SvgIcon icon="three-dots" className="icon-right" />
                    </Button>
                  </Dropdown>
                </div>
                <div className="review__text-container mb-16">
                  <p className="review__text review__text--overflow mb-8">
                    Modern, urban setting. I was there for a conference, and walked sometimes to the
                    convention center, otherwise an easy uber. Fairly young, vibrant feel in this
                    part of downtown.
                  </p>
                </div>
                <div className="review__footer">
                  <div className="review__footer-column">
                    <Avatar className="ant-avatar--sm review__author" src="/images/cameron.png" />
                    <div className="review__footer-info">
                      <p className="review__footer-title mb-0">Cameron W.</p>
                      <p className="review__footer-value mb-0">December 2021</p>
                    </div>
                  </div>
                  <div className="review__footer-column">
                    <div className="review__footer-info">
                      <p className="review__footer-title mb-0">Charming and comfortable house</p>
                      <p className="review__footer-value mb-0">Entire apartment in Center City</p>
                    </div>
                    <img
                      alt=""
                      width="56"
                      height="40"
                      src="/images/popular-00.jpg"
                      className="review__apartment-image"
                    />
                  </div>
                </div>
                <div className="review__response mt-16">
                  <div className="review__response-header mb-4">
                    <p className="review__response-title mb-0">Response from the Host</p>
                    <Dropdown
                      placement="bottomRight"
                      overlay={
                        <Menu className="review__settings width-180">
                          <Menu.Item>Responde</Menu.Item>
                        </Menu>
                      }
                    >
                      <Button
                        htmlType="button"
                        className="review__settings-btn main-btn main-btn--icon"
                      >
                        <SvgIcon icon="three-dots" className="icon-right" />
                      </Button>
                    </Dropdown>
                  </div>
                  <div className="review__text-container mb-16">
                    <p className="review__text review__text--overflow mb-8">
                      Thank you, Cameron, for the kind words! Thank you for being such a great
                      guest. I enjoyed hosting you and look forward to our paths crossing again.
                    </p>
                  </div>
                  <div className="review__images mb-16">
                    <img
                      alt=""
                      width="68"
                      height="68"
                      src="/images/review-preview-01.jpg"
                      className="review__image"
                    />
                    <img
                      alt=""
                      width="68"
                      height="68"
                      src="/images/review-preview-02.jpg"
                      className="review__image"
                    />
                    <a href="#" className="review__images-link">
                      +3
                    </a>
                  </div>
                  <div className="review__footer">
                    <div className="review__footer-column">
                      <Avatar className="ant-avatar--sm review__author" src="/images/avatar.png" />
                      <div className="review__footer-info">
                        <p className="review__footer-title mb-0">Rodney H.</p>
                        <p className="review__footer-value mb-0">December 2021</p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
              <article className="profile__review review mb-24 pb-24">
                <div className="review__header mb-8">
                  <h4 className="review__title mb-0">Great property and location!</h4>
                  <div className="rating ml-auto">
                    <SvgIcon icon="star" className="rating__icon mr-4" />
                    <p className="rating__value mb-0">
                      <span className="rating__amount">4</span> / 5
                    </p>
                  </div>
                  <Dropdown
                    placement="bottomRight"
                    overlay={
                      <Menu className="review__settings width-180">
                        <Menu.Item>Responde</Menu.Item>
                      </Menu>
                    }
                  >
                    <Button
                      htmlType="button"
                      className="review__settings-btn main-btn main-btn--icon"
                    >
                      <SvgIcon icon="three-dots" className="icon-right" />
                    </Button>
                  </Dropdown>
                </div>
                <div className="review__text-container mb-16">
                  <p className="review__text review__text--overflow mb-8">
                    The location is great for you to be able to walk to lots of food locations and
                    bars! It is loud but you are in the middle of downtown so this should be
                    expected. The beds were very comfortable and the washer dryer is in the unit.
                    Left plenty of towels for us to use. Parking was near the location. The location
                    is great for you to being
                  </p>
                  <Button htmlType="button" className="main-text-btn main-text-btn--secondary">
                    Show more
                  </Button>
                </div>
                <div className="review__footer">
                  <div className="review__footer-column">
                    <Avatar className="ant-avatar--sm review__author" src="/images/esther.png" />
                    <div className="review__footer-info">
                      <p className="review__footer-title mb-0">Esther H.</p>
                      <p className="review__footer-value mb-0">December 2021</p>
                    </div>
                  </div>
                  <div className="review__footer-column">
                    <div className="review__footer-info">
                      <p className="review__footer-title mb-0">
                        Luxury Bi-Level in Heart of Central
                      </p>
                      <p className="review__footer-value mb-0">Entire apartment in Center City</p>
                    </div>
                    <img
                      alt=""
                      width="56"
                      height="40"
                      src="/images/popular-01.jpg"
                      className="review__apartment-image"
                    />
                  </div>
                </div>
              </article>
              <article className="profile__review review mb-32 pb-24">
                <div className="review__header mb-8">
                  <h4 className="review__title mb-0">Very cool apartment central to everything</h4>
                  <div className="rating ml-auto">
                    <SvgIcon icon="star" className="rating__icon mr-4" />
                    <p className="rating__value mb-0">
                      <span className="rating__amount">4</span> / 5
                    </p>
                  </div>
                  <Dropdown
                    placement="bottomRight"
                    overlay={
                      <Menu className="review__settings width-180">
                        <Menu.Item>Responde</Menu.Item>
                      </Menu>
                    }
                  >
                    <Button
                      htmlType="button"
                      className="review__settings-btn main-btn main-btn--icon"
                    >
                      <SvgIcon icon="three-dots" className="icon-right" />
                    </Button>
                  </Dropdown>
                </div>
                <div className="review__text-container mb-16">
                  <p className="review__text review__text--overflow mb-8">
                    It was quieter than expected. Great location for walking downtown, lots of good
                    restaurants nearby, we felt quite safe.
                  </p>
                </div>
                <div className="review__images mb-16">
                  <img
                    alt=""
                    width="68"
                    height="68"
                    src="/images/review-preview-01.jpg"
                    className="review__image"
                  />
                  <img
                    alt=""
                    width="68"
                    height="68"
                    src="/images/review-preview-02.jpg"
                    className="review__image"
                  />
                  <a href="#" className="review__images-link">
                    +3
                  </a>
                </div>
                <div className="review__footer">
                  <div className="review__footer-column">
                    <Avatar className="ant-avatar--sm review__author" src="/images/ronald.png" />
                    <div className="review__footer-info">
                      <p className="review__footer-title mb-0">Ronald R.</p>
                      <p className="review__footer-value mb-0">December 2021</p>
                    </div>
                  </div>
                  <div className="review__footer-column">
                    <div className="review__footer-info">
                      <p className="review__footer-title mb-0">
                        Sosuite | Art deco dream in University
                      </p>
                      <p className="review__footer-value mb-0">Entire apartment in Center City</p>
                    </div>
                    <img
                      alt=""
                      width="56"
                      height="40"
                      src="/images/popular-02.jpg"
                      className="review__apartment-image"
                    />
                  </div>
                </div>
              </article>
              <a href="#" className="main-btn main-btn--secondary d-inline-block">
                Show more reviews
              </a>
            </TabPane>
            <TabPane tab="From Hosts (4)" key="2" />
          </Tabs>
        </div>
      </section>
    </div>
  </div>
);

export default PublicProfileHost;
