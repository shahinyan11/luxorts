import { Button } from 'antd';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import { Navigate } from 'react-big-calendar';

import useCalendarToolbar from 'hooks/calendar/useCalendarToolbar';

import SvgIcon from 'views/shared/SvgIcon';
import GradientButton from 'views/shared/GradientButton';

const Toolbar = ({
  label,
  onNavigate,
  toggleMonthAvailability,
  isFullMonthBlocked,
  isTimePeriodsCreating,
}) => {
  const { navigate } = useCalendarToolbar({ onNavigate });

  return (
    <div className="d-flex justify-content-space-between align-items-center mb-24">
      <div className="d-flex align-items-center">
        <GradientButton
          onClick={navigate(Navigate.PREVIOUS)}
          className="main-btn--icon"
          variant="secondary"
          addonBefore={<SvgIcon icon="arrow-left" />}
        />
        <p className="text-headline-2 ml-16 mr-16 mb-0">{label}</p>
        <GradientButton
          onClick={navigate(Navigate.NEXT)}
          className="main-btn--icon"
          variant="secondary"
          addonBefore={<SvgIcon icon="arrow-right" />}
        />
      </div>

      <Button
        loading={isTimePeriodsCreating}
        onClick={toggleMonthAvailability}
        type="button"
        className="main-text-btn"
      >
        {isFullMonthBlocked && <FormattedMessage id="shared.unblockThisMonth" />}
        {!isFullMonthBlocked && <FormattedMessage id="shared.blockThisMonth" />}
      </Button>
    </div>
  );
};

Toolbar.propTypes = {
  label: PropTypes.string.isRequired,
  onNavigate: PropTypes.func.isRequired,
  toggleMonthAvailability: PropTypes.func.isRequired,
  isFullMonthBlocked: PropTypes.bool.isRequired,
  isTimePeriodsCreating: PropTypes.bool.isRequired,
};

export default Toolbar;
