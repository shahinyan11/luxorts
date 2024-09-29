import { shallow } from 'enzyme';

import Footer from '../component';

const mockedMoment = jest.fn(() => ({
  year: jest.fn(() => 'currentYear'),
}));

jest.mock('moment', () => jest.fn(() => mockedMoment));

describe('Footer component', () => {
  const component = shallow(<Footer />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when isAccount equals true', () => {
    component.setProps({
      isAccount: true,
    });

    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when isRegistration equals true', () => {
    component.setProps({
      isRegistration: true,
    });

    expect(component).toMatchSnapshot();
  });
});
