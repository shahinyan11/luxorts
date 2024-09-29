import { renderHook } from '@testing-library/react-hooks';

import { leavePage } from 'hooks/useLeavePageModal';

import { hideModal, showModal } from 'state/modal/actions';

import { dispatch } from '__mocks__/react-redux';
import { formik } from '__mocks__/formik';
import { router } from '__mocks__/next/router';

import useLeavePageModal from '../useLeavePageModal';

describe('useLeavePageModal hook', () => {
  const props = { formik, redirectRoute: 'redirectRoute', isDirty: false };
  let { result } = renderHook(() => useLeavePageModal(props));

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  describe('when formik is present', () => {
    it('should dispatches showModal with INFO_MODAL when formik.dirty and formik.isValid equal true', async () => {
      await result.current();

      expect(dispatch).toHaveBeenCalledWith(
        showModal({
          modalType: 'INFO_MODAL',
          modalProps: {
            title: { id: 'shared.leavePage' },
            description: { id: 'shared.leavePageConfirmation' },
            confirmText: { id: 'shared.save' },
            cancelText: { id: 'shared.discard' },
            onConfirm: expect.any(Function),
            onCancel: expect.any(Function),
          },
        }),
      );
    });

    it('shouldn`t dispatches showModal when formik.dirty or formik.isValid equal false', async () => {
      ({ result } = renderHook(() =>
        useLeavePageModal({
          ...props,
          formik: {
            ...props.formik,
            dirty: false,
          },
        }),
      ));

      await result.current();

      expect(dispatch).not.toHaveBeenCalled();
    });
  });

  it('should calls router.push when formik isn`t present', async () => {
    ({ result } = renderHook(() =>
      useLeavePageModal({
        ...props,
        formik: null,
      }),
    ));

    await result.current();

    expect(router.push).toHaveBeenCalledWith(props.redirectRoute);
  });
});

describe('leavePage helper', () => {
  const params = {
    withSaving: true,
    formik,
    redirectRoute: 'redirectRoute',
    router,
    dispatch,
  };

  it('should dispatches hideModal action', async () => {
    await leavePage(params)();

    expect(dispatch).toHaveBeenCalledWith(hideModal());
  });

  it('should calls formik.setFieldValue and formik.handleSubmit when withSaving equals true', async () => {
    await leavePage(params)();

    expect(formik.setFieldValue).toHaveBeenCalledWith('redirectRoute', params.redirectRoute);
    expect(formik.handleSubmit).toHaveBeenCalled();
  });

  it('should calls router.push when withSaving equals false', async () => {
    await leavePage({ ...params, withSaving: false })();

    expect(router.push).toHaveBeenCalledWith(params.redirectRoute);
  });
});
