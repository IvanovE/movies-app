import { useEffect, useRef } from 'react';

export const useUpdatedEffect = (callback: any, dependencies: Array<any>) => {
  const firstRenderRef = useRef(true);

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false;
      return;
    }
    return callback();
  }, dependencies);
};
