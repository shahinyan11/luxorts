import { shallow } from 'enzyme';

import withGoogleMaps from '../withGoogleMaps';

const Component = () => null;

describe('withGoogleMaps hoc', () => {
  const Enhanced = withGoogleMaps(Component);
  const component = shallow(<Enhanced />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
