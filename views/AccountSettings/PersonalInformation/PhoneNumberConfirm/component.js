import { FormikProvider } from 'formik';
import { FormattedMessage } from 'react-intl';

import GradientButton from 'views/shared/GradientButton';
import InputField from 'views/shared/form/InputField';

import useContainer from './hook';

const PhoneNumberConfirm = () => {
  const { formik, isLoading, newPhone, onResendClickHandler } = useContainer();

  return (
    <div className="personal-information__item mb-24">
      <div className="personal-information__header d-flex justify-content-space-between mb-8">
        <p className="personal-information__label personal-information__label--active mb-0 ">
          <FormattedMessage id="shared.phoneNumber" />
        </p>
      </div>
      <p className="personal-information__descr text-body mb-16">
        <FormattedMessage id="personalInformation.phoneNumber.description" />
      </p>
      <p className="text-body mb-16">
        <FormattedMessage
          id="shared.weTextedYourSecurityCode"
          values={{
            phone: <b className="confirm__text-bold">{newPhone}</b>,
          }}
        />
      </p>
      <FormikProvider value={formik}>
        <InputField name="code" placeholder={{ id: 'shared.enterSecurityCode' }} />
      </FormikProvider>
      <p className="personal-information__confirm text-caption d-flex mb-24">
        <FormattedMessage id="shared.didNotGetIt" />
        <a
          onClick={onResendClickHandler}
          role="button"
          className="main-text-btn text-caption-2 personal-information__confirm-link ml-4"
        >
          <FormattedMessage id="shared.tryAgain" />
        </a>
      </p>
      <div className="d-flex mb-24">
        <GradientButton
          loading={isLoading}
          onClick={formik.handleSubmit}
          text={{ id: 'shared.confirm' }}
          className="min-width-140 mr-16"
          variant="primary"
        />
      </div>
    </div>
  );
};

export default PhoneNumberConfirm;
