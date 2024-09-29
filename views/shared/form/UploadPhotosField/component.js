import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import Dropzone from 'react-dropzone';

import { PHOTOS_VALIDATION } from 'constants/validations';

import GradientButton from 'views/shared/GradientButton';
import SvgIcon from 'views/shared/SvgIcon';

import Photo from './Photo';
import useContainer from './hook';

const UploadPhotosField = ({ name, onRemove }) => {
  const {
    value,
    dropzoneRef,
    inputFileRef,
    onDropHandler,
    onDropRejectedHandler,
    uploadPhotosClickHandler,
    onRemovePhotoCreator,
    onEditPhotoCreator,
    onPreviewPhotoCreator,
    handleEditFile,
  } = useContainer({ name, onRemove });

  return (
    <>
      <input
        ref={inputFileRef}
        className="d-none"
        type="file"
        accept={`image/*,${PHOTOS_VALIDATION.IMAGE_TYPES.join(',')}`}
        onChange={handleEditFile}
      />
      <Dropzone
        ref={dropzoneRef}
        onDrop={onDropHandler}
        onDropRejected={onDropRejectedHandler}
        maxFiles={PHOTOS_VALIDATION.MAX.COUNT}
        maxSize={PHOTOS_VALIDATION.MAX.SIZE}
        accept={{
          'image/*': PHOTOS_VALIDATION.IMAGE_TYPES,
        }}
        noClick
        noKeyboard
        multiple
      >
        {({ getRootProps, getInputProps }) => (
          <div
            {...getRootProps({
              className: 'upload-photos',
            })}
          >
            <input {...getInputProps()} />
            <div id="sortable" className="upload-photos__items">
              {value.map((img, index) => (
                <Photo
                  id={img.id}
                  key={img.id}
                  src={img.src}
                  isMain={img.position === 1}
                  descriptionPath={`${name}[${index}].description`}
                  onRemove={onRemovePhotoCreator(img)}
                  onEdit={onEditPhotoCreator(index)}
                  onPreview={onPreviewPhotoCreator(index)}
                />
              ))}
            </div>
            <GradientButton
              onClick={uploadPhotosClickHandler}
              className="min-width-216 mt-32 ml-auto mr-auto mb-24"
              text={{ id: 'shared.uploadPhotos' }}
              addonBefore={<SvgIcon icon="upload" className="icon-left" />}
              disabled={value.length >= PHOTOS_VALIDATION.MAX.COUNT}
            />
            {value.length === 0 && (
              <>
                <p className="ant-upload-decor mb-16 ml-auto mr-auto">
                  <FormattedMessage id="shared.or" />
                </p>
                <p className="ant-upload-text text-align-center mb-0">
                  <FormattedMessage id="shared.dragYourItemsIn" />
                </p>
              </>
            )}
          </div>
        )}
      </Dropzone>
    </>
  );
};

UploadPhotosField.defaultProps = {
  onRemove: undefined,
};

UploadPhotosField.propTypes = {
  name: PropTypes.string.isRequired,
  onRemove: PropTypes.func,
};

export default UploadPhotosField;
