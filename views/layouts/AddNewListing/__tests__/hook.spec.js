import { renderHook } from '@testing-library/react-hooks';

import useContainer from '../hook';

describe('AddNewListingLayout useContainer hook', () => {
  const props = { formik: 'formik', onBackRoute: 'onBackRoute', isDirty: 'isDirty' };
  const { result } = renderHook(() => useContainer(props));

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });
});
