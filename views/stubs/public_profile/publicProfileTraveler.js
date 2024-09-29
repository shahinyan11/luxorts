import React from 'react';
import { Avatar, Button, Dropdown, Menu } from 'antd';
import MainHeader from '../layout/header';
import SvgIcon from '../shared/SvgIcon';

const PublicProfileTraveler = () => (
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
              98 reviews
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
          <h3 className="profile__subtitle mb-24">98 reviews</h3>
          <article className="profile__review review mb-24 pb-24">
            <div className="review__header mb-8">
              <h4 className="review__title mb-0">A perfect guest!</h4>
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
                You were a pleasure to host. Communication was very easy and enjoyable. We would
                love to host you again in any of our Sonder cities!
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
            </div>
          </article>
          <article className="profile__review review mb-24 pb-24">
            <div className="review__header mb-8">
              <h4 className="review__title mb-0">Hope your stay was wonderful!</h4>
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
                You and your friends were great guests in town for a beach weekend! Communication
                was very easy and enjoyable. Would definitely host again!
              </p>
            </div>
            <div className="review__footer">
              <div className="review__footer-column">
                <Avatar className="ant-avatar--sm review__author" src="/images/esther.png" />
                <div className="review__footer-info">
                  <p className="review__footer-title mb-0">Esther H.</p>
                  <p className="review__footer-value mb-0">December 2021</p>
                </div>
              </div>
            </div>
          </article>
          <article className="profile__review review mb-32 pb-24">
            <div className="review__header mb-8">
              <h4 className="review__title mb-0">Please come back and stay with us again!</h4>
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
                Hope your stay was wonderful! Thank you for being such a great guest. Please come
                back and stay with us again!
              </p>
            </div>
            <div className="review__footer">
              <div className="review__footer-column">
                <Avatar className="ant-avatar--sm review__author" src="/images/ronald.png" />
                <div className="review__footer-info">
                  <p className="review__footer-title mb-0">Ronald R.</p>
                  <p className="review__footer-value mb-0">December 2021</p>
                </div>
              </div>
            </div>
          </article>
          <a href="#" className="main-btn main-btn--secondary d-inline-block">
            Show more reviews
          </a>
        </div>
      </section>
    </div>
  </div>
);

export default PublicProfileTraveler;
