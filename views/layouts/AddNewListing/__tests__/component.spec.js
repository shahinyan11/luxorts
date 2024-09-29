import { shallow } from 'enzyme';

import AddNewListingLayout from '../component';

const mockedHookData = {
  onExit: jest.fn(),
  onBack: jest.fn(),
};
jest.mock('../hook', () => jest.fn(() => mockedHookData));

describe('AddNewListingLayout component', () => {
  const props = {
    title: { id: 'title.id' },
    onNext: jest.fn(),
    children: <div />,
  };

  const component = shallow(<AddNewListingLayout {...props} />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when showSkeleton equals true', () => {
    component.setProps({
      showSkeleton: true,
    });

    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when onBackRoute is present', () => {
    component.setProps({
      onBackRoute: 'onBackRoute',
    });

    expect(component).toMatchSnapshot();
  });
});
