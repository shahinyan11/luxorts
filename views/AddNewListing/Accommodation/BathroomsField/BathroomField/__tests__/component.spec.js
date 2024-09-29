import { shallow } from 'enzyme';

import { DEFAULT_BATHROOM_CONFIG } from 'constants/listing';

import useContainer from '../hook';
import BathroomField from '../component';

const mockedHookData = {
  field: {
    value: DEFAULT_BATHROOM_CONFIG,
  },
  isEdit: false,
  bathsList: [],
  onEditHandler: jest.fn(),
};
jest.mock('../hook', () => jest.fn(() => mockedHookData));

describe('BathroomField component', () => {
  const props = {
    index: 0,
    handleAddCustomBath: jest.fn(),
    handleRemoveCustomBathCreator: jest.fn(() => jest.fn()),
  };

  let component = shallow(<BathroomField {...props} />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when isEdit equals true', () => {
    useContainer.mockReturnValueOnce({
      ...mockedHookData,
      isEdit: true,
    });

    component = shallow(<BathroomField {...props} />);

    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when isEdit equals true and customBaths are present', () => {
    useContainer.mockReturnValueOnce({
      ...mockedHookData,
      isEdit: true,
      field: {
        value: {
          ...DEFAULT_BATHROOM_CONFIG,
          customBaths: [{ id: 'bath-1' }],
        },
      },
    });

    component = shallow(<BathroomField {...props} />);

    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when bathsList is present', () => {
    useContainer.mockReturnValueOnce({
      ...mockedHookData,
      bathsList: ['1 bath'],
    });

    component = shallow(<BathroomField {...props} />);

    expect(component).toMatchSnapshot();
  });
});
