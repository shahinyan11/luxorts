import { Form, Input } from 'antd';
import { FormattedMessage } from 'react-intl';
import { FormikProvider } from 'formik';

import LandingPagesLayout from 'views/layouts/LandingPages';
import GradientButton from 'views/shared/GradientButton';
import InputField from 'views/shared/form/InputField';
import PhoneField from 'views/shared/form/PhoneField';

import useContainer from './hook';

const ContactUs = () => {
  const { formik, isLoading } = useContainer();

  return (
    <>
      <section className="contact-us pt-40 pt-md-80 pb-72 pb-md-140">
        <div className="contact-us__container text-align-center">
          <h1 className="contact-us__title mb-8">
            <FormattedMessage id="contactUs.title" />
          </h1>
          <p className="contact-us__description mb-0">
            <FormattedMessage id="contactUs.haveAnyQuestions" />
          </p>
        </div>
      </section>
      <section className="conversation mb-40 mb-80">
        <Form
          layout="vertical"
          size="large"
          className="conversation__content pt-76 pt-md-152 pb-40 pb-md-80"
        >
          <FormikProvider value={formik}>
            <h2 className="conversation__title mb-40">
              <FormattedMessage id="contactUs.letsStartConversation" />
            </h2>
            <div className="container-two-items">
              <InputField name="firstName" label={{ id: 'shared.firstName' }} />
              <InputField name="lastName" label={{ id: 'shared.lastName' }} />
            </div>
            <div className="container-two-items">
              <InputField type="email" name="email" label={{ id: 'shared.email' }} />
              <PhoneField
                name="phoneNumber"
                className="main-phone-input"
                label={{ id: 'shared.phoneNumber' }}
              />
            </div>
            <InputField
              formItemClassName="mb-32"
              name="message"
              asComponent={Input.TextArea}
              placeholder={{ id: 'contactUs.message.placeholder' }}
            />
            <div className="d-flex justify-content-flex-end">
              <GradientButton
                loading={isLoading}
                onClick={formik.handleSubmit}
                text={{ id: 'shared.submit' }}
                className="min-width-140"
                variant="primary"
              />
            </div>
          </FormikProvider>
        </Form>
      </section>
    </>
  );
};

ContactUs.Layout = LandingPagesLayout;

export default ContactUs;
