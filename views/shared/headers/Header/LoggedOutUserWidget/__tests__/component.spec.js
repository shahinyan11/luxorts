import { shallow } from 'enzyme';

import LoggedOutUserWidget from '../component';

describe('LoggedOutUserWidget component', () => {
  const component = shallow(<LoggedOutUserWidget />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
