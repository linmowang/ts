import { Dictionaries } from "../enum";

export type Key = string;
export type expire = Dictionaries.permanent | number;
export interface Result<T> {
  message: string;
  value: T | null;
}

export interface Data<T> {
  value: T;
  [Dictionaries.expire]: Dictionaries.permanent | number;
}
export interface StorageCls {
  set<T>(key: Key, value: T, expire: expire);
  get<T>(key: Key): Result<T>;
  remove(key: Key);
  clear: () => void;
}
