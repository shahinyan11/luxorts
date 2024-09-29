import { useCallback, useEffect, useMemo, useState } from 'react';
import { useField } from 'formik';
import { useIntl } from 'react-intl';

import { ANTD_CLASSNAME } from 'constants';
import { BATH_NAME_BY_TYPE } from 'constants/listing';

import isPresent from 'utils/isPresent';
import disableHtmlElementsByClassName from 'utils/disableHtmlElementsByClassName';

function useContainer({ index }) {
  const [field] = useField(`bathrooms[${index}]`);
  const [isEdit, setIsEdit] = useState(false);
  const intl = useIntl();

  /**
   * Baths list
   * @type {array}
   */
  const bathsList = useMemo(() => {
    const list = [];

    [...field.value.defaultBaths, ...field.value.customBaths].forEach(({ amount, kind }) => {
      if (amount > 0 && isPresent(kind)) {
        const message = BATH_NAME_BY_TYPE[kind];
        const prefix = isPresent(message) ? intl.formatMessage(message) : kind;

        list.push(`${amount} ${prefix.toLowerCase()}`);
      }
    });

    return list;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [field.value.defaultBaths, field.value.customBaths]);

  /**
   * Handle edit
   */
  const onEditHandler = useCallback(() => {
    setIsEdit(!isEdit);
  }, [isEdit]);

  /**
   * Disable antd inputs
   */
  const disableInputs = () => {
    if (isEdit || isPresent(field.value.customBaths)) {
      disableHtmlElementsByClassName(ANTD_CLASSNAME.INPUT_NUMBER);
    }
  };

  /**
   * Lifecycle
   */
  useEffect(disableInputs, [isEdit, field.value.customBaths]);

  return {
    field,
    isEdit,
    bathsList,
    onEditHandler,
    disableInputs,
  };
}

export default useContainer;
