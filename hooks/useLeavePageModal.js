import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

import { hideModal, showModal } from 'state/modal/actions';

export const leavePage =
  ({ withSaving, redirectRoute, formik, router, dispatch }) =>
  async () => {
    if (withSaving) {
      await formik.setFieldValue('redirectRoute', redirectRoute);

      formik.handleSubmit();
    } else {
      router.push(redirectRoute);
    }

    dispatch(hideModal());
  };

const useLeavePageModal = ({ formik, redirectRoute, isDirty }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  return async () => {
    if (formik) {
      await formik.validateForm();
      const dirty = isDirty || formik.dirty;

      if (dirty && formik.isValid) {
        dispatch(
          showModal({
            modalType: 'INFO_MODAL',
            modalProps: {
              title: { id: 'shared.leavePage' },
              description: { id: 'shared.leavePageConfirmation' },
              confirmText: { id: 'shared.save' },
              cancelText: { id: 'shared.discard' },
              onConfirm: leavePage({ withSaving: true, dispatch, redirectRoute, formik, router }),
              onCancel: leavePage({ withSaving: false, dispatch, redirectRoute, formik, router }),
            },
          }),
        );

        return;
      }
    }

    router.push(redirectRoute);
  };
};

export default useLeavePageModal;
