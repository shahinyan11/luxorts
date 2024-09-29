import useImmutableCallback from 'hooks/useImmutableCallback';

const useCalendarToolbar = ({ onNavigate }) => {
  /**
   * Handle navigation buttons click
   * @param action {string}
   * @returns {(function(): void)|*}
   */
  const navigate = useImmutableCallback((action) => () => {
    onNavigate(action);
  });

  return {
    navigate,
  };
};

export default useCalendarToolbar;
