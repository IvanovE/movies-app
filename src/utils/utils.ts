type obj = {
  [key: string]: unknown
}

export const excludeProperties = <T extends obj, K extends keyof T>(object: T, ...properties: K[]): Omit<T, K> => {
  return Object.keys(object).reduce((obj, key) => {
    if (!properties.includes(key as K)) {
      obj[key as keyof typeof obj] = object[key as keyof typeof object];
    }
    return obj;
  }, {} as T);
};

export const excludeProperties2 = <T extends obj, K extends keyof T>(object: T, ...properties: K[]): Omit<T, K> => {
  const newObj = { ...object };
  for (const property of properties) {
    delete newObj[property];
  }
  return newObj;
};
