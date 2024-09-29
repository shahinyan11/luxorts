import { shallow } from 'enzyme';

import CheckboxGroup from '../component';

describe('CheckboxGroup component', () => {
  const props = {
    items: [{ id: 'id', name: 'name', description: 'description', checked: true }],
    path: 'pathName',
  };

  const component = shallow(<CheckboxGroup {...props} />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when withPaid equals true', () => {
    component.setProps({
      withPaid: true,
    });

    expect(component).toMatchSnapshot();
  });
});
