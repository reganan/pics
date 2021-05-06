import QQMapWX from 'wx-qqmap-jssdk';
import { LBSKey } from './const';

const reverseGeolocation = (latitude: number, longitude: number) => {
  return new Promise((resolve, reject) => {
    const qqMap = new QQMapWX({ key: LBSKey });
    qqMap.reverseGeocoder({
      location: { latitude, longitude },
      success: (res) => {
        if (res.result === 0) {
          reject(res.message);
          return;
        }
        const { adcode, city } = res.result.ad_info;
        const code = `${adcode.substr(0, adcode.length - 2) }00`;
        const cityAbbr = city.substr(0, city.length - 1);
        resolve({ ...res.result.ad_info, code, ...{ city: cityAbbr } });
      },
      fail: reject,
    });
  });
};

export { reverseGeolocation };
