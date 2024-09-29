import React from 'react';
import { Avatar, Button, Dropdown, Menu } from 'antd';
import MainHeader from '../layout/header';
import SvgIcon from '../shared/SvgIcon';

const ReviewDone = () => (
  <div className="main-layout">
    <MainHeader isAuthorized isAvatarUpload />
    <div className="main-layout__content main-layout__content--with-paddings">
      <article className="review mb-32 mt-32 max-width-656 pb-24">
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
                <Menu.Item>Edit</Menu.Item>
                <Menu.Item>Remove</Menu.Item>
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
            The location is great for you to be able to walk to lots of food locations and bars! It
            is loud but you are in the middle of downtown so this should be expected.
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
      </article>
    </div>
  </div>
);

export default ReviewDone;
