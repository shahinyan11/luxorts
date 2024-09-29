import { shallow } from 'enzyme';

import mockedPrivacyPolicy from 'views/__mocks__/mockedPrivacyPolicy';
import mockedPrivacyPolicyTitles from 'views/__mocks__/mockedPrivacyPolicyTitles';

import PrivacyPolicy from '../component';

jest.mock('state/concepts/publicInfo/selectors', () => ({
  privacyPolicySelector: jest.fn(() => mockedPrivacyPolicy),
}));
jest.mock('utils/buildTitles', () =>
  jest.fn(() => ({
    titles: mockedPrivacyPolicyTitles,
    htmlString: 'htmlString',
  })),
);

describe('PrivacyPolicy component', () => {
  const component = shallow(<PrivacyPolicy />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
