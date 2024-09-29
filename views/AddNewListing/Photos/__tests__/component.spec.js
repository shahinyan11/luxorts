import { shallow } from 'enzyme';

import { formik } from '__mocks__/formik';

import Photos from '../component';

const mockedHookData = {
  formik,
  onBack: jest.fn(),
  handleSubmit: jest.fn(),
  onRemovePhotoCallback: jest.fn(),
};
jest.mock('../hook', () => jest.fn(() => mockedHookData));

describe('Photos component', () => {
  const component = shallow(<Photos />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});
