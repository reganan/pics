import { aplus_universal } from '@ali/aplus_universal';
import { sendPVPageProps, sendAplusProps } from './types';
import { TPGetStorage } from '@/utils/storage';

// todolist
// const isProd = process.env.NODE_ENV === 'prod';

// 设置页面spmAB位
export const setPageSpm = (spmb: string, spma: string, callback?: Function) => {
  aplus_universal.setPageSPM(spma, spmb, callback);
};

// 获取页面spmAB位
export const getPageSPM = () => {
  aplus_universal.getPageSPM();
};

// 发pv
export const sendPV = (pageConfig: sendPVPageProps, params?: any) => {
  console.log('sendPV pageName', pageConfig.pageName);
  setPageSpm(pageConfig.spmA, pageConfig.spmB, () => {
    const newPageConfig = { ...pageConfig, isonepage: false };
    aplus_universal.enter(newPageConfig, params);
  });
};

// 发送黄金令箭
export const sendAplus = (params: sendAplusProps) => {
  const { logkey, gmkey = 'CLK', gokey, method = 'GET' } = params;

  aplus_universal.record(logkey, gmkey, {
    userId: TPGetStorage('userId'),
    ...gokey,
  }, method);
};
