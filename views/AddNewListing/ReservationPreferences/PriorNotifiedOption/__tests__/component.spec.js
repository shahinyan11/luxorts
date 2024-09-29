import { shallow } from 'enzyme';

import { LISTING_PRIOR_NOTIFIED_TYPE } from 'constants/listing/reservationPreferences';

import PriorNotifiedOption from '../component';

describe('PriorNotifiedOption component', () => {
  const props = {
    value: 'value',
    label: 'label',
    selected: 'selected',
  };

  const component = shallow(<PriorNotifiedOption {...props} />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when value and selected props equals same_day', () => {
    component.setProps({
      value: LISTING_PRIOR_NOTIFIED_TYPE.SAME_DAY,
      selected: LISTING_PRIOR_NOTIFIED_TYPE.SAME_DAY,
    });

    expect(component).toMatchSnapshot();
  });
});
