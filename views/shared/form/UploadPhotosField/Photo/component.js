import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import InputField from 'views/shared/form/InputField';
import SvgIcon from 'views/shared/SvgIcon';

const Photo = ({ id, src, isMain, onRemove, onEdit, onPreview, descriptionPath }) => (
  <div id={id} className="upload-photos__item">
    <div
      onClick={onPreview}
      className="upload-photos__card"
      style={{ backgroundImage: `url(${src})` }}
      role="button"
    >
      <div className="upload-photos__card-actions d-flex justify-content-space-between">
        <div onClick={onEdit} className="upload-photos__card-action" role="button">
          <SvgIcon icon="edit" className="icon-left" />
        </div>
        <div onClick={onRemove} className="upload-photos__card-action" role="button">
          <SvgIcon icon="cross" className="icon-left" />
        </div>
      </div>
      {isMain && (
        <div className="upload-photos__card-main-label">
          <FormattedMessage id="shared.mainPhoto" />
        </div>
      )}
    </div>
    <InputField name={descriptionPath} placeholder={{ id: 'shared.addCaption' }} />
  </div>
);

Photo.propTypes = {
  id: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  descriptionPath: PropTypes.string.isRequired,
  isMain: PropTypes.bool.isRequired,
  onRemove: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  onPreview: PropTypes.func.isRequired,
};

export default Photo;
