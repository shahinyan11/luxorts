import React from 'react';
import MainHeader from '../layout/header';
import MainFooter from '../layout/footer';

const TermsOfService = () => (
  <div className="main-layout">
    <MainHeader isLanding isWithFilter />
    <div className="main-layout__content main-layout__content--full-width">
      <section className="terms">
        <div className="terms__container">
          <div className="terms__header mb-32">
            <h1 className="terms__title mb-8">Terms of Service</h1>
            <p className="terms__update mb-0">Last updated: Jan 10, 2022</p>
          </div>
          <div className="terms__content">
            <div className="terms__column">
              <p className="terms__text mb-24">
                These Terms of Service are a binding legal agreement between you and Luxorts that
                governs your use of the websites, applications, and other offerings from Luxorts.
                When used in these Terms, &#34;Luxorts&#34; &#34;we&#34;, &#34;us&#34; or
                &#34;our&#34; refers to the Luxorts with whom you are contracting.
              </p>
              <p className="terms__text mb-24">
                The Luxorts offers an online venue that enables users (&#34;Members&#34;) to
                publish, offer, search for, and book services. Members who publish and offer
                services are &#34;Hosts&#34; and Members who search for, book, or use services are
                &#34;Guests&#34;. Hosts offer accommodations (&#34;Accommodations&#34;), activities,
                excursions, and a variety of travel and other services (collectively, &#34;Host
                Services&#34; and each Host Service offering, a &#34;Listing&#34;). You must
                register an account to access and use many features of the Luxorts, and must keep
                your account information accurate. As the provider of the Luxorts, Luxorts does not
                own, control, offer or manage any Listings or Host Services. Luxorts is not a party
                to the contracts concluded directly between Hosts and Guests, nor is Luxorts a real
                estate broker or insurer. Luxorts is not acting as an agent in any capacity for any
                Member, except as specified in the Payments Terms of Service (&#34;Payment
                Terms&#34;).
              </p>
              <p className="terms__text mb-24">
                We maintain other terms and policies that supplement these Terms like our Privacy
                Policy, which describes our collection and use of personal data, and our Payments
                Terms, which govern any payment services provided to Members by the Luxorts payment
                entities (&#34;Luxorts Payments&#34;).
              </p>
              <p className="terms__text mb-32">
                If you Host, you are responsible for understanding and complying with all laws,
                rules, regulations, and contracts with third parties that apply to your Host
                Services.
              </p>
              <h2 className="terms__subtitle mb-24">Guest Terms</h2>
              <h3 className="terms__item-title mb-16" id="mission">
                1. Our mission.
              </h3>
              <p className="terms__text mb-16">
                Our mission is to create a world where you can belong anywhere. From cabins to
                castles to cooking classes, browse through millions of Listings to find the ones
                that fit the way you like to travel. Learn more about a Listing by reviewing the
                description and photos, the Host profile, and Guest reviews. If you have questions,
                just message the Host.
              </p>
              <h3 className="terms__item-title mb-16" id="searching-and-booking">
                2. Searching and Booking on Luxorts.
              </h3>
              <h4 className="terms__item-subtitle mb-16">2.1 Searching.</h4>
              <p className="terms__text mb-16">
                You can search for Host Services by using criteria like the type of Host Service,
                travel destination, travel dates, and number of guests. You can also use filters to
                refine your search results. Search results are based on their relevance to your
                search and other criteria. Relevance considers factors like price, availability,
                Reviews, customer service and cancellation history, popularity, previous trips and
                saved Listings, Host requirements (e.g. minimum or maximum nights), and more.
              </p>
              <h4 className="terms__item-subtitle mb-16">2.2 Booking.</h4>
              <p className="terms__text mb-16">
                When you book a Listing, you are agreeing to pay all charges for your booking
                including the Listing price, applicable fees like Luxorts service fee, offline fees,
                taxes, and any other items identified during checkout (collectively, &#34;Total
                Price&#34;). You are also agreeing that Luxorts Payments may charge and collect any
                security deposit identified during checkout. When you receive the booking
                confirmation, a contract for Host Services (sometimes called a reservation in these
                Terms) is formed directly between you and the Host. The cancellation policy and any
                other rules, standards, policies, or requirements identified in the Listing or
                during checkout form part of your contract with the Host.
              </p>
            </div>
            <div className="terms__navigation">
              <h3 className="terms__item-title mb-24">Table of Contents</h3>
              <div className="terms__group">
                <h5 className="terms__group-title">Guest Terms</h5>
                <ol className="terms__anchor-list">
                  <li className="terms__anchor-item">
                    <a href="#mission" className="terms__anchor-link">
                      1. Our Mission.
                    </a>
                  </li>
                  <li className="terms__anchor-item">
                    <a href="#searching-and-booking" className="terms__anchor-link">
                      2. Searching and Booking on Luxorts.
                    </a>
                  </li>
                  <li className="terms__anchor-item">
                    <a href="#" className="terms__anchor-link">
                      3. Cancellations, Travel Issues, Refunds and Booking Modifications.
                    </a>
                  </li>
                  <li className="terms__anchor-item">
                    <a href="#" className="terms__anchor-link">
                      4. Your Responsibilities and Assumption of Risk.
                    </a>
                  </li>
                </ol>
              </div>
              <div className="terms__group">
                <h5 className="terms__group-title">Host Terms</h5>
                <ol className="terms__anchor-list">
                  <li className="terms__anchor-item">
                    <a href="#" className="terms__anchor-link">
                      1. Hosting on Luxorts.
                    </a>
                  </li>
                  <li className="terms__anchor-item">
                    <a href="#" className="terms__anchor-link">
                      2. Managing Your Listing.
                    </a>
                  </li>
                  <li className="terms__anchor-item">
                    <a href="#" className="terms__anchor-link">
                      3. Cancellations, Travel Issues, and Booking Modifications.
                    </a>
                  </li>
                  <li className="terms__anchor-item">
                    <a href="#" className="terms__anchor-link">
                      4. Taxes.
                    </a>
                  </li>
                </ol>
              </div>
              <div className="terms__group">
                <h5 className="terms__group-title">General Terms</h5>
                <ol className="terms__anchor-list">
                  <li className="terms__anchor-item">
                    <a href="#" className="terms__anchor-link">
                      1. Reviews.
                    </a>
                  </li>
                  <li className="terms__anchor-item">
                    <a href="#" className="terms__anchor-link">
                      2. Content.
                    </a>
                  </li>
                  <li className="terms__anchor-item">
                    <a href="#" className="terms__anchor-link">
                      3. Fees.
                    </a>
                  </li>
                  <li className="terms__anchor-item">
                    <a href="#" className="terms__anchor-link">
                      4. Luxorts Rules.
                    </a>
                  </li>
                  <li className="terms__anchor-item">
                    <a href="#" className="terms__anchor-link">
                      5. Termination, Suspension and other Measures.
                    </a>
                  </li>
                  <li className="terms__anchor-item">
                    <a href="#" className="terms__anchor-link">
                      6. Modification.
                    </a>
                  </li>
                  <li className="terms__anchor-item">
                    <a href="#" className="terms__anchor-link">
                      7. Resolving Complaints and Damage Claims.
                    </a>
                  </li>
                  <li className="terms__anchor-item">
                    <a href="#" className="terms__anchor-link">
                      8. Luxorts Role.
                    </a>
                  </li>
                  <li className="terms__anchor-item">
                    <a href="#" className="terms__anchor-link">
                      9. Member Accounts.
                    </a>
                  </li>
                  <li className="terms__anchor-item">
                    <a href="#" className="terms__anchor-link">
                      10. Disclaimer of Warranties.
                    </a>
                  </li>
                  <li className="terms__anchor-item">
                    <a href="#" className="terms__anchor-link">
                      11. Limitations on Liability.
                    </a>
                  </li>
                  <li className="terms__anchor-item">
                    <a href="#" className="terms__anchor-link">
                      12. Indemnification.
                    </a>
                  </li>
                  <li className="terms__anchor-item">
                    <a href="#" className="terms__anchor-link">
                      13. Contracting Entities.
                    </a>
                  </li>
                  <li className="terms__anchor-item">
                    <a href="#" className="terms__anchor-link">
                      14. United States Governing Law and Venue.
                    </a>
                  </li>
                  <li className="terms__anchor-item">
                    <a href="#" className="terms__anchor-link">
                      15. United States Dispute Resolution and Arbitration Agreement.
                    </a>
                  </li>
                  <li className="terms__anchor-item">
                    <a href="#" className="terms__anchor-link">
                      16. Miscellaneous.
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

export default TermsOfService;
