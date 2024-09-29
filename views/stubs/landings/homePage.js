import React from 'react';
import { Carousel, Button, Form, Input, DatePicker, InputNumber } from 'antd';
import SvgIcon from 'views/stubs/shared/SvgIcon';
import MainHeader from '../layout/header';
import MainFooter from '../layout/footer';

const { RangePicker } = DatePicker;

const HomePage = () => (
  <div className="main-layout">
    <MainHeader isLanding />
    <div className="main-layout__content main-layout__content--full-width">
      <section className="intro">
        <div className="intro__container">
          <h1 className="intro__title mb-16">
            Find your <span className="intro__title-accent">perfect apartments</span>
          </h1>
          <p className="intro__text mb-40">
            Discover and book the perfect apartments for a vacation or business trip.
          </p>
          <Form layout="vertical" size="large" className="intro__search search search--home">
            <div className="search__location">
              <Form.Item htmlFor="location" className="search__item" label="Location">
                <Input
                  allowClear={{ clearIcon: <SvgIcon icon="cross" /> }}
                  placeholder="Where are you going?"
                  id="location"
                  className="search__input"
                />
              </Form.Item>
              <div className="search__location-dropdown">
                <p className="search__location-title mb-0">Recent searches</p>
                <a href="#" className="search__location-item">
                  <span className="search__location-icon-container">
                    <SvgIcon icon="recent" className="search__location-icon" />
                  </span>
                  London, United Kingdom
                </a>
                <a href="#" className="search__location-item">
                  <span className="search__location-icon-container">
                    <SvgIcon icon="location" className="search__location-icon" />
                  </span>
                  Philadelphia, PA
                </a>
                <a href="#" className="search__location-item">
                  <span className="search__location-icon-container">
                    <SvgIcon icon="location" className="search__location-icon" />
                  </span>
                  Philadelphia County, Philadelphia, PA
                </a>
              </div>
            </div>
            <div className="search__dates">
              <div className="search__labels">
                <p className="search__label">Check In</p>
                <p className="search__label">Check Out</p>
              </div>
              <Form.Item htmlFor="select-date">
                <RangePicker
                  clearIcon={<SvgIcon icon="cross" />}
                  suffixIcon={false}
                  separator={false}
                  placeholder={['Date in', 'Date out']}
                  className="w-100"
                  size="large"
                  id="select-date"
                />
              </Form.Item>
            </div>
            <div className="search__guests">
              <Form.Item htmlFor="guests" className="search__item mb-0" label="Guests">
                <Input
                  placeholder="Add guests"
                  allowClear={{ clearIcon: <SvgIcon icon="cross" /> }}
                  id="guests"
                  className="search__input"
                />
              </Form.Item>
              <Button
                htmlType="submit"
                className="search__submit main-btn main-btn--primary main-btn--icon"
              >
                <SvgIcon icon="search" className="icon-right" />
              </Button>
              <div className="search__amount">
                <div className="search__amount-item mb-20">
                  <div className="search__amount-content">
                    <p className="search__amount-name mb-4">Adults</p>
                    <p className="search__amount-description mb-0">Ages 18 or above</p>
                  </div>
                  <Form.Item htmlFor="beds">
                    <InputNumber
                      min={0}
                      defaultValue={0}
                      value={2}
                      id="beds"
                      controls={{
                        upIcon: <SvgIcon icon="plus-circle" />,
                        downIcon: <SvgIcon icon="minus-circle" />,
                      }}
                    />
                  </Form.Item>
                </div>
                <div className="search__amount-item mb-20">
                  <div className="search__amount-content">
                    <p className="search__amount-name mb-4">Children</p>
                    <p className="search__amount-description mb-0">Ages 2–17</p>
                  </div>
                  <Form.Item htmlFor="beds">
                    <InputNumber
                      min={0}
                      defaultValue={0}
                      id="beds"
                      controls={{
                        upIcon: <SvgIcon icon="plus-circle" />,
                        downIcon: <SvgIcon icon="minus-circle" />,
                      }}
                    />
                  </Form.Item>
                </div>
                <div className="search__amount-item mb-20">
                  <div className="search__amount-content">
                    <p className="search__amount-name mb-4">Infants</p>
                    <p className="search__amount-description mb-0">Under 2</p>
                  </div>
                  <Form.Item htmlFor="beds">
                    <InputNumber
                      min={0}
                      defaultValue={0}
                      id="beds"
                      controls={{
                        upIcon: <SvgIcon icon="plus-circle" />,
                        downIcon: <SvgIcon icon="minus-circle" />,
                      }}
                    />
                  </Form.Item>
                </div>
                <div className="search__amount-item mb-0">
                  <div className="search__amount-content">
                    <p className="search__amount-name mb-4">Pets</p>
                    <p className="search__amount-description mb-0">
                      If you&apos;re lucky enough to have more than 2 pets with you, be sure to let
                      your host know
                    </p>
                  </div>
                  <Form.Item htmlFor="beds">
                    <InputNumber
                      min={0}
                      defaultValue={0}
                      id="beds"
                      controls={{
                        upIcon: <SvgIcon icon="plus-circle" />,
                        downIcon: <SvgIcon icon="minus-circle" />,
                      }}
                    />
                  </Form.Item>
                </div>
              </div>
            </div>
          </Form>
          <img alt="" width="1140" height="380" className="intro__img" src="/images/intro.jpg" />
        </div>
      </section>
      <section className="trending pt-40 pt-md-80 pb-40 pb-md-40">
        <div className="trending__container">
          <h2 className="trending__title mb-8">Trending locations</h2>
          <p className="trending__description mb-40">
            The world is your playground when you&apos;re traveling. Check out a few trending
            locations.
          </p>
          <div className="trending__pictures">
            <a href="#" className="trending__card">
              <img
                alt=""
                width="558"
                height="238"
                className="trending__img"
                src="/images/trending-location-01.jpg"
              />
              <div className="trending__content">
                <h3 className="trending__subtitle mb-4">Philadelphia</h3>
                <p className="trending__state mb-0">Pennsylvania</p>
              </div>
            </a>
            <a href="#" className="trending__card">
              <img
                alt=""
                width="558"
                height="238"
                className="trending__img"
                src="/images/trending-location-02.jpg"
              />
              <div className="trending__content">
                <h3 className="trending__subtitle mb-4">Los Angeles</h3>
                <p className="trending__state mb-0">California</p>
              </div>
            </a>
            <a href="#" className="trending__card">
              <img
                alt=""
                width="364"
                height="238"
                className="trending__img"
                src="/images/trending-location-03.jpg"
              />
              <div className="trending__content">
                <h3 className="trending__subtitle mb-4">Chicago</h3>
                <p className="trending__state mb-0">Illinois</p>
              </div>
            </a>
            <a href="#" className="trending__card">
              <img
                alt=""
                width="364"
                height="238"
                className="trending__img"
                src="/images/trending-location-04.jpg"
              />
              <div className="trending__content">
                <h3 className="trending__subtitle mb-4">Seattle</h3>
                <p className="trending__state mb-0">Washington</p>
              </div>
            </a>
            <a href="#" className="trending__card">
              <img
                alt=""
                width="364"
                height="238"
                className="trending__img"
                src="/images/trending-location-05.jpg"
              />
              <div className="trending__content">
                <h3 className="trending__subtitle mb-4">Phoenix</h3>
                <p className="trending__state mb-0">Arizona</p>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="property">
        <div className="property__container pt-40 pt-md-80">
          <h2 className="property__title mb-8">Browse by property type</h2>
          <p className="property__description mb-40">Find spaces that suit your style.</p>
          <div className="property__cards pb-40 pb-md-80">
            <a href="#" className="property__card">
              <img
                alt=""
                width="267"
                height="188"
                className="property__img"
                src="/images/property-01.jpg"
              />
              <div className="property__content">
                <h3 className="property__subtitle mb-4">House</h3>
                <p className="property__text mb-0">2460 houses</p>
              </div>
            </a>
            <a href="#" className="property__card">
              <img
                alt=""
                width="267"
                height="188"
                className="property__img"
                src="/images/property-02.jpg"
              />
              <div className="property__content">
                <h3 className="property__subtitle mb-4">Apartment</h3>
                <p className="property__text mb-0">4580 apartments</p>
              </div>
            </a>
            <a href="#" className="property__card">
              <img
                alt=""
                width="267"
                height="188"
                className="property__img"
                src="/images/property-03.jpg"
              />
              <div className="property__content">
                <h3 className="property__subtitle mb-4">Room</h3>
                <p className="property__text mb-0">3760 rooms</p>
              </div>
            </a>
            <a href="#" className="property__card">
              <img
                alt=""
                width="267"
                height="188"
                className="property__img"
                src="/images/property-04.jpg"
              />
              <div className="property__content">
                <h3 className="property__subtitle mb-4">Cottage</h3>
                <p className="property__text mb-0">1640 cottages</p>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className="popular-apartment pt-40 pt-md-80 pb-40 pb-md-80">
        <div className="popular-apartment__container">
          <h2 className="popular-apartment__title mb-8 mb-md-0">Popular apartments near you</h2>
          <div className="d-flex flex-column mb-40">
            <p className="popular-apartment__description mb-8 mb-md-0">
              Here are some of the popular apartments near you.
            </p>
            <div className="popular-apartment__column d-flex align-items-center ml-md-auto">
              <p className="counter ml-auto mr-16">
                <span className="counter__number counter__number--current">1</span>
                <span className="counter__divider">/</span>
                <span className="counter__number">3</span>
              </p>
              <Button
                htmlType="button"
                className="main-btn main-btn--primary main-btn--icon main-btn--small mr-16"
                disabled
              >
                <SvgIcon icon="arrow-left" className="icon-right" />
              </Button>
              <Button
                htmlType="button"
                className="main-btn main-btn--primary main-btn--icon main-btn--small"
              >
                <SvgIcon icon="arrow-right" className="icon-right" />
              </Button>
            </div>
          </div>
          <div className="popular-apartment__slider">
            <div className="popular-apartment__slider-wrapper">
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
                    src="/images/popular-03.jpg"
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
            </div>
          </div>
        </div>
      </section>
      <section className="cta pt-40 pt-md-80 pb-40 pb-md-80">
        <div className="cta__container">
          <div className="cta__content">
            <h2 className="cta__title mb-8">
              Try <span className="cta__accent">hosting</span> on Luxorts
            </h2>
            <p className="cta__description mb-32">
              List your property on Luxorts and open your door to rental income.
            </p>
            <a href="#" className="main-btn main-btn--primary min-width-160">
              List your property
            </a>
          </div>
        </div>
      </section>
    </div>
    <MainFooter isFooterMenu isLanding />
  </div>
);

export default HomePage;
