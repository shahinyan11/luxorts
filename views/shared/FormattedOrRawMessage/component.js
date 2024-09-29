import React from 'react';
import PropTypes from 'prop-types';
import { is } from 'ramda';
import { FormattedMessage } from 'react-intl';

const FormattedOrRawMessage = ({ message }) => {
  if (is(String, message)) {
    return message;
  }

  if (is(Object, message) && is(String, message.id)) {
    return <FormattedMessage {...message} />;
  }

  return 'Error: Unexpected empty message';
};

FormattedOrRawMessage.defaultProps = {
  message: undefined,
};

FormattedOrRawMessage.propTypes = {
  message: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
};

export default FormattedOrRawMessage;
