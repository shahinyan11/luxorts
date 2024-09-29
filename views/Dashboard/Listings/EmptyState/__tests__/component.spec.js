import { shallow } from 'enzyme';

import EmptyState from '../component';

describe('EmptyState component', () => {
  const props = {
    hasAppliedFilters: false,
    showNoResults: false,
    clearAllFilters: jest.fn(),
  };
  const component = shallow(<EmptyState {...props} />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when showNoResults equals true', () => {
    component.setProps({
      showNoResults: true,
    });

    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when showNoResults and hasAppliedFilters equal true', () => {
    component.setProps({
      showNoResults: true,
      hasAppliedFilters: true,
    });

    expect(component).toMatchSnapshot();
  });
});
