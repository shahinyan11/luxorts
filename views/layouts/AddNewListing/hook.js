import ROUTES from 'constants/routes';
import useLeavePageModal from 'hooks/useLeavePageModal';

function useContainer({ formik, onBackRoute, isDirty }) {
  const onExit = useLeavePageModal({ formik, redirectRoute: ROUTES.INDEX.PATH, isDirty });
  const onBack = useLeavePageModal({ formik, redirectRoute: onBackRoute, isDirty });

  return {
    onBack,
    onExit,
  };
}

export default useContainer;
