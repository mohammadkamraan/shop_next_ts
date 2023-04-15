import { useCallback, useLayoutEffect, useState } from "react";

interface Initializers {
  handler: Function;
  keyInStorage: string;
}

const useInitialize = (initializers: Initializers[]) => {
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  const initializeHandler = useCallback(() => {
    for (let initializer of initializers) {
      const storageData = JSON.parse(
        localStorage.getItem(initializer.keyInStorage) as string
      );
      if (storageData) {
        initializer.handler(storageData);
      }
    }
    setIsInitialized(true);
  }, [initializers]);

  useLayoutEffect(() => {
    initializeHandler();
  }, [initializeHandler]);

  return isInitialized;
};

export default useInitialize;
