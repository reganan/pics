import { TPGetStorage, TPSetStorage } from '@/utils/storage';

const USER_INFO = '__baseInfo';
let localBaseInfo = {};
export const defaultBaseInfo = { bizCode: '', storeId: '', kaStoreId: '' };

// 设置缓存基本信息-storeId bizCode cartId
export const setLocalBaseInfo = (params) => {
  localBaseInfo = { ...localBaseInfo, ...params };
  TPSetStorage(USER_INFO, localBaseInfo);
};

// 获取缓存基本信息-storeId bizCode cartId
export const getLocalBaseInfo = () => {
  if (Object.keys(localBaseInfo).length > 0) return localBaseInfo;
  const storage = TPGetStorage(USER_INFO);
  localBaseInfo = { ...defaultBaseInfo, ...storage };
  return localBaseInfo;
};
