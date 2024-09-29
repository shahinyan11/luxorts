import { shallow } from 'enzyme';

import RadioGroupField from '../component';

describe('RadioGroupField component', () => {
  const defaultProps = {
    name: 'name',
    items: [{ value: 'value', label: { id: 'label.id' } }],
  };

  const component = shallow(<RadioGroupField {...defaultProps} />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when items aren`t present', () => {
    component.setProps({
      items: undefined,
    });

    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when items with description', () => {
    component.setProps({
      items: [{ value: 'value', label: { id: 'label.id' }, description: { id: 'description.id' } }],
    });

    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when children is present', () => {
    component.setProps({
      children: <div>Foo</div>,
    });

    expect(component).toMatchSnapshot();
  });
});
