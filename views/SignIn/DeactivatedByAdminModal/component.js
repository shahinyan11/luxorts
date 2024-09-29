import InfoModal from 'views/shared/modals/InfoModal';

import useContainer from './hook';

const DeactivatedByAdminModal = (props) => {
  const { onConfirmHandler } = useContainer(props);

  return (
    <InfoModal
      closable={false}
      onConfirm={onConfirmHandler}
      description={{ id: 'signIn.deactivatedByAdminModal.description' }}
    />
  );
};

export default DeactivatedByAdminModal;
