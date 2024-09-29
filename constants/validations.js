import { ErrorCode } from 'react-dropzone';

export const SIGN_UP_VALIDATION = {
  AGE: {
    MIN: 18,
  },
  PASSWORD: {
    MIN: 6,
    MAX: 72,
  },
  CODE: {
    LENGTH: 4,
  },
};

export const ZIP_CODE = {
  MIN: 5,
  MAX: 10,
};

export const PHOTOS_VALIDATION = {
  MAX: {
    COUNT: 24,
    SIZE: 10000000, // 10Mb in bytes
  },
  IMAGE_TYPES: ['.jpeg', '.png', '.jpg'],
};

export const PHOTO_ERROR_MESSAGE_BY_DROPZONE_ERROR_CODE = {
  [ErrorCode.FileInvalidType]: {
    SINGLE: { id: 'validations.imageFormat' },
    MULTIPLE: { id: 'validations.imageFormatMultiple' },
  },
  [ErrorCode.FileTooLarge]: {
    SINGLE: {
      id: 'validations.imageSize',
      values: {
        value: PHOTOS_VALIDATION.MAX.SIZE / 1000000, // bytes to Mb
      },
    },
    MULTIPLE: {
      id: 'validations.imageSizeMultiple',
      values: {
        value: PHOTOS_VALIDATION.MAX.SIZE / 1000000, // bytes to Mb
      },
    },
  },
};

export const MAX_LISTING_TITLE_LENGTH = 80;

export const ACCEPT_AVATAR_TYPES = 'image/jpeg,image/jpg,image/png';

export const MAX_PERCENTS = 100;

export const AVATAR_UPLOAD_BOUNDARIES = {
  DEFAULT_CROP_DIAMETER: 240,
  MIN_WIDTH: 120,
  MIN_HEIGHT: 120,
  MAX_WIDTH: 480,
  MAX_HEIGHT: 480,
  ASPECT: 1,
};
