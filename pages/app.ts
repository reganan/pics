import { runApp, useAppLaunch } from 'rax-app';
import appConfig from './app.json';
import { Env } from '@customTypes/Common';
import './common/global';

// 微信小程序云函数调用初始化
wx.cloud.init();

// 初始化应用参数
// eslint-disable-next-line
useAppLaunch((options) => {
  // 获取执行环境
  const env = appConfig.env as Env;

  // 判断是否具有唤端能力
  const { scene } = options;
  const canCallApp = scene === 1036 || scene === 1039;

  // 更新应用参数
  wx.global.setData({
    canCallApp,
    env,
  });
});

runApp(appConfig);
