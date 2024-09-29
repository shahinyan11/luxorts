import { useCallback } from 'react';

// eslint-disable-next-line react-hooks/exhaustive-deps
const useImmutableCallback = (callback) => useCallback(callback, []);

export default useImmutableCallback;
