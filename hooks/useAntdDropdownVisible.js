import { useState } from 'react';

import useImmutableCallback from 'hooks/useImmutableCallback';

const useAntdDropdownVisible = () => {
  const [visible, setVisible] = useState(false);

  /**
   * On visibility change handler
   * @param isVisible {boolean}
   */
  const onVisibilityChangeHandler = useImmutableCallback((isVisible) => {
    setVisible(isVisible);
  });

  return [visible, onVisibilityChangeHandler, setVisible];
};

export default useAntdDropdownVisible;
