import { shallow } from 'enzyme';

import CheckboxGroupField from '../component';

describe('CheckboxGroupField component', () => {
  const props = {
    name: 'name',
    items: [{ value: 'value', label: { id: 'label.id' } }],
  };

  const component = shallow(<CheckboxGroupField {...props} />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when items aren`t present', () => {
    component.setProps({
      items: undefined,
    });

    expect(component).toMatchSnapshot();
  });
});
