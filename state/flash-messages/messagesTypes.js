export const MESSAGE_TYPE = {
  SUCCESS: 'success',
  WARN: 'warning',
  ERROR: 'error',
  INFO_PRIMARY: 'info-primary',
  INFO_SECONDARY: 'info-secondary',
  NOTIFICATION: 'notification',
};

export const MESSAGE_DURATION = {
  DEFAULT: 7,
  STATIC: 0, // If you set the value to 0, the notification box will never close automatically.
};

export const MESSAGE_CONFIG_BY_TYPE = {
  [MESSAGE_TYPE.SUCCESS]: {
    icon: 'checked',
    className: 'flash-message--success',
  },
  [MESSAGE_TYPE.WARN]: {
    className: 'flash-message--warning',
  },
  [MESSAGE_TYPE.ERROR]: {
    className: 'flash-message--error',
  },
  [MESSAGE_TYPE.INFO_PRIMARY]: {
    className: 'flash-message--info-primary',
  },
  [MESSAGE_TYPE.INFO_SECONDARY]: {
    className: 'flash-message--info-secondary',
  },
  [MESSAGE_TYPE.NOTIFICATION]: {
    icon: 'notification',
    className: 'flash-message--custom',
  },
};
