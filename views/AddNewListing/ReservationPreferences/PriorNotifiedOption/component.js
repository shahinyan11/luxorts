import { Radio } from 'antd';
import PropTypes from 'prop-types';

import { TIME_OPTIONS } from 'constants';
import { LISTING_PRIOR_NOTIFIED_TYPE } from 'constants/listing/reservationPreferences';

import FormattedOrRawMessage from 'views/shared/FormattedOrRawMessage';
import SelectField from 'views/shared/form/SelectField';

const PriorNotifiedOption = ({ value, label, selected }) => {
  if (
    value === LISTING_PRIOR_NOTIFIED_TYPE.SAME_DAY &&
    selected === LISTING_PRIOR_NOTIFIED_TYPE.SAME_DAY
  ) {
    return (
      <>
        <Radio value={value}>
          <FormattedOrRawMessage message={label} />
        </Radio>
        <div className="container-two-items">
          <SelectField
            name="priorNotifiedTime"
            formItemClassName="mb-0"
            label={{ id: 'shared.guestsCanBookBefore' }}
            placeholder={{ id: 'shared.selectTime' }}
            options={TIME_OPTIONS}
          />
        </div>
      </>
    );
  }

  return (
    <Radio value={value}>
      <FormattedOrRawMessage message={label} />
    </Radio>
  );
};

PriorNotifiedOption.propTypes = {
  value: PropTypes.string.isRequired,
  selected: PropTypes.string.isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.shape()]).isRequired,
};

export default PriorNotifiedOption;
