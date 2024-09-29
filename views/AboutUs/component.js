import React from 'react';
import { FormattedMessage } from 'react-intl';
import Image from 'next/image';
import Link from 'next/link';

import LandingPagesLayout from 'views/layouts/LandingPages';
import SvgIcon from 'views/shared/SvgIcon';

import useContainer, { getInitialProps } from './hook';

const AboutUs = () => {
  const { propertiesCount, hostsCount, citiesCount } = useContainer();

  return (
    <>
      <section className="mission pt-40 pt-md-80 pb-40 pb-md-80">
        <h1 className="mission__title mb-8">
          <FormattedMessage
            id="aboutUs.title"
            values={{
              styledWord: (
                <span className="mission__accent">
                  <FormattedMessage id="shared.luxorts" />
                </span>
              ),
            }}
          />
        </h1>
        <p className="mission__description mb-40 mb-md-80">
          <FormattedMessage id="aboutUs.whenWePowerMoreTravel" />
        </p>
        <div className="mission__container mb-40 mb-md-80">
          <Image
            alt=""
            width="480"
            height="380"
            src="/images/mission-01.jpg"
            className="mission__image"
          />
          <Image
            alt=""
            width="480"
            height="380"
            src="/images/mission-02.jpg"
            className="mission__image"
          />
          <Image
            alt=""
            width="480"
            height="380"
            src="/images/mission-03.jpg"
            className="mission__image"
          />
        </div>
        <h2 className="mission__caption mb-16">
          <FormattedMessage id="aboutUs.ourMission" />
        </h2>
        <p className="mission__subtitle mb-32">
          <FormattedMessage id="aboutUs.toPowerGlobalTravel" />
        </p>
        <p className="mission__text mb-0">
          <FormattedMessage id="aboutUs.weAreTravelersAndTechnologists" />
        </p>
      </section>
      <section className="power pt-40 pt-md-80 pb-40 pb-md-80">
        <div className="power__container">
          <h2 className="power__title mb-8">
            <FormattedMessage id="aboutUs.thePowerOfOurPlatform" />
          </h2>
          <p className="power__description mb-60">
            <FormattedMessage id="aboutUs.weHelpOurTravelers" />
          </p>
          <ul className="power__list">
            <li className="power__item">
              <SvgIcon icon="property" className="power__icon" />
              <p className="power__content mb-0">
                <span className="power__value">{propertiesCount}</span>
                <span className="power__name">
                  <FormattedMessage id="shared.properties" />
                </span>
              </p>
            </li>
            <li className="power__item">
              <SvgIcon icon="city" className="power__icon" />
              <p className="power__content mb-0">
                <span className="power__value">{citiesCount}</span>
                <span className="power__name">
                  <FormattedMessage id="shared.cities" />
                </span>
              </p>
            </li>
            <li className="power__item">
              <SvgIcon icon="host" className="power__icon" />
              <p className="power__content mb-0">
                <span className="power__value">{hostsCount}</span>
                <span className="power__name">
                  <FormattedMessage id="shared.hosts" />
                </span>
              </p>
            </li>
          </ul>
        </div>
      </section>
      <section className="social pt-40 pt-md-80 pb-40 pb-md-80">
        <h2 className="social__title mb-8">
          <FormattedMessage id="aboutUs.letsGetSocial" />
        </h2>
        <p className="social__description mb-60">
          <FormattedMessage id="aboutUs.joinUsOnOurSocialNetworks" />
        </p>
        <ul className="social__list">
          <li className="social__item">
            <Link href="#">
              <a className="social__link">
                <SvgIcon icon="instagram-colored" className="social__icon" />
                <span className="social__account">
                  @<FormattedMessage id="shared.luxorts" />
                </span>
              </a>
            </Link>
          </li>
          <li className="social__item">
            <Link href="#">
              <a className="social__link">
                <SvgIcon icon="facebook-colored" className="social__icon" />
                <span className="social__account">
                  @<FormattedMessage id="shared.luxorts" />
                </span>
              </a>
            </Link>
          </li>
          <li className="social__item">
            <Link href="#">
              <a className="social__link">
                <SvgIcon icon="twitter-colored" className="social__icon" />
                <span className="social__account">
                  @<FormattedMessage id="shared.luxorts" />
                </span>
              </a>
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
};

AboutUs.getInitialProps = getInitialProps;

AboutUs.Layout = LandingPagesLayout;

export default AboutUs;
