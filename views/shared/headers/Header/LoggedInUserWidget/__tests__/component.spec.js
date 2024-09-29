import { shallow } from 'enzyme';

import LoggedInUserWidget from '../component';

describe('LoggedInUserWidget component', () => {
  const props = { switchToHostingRoute: 'switchToHostingRoute' };
  const component = shallow(<LoggedInUserWidget {...props} />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
