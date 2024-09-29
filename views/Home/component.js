import React from 'react';
import { Form } from 'antd';
import { FormattedMessage } from 'react-intl';
import { FormikProvider } from 'formik';
import Link from 'next/link';

import ROUTES from 'constants/routes';
import { PROPERTY_TYPE_IMAGES, TRENDING_LOCATION_IMAGES } from 'constants';

import RangePickerField from 'views/shared/form/RangePickerField';
import HomePageLayout from 'views/layouts/HomePage';
import GradientButton from 'views/shared/GradientButton';
import InputField from 'views/shared/form/InputField';
import SvgIcon from 'views/shared/SvgIcon';
import TrendingCard from 'views/shared/TrendingCard';
import PropertyCard from 'views/shared/PropertyCard';
import ApartmentCard from 'views/shared/ApartmentCard';

import useContainer, { getInitialProps } from './hook';

const Home = () => {
  const {
    formik,
    propertyTypes,
    trendingLocations,
    popularApartments,
    popularApartmentsLastPage,
    popularApartmentsSelfPage,
    handleNext,
    handlePrev,
  } = useContainer();

  return (
    <>
      <section className="intro">
        <div className="intro__container">
          <h1 className="intro__title mb-16">
            <FormattedMessage id="home.findYour" />
            <span className="intro__title-accent">
              <FormattedMessage id="home.perfectApartments" />
            </span>
          </h1>
          <p className="intro__text mb-40">
            <FormattedMessage id="home.discoverAndBookApartments" />
          </p>
          <Form layout="vertical" size="large" className="intro__search search search--home">
            <FormikProvider value={formik}>
              <div className="search__location">
                <InputField
                  name="location"
                  label={{ id: 'shared.location' }}
                  placeholder={{ id: 'shared.whereAreYouGoing' }}
                  formItemClassName="search__item"
                  className="search__input"
                  allowClear={{ clearIcon: <SvgIcon icon="cross" /> }}
                />
              </div>
              <div className="search__dates">
                <div className="search__labels">
                  <p className="search__label">
                    <FormattedMessage id="shared.checkIn" />
                  </p>
                  <p className="search__label">
                    <FormattedMessage id="shared.checkOut" />
                  </p>
                </div>
                <RangePickerField
                  learIcon={<SvgIcon icon="cross" />}
                  placeholder={[{ id: 'shared.dateIn' }, { id: 'shared.dateOut' }]}
                  suffixIcon={false}
                  separator={false}
                  className="w-100"
                  size="large"
                  name="date"
                />
              </div>
              <div className="search__guests">
                <InputField
                  name="guests"
                  label={{ id: 'shared.guests' }}
                  placeholder={{ id: 'shared.addGuests' }}
                  formItemClassName="search__item mb-0"
                  className="search__input"
                  allowClear={{ clearIcon: <SvgIcon icon="cross" /> }}
                />
                <GradientButton
                  className="search__submit main-btn--icon"
                  variant="primary"
                  addonBefore={<SvgIcon icon="search" className="icon-right" />}
                />
              </div>
            </FormikProvider>
          </Form>
          <img alt="" width="1140" height="380" className="intro__img" src="/images/intro.jpg" />
        </div>
      </section>
      <section className="trending pt-40 pt-md-80 pb-40 pb-md-40">
        <div className="trending__container">
          <h2 className="trending__title mb-8">
            <FormattedMessage id="home.trendingLocationsTitle" />
          </h2>
          <p className="trending__description mb-40">
            <FormattedMessage id="home.trendingLocationsText" />
          </p>
          <div className="trending__pictures">
            {trendingLocations.map((value, index) => (
              <TrendingCard
                key={value.id}
                image={TRENDING_LOCATION_IMAGES[index]}
                small={index > 1}
                {...value}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="property">
        <div className="property__container pt-40 pt-md-80">
          <h2 className="property__title mb-8">
            <FormattedMessage id="home.propertyTypesTitle" />
          </h2>
          <p className="property__description mb-40">
            <FormattedMessage id="home.propertyTypesText" />
          </p>
          <div className="property__cards pb-40 pb-md-80">
            {propertyTypes.map((value, index) => (
              <PropertyCard key={value.id} image={PROPERTY_TYPE_IMAGES[index]} {...value} />
            ))}
          </div>
        </div>
      </section>
      <section className="popular-apartment pt-40 pt-md-80 pb-40 pb-md-80">
        <div className="popular-apartment__container">
          <h2 className="popular-apartment__title mb-8 mb-md-0">
            <FormattedMessage id="home.popularApartmentsTitle" />
          </h2>
          <div className="d-flex flex-column mb-40">
            <p className="popular-apartment__description mb-8 mb-md-0">
              <FormattedMessage id="home.popularApartmentsText" />
            </p>
            <div className="popular-apartment__column d-flex align-items-center ml-md-auto">
              <p className="counter ml-auto mr-16">
                <span className="counter__number counter__number--current">
                  {popularApartmentsSelfPage}
                </span>
                <span className="counter__divider">/</span>
                <span className="counter__number">{popularApartmentsLastPage}</span>
              </p>
              <GradientButton
                onClick={handlePrev}
                className="main-btn--icon main-btn--small mr-16"
                variant="primary"
                addonBefore={<SvgIcon icon="arrow-left" className="icon-right" />}
                disabled={popularApartmentsSelfPage === 1}
              />
              <GradientButton
                onClick={handleNext}
                className="main-btn--icon main-btn--small"
                variant="primary"
                addonBefore={<SvgIcon icon="arrow-right" className="icon-right" />}
                disabled={popularApartmentsSelfPage === popularApartmentsLastPage}
              />
            </div>
          </div>
          <div className="popular-apartment__slider">
            <div className="popular-apartment__slider-wrapper">
              {popularApartments.map((value) => (
                <ApartmentCard key={value.id} {...value} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="cta pt-40 pt-md-80 pb-40 pb-md-80">
        <div className="cta__container">
          <div className="cta__content">
            <h2 className="cta__title mb-8">
              <FormattedMessage
                id="home.tryHosting"
                values={{
                  styledWord: (
                    <span className="cta__accent">
                      <FormattedMessage id="home.hosting" />
                    </span>
                  ),
                }}
              />
            </h2>
            <p className="cta__description mb-32">
              <FormattedMessage id="home.listYourPropertyText" />
            </p>
            <Link href={ROUTES.ADD_NEW_LISTING.INDEX.PATH}>
              <a className="main-btn main-btn--primary min-width-160">
                <FormattedMessage id="home.listYourProperty" />
              </a>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

Home.getInitialProps = getInitialProps;

Home.Layout = HomePageLayout;

export default Home;
