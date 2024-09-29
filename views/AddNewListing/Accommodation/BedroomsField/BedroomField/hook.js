import { useCallback, useEffect, useMemo, useState } from 'react';
import { useField } from 'formik';
import { useIntl } from 'react-intl';

import { ANTD_CLASSNAME } from 'constants';
import { BED_NAME_BY_TYPE } from 'constants/listing';

import isPresent from 'utils/isPresent';
import disableHtmlElementsByClassName from 'utils/disableHtmlElementsByClassName';

function useContainer({ index }) {
  const [field] = useField(`bedrooms[${index}]`);
  const [isEdit, setIsEdit] = useState(false);
  const intl = useIntl();

  /**
   * Beds list
   * @type {array}
   */
  const bedsList = useMemo(() => {
    const list = [];

    [...field.value.defaultBeds, ...field.value.customBeds].forEach(({ amount, kind }) => {
      if (amount > 0 && isPresent(kind)) {
        const descriptor = amount > 1 ? { id: 'shared.bedsAmount' } : { id: 'shared.bedAmount' };
        const message = BED_NAME_BY_TYPE[kind];
        const prefix = isPresent(message) ? intl.formatMessage(message) : kind;

        list.push(intl.formatMessage(descriptor, { amount: `${amount} ${prefix.toLowerCase()}` }));
      }
    });

    return list;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [field.value.defaultBeds, field.value.customBeds]);

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
    if (isEdit || isPresent(field.value.customBeds)) {
      disableHtmlElementsByClassName(ANTD_CLASSNAME.INPUT_NUMBER);
    }
  };

  /**
   * Lifecycle
   */
  useEffect(disableInputs, [isEdit, field.value.customBeds]);

  return {
    field,
    isEdit,
    bedsList,
    onEditHandler,
    disableInputs,
  };
}

export default useContainer;
