import React from 'react';
import MainHeader from '../layout/header';
import MainFooter from '../layout/footer';

const PrivacyPolicy = () => (
  <div className="main-layout">
    <MainHeader isLanding isWithFilter />
    <div className="main-layout__content main-layout__content--full-width">
      <section className="terms">
        <div className="terms__container">
          <div className="terms__header mb-32">
            <h1 className="terms__title mb-8">Privacy Policy</h1>
            <p className="terms__update mb-0">Last updated: Jan 10, 2022</p>
          </div>
          <div className="terms__content">
            <div className="terms__column">
              <p className="terms__text mb-24">
                Luxorts exists to help build connections between people and make the world more open
                and inclusive. In short-to build a world where anyone can belong anywhere. We are a
                community built on trust. A fundamental part of earning that trust means being clear
                about how we use your information and protect your human right to privacy.
              </p>
              <p className="terms__text mb-32">
                This Privacy Policy describes how Luxorts and its affiliates (&#34;we&#34;,
                &#34;us&#34; or &#34;Luxorts&#34;), process personal information that we collect
                through the Luxorts. Depending on where you live and what you are doing on the
                Luxorts, the supplemental privacy pages listed below may apply to you. Please follow
                the links and review the supplemental information provided there with information
                about how we process personal information for those regions and services.
              </p>
              <h3 className="terms__item-title mb-16" id="definitions">
                1. Definitions.
              </h3>
              <p className="terms__text mb-16">
                Undefined terms in this Privacy Policy have the same definition as in our{' '}
                <a href="#" className="main-link">
                  Terms of Service
                </a>{' '}
                (&#34;Terms&#34;).
              </p>
              <h3 className="terms__item-title mb-16" id="personal-information-we-collect">
                2. Personal information we collect.
              </h3>
              <h4 className="terms__item-subtitle mb-16">
                2.1 Information needed to use the Luxorts.
              </h4>
              <p className="terms__text mb-16">
                We collect personal information about you when you use the Airbnb Platform. Without
                it, we may not be able to provide you with all services requested. This information
                includes:
              </p>
              <ul className="terms__list">
                <li className="terms__list-item">
                  <b className="terms__accent">
                    Contact Information, Account, Profile Information.{' '}
                  </b>
                  Such as your first name, last name, phone number, postal address, email address,
                  date of birth, and profile photo, some of which will depend on the features you
                  use.
                </li>
                <li className="terms__list-item">
                  <b className="terms__accent">Identity Verification and Payment Information. </b>
                  Such as images of your government issued ID (as permitted by applicable laws),
                  your ID number or other verification information, bank account or payment account
                  information.
                </li>
              </ul>
              <h4 className="terms__item-subtitle mb-16">2.2 Information you choose to give us.</h4>
              <p className="terms__text mb-16">
                You can choose to provide us with additional personal information. This information
                may include:
              </p>
              <ul className="terms__list">
                <li className="terms__list-item">
                  <b className="terms__accent">Additional Profile Information. </b>
                  Such as gender, preferred language(s), city, and personal description. Some of
                  this information as indicated in your account settings is part of your public
                  profile page and will be publicly visible.
                </li>
                <li className="terms__list-item">
                  <b className="terms__accent">Address Book Contact Information. </b>
                  Address book contacts you import or enter manually.
                </li>
                <li className="terms__list-item">
                  <b className="terms__accent">Other Information. </b>
                  Such as when you fill in a form, add information to your account, respond to
                  surveys, post to community forums, participate in promotions, communicate with our
                  customer care team and other Members, or share your experience with us. This may
                  include health information if you choose to share it with us.
                </li>
              </ul>
            </div>
            <div className="terms__navigation">
              <h3 className="terms__item-title mb-24">Table of Contents</h3>
              <div className="terms__group">
                <ol className="terms__anchor-list">
                  <li className="terms__anchor-item">
                    <a href="#definitions" className="terms__anchor-link">
                      1. Definitions.
                    </a>
                  </li>
                  <li className="terms__anchor-item">
                    <a href="#personal-information-we-collect" className="terms__anchor-link">
                      2. Personal information we collect.
                    </a>
                  </li>
                  <li className="terms__anchor-item">
                    <a href="#" className="terms__anchor-link">
                      3. How we use the information we collect.
                    </a>
                  </li>
                  <li className="terms__anchor-item">
                    <a href="#" className="terms__anchor-link">
                      4. Sharing & Disclosure.
                    </a>
                  </li>
                  <li className="terms__anchor-item">
                    <a href="#" className="terms__anchor-link">
                      5. Other important information.
                    </a>
                  </li>
                  <li className="terms__anchor-item">
                    <a href="#" className="terms__anchor-link">
                      6. Your rights.
                    </a>
                  </li>
                  <li className="terms__anchor-item">
                    <a href="#" className="terms__anchor-link">
                      7. Data access and portability.
                    </a>
                  </li>
                  <li className="terms__anchor-item">
                    <a href="#" className="terms__anchor-link">
                      8. Data erasure.
                    </a>
                  </li>
                  <li className="terms__anchor-item">
                    <a href="#" className="terms__anchor-link">
                      9. Security.
                    </a>
                  </li>
                  <li className="terms__anchor-item">
                    <a href="#" className="terms__anchor-link">
                      10. Changes to this Privacy Policy.
                    </a>
                  </li>
                  <li className="terms__anchor-item">
                    <a href="#" className="terms__anchor-link">
                      11. Contact information and responsible entities.
                    </a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <MainFooter isFooterMenu isLanding />
  </div>
);

export default PrivacyPolicy;
