import { shallow } from 'enzyme';

import DateHeader from '../component';

describe('DateHeader component', () => {
  const props = {
    date: new Date('15 Jun 2022 00:00:00 GMT'),
    label: '04',
  };

  const component = shallow(<DateHeader {...props} />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when date is actual', () => {
    component.setProps({
      ...props,
      date: new Date(),
    });

    expect(component).toMatchSnapshot();
  });
});
