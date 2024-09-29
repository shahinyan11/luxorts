import { Button } from 'antd';
import SvgIcon from 'views/stubs/shared/SvgIcon';

const BookingCalendarToolbar = () => (
  <div className="booking-calendar-toolbar mb-24">
    <div className="booking-calendar-toolbar__controls">
      <Button htmlType="button" className="main-btn main-btn--tertiary main-btn--medium mr-16">
        Today
      </Button>
      <Button
        htmlType="button"
        className="main-btn main-btn--tertiary main-btn--medium main-btn--icon mr-8"
        disabled
      >
        <SvgIcon icon="arrow-left" className="icon-right" />
      </Button>
      <Button
        htmlType="button"
        className="main-btn main-btn--tertiary main-btn--medium main-btn--icon mr-16"
      >
        <SvgIcon icon="arrow-right" className="icon-right" />
      </Button>
      <p className="text-headline-2 mb-0">January 2022</p>
    </div>
    <div className="booking-calendar-toolbar__links">
      <Button type="button" className="main-text-btn mr-16">
        Availability settings
      </Button>
      <Button type="button" className="main-text-btn">
        Pricing settings
      </Button>
    </div>
  </div>
);

export default BookingCalendarToolbar;
