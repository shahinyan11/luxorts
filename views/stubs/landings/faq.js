import React from 'react';
import { Tabs } from 'antd';
import SvgIcon from 'views/stubs/shared/SvgIcon';
import MainHeader from '../layout/header';
import MainFooter from '../layout/footer';

const { TabPane } = Tabs;

const Faq = () => (
  <div className="main-layout">
    <MainHeader isLanding isWithFilter />
    <div className="main-layout__content main-layout__content--full-width">
      <section className="faq">
        <div className="faq__head pt-40 pt-md-80 pb-40 pb-md-80 text-align-center">
          <h1 className="faq__title mb-8">We love to help</h1>
          <p className="faq__description mb-0">
            Browse help topics to find answers to your questions.
          </p>
        </div>
        <div className="faq__content question mt-32 mt-md-60 mb-40 mb-md-80">
          <Tabs defaultActiveKey="1" className="w-100">
            <TabPane tab="For Guests" key="1">
              <div className="question__content pt-16">
                <ul className="question__list mb-40">
                  <li className="question__item">
                    <h3 className="question__title">Creating an account</h3>
                    <p className="question__text">
                      Creating an Airbnb account is free and easy. Just go to luxorts.com, click
                      Sign Up, and follow the...
                    </p>
                    <a href="#" className="question__link main-text-btn">
                      <SvgIcon icon="arrow-right" className="icon-left" />
                      Read more
                    </a>
                  </li>
                  <li className="question__item">
                    <h3 className="question__title">
                      Booking a trip: What to do if you&apos;re new?
                    </h3>
                    <p className="question__text">
                      Welcome to Luxorts! From here, you can go anywhere - but first, a little help
                      to get you on...
                    </p>
                    <a href="#" className="question__link main-text-btn">
                      <SvgIcon icon="arrow-right" className="icon-left" />
                      Read more
                    </a>
                  </li>
                  <li className="question__item">
                    <h3 className="question__title">
                      How do I cancel my reservation for a place to stay?
                    </h3>
                    <p className="question__text">
                      You can cancel a reservation any time before or during your trip.
                    </p>
                    <a href="#" className="question__link main-text-btn">
                      <SvgIcon icon="arrow-right" className="icon-left" />
                      Read more
                    </a>
                  </li>
                  <li className="question__item">
                    <h3 className="question__title">
                      What should I do if someone asks me to pay outside of the platform?
                    </h3>
                    <p className="question__text">
                      If someone asks to pay for your reservation outside of (ex: a wire or bank
                      transfer), you ne...
                    </p>
                    <a href="#" className="question__link main-text-btn">
                      <SvgIcon icon="arrow-right" className="icon-left" />
                      Read more
                    </a>
                  </li>
                  <li className="question__item">
                    <h3 className="question__title">Update or recover your password</h3>
                    <p className="question__text">
                      Forgot your password or having trouble signing in? We&apos;ve been there. Time
                      for recovery.
                    </p>
                    <a href="#" className="question__link main-text-btn">
                      <SvgIcon icon="arrow-right" className="icon-left" />
                      Read more
                    </a>
                  </li>
                  <li className="question__item">
                    <h3 className="question__title">What is Luxorts and how does it work?</h3>
                    <p className="question__text">
                      Luxorts helps make sharing easy, enjoyable, and safe. We verify personal
                      profiles and listings, ...
                    </p>
                    <a href="#" className="question__link main-text-btn">
                      <SvgIcon icon="arrow-right" className="icon-left" />
                      Read more
                    </a>
                  </li>
                </ul>
                <a href="#" className="main-btn main-btn--secondary min-width-160">
                  Browse all topics
                </a>
              </div>
            </TabPane>
            <TabPane tab="For Hosts" key="2">
              <div className="question__content pt-16">
                <ul className="question__list mb-40">
                  <li className="question__item">
                    <h3 className="question__title">What is Luxorts and how does it work?</h3>
                    <p className="question__text">
                      Luxorts helps make sharing easy, enjoyable, and safe. We verify personal
                      profiles and listings, ...
                    </p>
                    <a href="#" className="question__link main-text-btn">
                      <SvgIcon icon="arrow-right" className="icon-left" />
                      Read more
                    </a>
                  </li>
                  <li className="question__item">
                    <h3 className="question__title">Creating an account</h3>
                    <p className="question__text">
                      Creating an Airbnb account is free and easy. Just go to luxorts.com, click
                      Sign Up, and follow the...
                    </p>
                    <a href="#" className="question__link main-text-btn">
                      <SvgIcon icon="arrow-right" className="icon-left" />
                      Read more
                    </a>
                  </li>
                  <li className="question__item">
                    <h3 className="question__title">
                      How do I cancel my reservation for a place to stay?
                    </h3>
                    <p className="question__text">
                      You can cancel a reservation any time before or during your trip.
                    </p>
                    <a href="#" className="question__link main-text-btn">
                      <SvgIcon icon="arrow-right" className="icon-left" />
                      Read more
                    </a>
                  </li>
                  <li className="question__item">
                    <h3 className="question__title">
                      What should I do if someone asks me to pay outside of the platform?
                    </h3>
                    <p className="question__text">
                      If someone asks to pay for your reservation outside of (ex: a wire or bank
                      transfer), you ne...
                    </p>
                    <a href="#" className="question__link main-text-btn">
                      <SvgIcon icon="arrow-right" className="icon-left" />
                      Read more
                    </a>
                  </li>
                  <li className="question__item">
                    <h3 className="question__title">Update or recover your password</h3>
                    <p className="question__text">
                      Forgot your password or having trouble signing in? We&apos;ve been there. Time
                      for recovery.
                    </p>
                    <a href="#" className="question__link main-text-btn">
                      <SvgIcon icon="arrow-right" className="icon-left" />
                      Read more
                    </a>
                  </li>
                </ul>
                <a href="#" className="main-btn main-btn--secondary min-width-160">
                  Browse all topics
                </a>
              </div>
            </TabPane>
            <TabPane tab="General" key="3">
              <div className="question__content pt-16">
                <ul className="question__list mb-40">
                  <li className="question__item">
                    <h3 className="question__title">
                      How do I cancel my reservation for a place to stay?
                    </h3>
                    <p className="question__text">
                      You can cancel a reservation any time before or during your trip.
                    </p>
                    <a href="#" className="question__link main-text-btn">
                      <SvgIcon icon="arrow-right" className="icon-left" />
                      Read more
                    </a>
                  </li>
                  <li className="question__item">
                    <h3 className="question__title">
                      What should I do if someone asks me to pay outside of the platform?
                    </h3>
                    <p className="question__text">
                      If someone asks to pay for your reservation outside of (ex: a wire or bank
                      transfer), you ne...
                    </p>
                    <a href="#" className="question__link main-text-btn">
                      <SvgIcon icon="arrow-right" className="icon-left" />
                      Read more
                    </a>
                  </li>
                  <li className="question__item">
                    <h3 className="question__title">Update or recover your password</h3>
                    <p className="question__text">
                      Forgot your password or having trouble signing in? We&apos;ve been there. Time
                      for recovery.
                    </p>
                    <a href="#" className="question__link main-text-btn">
                      <SvgIcon icon="arrow-right" className="icon-left" />
                      Read more
                    </a>
                  </li>
                  <li className="question__item">
                    <h3 className="question__title">What is Luxorts and how does it work?</h3>
                    <p className="question__text">
                      Luxorts helps make sharing easy, enjoyable, and safe. We verify personal
                      profiles and listings, ...
                    </p>
                    <a href="#" className="question__link main-text-btn">
                      <SvgIcon icon="arrow-right" className="icon-left" />
                      Read more
                    </a>
                  </li>
                </ul>
                <a href="#" className="main-btn main-btn--secondary min-width-160">
                  Browse all topics
                </a>
              </div>
            </TabPane>
          </Tabs>
        </div>
        <div className="faq__footer pt-40 pt-md-80 pb-40 pb-md-80">
          <div className="faq__column">
            <h2 className="faq__subtitle mb-8">Not finding what you need?</h2>
            <p className="faq__text mb-0">
              Find category-specific content in these other sections of the FAQ.
            </p>
          </div>
          <a href="#" className="main-btn main-btn--primary min-width-140">
            Contact us
          </a>
        </div>
      </section>
    </div>
    <MainFooter isFooterMenu isLanding />
  </div>
);

export default Faq;
