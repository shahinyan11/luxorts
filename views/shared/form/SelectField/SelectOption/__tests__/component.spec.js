import { shallow } from 'enzyme';

import SelectOption from '../component';

describe('SelectOption component', () => {
  const props = { value: 'value', label: 'label' };
  const component = shallow(<SelectOption {...props} />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
