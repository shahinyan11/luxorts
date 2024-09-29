import { shallow } from 'enzyme';

import QuestionCard from '../component';

describe('QuestionCard component', () => {
  const component = shallow(<QuestionCard />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
