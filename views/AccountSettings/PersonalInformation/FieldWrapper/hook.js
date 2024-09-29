import { useCallback, useState } from 'react';
import { useFormikContext } from 'formik';

import useImmutableCallback from 'hooks/useImmutableCallback';

import isPresent from 'utils/isPresent';
import resetSpecificFields from 'utils/form/resetSpecificFields';

function useContainer({ changeMode, fieldNames }) {
  const formik = useFormikContext();
  const [editMode, setEditMode] = useState(false);

  /**
   * Toggle edit mode
   */
  const toggleEditMode = useCallback(() => {
    resetSpecificFields(formik, fieldNames);

    setEditMode(!editMode);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editMode]);

  /**
   *  Save updated info and change edit mode
   */
  const onSave = useImmutableCallback(async () => {
    const errors = await formik.validateForm();

    if (!isPresent(errors)) {
      formik.handleSubmit();

      if (changeMode) {
        setEditMode(false);
      }

      return;
    }

    Object.keys(errors).forEach((field) => {
      formik.setFieldTouched(field, true);
    });
  });

  return {
    editMode,
    toggleEditMode,
    onSave,
  };
}

export default useContainer;
