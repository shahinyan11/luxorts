import { useField } from 'formik';
import { EyeInvisibleOutlined, EyeOutlined } from '@ant-design/icons';

import { getPasswordStrengthScale, getStrengthData } from 'utils/form/passwordStrength';
import useImmutableCallback from 'hooks/useImmutableCallback';
import useFormattedOrRawMessage from 'hooks/useFormattedOrRawMessage';

function useContainer({ name }) {
  // eslint-disable-next-line no-unused-vars
  const [field, meta, helpers] = useField(name);
  const { error, value, touched } = meta;
  const { setValue, setTouched } = helpers;
  const formattedOrRawMessage = useFormattedOrRawMessage();

  const hasError = touched && error;
  const strengthScale = getPasswordStrengthScale(value);
  const helperProps = getStrengthData(strengthScale);
  helperProps.hasError = hasError;
  helperProps.error = error;

  /**
   * Render icon for Input.Password
   * @param visible
   * @returns {JSX.Element}
   */
  const renderVisibilityIcon = useImmutableCallback((visible) =>
    visible ? <EyeInvisibleOutlined /> : <EyeOutlined />,
  );

  /**
   * Handle blur
   */
  const onBlurHandler = useImmutableCallback(() => {
    setTouched(true);
  });

  /**
   * Handle password change
   */
  const onChangeHandler = useImmutableCallback((e) => {
    setValue(e.target.value.trim());
  });

  return {
    value,
    helperProps,
    onBlurHandler,
    onChangeHandler,
    renderVisibilityIcon,
    formattedOrRawMessage,
  };
}

export default useContainer;
