import React from 'react';
import { Avatar, Button, Dropdown, Menu, Form, Input } from 'antd';
import MainHeader from '../layout/header';
import SvgIcon from '../shared/SvgIcon';

const AddResponse = () => (
  <div className="main-layout">
    <MainHeader />
    <div className="main-layout__content main-layout__content--full-width">
      <section className="profile profile--one-column pt-32">
        <div className="profile__container">
          <h1 className="profile__title mb-32">Add a response to this review</h1>
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
                <Button htmlType="button" className="review__settings-btn main-btn main-btn--icon">
                  <SvgIcon icon="three-dots" className="icon-right" />
                </Button>
              </Dropdown>
            </div>
            <div className="review__text-container mb-16">
              <p className="review__text review__text--overflow mb-8">
                The location is great for you to be able to walk to lots of food locations and bars!
                It is loud but you are in the middle of downtown so this should be expected. The
                beds were very comfortable and the washer dryer is in the unit. Left plenty of
                towels for us to use. Parking was near the location. The location is great for you
                to being
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
                  <p className="review__footer-title mb-0">Luxury Bi-Level in Heart of Central</p>
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
          <Form layout="vertical" size="large" className="mb-40">
            <div className="profile__description mb-24">
              <h2 className="profile__subtitle mb-8">Response</h2>
              <p className="profile__label mb-16">Write your response to this review.</p>
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

export default AddResponse;
