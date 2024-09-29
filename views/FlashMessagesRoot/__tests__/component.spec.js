import { shallow } from 'enzyme';

import FlashMessagesRoot from '../component';

const mockedHookData = {
  messages: { 1: { id: '1', duration: 3, description: {}, messageType: 'success' } },
};
jest.mock('../hook', () => jest.fn(() => mockedHookData));

describe('FlashMessagesRoot component', () => {
  const component = shallow(<FlashMessagesRoot />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
