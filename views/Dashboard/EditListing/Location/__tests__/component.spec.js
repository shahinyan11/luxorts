import { shallow } from 'enzyme';

import useListingLocation from 'hooks/listing/useListingLocation';

import { formik } from '__mocks__/formik';

import Location from '../component';

const mockedHookData = {
  formik,
  showSkeleton: false,
};
jest.mock('hooks/listing/useListingLocation', () => jest.fn(() => mockedHookData));

describe('Location component', () => {
  let component = shallow(<Location />);

  it('matches snapshot', () => {
    expect(component).toMatchSnapshot();
  });

  it('matches snapshot when showSkeleton equals true', () => {
    useListingLocation.mockReturnValueOnce({
      ...mockedHookData,
      showSkeleton: true,
    });

    component = shallow(<Location />);

    expect(component).toMatchSnapshot();
  });
});
