/*
 * @Author: xiaotian@tangping
 * @Descriptions:  公用工具函数文件
 * @TodoList: 无
 * @Date: 2020-07-31 11:47:29
 * @Last Modified by: xiaotian@tangping
 * @Last Modified time: 2020-11-24 15:40:21
 */
import AsyncStorage from 'universal-asyncstorage';
import { Env } from '@customTypes/Common';

/**
 * 数值加上单位 rpx
 *
 * @param {number} value
 * @returns {string}
 */
const wrapWithRpx = (value: number): string => `${value}rpx`;

/**
 * 数值加上单位 px
 *
 * @param {number} value
 * @returns {string}
 */
const wrapWithPx = (value: number): string => `${value}px`;

/**
 * 利用 canvas 实现图片居中裁剪，引用页面必须引入 canvas 组件
 *
 * @param {string} imageUrl
 * @param {number} ratio width / height 裁剪图片宽高比例，需和 canvas 组件保持一致
 * @returns {Promise<string>}
 */
const cropImage = (imageUrl: string, ratio: number): Promise<string> => {
  return new Promise((resolve, reject) => {
    // 获取图片本地路径信息
    wx.getImageInfo({
      src: imageUrl,
      success: (res) => {
        const ctx = wx.createCanvasContext('canvas');
        let canvasW = res.width;
        let canvasH = res.height;
        let posX = 0;
        let posY = 0;

        // 确定图片裁剪区域
        if (res.width / res.height > ratio) {
          canvasW = res.height * ratio;
          posX = (res.width - canvasW) / 2;
        } else {
          canvasH = res.width / ratio;
          posY = (res.height - canvasH) / 2;
        }

        ctx.drawImage(res.path, posX, posY, canvasW, canvasH, 0, 0, canvasW, canvasH);
        ctx.draw(
          false,
          // @ts-ignore 加上 setTimeout 解决回掉函数不生效的情况
          setTimeout(() => {
            wx.canvasToTempFilePath({
              width: canvasW,
              height: canvasH,
              destWidth: canvasW,
              destHeight: canvasH,
              canvasId: 'canvas',
              fileType: 'jpg',
              success: (result) => {
                resolve(result.tempFilePath);
              },
              fail: (e) => {
                reject(e);
              },
            });
          }, 50),
        );
      },
    });
  });
};

/**
 * 判断当前运行环境
 *
 * @returns {('wapa' | 'm')}
 */
const getCurrentEnv = (): Env => wx.global.getData().env || 'm';

/**
 * 判断是否是 ihponex 系列
 *
 * @returns {boolean}
 */
const judgeIsIPhoneX = (): boolean => {
  const { model } = wx.getSystemInfoSync();
  return /iphone\sx/i.test(model) || (/iphone/i.test(model) && /unknown/.test(model)) || /iphone\s11/i.test(model);
};

/**
 * 获取底部栏高度
 *
 * @returns {number}
 */
const getBottomBarHeight = (): number => {
  // 68 为 iphonex 系列底部栏高度
  return judgeIsIPhoneX() ? 68 : 0;
};

/**
 * 获取 navbar 高度信息
 *
 * @return {*}  {{
 *   // 状态栏高度
 *   statusBarHeight: number;
 *   // 导航栏高度
 *   navbarHeight: number;
 *   // 胶囊距右方间距（方保持左、右间距一致）
 *   menuRight: number;
 *   // 胶囊距底部间距（保持底部间距一致）
 *   menuBottom: number;
 *   // 胶囊高度（自定义内容可与胶囊高度保证一致）
 *   menuHeight: number;
 * }}
 */
const getNavbarInfo = (): {
  // 状态栏高度
  statusBarHeight: number;
  // 导航栏高度
  navbarHeight: number;
  // 胶囊距右方间距（方保持左、右间距一致）
  menuRight: number;
  // 胶囊距底部间距（保持底部间距一致）
  menuBottom: number;
  // 胶囊高度（自定义内容可与胶囊高度保证一致）
  menuHeight: number;
} => {
  // 获取 navbar 信息
  const systemInfo = wx.getSystemInfoSync();
  // 胶囊按钮位置信息
  const menuButtonInfo = wx.getMenuButtonBoundingClientRect();
  // 导航栏高度 = 状态栏到胶囊的间距（胶囊距上距离-状态栏高度） * 2 + 胶囊高度 + 状态栏高度
  const navbarHeight =
    (menuButtonInfo.top - systemInfo.statusBarHeight) * 2 + menuButtonInfo.height + systemInfo.statusBarHeight;
  const menuRight = systemInfo.screenWidth - menuButtonInfo.right;
  const menuBottom = menuButtonInfo.top - systemInfo.statusBarHeight;
  const menuHeight = menuButtonInfo.height;
  const { statusBarHeight } = systemInfo;

  return {
    navbarHeight,
    menuRight,
    menuBottom,
    menuHeight,
    statusBarHeight,
  };
};

/**
 * 生成全局唯一标识符，第一期用作算法的用户独立标识
 *
 * @return {*}  {string}
 */
const generateUUID = (): string => {
  let d = new Date().getTime();
  const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
  });
  return uuid;
};

/**
 * 从缓存中获取 uuid
 *
 * @returns {Promise<string>}
 */
const getUUID = async (): Promise<string> => {
  try {
    let uuid = await AsyncStorage.getItem('uuid');
    if (!uuid) {
      uuid = generateUUID();
      await AsyncStorage.setItem('uuid', generateUUID());
    }
    return uuid;
  } catch (error) {
    const uuid = generateUUID();
    await AsyncStorage.setItem('uuid', generateUUID());
    return uuid;
  }
};

export {
  wrapWithPx,
  wrapWithRpx,
  cropImage,
  getCurrentEnv,
  judgeIsIPhoneX,
  getBottomBarHeight,
  getNavbarInfo,
  generateUUID,
  getUUID,
};
