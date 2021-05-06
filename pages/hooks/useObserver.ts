/*
 * @Author: xiaotian@tangping
 * @Descriptions: 监听元素 onAppear 和 onDisAppear 逻辑封装
 * @TodoList: 无
 * @Date: 2020-11-25 16:49:11
 * @Last Modified by: xiaotian@tangping
 * @Last Modified time: 2020-11-25 17:18:08
 */

import { useEffect } from 'rax';

/**
 * 监听元素 onAppear 和 onDisAppear 事件
 *
 * @template T dataset，元素自定义数据
 * @param {*} updateFlag  createIntersectionObserver 更新标志，由于 IntersectionObserver 无法监听动态数据，因此数据更新时 IntersectionObserver 需要重新创建
 * @param {WechatMiniprogram.Margins} observeArea 监测区域
 * @param {string} elementClass 监听元素类名
 * @param {(dataset: T) => void} [onAppear]
 * @param {(dataset: T) => void} [onDisAppear]
 */
const useObserver = <T>(
  updateFlag: any,
  observeArea: WechatMiniprogram.Margins,
  elementClass: string,
  onAppear?: (dataset: T) => void,
  onDisAppear?: (dataset: T) => void,
): void => {
  useEffect(() => {
    const ob = wx.createIntersectionObserver(null, { observeAll: true });

    ob.relativeToViewport(observeArea).observe(`.${elementClass}`, (res) => {
      const { dataset, intersectionRatio } = res;

      // 进入可视区域
      if (intersectionRatio > 0) {
        onAppear && onAppear(dataset);
      }

      // 离开可视区域
      if (intersectionRatio === 0) {
        onDisAppear && onDisAppear(dataset);
      }
    });

    return () => {
      ob.disconnect();
    };
  }, [updateFlag]);
};

export default useObserver;
