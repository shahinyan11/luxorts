import { shallow } from 'enzyme';

import AccountSettingsLayout from 'views/layouts/AccountSettings';

describe('AccountSettingsLayout component', () => {
  const component = shallow(<AccountSettingsLayout>Foo</AccountSettingsLayout>);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
