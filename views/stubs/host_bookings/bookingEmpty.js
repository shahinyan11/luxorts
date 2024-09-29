import React from 'react';
import MainHeader from '../layout/header';

const BookingEmpty = () => (
  <div className="main-layout">
    <MainHeader isMainMenu />
    <div className="main-layout__content main-layout__content--wide">
      <section className="listing">
        <div className="listing__header">
          <h1 className="listing__title">
            Bookings
            <span className="listing__counter"> 0</span>
          </h1>
        </div>
        <div className="listing__empty pt-64 pt-md-128 pb-64 pb-md-128">
          <img alt="" src="/images/empty.png" width="136" height="136" className="mb-24" />
          <p className="listing__text mb-32">No bookings yet.</p>
        </div>
      </section>
    </div>
  </div>
);

export default BookingEmpty;
