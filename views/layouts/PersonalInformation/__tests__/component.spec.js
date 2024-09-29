import { shallow } from 'enzyme';

import PersonalInformationLayout from 'views/layouts/PersonalInformation';

describe('PersonalInformationLayout component', () => {
  const component = shallow(<PersonalInformationLayout>Foo</PersonalInformationLayout>);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
