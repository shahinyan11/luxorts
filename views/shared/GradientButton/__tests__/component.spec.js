import { shallow } from 'enzyme';

import GradientButton from '../component';

describe('GradientButton component', () => {
  const props = {
    text: { id: 'shared.id' },
    className: 'className',
    variant: 'secondary',
    onClick: jest.fn(),
  };

  const component = shallow(<GradientButton {...props} />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
