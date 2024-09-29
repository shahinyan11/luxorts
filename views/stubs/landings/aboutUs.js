import React from 'react';
import SvgIcon from 'views/stubs/shared/SvgIcon';
import MainHeader from '../layout/header';
import MainFooter from '../layout/footer';

const AboutUs = () => (
  <div className="main-layout">
    <MainHeader isLanding isWithFilter />
    <div className="main-layout__content main-layout__content--full-width">
      <section className="mission pt-40 pt-md-80 pb-40 pb-md-80">
        <h1 className="mission__title mb-8">
          Get to know <span className="mission__accent">Luxorts</span>
        </h1>
        <p className="mission__description mb-40 mb-md-80">
          When we power more travel, we unleash more opportunities to strengthen connections,
          broaden horizons and bridge divides.
        </p>
        <div className="mission__container mb-40 mb-md-80">
          <img
            alt=""
            width="480"
            height="380"
            src="/images/mission-01.jpg"
            className="mission__image"
          />
          <img
            alt=""
            width="480"
            height="380"
            src="/images/mission-02.jpg"
            className="mission__image"
          />
          <img
            alt=""
            width="480"
            height="380"
            src="/images/mission-03.jpg"
            className="mission__image"
          />
        </div>
        <h2 className="mission__caption mb-16">Our mission</h2>
        <p className="mission__subtitle mb-32">To power global travel for everyone, everywhere.</p>
        <p className="mission__text mb-0">
          We are travelers and technologists. We&apos;re used to breaking things down and building
          them back up again until they&apos;re even better. We know travel can be hard, but we also
          know that it&apos;s worth it every time. And because we believe travel is a force for
          good, we take our roles seriously. We&apos;re here to build a great product, and
          facilitate connections between travelers and our partners that truly bring good into the
          world.
        </p>
      </section>
      <section className="power pt-40 pt-md-80 pb-40 pb-md-80">
        <div className="power__container">
          <h2 className="power__title mb-8">The power of our platform</h2>
          <p className="power__description mb-60">
            We help our travelers to find the right pathways through millions of possibilities to
            reach the best possible outcome.
          </p>
          <ul className="power__list">
            <li className="power__item">
              <SvgIcon icon="property" className="power__icon" />
              <p className="power__content mb-0">
                <span className="power__value">1.4M+</span>
                <span className="power__name">Properties</span>
              </p>
            </li>
            <li className="power__item">
              <SvgIcon icon="city" className="power__icon" />
              <p className="power__content mb-0">
                <span className="power__value">200+</span>
                <span className="power__name">Cities</span>
              </p>
            </li>
            <li className="power__item">
              <SvgIcon icon="host" className="power__icon" />
              <p className="power__content mb-0">
                <span className="power__value">400T+</span>
                <span className="power__name">Hosts</span>
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section className="social pt-40 pt-md-80 pb-40 pb-md-80">
        <h2 className="social__title mb-8">Let&apos;s get social</h2>
        <p className="social__description mb-60">Join us on our social networks.</p>
        <ul className="social__list">
          <li className="social__item">
            <a href="#" className="social__link">
              <SvgIcon icon="instagram-colored" className="social__icon" />
              <span className="social__account">@Luxorts</span>
            </a>
          </li>
          <li className="social__item">
            <a href="#" className="social__link">
              <SvgIcon icon="facebook-colored" className="social__icon" />
              <span className="social__account">@Luxorts</span>
            </a>
          </li>
          <li className="social__item">
            <a href="#" className="social__link">
              <SvgIcon icon="twitter-colored" className="social__icon" />
              <span className="social__account">@Luxorts</span>
            </a>
          </li>
        </ul>
      </section>
    </div>
    <MainFooter isFooterMenu isLanding />
  </div>
);

export default AboutUs;
