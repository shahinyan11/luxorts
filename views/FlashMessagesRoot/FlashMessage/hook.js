import { useDispatch } from 'react-redux';
import { is } from 'ramda';
import { useIntl } from 'react-intl';
import { notification } from 'antd';

import useMount from 'hooks/useMount';
import { hideMessage } from 'state/flash-messages/actions';
import { MESSAGE_CONFIG_BY_TYPE } from 'state/flash-messages/messagesTypes';
import SvgIcon from 'views/shared/SvgIcon';

function useContainer({ id, description, messageType, duration }) {
  const intl = useIntl();
  const dispatch = useDispatch();

  /**
   * Get description
   * @returns {string|*}
   */
  const getDescription = () => {
    if (is(String, description)) {
      return description;
    }

    if (is(Object, description) && is(String, description.id)) {
      return intl.formatMessage(description, description?.values);
    }

    return 'Error: Unexpected empty message';
  };

  /**
   * On close message handler
   */
  const onCloseHandler = () => {
    dispatch(hideMessage(id));
    notification.close(id);
  };

  /**
   * On mount callback
   */
  const onMountCallback = () => {
    const config = MESSAGE_CONFIG_BY_TYPE[messageType];

    notification.open({
      key: id,
      className: `flash-message ${config.className}`,
      description: getDescription(),
      duration,
      icon: <SvgIcon icon={config.icon || 'alert'} className="flash-message__left-icon" />,
      onClose: onCloseHandler,
      closeIcon: (
        <button type="button" className="flash-message__right-icon">
          <SvgIcon icon="cross" />
        </button>
      ),
    });
  };

  useMount(onMountCallback);

  return {
    getDescription,
    onCloseHandler,
    onMountCallback,
  };
}

export default useContainer;
