/* eslint-disable max-len */
import axios from 'axios';
import { IParamsLocationItem, IResultDirectionItem } from './typings';
import { key } from './const';

async function getDirectionDrive(
  longitude: string | number,
  latitude: string | number,
  desinationArr: IParamsLocationItem[] = [],
) {
  const ops = desinationArr.map((item) => ({
    url: `/v3/direction/driving?key=${key}&origin=${longitude},${latitude}&destination=${item.longitude},${item.latitude}&strategy=0`,
  }));
  const arr: IResultDirectionItem[] = [];

  axios
    .post(`https://restapi.amap.com/v3/batch?key=${key}`, {
      ops,
    })
    .then((res) => {
      if (res.status === 200) {
        const { data } = res;
        for (let i = 0; i < data.length; i++) {
          const {
            body: {
              route: { paths },
            },
          } = data[i];
          arr.push({
            ...desinationArr[i],
            distance: (Number.parseInt(paths[0]?.distance || 0, 10) / 1000).toFixed(2),
          });
        }
        return arr;
      } else {
        return false;
      }
    })
    .catch(() => {
      return false;
    });
}

/**
 * 根据经纬度计算球面距离
 *
 * @param lat1 {number} 纬度
 * @param lng1 {number} 经度
 * @param lat2 {number} 纬度
 * @param lng2 {number} 经度
 *
 * @return distance number 单位：km
 */
function getSphericalDistance(lat1: number, lng1: number, lat2: number, lng2: number, fixed = 1): string {
  const radLat1 = (lat1 * Math.PI) / 180.0;
  const radLat2 = (lat2 * Math.PI) / 180.0;
  const a = ((lat1 - lat2) * Math.PI) / 180.0;
  const b = ((lng1 - lng2) * Math.PI) / 180.0;
  let s =
    2 *
    Math.asin(
      Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(radLat1) * Math.cos(radLat2) * Math.pow(Math.sin(b / 2), 2)),
    );
  s *= 6378137; // EARTH_RADIUS;
  s = Math.round(s * 10000) / 10000 / 1000;

  return s.toFixed(fixed);
}

export { getDirectionDrive, getSphericalDistance };
