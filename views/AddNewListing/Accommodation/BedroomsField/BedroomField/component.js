import { Button, Form } from 'antd';
import { FormattedMessage } from 'react-intl';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { ACCOMMODATION_VALIDATION, BED_NAME_BY_TYPE } from 'constants/listing';
import isPresent from 'utils/isPresent';

import InputNumberField from 'views/shared/form/InputNumberField';
import InputField from 'views/shared/form/InputField';
import GradientButton from 'views/shared/GradientButton';
import SvgIcon from 'views/shared/SvgIcon';

import useContainer from './hook';

const BedroomField = ({
  index,
  handleAddCustomBed,
  handleRemoveCustomBedCreator,
  onBedAmountChangeHandlerCreator,
}) => {
  const { field, isEdit, bedsList, onEditHandler } = useContainer({ index });
  const hasBeds = isPresent(bedsList);

  return (
    <div className="new-listing__add mb-24 pb-8">
      <div className="new-listing__add-header d-flex justify-content-space-between align-item-center mb-8">
        <h3 className="new-listing__add-title mb-0">
          <FormattedMessage id="shared.bedroomNumber" values={{ number: index + 1 }} />
        </h3>
        {!isEdit && (
          <Button onClick={onEditHandler} htmlType="button" className="main-link">
            {hasBeds && <FormattedMessage id="shared.editBeds" />}
            {!hasBeds && <FormattedMessage id="shared.addBeds" />}
          </Button>
        )}
      </div>
      <p
        className={classNames(
          'new-listing__add-info mb-16',
          hasBeds && 'new-listing__add-info--filled',
        )}
      >
        {hasBeds && bedsList.join(', ')}
        {!hasBeds && (
          <FormattedMessage
            id="shared.bedsAmount"
            values={{ amount: ACCOMMODATION_VALIDATION.ARRANGEMENT.MIN }}
          />
        )}
      </p>
      {isEdit && (
        <>
          <div className="new-listing__add-options max-width-364 mb-8">
            {field.value.defaultBeds.map((bed, bedIdx) => (
              <InputNumberField
                key={bed.id || bed.uuid}
                name={`bedrooms[${index}].defaultBeds[${bedIdx}].amount`}
                formItemClassName="mb-8 ant-form-item--light"
                addonBefore={<FormattedMessage {...BED_NAME_BY_TYPE[bed.kind]} />}
                min={ACCOMMODATION_VALIDATION.ARRANGEMENT.MIN}
                max={ACCOMMODATION_VALIDATION.ARRANGEMENT.MAX}
                onStep={onBedAmountChangeHandlerCreator(
                  `bedrooms[${index}].defaultBeds[${bedIdx}].amount`,
                )}
              />
            ))}
          </div>
          {field.value.customBeds.map((bed, bedIdx) => (
            <div key={bed.id || bed.uuid} className="d-flex">
              <Form.Item className="mb-16 ant-form-item--edit-number width-364">
                <InputField
                  name={`bedrooms[${index}].customBeds[${bedIdx}].kind`}
                  placeholder={{ id: 'shared.enterBedTitle' }}
                  withFormItem={false}
                />
                <InputNumberField
                  name={`bedrooms[${index}].customBeds[${bedIdx}].amount`}
                  min={ACCOMMODATION_VALIDATION.ARRANGEMENT.MIN}
                  max={ACCOMMODATION_VALIDATION.ARRANGEMENT.MAX}
                  withFormItem={false}
                  onStep={onBedAmountChangeHandlerCreator(
                    `bedrooms[${index}].customBeds[${bedIdx}].amount`,
                  )}
                />
              </Form.Item>
              <GradientButton
                onClick={handleRemoveCustomBedCreator({
                  bedroomIdx: index,
                  index: bedIdx,
                  deletedItem: bed,
                })}
                className="main-btn--icon ml-8"
                variant="tertiary"
                addonAfter={<SvgIcon icon="cross" className="icon-right" />}
              />
            </div>
          ))}
          <Button onClick={handleAddCustomBed} htmlType="button" className="main-link mb-24 mt-8">
            <FormattedMessage id="shared.addAnotherBed" />
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

BedroomField.propTypes = {
  index: PropTypes.number.isRequired,
  handleAddCustomBed: PropTypes.func.isRequired,
  handleRemoveCustomBedCreator: PropTypes.func.isRequired,
  onBedAmountChangeHandlerCreator: PropTypes.func.isRequired,
};

export default BedroomField;
