import DeactivatedByUserModal from 'views/SignIn/DeactivatedByUserModal';
import DeactivatedByAdminModal from 'views/SignIn/DeactivatedByAdminModal';
import InfoModal from 'views/shared/modals/InfoModal';
import UploadProfileImageModal from 'views/shared/modals/UploadProfileImageModal';
import GalleryModal from 'views/shared/modals/GalleryModal';
import RemovePhotoModal from 'views/shared/modals/RemovePhotoModal';
import DeactivateAccountModal from 'views/shared/modals/DeactivateAccountModal';
import PublishListingModal from 'views/shared/modals/PublishListingModal';
import RecoverPasswordModal from 'views/shared/modals/RecoverPasswordModal';
import UpdateEmailModal from 'views/shared/modals/UpdateEmailModal';
import UpdateListingStatusModal from 'views/shared/modals/UpdateListingStatusModal';

const MODAL_COMPONENTS = {
  INFO_MODAL: InfoModal,
  DEACTIVATED_BY_USER_MODAL: DeactivatedByUserModal,
  DEACTIVATED_BY_ADMIN_MODAL: DeactivatedByAdminModal,
  UPLOAD_PROFILE_IMAGE_MODAL: UploadProfileImageModal,
  REMOVE_PHOTO_MODAL: RemovePhotoModal,
  GALLERY_MODAL: GalleryModal,
  DEACTIVATE_ACCOUNT_MODAL: DeactivateAccountModal,
  PUBLISH_LISTING_MODAL: PublishListingModal,
  RECOVER_PASSWORD_MODAL: RecoverPasswordModal,
  UPDATE_EMAIL_MODAL: UpdateEmailModal,
  UPDATE_LISTING_STATUS_MODAL: UpdateListingStatusModal,
};

export default MODAL_COMPONENTS;
