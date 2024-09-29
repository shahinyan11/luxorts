import { shallow } from 'enzyme';

import Settings from '../component';

const mockedHookData = { visible: false, actions: [], onVisibilityChangeHandler: jest.fn() };
jest.mock('../hook', () => jest.fn(() => mockedHookData));

describe('Settings component', () => {
  const props = {
    id: 'id',
    status: 'status',
    stepStatus: 'stepStatus',
  };

  const component = shallow(<Settings {...props} />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
