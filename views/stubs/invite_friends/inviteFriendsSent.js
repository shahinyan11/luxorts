import React from 'react';
import { Select, Button, Form } from 'antd';
import MainHeader from '../layout/header';
import SvgIcon from '../shared/SvgIcon';

const { Option } = Select;

const InviteFriendsSent = () => (
  <div className="main-layout">
    <MainHeader isAuthorized />
    <div className="main-layout__content">
      <div className="flash-message flash-message--success width-320 main-layout__message">
        <SvgIcon icon="checked" className="flash-message__left-icon" />
        <span>Invite has been sent</span>
        <Button htmlType="button" className="flash-message__right-icon">
          <SvgIcon icon="cross" />
        </Button>
      </div>
      <div className="personal-information">
        <ul className="breadcrumbs mt-32 mb-16">
          <li className="breadcrumbs__item">
            <a href="#" className="breadcrumbs__link">
              Account settings
            </a>
            <SvgIcon icon="arrow-right" className="breadcrumbs__icon" />
          </li>
          <li className="breadcrumbs__item">
            <a href="#" className="breadcrumbs__link">
              Invite friends
            </a>
          </li>
        </ul>
        <h1 className="text-display-2 mb-lg-64 mb-32">Invite friends</h1>
        <div className="personal-information__content">
          <div className="personal-information__user">
            <div className="personal-information__item mb-24">
              <Form layout="vertical" size="large">
                <Form.Item label="Email" className="mb-24">
                  <Select mode="tags" placeholder="Enter email">
                    <Option value="male">Male</Option>
                    <Option value="female">Female</Option>
                    <Option value="other">Other</Option>
                  </Select>
                </Form.Item>
                <Button
                  htmlType="submit"
                  className="main-btn main-btn--primary min-width-140 mb-24"
                >
                  Send invite
                </Button>
              </Form>
            </div>
            <div className="personal-information__item mb-24">
              <p className="personal-information__caption text-body mb-24">INVITED (3):</p>
              <p className="text-subheader mb-24 personal-information__invite">
                tim.jennings@gmail.com
              </p>
            </div>
            <div className="personal-information__item mb-24">
              <p className="text-subheader mb-24 personal-information__invite">
                debra.holt@gmail.com
              </p>
            </div>
            <div className="personal-information__item mb-24">
              <div className="d-flex justify-content-space-between mb-24 align-items-center">
                <p className="text-subheader personal-information__invite personal-information__invite--disabled mr-16 mb-0">
                  dolores.chambers@gmail.com
                </p>
                <a href="#" className="main-text-btn">
                  Resend invite
                </a>
              </div>
            </div>
          </div>
          <div className="personal-information__note mb-32 mb-lg-0 d-flex flex-column align-items-flex-start">
            <span className="personal-information__icon-container mb-16">
              <SvgIcon icon="guests" className="personal-information__icon" />
            </span>
            <h2 className="personal-information__subtitle text-subheader-2 mb-4">Invite friends</h2>
            <p className="personal-information__text text-body mb-0">
              Email friends who&apos;ve never tried Luxorts, and we&apos;ll send them a reminder,
              too.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default InviteFriendsSent;
