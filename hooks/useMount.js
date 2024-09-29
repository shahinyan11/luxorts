import { useEffect } from 'react';

// eslint-disable-next-line react-hooks/exhaustive-deps
const useMount = (callback) => useEffect(callback, []);

export default useMount;
