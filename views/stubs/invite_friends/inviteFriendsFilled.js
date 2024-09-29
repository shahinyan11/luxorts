import React from 'react';
import { Select, Button, Form } from 'antd';
import MainHeader from '../layout/header';
import SvgIcon from '../shared/SvgIcon';

const InviteFriendsFilled = () => (
  <div className="main-layout">
    <MainHeader isAuthorized />
    <div className="main-layout__content">
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
                  <Select
                    mode="tags"
                    placeholder="Enter email"
                    defaultValue={[
                      'tim.jennings@gmail.com',
                      'debra.holt@gmail.com',
                      'dolores.chambers@gmail.com',
                    ]}
                  />
                </Form.Item>
                <Button
                  htmlType="submit"
                  className="main-btn main-btn--primary min-width-140 mb-24"
                >
                  Send invite
                </Button>
              </Form>
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

export default InviteFriendsFilled;
