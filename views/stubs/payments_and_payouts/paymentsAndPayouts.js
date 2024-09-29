import React from 'react';
import { Tabs, Table, Button } from 'antd';
import MainHeader from '../layout/header';
import SvgIcon from '../shared/SvgIcon';

const { TabPane } = Tabs;
const { Column } = Table;

const dataSource = [
  {
    'payment-method': (
      <div className="d-flex">
        <img alt="" width="24" height="24" src="/images/mastercard.png" className="mr-8" />
        <p className="mb-0 table__email">Mastercard **** 1648</p>
      </div>
    ),
    listing: (
      <div className="d-flex align-items-center">
        <img
          alt=""
          width="68"
          height="48"
          src="/images/housing-preview-01.png"
          className="mr-8 mr-sm-16 table__housing-img"
        />
        <p className="mb-0 table__column-name">Charming and comfortable house</p>
      </div>
    ),
    date: (
      <div className="d-flex align-items-center">
        Jun 16, 2021 <span className="table__time ml-4">(10:00 AM)</span>
      </div>
    ),
    amount: '$1,620.00',
  },
  {
    'payment-method': (
      <div className="d-flex">
        <img alt="" width="24" height="24" src="/images/visa.png" className="mr-8" />
        <p className="mb-0 table__email">Visa **** 1264</p>
      </div>
    ),
    listing: (
      <div className="d-flex align-items-center">
        <img
          alt=""
          width="68"
          height="48"
          src="/images/housing-preview-02.png"
          className="mr-8 mr-sm-16 table__housing-img"
        />
        <p className="mb-0 table__column-name">Luxury Bi-Level in Heart of Center City</p>
      </div>
    ),
    date: (
      <div className="d-flex align-items-center">
        Jun 16, 2021 <span className="table__time ml-4">(10:00 AM)</span>
      </div>
    ),
    amount: '$1,620.00',
  },
  {
    'payment-method': (
      <div className="d-flex">
        <img alt="" width="24" height="24" src="/images/paypal.png" className="mr-8" />
        <p className="mb-0 table__email">rodney.harmon@gmail.com</p>
      </div>
    ),
    listing: (
      <div className="d-flex align-items-center">
        <img
          alt=""
          width="68"
          height="48"
          src="/images/housing-preview-03.png"
          className="mr-8 mr-sm-16 table__housing-img"
        />
        <p className="mb-0 table__column-name">Sosuite | Art deco dream in University</p>
      </div>
    ),
    date: (
      <div className="d-flex align-items-center">
        Jun 16, 2021 <span className="table__time ml-4">(10:00 AM)</span>
      </div>
    ),
    amount: '$1,620.00',
  },
  {
    'payment-method': (
      <div className="d-flex">
        <img alt="" width="24" height="24" src="/images/visa.png" className="mr-8" />
        <p className="mb-0 table__email">Visa **** 1264</p>
      </div>
    ),
    listing: (
      <div className="d-flex align-items-center">
        <img
          alt=""
          width="68"
          height="48"
          src="/images/housing-preview-04.png"
          className="mr-8 mr-sm-16 table__housing-img"
        />
        <p className="mb-0 table__column-name">Pink Modern Apartment</p>
      </div>
    ),
    date: (
      <div className="d-flex align-items-center">
        Jun 16, 2021 <span className="table__time ml-4">(10:00 AM)</span>
      </div>
    ),
    amount: '$1,620.00',
  },
  {
    'payment-method': (
      <div className="d-flex">
        <img alt="" width="24" height="24" src="/images/paypal.png" className="mr-8" />
        <p className="mb-0 table__email">rodney.harmon@gmail.com</p>
      </div>
    ),
    listing: (
      <div className="d-flex align-items-center">
        <img
          alt=""
          width="68"
          height="48"
          src="/images/housing-preview-05.png"
          className="mr-8 mr-sm-16 table__housing-img"
        />
        <p className="mb-0 table__column-name">Sweet home with private entrance</p>
      </div>
    ),
    date: (
      <div className="d-flex align-items-center">
        Jun 16, 2021 <span className="table__time ml-4">(10:00 AM)</span>
      </div>
    ),
    amount: '$1,620.00',
  },
  {
    'payment-method': (
      <div className="d-flex">
        <img alt="" width="24" height="24" src="/images/paypal.png" className="mr-8" />
        <p className="mb-0 table__email">rodney.harmon@gmail.com</p>
      </div>
    ),
    listing: (
      <div className="d-flex align-items-center">
        <img
          alt=""
          width="68"
          height="48"
          src="/images/housing-preview-06.png"
          className="mr-8 mr-sm-16 table__housing-img"
        />
        <p className="mb-0 table__column-name">Sweet Oasis in Historic Philly</p>
      </div>
    ),
    date: (
      <div className="d-flex align-items-center">
        Jun 16, 2021 <span className="table__time ml-4">(10:00 AM)</span>
      </div>
    ),
    amount: '$1,620.00',
  },
  {
    'payment-method': (
      <div className="d-flex">
        <img alt="" width="24" height="24" src="/images/mastercard.png" className="mr-8" />
        <p className="mb-0 table__email">Mastercard **** 1648</p>
      </div>
    ),
    listing: (
      <div className="d-flex align-items-center">
        <img
          alt=""
          width="68"
          height="48"
          src="/images/housing-preview-07.png"
          className="mr-8 mr-sm-16 table__housing-img"
        />
        <p className="mb-0 table__column-name">Beautiful private, bedroom with full...</p>
      </div>
    ),
    date: (
      <div className="d-flex align-items-center">
        Jun 16, 2021 <span className="table__time ml-4">(10:00 AM)</span>
      </div>
    ),
    amount: '$1,620.00',
  },
  {
    'payment-method': (
      <div className="d-flex">
        <img alt="" width="24" height="24" src="/images/mastercard.png" className="mr-8" />
        <p className="mb-0 table__email">Mastercard **** 1648</p>
      </div>
    ),
    listing: (
      <div className="d-flex align-items-center">
        <img
          alt=""
          width="68"
          height="48"
          src="/images/housing-preview-08.png"
          className="mr-8 mr-sm-16 table__housing-img"
        />
        <p className="mb-0 table__column-name">Gorgeous Studio with Parking and Central</p>
      </div>
    ),
    date: (
      <div className="d-flex align-items-center">
        Jun 16, 2021 <span className="table__time ml-4">(10:00 AM)</span>
      </div>
    ),
    amount: '$1,620.00',
  },
  {
    'payment-method': (
      <div className="d-flex">
        <img alt="" width="24" height="24" src="/images/mastercard.png" className="mr-8" />
        <p className="mb-0 table__email">Mastercard **** 1648</p>
      </div>
    ),
    listing: (
      <div className="d-flex align-items-center">
        <img
          alt=""
          width="68"
          height="48"
          src="/images/housing-preview-01.png"
          className="mr-8 mr-sm-16 table__housing-img"
        />
        <p className="mb-0 table__column-name">Charming and comfortable house</p>
      </div>
    ),
    date: (
      <div className="d-flex align-items-center">
        Jun 16, 2021 <span className="table__time ml-4">(10:00 AM)</span>
      </div>
    ),
    amount: '$1,620.00',
  },
  {
    'payment-method': (
      <div className="d-flex">
        <img alt="" width="24" height="24" src="/images/visa.png" className="mr-8" />
        <p className="mb-0 table__email">Visa **** 1264</p>
      </div>
    ),
    listing: (
      <div className="d-flex align-items-center">
        <img
          alt=""
          width="68"
          height="48"
          src="/images/housing-preview-02.png"
          className="mr-8 mr-sm-16 table__housing-img"
        />
        <p className="mb-0 table__column-name">Luxury Bi-Level in Heart of Center City</p>
      </div>
    ),
    date: (
      <div className="d-flex align-items-center">
        Jun 16, 2021 <span className="table__time ml-4">(10:00 AM)</span>
      </div>
    ),
    amount: '$1,620.00',
  },
  {
    'payment-method': (
      <div className="d-flex">
        <img alt="" width="24" height="24" src="/images/paypal.png" className="mr-8" />
        <p className="mb-0 table__email">rodney.harmon@gmail.com</p>
      </div>
    ),
    listing: (
      <div className="d-flex align-items-center">
        <img
          alt=""
          width="68"
          height="48"
          src="/images/housing-preview-03.png"
          className="mr-8 mr-sm-16 table__housing-img"
        />
        <p className="mb-0 table__column-name">Sosuite | Art deco dream in University</p>
      </div>
    ),
    date: (
      <div className="d-flex align-items-center">
        Jun 16, 2021 <span className="table__time ml-4">(10:00 AM)</span>
      </div>
    ),
    amount: '$1,620.00',
  },
  {
    'payment-method': (
      <div className="d-flex">
        <img alt="" width="24" height="24" src="/images/visa.png" className="mr-8" />
        <p className="mb-0 table__email">Visa **** 1264</p>
      </div>
    ),
    listing: (
      <div className="d-flex align-items-center">
        <img
          alt=""
          width="68"
          height="48"
          src="/images/housing-preview-04.png"
          className="mr-8 mr-sm-16 table__housing-img"
        />
        <p className="mb-0 table__column-name">Pink Modern Apartment</p>
      </div>
    ),
    date: (
      <div className="d-flex align-items-center">
        Jun 16, 2021 <span className="table__time ml-4">(10:00 AM)</span>
      </div>
    ),
    amount: '$1,620.00',
  },
  {
    'payment-method': (
      <div className="d-flex">
        <img alt="" width="24" height="24" src="/images/paypal.png" className="mr-8" />
        <p className="mb-0 table__email">rodney.harmon@gmail.com</p>
      </div>
    ),
    listing: (
      <div className="d-flex align-items-center">
        <img
          alt=""
          width="68"
          height="48"
          src="/images/housing-preview-05.png"
          className="mr-8 mr-sm-16 table__housing-img"
        />
        <p className="mb-0 table__column-name">Sweet home with private entrance</p>
      </div>
    ),
    date: (
      <div className="d-flex align-items-center">
        Jun 16, 2021 <span className="table__time ml-4">(10:00 AM)</span>
      </div>
    ),
    amount: '$1,620.00',
  },
  {
    'payment-method': (
      <div className="d-flex">
        <img alt="" width="24" height="24" src="/images/paypal.png" className="mr-8" />
        <p className="mb-0 table__email">rodney.harmon@gmail.com</p>
      </div>
    ),
    listing: (
      <div className="d-flex align-items-center">
        <img
          alt=""
          width="68"
          height="48"
          src="/images/housing-preview-06.png"
          className="mr-8 mr-sm-16 table__housing-img"
        />
        <p className="mb-0 table__column-name">Sweet Oasis in Historic Philly</p>
      </div>
    ),
    date: (
      <div className="d-flex align-items-center">
        Jun 16, 2021 <span className="table__time ml-4">(10:00 AM)</span>
      </div>
    ),
    amount: '$1,620.00',
  },
  {
    'payment-method': (
      <div className="d-flex">
        <img alt="" width="24" height="24" src="/images/mastercard.png" className="mr-8" />
        <p className="mb-0 table__email">Mastercard **** 1648</p>
      </div>
    ),
    listing: (
      <div className="d-flex align-items-center">
        <img
          alt=""
          width="68"
          height="48"
          src="/images/housing-preview-07.png"
          className="mr-8 mr-sm-16 table__housing-img"
        />
        <p className="mb-0 table__column-name">Beautiful private, bedroom with full...</p>
      </div>
    ),
    date: (
      <div className="d-flex align-items-center">
        Jun 16, 2021 <span className="table__time ml-4">(10:00 AM)</span>
      </div>
    ),
    amount: '$1,620.00',
  },
  {
    'payment-method': (
      <div className="d-flex">
        <img alt="" width="24" height="24" src="/images/mastercard.png" className="mr-8" />
        <p className="mb-0 table__email">Mastercard **** 1648</p>
      </div>
    ),
    listing: (
      <div className="d-flex align-items-center">
        <img
          alt=""
          width="68"
          height="48"
          src="/images/housing-preview-08.png"
          className="mr-8 mr-sm-16 table__housing-img"
        />
        <p className="mb-0 table__column-name">Gorgeous Studio with Parking and Central</p>
      </div>
    ),
    date: (
      <div className="d-flex align-items-center">
        Jun 16, 2021 <span className="table__time ml-4">(10:00 AM)</span>
      </div>
    ),
    amount: '$1,620.00',
  },
  {
    'payment-method': (
      <div className="d-flex">
        <img alt="" width="24" height="24" src="/images/mastercard.png" className="mr-8" />
        <p className="mb-0 table__email">Mastercard **** 1648</p>
      </div>
    ),
    listing: (
      <div className="d-flex align-items-center">
        <img
          alt=""
          width="68"
          height="48"
          src="/images/housing-preview-01.png"
          className="mr-8 mr-sm-16 table__housing-img"
        />
        <p className="mb-0 table__column-name">Charming and comfortable house</p>
      </div>
    ),
    date: (
      <div className="d-flex align-items-center">
        Jun 16, 2021 <span className="table__time ml-4">(10:00 AM)</span>
      </div>
    ),
    amount: '$1,620.00',
  },
  {
    'payment-method': (
      <div className="d-flex">
        <img alt="" width="24" height="24" src="/images/visa.png" className="mr-8" />
        <p className="mb-0 table__email">Visa **** 1264</p>
      </div>
    ),
    listing: (
      <div className="d-flex align-items-center">
        <img
          alt=""
          width="68"
          height="48"
          src="/images/housing-preview-02.png"
          className="mr-8 mr-sm-16 table__housing-img"
        />
        <p className="mb-0 table__column-name">Luxury Bi-Level in Heart of Center City</p>
      </div>
    ),
    date: (
      <div className="d-flex align-items-center">
        Jun 16, 2021 <span className="table__time ml-4">(10:00 AM)</span>
      </div>
    ),
    amount: '$1,620.00',
  },
  {
    'payment-method': (
      <div className="d-flex">
        <img alt="" width="24" height="24" src="/images/paypal.png" className="mr-8" />
        <p className="mb-0 table__email">rodney.harmon@gmail.com</p>
      </div>
    ),
    listing: (
      <div className="d-flex align-items-center">
        <img
          alt=""
          width="68"
          height="48"
          src="/images/housing-preview-03.png"
          className="mr-8 mr-sm-16 table__housing-img"
        />
        <p className="mb-0 table__column-name">Sosuite | Art deco dream in University</p>
      </div>
    ),
    date: (
      <div className="d-flex align-items-center">
        Jun 16, 2021 <span className="table__time ml-4">(10:00 AM)</span>
      </div>
    ),
    amount: '$1,620.00',
  },
  {
    'payment-method': (
      <div className="d-flex">
        <img alt="" width="24" height="24" src="/images/visa.png" className="mr-8" />
        <p className="mb-0 table__email">Visa **** 1264</p>
      </div>
    ),
    listing: (
      <div className="d-flex align-items-center">
        <img
          alt=""
          width="68"
          height="48"
          src="/images/housing-preview-04.png"
          className="mr-8 mr-sm-16 table__housing-img"
        />
        <p className="mb-0 table__column-name">Pink Modern Apartment</p>
      </div>
    ),
    date: (
      <div className="d-flex align-items-center">
        Jun 16, 2021 <span className="table__time ml-4">(10:00 AM)</span>
      </div>
    ),
    amount: '$1,620.00',
  },
  {
    'payment-method': (
      <div className="d-flex">
        <img alt="" width="24" height="24" src="/images/paypal.png" className="mr-8" />
        <p className="mb-0 table__email">rodney.harmon@gmail.com</p>
      </div>
    ),
    listing: (
      <div className="d-flex align-items-center">
        <img
          alt=""
          width="68"
          height="48"
          src="/images/housing-preview-05.png"
          className="mr-8 mr-sm-16 table__housing-img"
        />
        <p className="mb-0 table__column-name">Sweet home with private entrance</p>
      </div>
    ),
    date: (
      <div className="d-flex align-items-center">
        Jun 16, 2021 <span className="table__time ml-4">(10:00 AM)</span>
      </div>
    ),
    amount: '$1,620.00',
  },
  {
    'payment-method': (
      <div className="d-flex">
        <img alt="" width="24" height="24" src="/images/paypal.png" className="mr-8" />
        <p className="mb-0 table__email">rodney.harmon@gmail.com</p>
      </div>
    ),
    listing: (
      <div className="d-flex align-items-center">
        <img
          alt=""
          width="68"
          height="48"
          src="/images/housing-preview-06.png"
          className="mr-8 mr-sm-16 table__housing-img"
        />
        <p className="mb-0 table__column-name">Sweet Oasis in Historic Philly</p>
      </div>
    ),
    date: (
      <div className="d-flex align-items-center">
        Jun 16, 2021 <span className="table__time ml-4">(10:00 AM)</span>
      </div>
    ),
    amount: '$1,620.00',
  },
  {
    'payment-method': (
      <div className="d-flex">
        <img alt="" width="24" height="24" src="/images/mastercard.png" className="mr-8" />
        <p className="mb-0 table__email">Mastercard **** 1648</p>
      </div>
    ),
    listing: (
      <div className="d-flex align-items-center">
        <img
          alt=""
          width="68"
          height="48"
          src="/images/housing-preview-07.png"
          className="mr-8 mr-sm-16 table__housing-img"
        />
        <p className="mb-0 table__column-name">Beautiful private, bedroom with full...</p>
      </div>
    ),
    date: (
      <div className="d-flex align-items-center">
        Jun 16, 2021 <span className="table__time ml-4">(10:00 AM)</span>
      </div>
    ),
    amount: '$1,620.00',
  },
  {
    'payment-method': (
      <div className="d-flex">
        <img alt="" width="24" height="24" src="/images/mastercard.png" className="mr-8" />
        <p className="mb-0 table__email">Mastercard **** 1648</p>
      </div>
    ),
    listing: (
      <div className="d-flex align-items-center">
        <img
          alt=""
          width="68"
          height="48"
          src="/images/housing-preview-08.png"
          className="mr-8 mr-sm-16 table__housing-img"
        />
        <p className="mb-0 table__column-name">Gorgeous Studio with Parking and Central</p>
      </div>
    ),
    date: (
      <div className="d-flex align-items-center">
        Jun 16, 2021 <span className="table__time ml-4">(10:00 AM)</span>
      </div>
    ),
    amount: '$1,620.00',
  },
];

const PaymentsAndPayouts = () => (
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
              Payments & payouts
            </a>
          </li>
        </ul>
        <h1 className="text-display-2 mb-lg-64 mb-32">Payments & payouts</h1>
        <Tabs defaultActiveKey="1" className="w-100">
          <TabPane tab="Payments" key="1">
            <div className="personal-information__content pl-4">
              <div className="personal-information__user">
                <h2 className="text-headline-2 mb-8 mt-12">Payment methods</h2>
                <p className="personal-information__text text-body mb-24">
                  Add payment methods using our secure payment system, then start planning your next
                  trip. Our secure payment system supports several payment methods, which can be set
                  up below.
                </p>
                <div className="add-card mb-16 d-flex flex-row align-items-flex-start">
                  <img
                    alt=""
                    src="/images/bank-card.png"
                    className="add-card__image mr-16"
                    width="48"
                    height="48"
                  />
                  <div className="add-card__content mr-16">
                    <h3 className="add-card__title">Credit or debit card</h3>
                    <p className="add-card__text">Add credit or debit cards.</p>
                  </div>
                  <a href="#" className="main-btn main-btn--primary min-width-140 ml-auto">
                    Add card
                  </a>
                </div>
                <div className="add-card d-flex flex-row align-items-flex-start mb-16">
                  <img
                    alt=""
                    src="/images/paypal-icon.png"
                    className="add-card__image mr-16"
                    width="48"
                    height="48"
                  />
                  <div className="add-card__content mr-16">
                    <h3 className="add-card__title">PayPal</h3>
                    <p className="add-card__text">Connect PayPal account.</p>
                  </div>
                  <a href="#" className="main-btn main-btn--primary min-width-140 ml-auto">
                    Connect
                  </a>
                </div>
              </div>
              <div className="personal-information__note mb-32 mb-lg-0 mb-32 mb-lg-0 d-flex flex-column align-items-flex-start">
                <span className="personal-information__icon-container mb-16">
                  <SvgIcon icon="bank-card" className="personal-information__icon" />
                </span>
                <h2 className="personal-information__subtitle text-subheader-2 mb-4">Payments</h2>
                <p className="personal-information__text text-body mb-0">
                  Always pay and communicate through Luxorts to ensure you&apos;re protected under
                  our{' '}
                  <a href="#" className="main-text-btn fw-400 d-inline">
                    Terms of Service,{' '}
                  </a>
                  <a href="#" className="main-text-btn fw-400 d-inline">
                    Payments Terms of Service,{' '}
                  </a>
                  cancellation, and other safeguards.
                </p>
              </div>
            </div>
          </TabPane>
          <TabPane tab="Payouts" key="2">
            <div className="personal-information__content pl-4">
              <div className="personal-information__user">
                <h2 className="text-headline-2 mb-8 mt-12">Payout methods</h2>
                <p className="personal-information__text text-body mb-24">
                  When you receive a payment for a reservation, we call that payment to you a
                  &quot;payout&quot;. Our secure payment system supports several payout methods,
                  which can be set up below.
                </p>
                <div className="add-card mb-16 d-flex flex-row align-items-flex-start">
                  <img
                    alt=""
                    src="/images/bank-card.png"
                    className="add-card__image mr-16"
                    width="48"
                    height="48"
                  />
                  <div className="add-card__content mr-16">
                    <h3 className="add-card__title">Credit or debit card</h3>
                    <p className="add-card__text">Add credit or debit cards.</p>
                  </div>
                  <a href="#" className="main-btn main-btn--primary min-width-140 ml-auto">
                    Add card
                  </a>
                </div>
                <div className="add-card d-flex flex-row align-items-flex-start mb-16">
                  <img
                    alt=""
                    src="/images/paypal-icon.png"
                    className="add-card__image mr-16"
                    width="48"
                    height="48"
                  />
                  <div className="add-card__content mr-16">
                    <h3 className="add-card__title">PayPal</h3>
                    <p className="add-card__text">Connect PayPal account.</p>
                  </div>
                  <a href="#" className="main-btn main-btn--primary min-width-140 ml-auto">
                    Connect
                  </a>
                </div>
              </div>
              <div className="personal-information__note mb-32 mb-lg-0 d-flex flex-column align-items-flex-start">
                <span className="personal-information__icon-container mb-16">
                  <SvgIcon icon="bank-card" className="personal-information__icon" />
                </span>
                <h2 className="personal-information__subtitle text-subheader-2 mb-4">Payouts</h2>
                <p className="personal-information__text text-body mb-0">
                  <b className="personal-information__text-important">
                    To get paid, you need to set up a payout method.{' '}
                  </b>
                  Luxorts releases payouts about 24 hours after a guest&apos;s scheduled check-in
                  time. The time it takes for the funds to appear in your account depends on your
                  payout method.
                </p>
              </div>
            </div>
          </TabPane>
          <TabPane tab="Payment History" key="3">
            <div className="table-head d-flex mb-24">
              <Button htmlType="button" className="main-btn main-btn--medium main-btn--filter mr-8">
                Date
                <SvgIcon icon="arrow-down" className="icon-right" />
              </Button>
              <Button htmlType="button" className="main-btn main-btn--medium main-btn--filter">
                Payment method
                <SvgIcon icon="arrow-down" className="icon-right" />
              </Button>
            </div>
            <Table
              showSorterTooltip={false}
              tableLayout="auto"
              scroll={{ x: 0 }}
              position="center"
              dataSource={dataSource}
              className="table"
              pagination={{
                position: ['bottomLeft'],
                showSizeChanger: false,
                pageSize: 8,
                hideOnSinglePage: true,
              }}
            >
              <Column
                title="Listing"
                dataIndex="listing"
                key="listing"
                sorter={(a, b) => a.age - b.age}
                sortDirections={['descend']}
                fixed="left"
                width={364}
              />
              <Column
                title="Payment Method"
                dataIndex="payment-method"
                key="payment-method"
                sorter={(a, b) => a.age - b.age}
                sortDirections={['descend']}
                width={280}
                className="min-width-240"
              />
              <Column
                title="Date & Time"
                dataIndex="date"
                key="date"
                sorter={(a, b) => a.age - b.age}
                sortDirections={['descend']}
                width={200}
              />
              <Column
                title="Amount"
                dataIndex="amount"
                key="amount"
                sorter={(a, b) => a.age - b.age}
                sortDirections={['descend']}
              />
            </Table>
          </TabPane>
        </Tabs>
      </div>
    </div>
  </div>
);

export default PaymentsAndPayouts;
