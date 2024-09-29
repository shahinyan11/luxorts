import { shallow } from 'enzyme';

import DateCellWrapper from '../component';

describe('DateCellWrapper component', () => {
  const props = {
    value: new Date('15 Jun 2022 00:00:00 GMT'),
    pricePerDay: 99,
    customPrice: { '15/06/2022': 64 },
  };

  const component = shallow(
    <DateCellWrapper {...props}>
      <div className="rbc-day">Foo</div>
    </DateCellWrapper>,
  );

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when date is actual', () => {
    component.setProps({
      ...props,
      value: new Date(),
    });

    expect(component).toMatchSnapshot();
  });
});
