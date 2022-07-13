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

export const destructObjIntoArr = <T, K extends keyof T>
  (obj: T, keys: K[]): Array<string> => {
  return keys.map((property) => {
    if (typeof property === 'string' && obj[property]) {
      const propertyWithCapitalFirstLetter = property[0].toUpperCase() + property.slice(1);
      return `${propertyWithCapitalFirstLetter}: ${obj[property]}`;
    }
    return '';
  }).filter((str) => str.length > 0);
};

export const normalizeDate = (date: string): string => {
  return new Date(date.toString()).toDateString();
};
