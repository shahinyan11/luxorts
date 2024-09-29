import React from 'react';
import SvgIcon from 'views/stubs/shared/SvgIcon';
import MainHeader from '../layout/header';
import MainFooter from '../layout/footer';

const FaqAnswer = () => (
  <div className="main-layout">
    <MainHeader isLanding isWithFilter />
    <div className="main-layout__content">
      <ul className="breadcrumbs mt-32 mb-32">
        <li className="breadcrumbs__item">
          <a href="#" className="breadcrumbs__link">
            FAQ
          </a>
          <SvgIcon icon="arrow-right" className="breadcrumbs__icon" />
        </li>
        <li className="breadcrumbs__item">
          <a href="#" className="breadcrumbs__link">
            For Guests
          </a>
          <SvgIcon icon="arrow-right" className="breadcrumbs__icon" />
        </li>
        <li className="breadcrumbs__item">
          <a href="#" className="breadcrumbs__link">
            Update or recover your password
          </a>
        </li>
      </ul>
      <section className="answer mb-24 mb-md-64">
        <h1 className="answer__title mb-32">Update or recover your password</h1>
        <p className="answer__text mb-32">
          Forgot your password or having trouble signing in? We&apos;ve been there. Time for
          recovery.
        </p>
        <h2 className="answer__subtitle mb-16">Recover your password</h2>
        <ol className="answer__list mb-16">
          <li className="answer__item">
            1. Go to the{' '}
            <a href="#" className="main-link">
              Login & security
            </a>{' '}
            page.
          </li>
          <li className="answer__item">
            2. Click <span className="answer__accent">Recover.</span>
          </li>
          <li className="answer__item">3. Enter the security code we will send to your email.</li>
          <li className="answer__item">4. Enter your new password.</li>
          <li className="answer__item">
            5. Click <span className="answer__accent">Submit.</span>
          </li>
        </ol>
        <p className="answer__text mb-24">
          If you&apos;ve requested the email more than once, make sure you&apos;re using the right
          email address.
        </p>
        <h2 className="answer__subtitle mb-16">Update your password</h2>
        <p className="answer__text mb-16">
          If you know your current password, and you want to change it:
        </p>
        <ol className="answer__list mb-16">
          <li className="answer__item">
            1. Go to the{' '}
            <a href="#" className="main-link">
              Login & security
            </a>{' '}
            page.
          </li>
          <li className="answer__item">
            2. Click <span className="answer__accent">Update.</span>
          </li>
          <li className="answer__item">3. Enter your current password.</li>
          <li className="answer__item">4. Enter your new password.</li>
          <li className="answer__item">
            5. Click <span className="answer__accent">Submit.</span>
          </li>
        </ol>
      </section>
    </div>
    <MainFooter isFooterMenu isLanding />
  </div>
);

export default FaqAnswer;
