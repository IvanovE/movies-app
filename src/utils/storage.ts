import { IUsers } from '../types/common';

type TKey = 'users' | 'currentUser' | 'isSignedIn'
type TReturn<T> = T extends 'users'
    ? IUsers
    : T extends 'currentUser'
    ? string | null
    : T extends 'isSignedIn'
    ? boolean
    : never

export function storage<K extends TKey>(key: K): TReturn<K>
export function storage<K extends TKey, T extends TReturn<K>>(key: K, data: T): void
export function storage<K extends TKey, T extends TReturn<K>>(key: K, data?: T): void | TReturn<K> {
  if (data === undefined) {
    try {
      const item = localStorage.getItem(key);
      if (item !== null) {
        return JSON.parse(item);
      }
    } catch (error) {
      console.log(error);
    }
  }
  else {
    localStorage.setItem(key, JSON.stringify(data));
  }
}
