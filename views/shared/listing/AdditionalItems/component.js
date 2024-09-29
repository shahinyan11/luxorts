import PropTypes from 'prop-types';
import classNames from 'classnames';

import { RADIO_GROUP_PAID_OPTIONS } from 'constants';

import GradientButton from 'views/shared/GradientButton';
import SvgIcon from 'views/shared/SvgIcon';
import InputField from 'views/shared/form/InputField';
import RadioGroupField from 'views/shared/form/RadioGroupField';

const AdditionalItems = ({
  items,
  onRemove,
  onAdd,
  isAddButtonDisabled,
  isLoading,
  namePlaceholder,
  descriptionPlaceholder,
  withPaid,
  withDescription,
}) => (
  <>
    {items.map((item) => (
      <div key={item.id} className="new-listing__additional-box mb-16">
        <div className="new-listing__additional-info">
          <h3 className="new-listing__additional-title mb-4">
            {item.name}
            {withPaid && (
              <SvgIcon
                icon="dot"
                className={classNames('new-listing__additional-icon', {
                  'new-listing__additional-icon--paid': item.paid,
                  'new-listing__additional-icon--free': !item.paid,
                })}
              />
            )}
          </h3>
          <p className="new-listing__text mb-0">{item.description}</p>
        </div>
        <GradientButton
          onClick={onRemove(item.id)}
          className="main-btn--icon"
          variant="tertiary"
          addonAfter={<SvgIcon icon="cross" className="icon-right" />}
        />
      </div>
    ))}
    <InputField name="additional.name" placeholder={namePlaceholder} />
    {withDescription && (
      <InputField
        formItemClassName="mb-24"
        name="additional.description"
        placeholder={descriptionPlaceholder}
      />
    )}
    {withPaid && (
      <RadioGroupField
        name="additional.paid"
        className="new-listig__radio-group mb-24"
        items={RADIO_GROUP_PAID_OPTIONS}
      />
    )}
    <GradientButton
      disabled={isAddButtonDisabled}
      loading={isLoading}
      onClick={onAdd}
      text={{ id: 'shared.add' }}
      className="min-width-140"
      variant="secondary"
    />
  </>
);

AdditionalItems.defaultProps = {
  items: [],
  isLoading: false,
  withPaid: false,
  withDescription: true,
  descriptionPlaceholder: undefined,
};

AdditionalItems.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape()),
  onRemove: PropTypes.func.isRequired,
  onAdd: PropTypes.func.isRequired,
  isAddButtonDisabled: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool,
  namePlaceholder: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
  descriptionPlaceholder: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }),
  withPaid: PropTypes.bool,
  withDescription: PropTypes.bool,
};

export default AdditionalItems;
