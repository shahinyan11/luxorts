import { renderHook } from '@testing-library/react-hooks/dom';
import { notification } from 'antd';

import fakeIntl from 'utils/testHelpers/fakeIntl';

import {
  MESSAGE_TYPE,
  MESSAGE_DURATION,
  MESSAGE_CONFIG_BY_TYPE,
} from 'state/flash-messages/messagesTypes';
import { hideMessage } from 'state/flash-messages/actions';

import SvgIcon from 'views/shared/SvgIcon';

import { dispatch } from '__mocks__/react-redux';
import useContainer from '../hook';

jest.spyOn(notification, 'open');
jest.spyOn(notification, 'close');

describe('FlashMessage useContainer hook', () => {
  let result = null;
  const defaultProps = {
    id: 'id',
    description: 'description',
    messageType: MESSAGE_TYPE.SUCCESS,
    duration: MESSAGE_DURATION.DEFAULT,
  };

  beforeEach(() => {
    ({ result } = renderHook(() => useContainer(defaultProps)));
  });

  it('matches snapshot', () => {
    expect(result.current).toMatchSnapshot();
  });

  describe('tests `getDescription` method', () => {
    it('should handle string', () => {
      expect(result.current.getDescription()).toBe(defaultProps.description);
    });

    it('should handle object', () => {
      const props = {
        ...defaultProps,
        description: { id: 'description.id' },
      };

      ({ result } = renderHook(() => useContainer(props)));

      const expected = fakeIntl.formatMessage(props.description);

      expect(result.current.getDescription()).toBe(expected);
    });

    it('should return error message', () => {
      const props = {
        ...defaultProps,
        description: null,
      };

      ({ result } = renderHook(() => useContainer(props)));

      expect(result.current.getDescription()).toBe('Error: Unexpected empty message');
    });
  });

  it('tests `onCloseHandler` method', () => {
    result.current.onCloseHandler();

    expect(dispatch).toHaveBeenCalledWith(hideMessage(defaultProps.id));
    expect(notification.close).toHaveBeenCalledWith(defaultProps.id);
  });

  it('tests `onMountCallback` method', () => {
    result.current.onMountCallback();

    const config = MESSAGE_CONFIG_BY_TYPE[defaultProps.messageType];

    const expected = {
      key: defaultProps.id,
      className: `flash-message ${config.className}`,
      description: defaultProps.description,
      duration: defaultProps.duration,
      icon: <SvgIcon icon={config.icon || 'alert'} className="flash-message__left-icon" />,
      onClose: result.current.onCloseHandler,
      closeIcon: (
        <button type="button" className="flash-message__right-icon">
          <SvgIcon icon="cross" />
        </button>
      ),
    };

    expect(notification.open).toHaveBeenCalledWith(expected);
  });
});
