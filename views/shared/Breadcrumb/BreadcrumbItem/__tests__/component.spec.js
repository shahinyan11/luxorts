import { shallow } from 'enzyme';

import BreadcrumbItem from '../component';

describe('BreadcrumbItem component', () => {
  const props = {
    label: 'test-label',
    href: 'test-href',
    last: false,
  };

  const component = shallow(<BreadcrumbItem {...props} />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
