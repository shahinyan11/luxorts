import React from 'react';
import { connect } from 'react-redux';

import { hideModal } from 'state/modal/actions';
import ModalRootComponent from 'views/ModalRoot/component';

// eslint-disable-next-line react/prefer-stateless-function
class ModalRoot extends React.Component {
  render() {
    return <ModalRootComponent {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  modalType: state.modal.modalType,
  modalProps: state.modal.modalProps,
});

const mapDispatchToProps = {
  onClose: hideModal,
};

export { ModalRoot as ModalRootContainer };
export default connect(mapStateToProps, mapDispatchToProps)(ModalRoot);
