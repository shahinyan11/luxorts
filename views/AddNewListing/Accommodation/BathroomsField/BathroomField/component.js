import { Button, Form } from 'antd';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { ACCOMMODATION_VALIDATION, BATH_NAME_BY_TYPE } from 'constants/listing';
import isPresent from 'utils/isPresent';

import InputNumberField from 'views/shared/form/InputNumberField';
import InputField from 'views/shared/form/InputField';
import GradientButton from 'views/shared/GradientButton';
import SvgIcon from 'views/shared/SvgIcon';

import useContainer from './hook';

const BathroomField = ({ index, handleAddCustomBath, handleRemoveCustomBathCreator }) => {
  const { field, isEdit, bathsList, onEditHandler } = useContainer({ index });
  const hasBaths = isPresent(bathsList);

  return (
    <div className="new-listing__add mb-24 pb-8">
      <div className="new-listing__add-header d-flex justify-content-space-between align-item-center mb-8">
        <h3 className="new-listing__add-title mb-0">
          <FormattedMessage id="shared.bathroomNumber" values={{ number: index + 1 }} />
        </h3>
        {!isEdit && (
          <Button onClick={onEditHandler} htmlType="button" className="main-link">
            {hasBaths && <FormattedMessage id="shared.editBaths" />}
            {!hasBaths && <FormattedMessage id="shared.addBaths" />}
          </Button>
        )}
      </div>
      <p
        className={classNames(
          'new-listing__add-info mb-16',
          hasBaths && 'new-listing__add-info--filled',
        )}
      >
        {hasBaths && bathsList.join(', ')}
        {!hasBaths && (
          <FormattedMessage
            id="shared.bathsAmount"
            values={{ amount: ACCOMMODATION_VALIDATION.ARRANGEMENT.MIN }}
          />
        )}
      </p>
      {isEdit && (
        <>
          <div className="new-listing__add-options max-width-364 mb-8">
            {field.value.defaultBaths.map((bath, bathIdx) => (
              <InputNumberField
                key={bath.id || bath.uuid}
                name={`bathrooms[${index}].defaultBaths[${bathIdx}].amount`}
                formItemClassName="mb-8 ant-form-item--light"
                addonBefore={<FormattedMessage {...BATH_NAME_BY_TYPE[bath.kind]} />}
                min={ACCOMMODATION_VALIDATION.ARRANGEMENT.MIN}
                max={ACCOMMODATION_VALIDATION.ARRANGEMENT.MAX}
              />
            ))}
          </div>
          {field.value.customBaths.map((bath, bathIdx) => (
            <div key={bath.id || bath.uuid} className="d-flex">
              <Form.Item className="mb-16 ant-form-item--edit-number width-364">
                <InputField
                  name={`bathrooms[${index}].customBaths[${bathIdx}].kind`}
                  placeholder={{ id: 'shared.enterBathTitle' }}
                  withFormItem={false}
                />
                <InputNumberField
                  name={`bathrooms[${index}].customBaths[${bathIdx}].amount`}
                  min={ACCOMMODATION_VALIDATION.ARRANGEMENT.MIN}
                  max={ACCOMMODATION_VALIDATION.ARRANGEMENT.MAX}
                  withFormItem={false}
                />
              </Form.Item>
              <GradientButton
                onClick={handleRemoveCustomBathCreator({
                  bathroomIdx: index,
                  index: bathIdx,
                  deletedItem: bath,
                })}
                className="main-btn--icon ml-8"
                variant="tertiary"
                addonAfter={<SvgIcon icon="cross" className="icon-right" />}
              />
            </div>
          ))}
          <Button onClick={handleAddCustomBath} htmlType="button" className="main-link mb-24 mt-8">
            <FormattedMessage id="shared.addAnotherBath" />
          </Button>
          <GradientButton
            onClick={onEditHandler}
            className="min-width-140 mb-16"
            variant="secondary"
            text={{ id: 'shared.done' }}
          />
        </>
      )}
    </div>
  );
};

BathroomField.propTypes = {
  index: PropTypes.number.isRequired,
  handleAddCustomBath: PropTypes.func.isRequired,
  handleRemoveCustomBathCreator: PropTypes.func.isRequired,
};

export default BathroomField;
