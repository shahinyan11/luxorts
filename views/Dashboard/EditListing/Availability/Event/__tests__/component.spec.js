import { shallow } from 'enzyme';
import moment from 'moment';

import { TIME_PERIOD_KIND } from 'constants/listing';

import Event from '../component';

describe('Event component', () => {
  const props = {
    event: {
      kind: TIME_PERIOD_KIND.PREPARATION,
      start: new Date(),
    },
    currentDate: new Date(),
  };

  const component = shallow(<Event {...props} />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it(`matches snapshot when kind is ${TIME_PERIOD_KIND.BLOCKED}`, () => {
    component.setProps({
      ...props,
      event: {
        ...props.event,
        kind: TIME_PERIOD_KIND.BLOCKED,
      },
    });

    expect(component).toMatchSnapshot();
  });

  it(`matches snapshot when kind is ${TIME_PERIOD_KIND.BOOKING}`, () => {
    component.setProps({
      ...props,
      event: {
        ...props.event,
        kind: TIME_PERIOD_KIND.BOOKING,
      },
    });

    expect(component).toMatchSnapshot();
  });

  it(`matches snapshot when kind is ${TIME_PERIOD_KIND.AVAILABLE}`, () => {
    component.setProps({
      ...props,
      event: {
        ...props.event,
        kind: TIME_PERIOD_KIND.AVAILABLE,
      },
    });

    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when description is present', () => {
    component.setProps({
      ...props,
      event: {
        ...props.event,
        kind: TIME_PERIOD_KIND.BOOKING,
        description: 'description',
      },
    });

    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when description and icon are presents', () => {
    component.setProps({
      ...props,
      event: {
        ...props.event,
        kind: TIME_PERIOD_KIND.BOOKING,
        description: 'description',
        icon: 'clock',
      },
    });

    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when event.start date from another month', () => {
    component.setProps({
      ...props,
      event: {
        ...props.event,
        start: moment(props.event.start).add(1, 'months').toDate(),
      },
    });

    expect(component).toMatchSnapshot();
  });
});
