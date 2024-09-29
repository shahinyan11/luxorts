import React from 'react';
import {
  Button,
  Dropdown,
  Menu,
  Carousel,
  Pagination,
  Popover,
  Checkbox,
  Form,
  Radio,
  Slider,
  Input,
} from 'antd';
import SvgIcon from 'views/stubs/shared/SvgIcon';
import MainHeader from '../layout/header';

const ExpoloreListings = () => (
  <div className="main-layout">
    <MainHeader isAuthorized isAvatarUpload isWithFilter />
    <div className="main-layout__content main-layout__content--full-width">
      <section className="explore-filters">
        <div className="explore-filters__container">
          <div className="explore-filters__dropdowns mr-8">
            <Dropdown
              placement="bottomLeft"
              overlay={
                <div className="explore-filters__dropdown">
                  <p className="explore-filters__dropdown-title mb-16">
                    The average nightly price is $126.
                  </p>
                  <Form layout="vertical" size="large" className="pl-24 pr-24">
                    <Radio.Group value="available" className="d-flex mb-32">
                      <Radio value="" checked>
                        Price per night
                      </Radio>
                      <Radio value="">Total price</Radio>
                    </Radio.Group>
                    <Slider
                      min={10}
                      max={400}
                      range
                      defaultValue={[1, 400]}
                      value={[10, 180]}
                      className="mb-16 mt-0"
                    />
                    <div className="d-flex mb-24">
                      <Form.Item label="Min Price" htmlFor="min-price" className="mb-0">
                        <Input placeholder="$10" value="$10" id="min-price" />
                      </Form.Item>
                      <span className="explore-filters__range-divider">-</span>
                      <Form.Item label="Max Price" htmlFor="max-price" className="mb-0">
                        <Input placeholder="$1000+" value="$180" id="max-price" />
                      </Form.Item>
                    </div>
                  </Form>
                  <div className="explore-filters__dropdown-actions pt-24 pb-24 d-flex justify-content-flex-end">
                    <Button
                      htmlType="button"
                      className="main-btn main-btn--medium main-btn--tertiary mr-16"
                    >
                      Clear
                    </Button>
                    <Button
                      htmlType="button"
                      className="main-btn main-btn--medium main-btn--primary min-width-120"
                    >
                      Apply
                    </Button>
                  </div>
                </div>
              }
            >
              <Button htmlType="button" className="main-btn main-btn--medium main-btn--filter mr-8">
                Price
                <SvgIcon icon="arrow-down" className="icon-right" />
              </Button>
            </Dropdown>
            <Dropdown
              placement="bottomLeft"
              overlay={
                <div className="explore-filters__dropdown">
                  <p className="explore-filters__dropdown-title mb-0">Popular property types.</p>
                  <div className="explore-filters__dropdown-checkboxes d-flex flex-column">
                    <Checkbox>House</Checkbox>
                    <Checkbox checked>Apartment</Checkbox>
                    <Checkbox>Room</Checkbox>
                    <Checkbox>Cottage</Checkbox>
                  </div>
                  <div className="explore-filters__dropdown-actions pt-24 pb-24 d-flex justify-content-flex-end">
                    <Button
                      htmlType="button"
                      className="main-btn main-btn--medium main-btn--tertiary mr-16"
                    >
                      Clear
                    </Button>
                    <Button
                      htmlType="button"
                      className="main-btn main-btn--medium main-btn--primary min-width-120"
                    >
                      Apply
                    </Button>
                  </div>
                </div>
              }
            >
              <Button htmlType="button" className="main-btn main-btn--medium main-btn--filter mr-8">
                Property type
                <SvgIcon icon="arrow-down" className="icon-right" />
              </Button>
            </Dropdown>
          </div>
          <Button htmlType="button" className="main-btn main-btn--medium main-btn--filter mr-8">
            <SvgIcon icon="filter" className="icon-left" />
            Filters
          </Button>
          <Button htmlType="button" className="main-btn main-btn--medium main-btn--filter mr-8">
            View favorites only
          </Button>
        </div>
      </section>
      <section className="explore">
        <div className="explore__container">
          <div className="explore__content">
            <h1 className="explore__title mb-8">Philadelphia</h1>
            <div className="d-flex justify-content-space-between mb-8">
              <p className="explore__description mb-0">300+ properties in Philadelphia</p>
              <Dropdown
                placement="bottomRight"
                overlay={
                  <Menu className="explore__sort-dropdown width-180">
                    <Menu.Item>Recommended</Menu.Item>
                    <Menu.Item>Price: high to low</Menu.Item>
                    <Menu.Item>Price: low to high</Menu.Item>
                    <Menu.Item>Average rating</Menu.Item>
                    <Menu.Item>Guests quantity</Menu.Item>
                  </Menu>
                }
              >
                <div className="explore__sorter">
                  <div className="explore__buttons">
                    <Button htmlType="button" className="explore__sort main-btn main-btn--icon">
                      <SvgIcon icon="triangle-up" className="explore__sort-icon" />
                    </Button>
                    <Button htmlType="button" className="explore__sort main-btn main-btn--icon">
                      <SvgIcon icon="triangle-down" className="explore__sort-icon" />
                    </Button>
                  </div>
                  <span className="explore__sort-text">Sort by</span>
                  <Button htmlType="button" className="explore__sort-btn main-btn main-btn--medium">
                    Recommended
                    <SvgIcon icon="arrow-down" className="explore__sort-btn-icon icon-right" />
                  </Button>
                </div>
              </Dropdown>
            </div>
            <div className="apartment-card apartment-card--explore">
              <Carousel
                className="apartment-card__slider"
                arrows
                prevArrow={
                  <Button
                    htmlType="button"
                    className="main-btn main-btn--primary main-btn--icon main-btn--small"
                    disabled
                  >
                    <SvgIcon icon="arrow-left" className="icon-right" />
                  </Button>
                }
                nextArrow={
                  <Button
                    htmlType="button"
                    className="main-btn main-btn--primary main-btn--icon main-btn--small"
                  >
                    <SvgIcon icon="arrow-right" className="icon-right" />
                  </Button>
                }
              >
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
                    <Popover
                      className="apartment-card__popover popover"
                      placement="topRight"
                      content={
                        <>
                          <a href="#" className="popover__close">
                            <SvgIcon icon="cross" className="" />
                          </a>
                          <div className="popover__content">
                            <p className="popover__info">
                              <span className="popover__text">$60 x 23 nights</span>
                              <span className="popover__value">$1380</span>
                            </p>
                            <p className="popover__info">
                              <span className="popover__text">Weekly discount</span>
                              <span className="popover__value popover__value--accent">-$69</span>
                            </p>
                            <p className="popover__info">
                              <span className="popover__text">Service fee</span>
                              <span className="popover__value">$161</span>
                            </p>
                          </div>
                        </>
                      }
                      title="Price breakdown"
                      trigger="click"
                    >
                      <a href="#" className="apartment-card__total">
                        $1472 total
                      </a>
                    </Popover>
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
            <div className="apartment-card apartment-card--explore">
              <Carousel
                className="apartment-card__slider"
                arrows
                prevArrow={
                  <Button
                    htmlType="button"
                    className="main-btn main-btn--primary main-btn--icon main-btn--small"
                    disabled
                  >
                    <SvgIcon icon="arrow-left" className="icon-right" />
                  </Button>
                }
                nextArrow={
                  <Button
                    htmlType="button"
                    className="main-btn main-btn--primary main-btn--icon main-btn--small"
                  >
                    <SvgIcon icon="arrow-right" className="icon-right" />
                  </Button>
                }
              >
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
            <div className="apartment-card apartment-card--explore">
              <Carousel
                className="apartment-card__slider"
                arrows
                prevArrow={
                  <Button
                    htmlType="button"
                    className="main-btn main-btn--primary main-btn--icon main-btn--small"
                    disabled
                  >
                    <SvgIcon icon="arrow-left" className="icon-right" />
                  </Button>
                }
                nextArrow={
                  <Button
                    htmlType="button"
                    className="main-btn main-btn--primary main-btn--icon main-btn--small"
                  >
                    <SvgIcon icon="arrow-right" className="icon-right" />
                  </Button>
                }
              >
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
                    <Popover
                      className="apartment-card__popover popover"
                      placement="topRight"
                      content={
                        <>
                          <a href="#" className="popover__close">
                            <SvgIcon icon="cross" className="" />
                          </a>
                          <div className="popover__content">
                            <p className="popover__info">
                              <span className="popover__text">$60 x 23 nights</span>
                              <span className="popover__value">$1380</span>
                            </p>
                            <p className="popover__info">
                              <span className="popover__text">Weekly discount</span>
                              <span className="popover__value popover__value--accent">-$69</span>
                            </p>
                            <p className="popover__info">
                              <span className="popover__text">Service fee</span>
                              <span className="popover__value">$161</span>
                            </p>
                          </div>
                        </>
                      }
                      title="Price breakdown"
                      trigger="click"
                    >
                      <a href="#" className="apartment-card__total">
                        $1472 total
                      </a>
                    </Popover>
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
            <div className="apartment-card apartment-card--explore">
              <Carousel
                className="apartment-card__slider"
                arrows
                prevArrow={
                  <Button
                    htmlType="button"
                    className="main-btn main-btn--primary main-btn--icon main-btn--small"
                    disabled
                  >
                    <SvgIcon icon="arrow-left" className="icon-right" />
                  </Button>
                }
                nextArrow={
                  <Button
                    htmlType="button"
                    className="main-btn main-btn--primary main-btn--icon main-btn--small"
                  >
                    <SvgIcon icon="arrow-right" className="icon-right" />
                  </Button>
                }
              >
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
            <div className="mt-24 d-flex justify-content-space-between align-items-center">
              <Pagination defaultCurrent={1} pageSize={20} total={300} showSizeChanger={false} />
              <p className="explore__pagination-text mb-0">1 – 20 of 300+ properties</p>
            </div>
          </div>
          <div className="explore__map map">
            <img
              alt=""
              width="708"
              height="932"
              className="map__image"
              src="/images/explore-map.jpg"
            />
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default ExpoloreListings;
