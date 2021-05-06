import { getLoginInfo } from '@/utils/mtop/mtop-api';
import { TPSetStorage } from '@/utils/storage';

export const BusinessLogin = (cb?: Function) => {
  return new Promise((resolve) => {
    wx.login({
      success: async (res) => {
        if (res.code) {
          try {
            const loginInfo = await getLoginInfo({ jsCode: res.code });
            TPSetStorage('tokenTime', new Date().getTime());
            TPSetStorage('token', loginInfo.token);
            TPSetStorage('checkMobileExist', loginInfo.checkMobileExist === 'true');
            TPSetStorage('checkUserInfoExist', loginInfo.checkUserInfoExist === 'true');
            TPSetStorage('userId', loginInfo.userId);
          } catch {
            TPSetStorage('token', '');
          }
          resolve(true);
          if (cb) cb();
        } else {
          console.log(`登录失败！' ${res.errMsg}`);
          resolve(false);
        }
      },
    });
  });
};

export const WxLogin = (cb?: Function) => {
  wx.login({
    success: async (res) => {
      if (res.code) {
        if (cb) cb(res.code);
      } else {
        console.log(`登录失败！' ${res.errMsg}`);
      }
    },
  });
};

export const WxCheckSession = (cb) => {
  return new Promise((resolve) => {
    wx.checkSession({
      success() {
        console.log('未失效');
        resolve(true);
      },
      fail: async () => {
        console.log('失效');
        const islogin = BusinessLogin().then(cb);

        resolve(islogin);
      },
    });
  });
};

export const WxHideHomeButton = (success?: () => void, fail?: () => void, complete?: () => void) => {
  wx.hideHomeButton({
    success,
    fail,
    complete,
  });
};

export const WxSwitchTab = (url: string, success?: () => void, fail?: () => void, complete?: () => void) => {
  wx.switchTab({
    url,
    success,
    fail,
    complete,
  });
};

export const WxReLaunch = (url: string, success?: () => void, fail?: () => void, complete?: () => void) => {
  wx.reLaunch({
    url,
    success,
    fail,
    complete,
  });
};

export const WxNavigateTo = (url: string, success?: () => void, fail?: () => void, complete?: () => void) => {
  wx.navigateTo({
    url,
    success,
    fail,
    complete,
  });
};

export const WxGetLocation = (props) => {
  wx.getLocation(props);
};
export const WxSetting = (props) => {
  wx.getSetting(props);
};

export const WxOpenLocation = (props) => {
  wx.openLocation(props);
};

export const WxMakePhoneCall = (
  phoneNumber: string,
  success?: () => void,
  fail?: () => void,
  complete?: () => void,
) => {
  wx.makePhoneCall({
    phoneNumber,
    success,
    fail,
    complete,
  });
};

export const WxSetNavigationBarTitle = (
  title: string,
  success?: () => void,
  fail?: () => void,
  complete?: () => void,
) => {
  wx.setNavigationBarTitle({
    title,
    success,
    fail,
    complete,
  });
};

export const WxStopPullDownRefresh = (success?: () => void, fail?: () => void, complete?: () => void) => {
  wx.stopPullDownRefresh({
    success,
    fail,
    complete,
  });
};

export const WxSetClipboardData = (data?: string, success?: () => void, fail?: () => void, complete?: () => void) => {
  wx.setClipboardData({
    data,
    success,
    fail,
    complete,
  });
};

interface WxGetUserProfileType {
  desc?: string;
  lang?: string;
  success?: (res) => void;
  fail?: () => void;
  complete?: () => void;
}
export const WxGetUserProfile = ({ desc, lang, success, fail, complete }: WxGetUserProfileType) => {
  wx.getUserProfile({
    desc,
    lang,
    success,
    fail,
    complete,
  });
};

export const WxCreateSelectorQuery = () => wx.createSelectorQuery();

export const WxGetMenuButtonBoundingClientRect = wx.getMenuButtonBoundingClientRect();

export const WxPageScrollTo = (props) => {
  wx.pageScrollTo(props);
};

export const getScene = () => {
  const { scene } = wx.getLaunchOptionsSync();
  return scene;
};
