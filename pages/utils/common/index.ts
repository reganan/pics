/* eslint-disable max-len */
import { getSearchParams } from 'rax-app';
import { ParamsServiceCard, ParamsServiceDetail } from '@/typings/base';

// 获取路由参数
export const getRouterParams = () => {
  const params: any = getSearchParams();
  let routerParams = params;
  // 扫瞄二维码进入参数被包在了q里面
  if (params && params.q) {
    const q = decodeURIComponent(params.q);
    // query参数系列化
    const res = q
      .replace(/(.*\?)/, '')
      .split('&')
      .reduce((obj, item) => {
        const [key, value] = item.split('=');
        const _obj = { ...obj };
        _obj[key] = value;
        return _obj;
      }, {});

    routerParams = { ...params, ...res };
  }
  return routerParams;
};

// 处理服务卡片
export const dealServiceCard = (list: ParamsServiceCard[] | any) => {
  if (!list || list.length === 0 || list.includes(undefined)) return {};
  const tagsList: any = [];
  const newList = list.map((item) => {
    const { serviceNodes, serviceType } = item;
    let onlyOneNode = false;
    let storeId = false;
    let hasFinsh = false;
    serviceNodes.forEach((element) => {
      if (Number(element.orderNo) === 3 && element.extraInfo?.storeId) {
        storeId = true;
      }
      if (Number(element.orderNo) === 6 && Number(element.status) === 1) {
        hasFinsh = true;
        onlyOneNode = true;
      }
      if (Number(element.orderNo) === 7) {
        onlyOneNode = true;
      }
    });
    const node = {
      ...item,
      closeStatus: Number(serviceNodes[0].status) === 2,
      currentNode: onlyOneNode ? null : serviceNodes && serviceNodes[0].message,
      completeNode: onlyOneNode ? serviceNodes && serviceNodes[0].message : serviceNodes && serviceNodes[1].message,
      completeTime: onlyOneNode
        ? serviceNodes && format(serviceNodes[1].time, false)
        : serviceNodes && format(serviceNodes[1].time, false),
      commentStatus: Number(item.commentStatus) === 0 && storeId && hasFinsh,
    };

    const tagsItem = {
      key: serviceType || '定制服务',
      value: serviceType || '定制服务',
    };
    const result = tagsList.some((items) => {
      if (items.key === tagsItem.key) {
        return true;
      }
      return false;
    });
    if (!result) {
      tagsList.push(tagsItem);
    }
    return node;
  });

  tagsList.unshift({
    key: '',
    value: '全部',
    ischeck: true,
  });

  return { newList, tagsList };
};

// 处理服务详情 数据平铺
export const dealServiceDetail = (data: ParamsServiceDetail | any) => {
  const list = {
    ...data,
    commentStatus: Number(data.commentStatus),
  };
  list.serviceNodes = list.serviceNodes.map((item) => {
    const node = {
      ...item,
      ...item.extraInfo,
      extraInfo: null,
      time: item.time ? format(item.time, true) : '',
      status: Number(item.status),
    };

    return node;
  });

  return list;
};

export const format = (shijianchuo, hasYear) => {
  if (!shijianchuo) return '';
  const time = new Date(Number(shijianchuo));
  const add0 = (m) => {
    return m < 10 ? `0${m}` : m;
  };
  const y = time.getFullYear();
  const m = time.getMonth() + 1;
  const d = time.getDate();
  const h = time.getHours();
  const mm = time.getMinutes();
  // const s = time.getSeconds();
  // :${add0(s)}
  return `${hasYear ? `${y}-` : ''}${add0(m)}-${add0(d)} ${add0(h)}:${add0(mm)}`;
};

export const pageShare = (title, imageUrl) => {
  const isHttps = imageUrl.includes('https');
  let httpsImagesUrl = imageUrl;
  if (!isHttps) httpsImagesUrl = `https:${imageUrl}`;
  return {
    title,
    imageUrl: httpsImagesUrl,
  };
};

export const getNavigationBarHeight = () => {
  // const systemInfo = wx.getSystemInfoSync();
  // 胶囊按钮位置信息
  const menuButtonInfo = wx.getMenuButtonBoundingClientRect();
  // 导航栏高度 = 状态栏到胶囊的间距（胶囊距上距离-状态栏高度） * 2 + 胶囊高度 + 状态栏高度
  // const navBarHeight =
  //   (menuButtonInfo.top - systemInfo.statusBarHeight) * 2 + menuButtonInfo.height + systemInfo.statusBarHeight;

  const navBarHeight = menuButtonInfo.top + menuButtonInfo.height;
  return navBarHeight;
};

export const getNavigationBarHeightAll = () => {
  const systemInfo = wx.getSystemInfoSync();
  // 胶囊按钮位置信息
  const menuButtonInfo = wx.getMenuButtonBoundingClientRect();
  // 导航栏高度 = 状态栏到胶囊的间距（胶囊距上距离-状态栏高度） * 2 + 胶囊高度 + 状态栏高度
  const navBarHeight =
    (menuButtonInfo.top - systemInfo.statusBarHeight) * 2 + menuButtonInfo.height + systemInfo.statusBarHeight;

  return navBarHeight;
};
