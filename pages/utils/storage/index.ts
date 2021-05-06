import AsyncStorage from 'universal-asyncstorage';
import { getStorageSync, setStorageSync, removeStorageSync } from '@uni/storage';

/**
 * 异步本地缓存
 */
export const getStorage = (key: string) => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(key)
      .then((value) => {
        if (value !== null) {
          resolve(value);
        }
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const setStorage = (key: string, value: any, cb?: Function) => {
  AsyncStorage.setItem(key, value).then(() => {
    if (cb) cb();
  });
};

export const removeStorage = (key: string) => {
  AsyncStorage.removeItem(key).then(() => {});
};

export const getAllStorage = () => {
  return new Promise((resolve, reject) => {
    AsyncStorage.getAllKeys()
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
};

export const removeAllStorage = () => {
  AsyncStorage.clear().then(() => {});
};

/**
 * 以下是同步本地缓存
 */

// 存储
export const TPSetStorage = (key, value) => {
  setStorageSync({
    key,
    data: value,
  });
};

// 取出数据
export const TPGetStorage = (key) => {
  const value = getStorageSync({ key }).data;
  return value;
};

// 删除数据
export const TPRemoveStorage = (key) => {
  removeStorageSync({ key });
};
