import { act, renderHook } from '@testing-library/react-hooks';
import { useRef } from 'react';

import checkUserVerification from 'utils/auth/checkUserVerification';

import { showModal } from 'state/modal/actions';
import { dispatch, store } from '__mocks__/react-redux';
import mockedCurrentUser from 'views/__mocks__/mockedCurrentUser';

import useContainer, { getInitialProps } from '../hook';

jest.mock('state/concepts/session/selectors', () => ({
  currentUserSelector: jest.fn(() => mockedCurrentUser),
}));
jest.mock('utils/auth/checkUserVerification');

jest.mock('react', () => {
  const originReact = jest.requireActual('react');

  return {
    ...originReact,
    useRef: jest.fn(() => ({ current: null })),
  };
});

describe('AccountSettings useContainer hook', () => {
  const mockedEvent = { stopPropagation: jest.fn() };
  let result = null;

  beforeAll(() => {
    window.URL.createObjectURL = jest.fn(() => 'fileUrl');
  });

  afterAll(() => {
    window.URL.createObjectURL.mockReset();
  });

  beforeEach(() => {
    ({ result } = renderHook(useContainer));

    jest.clearAllMocks();
  });

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  it('handleUploadAvatarClick dispatches UPLOAD_PROFILE_IMAGE_MODAL', () => {
    result.current.handleUploadAvatarClick();

    expect(store.dispatch).toHaveBeenCalledWith(
      showModal({
        modalType: 'UPLOAD_PROFILE_IMAGE_MODAL',
      }),
    );
  });

  it('handleRemoveAvatarClick dispatches REMOVE_PHOTO_MODAL', () => {
    result.current.handleRemoveAvatarClick();

    expect(store.dispatch).toHaveBeenCalledWith(
      showModal({
        modalType: 'REMOVE_PHOTO_MODAL',
      }),
    );
  });

  it('handleChangeAvatarImage method should calls event.stopPropagation and inputFileRef.current.click', () => {
    const mockedClick = jest.fn();
    useRef.mockReturnValue({ current: { click: mockedClick } });

    ({ result } = renderHook(useContainer));

    act(() => {
      result.current.handleChangeAvatarImage(mockedEvent);
    });

    expect(mockedEvent.stopPropagation).toHaveBeenCalled();
    expect(mockedClick).toHaveBeenCalled();
  });

  describe('handleChangeFile method', () => {
    it('shouldn`t dispatches UPLOAD_PROFILE_IMAGE_MODAL when file isn`t present', () => {
      result.current.handleChangeFile({ target: { files: [] } });

      expect(dispatch).not.toHaveBeenCalled();
    });

    it('should dispatches UPLOAD_PROFILE_IMAGE_MODAL when file is present', () => {
      const file = new File(['foo'], 'foo.txt', {
        type: 'text/plain',
      });

      result.current.handleChangeFile({ target: { files: [file] } });

      expect(dispatch).toHaveBeenCalledWith(
        showModal({
          modalType: 'UPLOAD_PROFILE_IMAGE_MODAL',
          modalProps: {
            initialImgSrc: URL.createObjectURL(file),
          },
        }),
      );
    });
  });

  it('getInitialProps method calls checkUserVerification with ctx', () => {
    const ctx = {};

    getInitialProps(ctx);

    expect(checkUserVerification).toHaveBeenCalledWith(ctx);
  });
});
