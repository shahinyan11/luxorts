import { Tabs, Button, Dropdown, Checkbox, Table } from 'antd';
import SvgIcon from 'views/stubs/shared/SvgIcon';
import MainHeader from '../layout/header';

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
    guest: (
      <div className="d-flex align-items-center">
        <img alt="" width="32" height="32" src="/images/cameron.png" className="mr-8" />
        <p className="mb-0 table__column-name">Darrell Steward</p>
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
    guest: (
      <div className="d-flex align-items-center">
        <img alt="" width="32" height="32" src="/images/ronald.png" className="mr-8" />
        <p className="mb-0 table__column-name">Robert Fox</p>
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
    guest: (
      <div className="d-flex align-items-center">
        <img alt="" width="32" height="32" src="/images/esther.png" className="mr-8" />
        <p className="mb-0 table__column-name">Cody Fisher</p>
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
    guest: (
      <div className="d-flex align-items-center">
        <img alt="" width="32" height="32" src="/images/jane.png" className="mr-8" />
        <p className="mb-0 table__column-name">Jane Cooper</p>
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
    guest: (
      <div className="d-flex align-items-center">
        <img alt="" width="32" height="32" src="/images/jenny.png" className="mr-8" />
        <p className="mb-0 table__column-name">Jenny Wilson</p>
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
    guest: (
      <div className="d-flex align-items-center">
        <img alt="" width="32" height="32" src="/images/floyd.png" className="mr-8" />
        <p className="mb-0 table__column-name">Floyd Miles</p>
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
    guest: (
      <div className="d-flex align-items-center">
        <img alt="" width="32" height="32" src="/images/cody.png" className="mr-8" />
        <p className="mb-0 table__column-name">Ronald Richards</p>
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
    guest: (
      <div className="d-flex align-items-center">
        <img alt="" width="32" height="32" src="/images/kathryn.png" className="mr-8" />
        <p className="mb-0 table__column-name">Kathryn Murphy</p>
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
    guest: (
      <div className="d-flex align-items-center">
        <img alt="" width="32" height="32" src="/images/cameron.png" className="mr-8" />
        <p className="mb-0 table__column-name">Darrell Steward</p>
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
    guest: (
      <div className="d-flex align-items-center">
        <img alt="" width="32" height="32" src="/images/ronald.png" className="mr-8" />
        <p className="mb-0 table__column-name">Robert Fox</p>
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
    guest: (
      <div className="d-flex align-items-center">
        <img alt="" width="32" height="32" src="/images/esther.png" className="mr-8" />
        <p className="mb-0 table__column-name">Cody Fisher</p>
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
    guest: (
      <div className="d-flex align-items-center">
        <img alt="" width="32" height="32" src="/images/jane.png" className="mr-8" />
        <p className="mb-0 table__column-name">Jane Cooper</p>
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
    guest: (
      <div className="d-flex align-items-center">
        <img alt="" width="32" height="32" src="/images/jenny.png" className="mr-8" />
        <p className="mb-0 table__column-name">Jenny Wilson</p>
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
    guest: (
      <div className="d-flex align-items-center">
        <img alt="" width="32" height="32" src="/images/floyd.png" className="mr-8" />
        <p className="mb-0 table__column-name">Floyd Miles</p>
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
    guest: (
      <div className="d-flex align-items-center">
        <img alt="" width="32" height="32" src="/images/cody.png" className="mr-8" />
        <p className="mb-0 table__column-name">Ronald Richards</p>
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
    guest: (
      <div className="d-flex align-items-center">
        <img alt="" width="32" height="32" src="/images/kathryn.png" className="mr-8" />
        <p className="mb-0 table__column-name">Kathryn Murphy</p>
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
    guest: (
      <div className="d-flex align-items-center">
        <img alt="" width="32" height="32" src="/images/cameron.png" className="mr-8" />
        <p className="mb-0 table__column-name">Darrell Steward</p>
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
    guest: (
      <div className="d-flex align-items-center">
        <img alt="" width="32" height="32" src="/images/ronald.png" className="mr-8" />
        <p className="mb-0 table__column-name">Robert Fox</p>
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
    guest: (
      <div className="d-flex align-items-center">
        <img alt="" width="32" height="32" src="/images/esther.png" className="mr-8" />
        <p className="mb-0 table__column-name">Cody Fisher</p>
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
    guest: (
      <div className="d-flex align-items-center">
        <img alt="" width="32" height="32" src="/images/jane.png" className="mr-8" />
        <p className="mb-0 table__column-name">Jane Cooper</p>
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
    guest: (
      <div className="d-flex align-items-center">
        <img alt="" width="32" height="32" src="/images/jenny.png" className="mr-8" />
        <p className="mb-0 table__column-name">Jenny Wilson</p>
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
    guest: (
      <div className="d-flex align-items-center">
        <img alt="" width="32" height="32" src="/images/floyd.png" className="mr-8" />
        <p className="mb-0 table__column-name">Floyd Miles</p>
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
    guest: (
      <div className="d-flex align-items-center">
        <img alt="" width="32" height="32" src="/images/cody.png" className="mr-8" />
        <p className="mb-0 table__column-name">Ronald Richards</p>
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
    guest: (
      <div className="d-flex align-items-center">
        <img alt="" width="32" height="32" src="/images/kathryn.png" className="mr-8" />
        <p className="mb-0 table__column-name">Kathryn Murphy</p>
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

const Reports = () => (
  <div className="main-layout">
    <MainHeader isMainMenu />
    <div className="main-layout__content main-layout__content--with-paddings main-layout__content--wide">
      <h1 className="text-display-2 mb-24 mt-32">Reports</h1>
      <Tabs defaultActiveKey="1" className="w-100">
        <TabPane tab="Payment History" key="1">
          <div className="table-head d-flex mb-24">
            <Button htmlType="button" className="main-btn main-btn--medium main-btn--filter mr-8">
              Date
              <SvgIcon icon="arrow-down" className="icon-right" />
            </Button>
            <Dropdown
              placement="bottomLeft"
              className="table-head__dropdown-payment"
              overlay={
                <div className="table-head__dropdown-content">
                  <p className="d-flex flex-column mb-0 table-head__checkboxes">
                    <Checkbox checked>Credit or debit card</Checkbox>
                    <Checkbox>PayPal</Checkbox>
                  </p>
                  <div className="table-head__actions pt-24 pb-24 d-flex justify-content-flex-end">
                    <Button
                      htmlType="button"
                      className="main-btn main-btn--medium main-btn--tertiary mr-16"
                    >
                      Clear
                    </Button>
                    <Button
                      htmlType="button"
                      className="main-btn main-btn--medium main-btn--primary min-width-120"
                    >
                      Apply
                    </Button>
                  </div>
                </div>
              }
            >
              <Button htmlType="button" className="main-btn main-btn--medium main-btn--filter mr-8">
                Payment method
                <SvgIcon icon="arrow-down" className="icon-right" />
              </Button>
            </Dropdown>
            <Dropdown
              placement="bottomLeft"
              className="table-head__dropdown-payment"
              overlay={
                <div className="table-head__dropdown-content">
                  <p className="d-flex flex-column mb-0 table-head__checkboxes">
                    <Checkbox checked>
                      <img
                        alt=""
                        width="68"
                        height="48"
                        src="/images/housing-preview-01.png"
                        className="mr-16"
                      />
                      Charming and comfortable house
                    </Checkbox>
                    <Checkbox>
                      <img
                        alt=""
                        width="68"
                        height="48"
                        src="/images/housing-preview-02.png"
                        className="mr-16"
                      />
                      Luxury Bi-Level in Heart of Center City
                    </Checkbox>
                    <Checkbox>
                      <img
                        alt=""
                        width="68"
                        height="48"
                        src="/images/housing-preview-03.png"
                        className="mr-16"
                      />
                      Beautiful private, bedroom with full bathroom
                    </Checkbox>
                    <Checkbox>
                      <img
                        alt=""
                        width="68"
                        height="48"
                        src="/images/housing-preview-04.png"
                        className="mr-16"
                      />
                      Gorgeous Studio with Parking and Convenient Location
                    </Checkbox>
                  </p>
                  <div className="table-head__actions pt-24 pb-24 d-flex justify-content-flex-end">
                    <Button
                      htmlType="button"
                      className="main-btn main-btn--medium main-btn--tertiary mr-16"
                    >
                      Clear
                    </Button>
                    <Button
                      htmlType="button"
                      className="main-btn main-btn--medium main-btn--primary min-width-120"
                    >
                      Apply
                    </Button>
                  </div>
                </div>
              }
            >
              <Button htmlType="button" className="main-btn main-btn--medium main-btn--filter">
                Listing
                <SvgIcon icon="arrow-down" className="icon-right" />
              </Button>
            </Dropdown>
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
              title="Guest"
              dataIndex="guest"
              key="guest"
              sorter={(a, b) => a.age - b.age}
              sortDirections={['descend']}
              width={240}
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
              width={308}
            />
          </Table>
        </TabPane>
      </Tabs>
    </div>
  </div>
);

export default Reports;
