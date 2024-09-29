import { Button } from 'antd';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { Navigate } from 'react-big-calendar';

import useCalendarToolbar from 'hooks/calendar/useCalendarToolbar';

import SvgIcon from 'views/shared/SvgIcon';
import GradientButton from 'views/shared/GradientButton';

const Toolbar = ({ label, onNavigate }) => {
  const { navigate } = useCalendarToolbar({ onNavigate });

  return (
    <div className="booking-calendar-toolbar mb-24">
      <div className="booking-calendar-toolbar__controls">
        <GradientButton
          onClick={navigate(Navigate.TODAY)}
          className="main-btn--medium mr-16"
          variant="tertiary"
          text={{ id: 'shared.today' }}
        />
        <GradientButton
          onClick={navigate(Navigate.PREVIOUS)}
          className="main-btn--icon main-btn--medium mr-8"
          variant="tertiary"
          addonBefore={<SvgIcon icon="arrow-left" />}
        />
        <GradientButton
          onClick={navigate(Navigate.NEXT)}
          className="main-btn--icon main-btn--medium mr-16"
          variant="tertiary"
          addonBefore={<SvgIcon icon="arrow-right" />}
        />
        <p className="text-headline-2 mb-0">{label}</p>
      </div>
      <div className="booking-calendar-toolbar__links">
        <Button type="button" className="main-text-btn mr-16">
          <FormattedMessage id="shared.availabilitySettings" />
        </Button>
        <Button type="button" className="main-text-btn">
          <FormattedMessage id="shared.pricingSettings" />
        </Button>
      </div>
    </div>
  );
};

Toolbar.propTypes = {
  label: PropTypes.string.isRequired,
  onNavigate: PropTypes.func.isRequired,
};

export default Toolbar;
