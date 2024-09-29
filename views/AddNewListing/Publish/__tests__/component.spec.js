import { shallow } from 'enzyme';

import useContainer from '../hook';
import Publish from '../component';

const mockedHookData = {
  isLoading: false,
  showSkeleton: false,
  onSaveAsDraftClickHandler: jest.fn(),
  onPublishListingClickHandler: jest.fn(),
};
jest.mock('../hook', () => jest.fn(() => mockedHookData));

describe('Publish component', () => {
  let component = shallow(<Publish />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when showSkeleton equals true', () => {
    useContainer.mockReturnValueOnce({
      ...mockedHookData,
      showSkeleton: true,
    });

    component = shallow(<Publish />);

    expect(component).toMatchSnapshot();
  });
});
