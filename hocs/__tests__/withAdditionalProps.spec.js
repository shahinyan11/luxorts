import { shallow } from 'enzyme';

import withAdditionalProps from '../withAdditionalProps';

const Component = () => null;

describe('withAdditionalProps hoc', () => {
  const Enhanced = withAdditionalProps(Component, { foo: 'bar' });
  const component = shallow(<Enhanced />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
