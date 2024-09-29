const withAdditionalProps =
  (Component, additionalProps = {}) =>
  (props) =>
    <Component {...props} {...additionalProps} />;

export default withAdditionalProps;
