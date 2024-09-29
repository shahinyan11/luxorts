import { shallow } from 'enzyme';

import mockedTerms from 'views/__mocks__/mockedTerms';
import mockedTermsTitles from 'views/__mocks__/mockedTermsTitles';

import Terms from '../component';

jest.mock('state/concepts/publicInfo/selectors', () => ({
  termsSelector: jest.fn(() => mockedTerms),
}));
jest.mock('utils/buildTitles', () =>
  jest.fn(() => ({
    titles: mockedTermsTitles,
    htmlString: 'htmlString',
  })),
);

describe('Terms component', () => {
  const component = shallow(<Terms />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
