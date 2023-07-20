//原理是在存入key的时候添加 expired time, 在读的时候如果expired time过期了，就删除.
import { StorageCls, Key, expire, Result, Data } from "./type";
import { Dictionaries } from "./enum";

export class Storage implements StorageCls {
  set<T>(key: Key, value: T, expire: expire = Dictionaries.permanent) {
    const data = {
      value,
      [Dictionaries.expire]: expire,
    };

    localStorage.setItem(key, JSON.stringify(data));
  }

  get<T>(key: Key): Result<T> {
    // 如果的Dictionaries.expire类型是时间戳，判断时候过期
    const value = localStorage.getItem(key);

    if (value) {
      const obj: Data<T> = JSON.parse(value);
      const now = new Date().getTime();
      if (
        typeof obj[Dictionaries.expire] == "number" &&
        obj[Dictionaries.expire] < now
      ) {
        this.remove(key);
        return {
          message: "key已过期",
          value: null,
        };
      } else {
        return {
          message: "成功读取",
          value: obj.value,
        };
      }
    } else {
      return {
        message: "key无效",
        value: null,
      };
    }
  }

  remove(key: Key) {
    localStorage.removeItem(key);
  }

  clear() {
    localStorage.clear();
  }
}
