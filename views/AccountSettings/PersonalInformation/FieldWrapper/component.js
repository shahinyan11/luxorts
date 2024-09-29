import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import classNames from 'classnames';

import GradientButton from 'views/shared/GradientButton';

import useContainer from './hook';

const FieldWrapper = ({
  children,
  label,
  description,
  value,
  hideButtons,
  isLoading,
  changeMode,
  fieldNames,
}) => {
  const { toggleEditMode, editMode, onSave } = useContainer({ changeMode, fieldNames });

  return (
    <div className="personal-information__item mb-24">
      <div className="personal-information__header d-flex justify-content-space-between mb-8">
        <p
          className={classNames('personal-information__label mb-0', {
            'personal-information__label--active': editMode,
          })}
        >
          <FormattedMessage {...label} />
        </p>
        <a
          onClick={toggleEditMode}
          role="button"
          className={classNames('main-text-btn personal-information__edit text-body-2', {
            'personal-information__edit--active': !editMode,
            'personal-information__edit--hidden': editMode,
          })}
        >
          <FormattedMessage id={`shared.${value ? 'edit' : 'add'}`} />
        </a>
      </div>
      {!editMode ? (
        <p
          className={classNames('personal-information__value mb-24', {
            'personal-information__value': value,
            'personal-information__value--disabled': !value,
          })}
        >
          {value || <FormattedMessage id="shared.notProvided" />}
        </p>
      ) : (
        <>
          {description && (
            <p className="personal-information__descr text-body mb-16">
              <FormattedMessage {...description} />
            </p>
          )}
          {children}
          {!hideButtons && (
            <div className="d-flex mb-24">
              <GradientButton
                onClick={toggleEditMode}
                text={{ id: 'shared.cancel' }}
                className="min-width-120 mr-16"
                variant="tertiary"
              />
              <GradientButton
                loading={isLoading}
                onClick={onSave}
                text={{ id: 'shared.save' }}
                className="min-width-140 mr-16"
                variant="primary"
              />
            </div>
          )}
        </>
      )}
    </div>
  );
};

FieldWrapper.defaultProps = {
  description: null,
  value: null,
  hideButtons: false,
  isLoading: false,
  changeMode: true,
  fieldNames: null,
};

FieldWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.shape().isRequired,
  fieldNames: PropTypes.arrayOf(PropTypes.string),
  value: PropTypes.string,
  description: PropTypes.shape(),
  hideButtons: PropTypes.bool,
  isLoading: PropTypes.bool,
  changeMode: PropTypes.bool,
};

export default FieldWrapper;
