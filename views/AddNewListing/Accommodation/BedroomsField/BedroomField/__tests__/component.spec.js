import { shallow } from 'enzyme';

import { DEFAULT_BEDROOM_CONFIG } from 'constants/listing';

import useContainer from '../hook';
import BedroomField from '../component';

const mockedHookData = {
  field: {
    value: DEFAULT_BEDROOM_CONFIG,
  },
  isEdit: false,
  bedsList: [],
  onEditHandler: jest.fn(),
};
jest.mock('../hook', () => jest.fn(() => mockedHookData));

describe('BedroomField component', () => {
  const props = {
    index: 0,
    handleAddCustomBed: jest.fn(),
    handleRemoveCustomBedCreator: jest.fn(() => jest.fn()),
    onBedAmountChangeHandlerCreator: jest.fn(() => jest.fn()),
  };

  let component = shallow(<BedroomField {...props} />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when isEdit equals true', () => {
    useContainer.mockReturnValueOnce({
      ...mockedHookData,
      isEdit: true,
    });

    component = shallow(<BedroomField {...props} />);

    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when isEdit equals true and customBeds are present', () => {
    useContainer.mockReturnValueOnce({
      ...mockedHookData,
      isEdit: true,
      field: {
        value: {
          ...DEFAULT_BEDROOM_CONFIG,
          customBeds: [{ id: 'bed-1' }],
        },
      },
    });

    component = shallow(<BedroomField {...props} />);

    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when bedsList is present', () => {
    useContainer.mockReturnValueOnce({
      ...mockedHookData,
      bedsList: ['1 sofa bed'],
    });

    component = shallow(<BedroomField {...props} />);

    expect(component).toMatchSnapshot();
  });
});
