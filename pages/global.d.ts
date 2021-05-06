/*
 * @Author: xiaotian@tangping
 * @Descriptions: 第三方类型定义扩展
 * @TodoList: 无
 * @Date: 2020-11-24 17:08:40
 * @Last Modified by: xiaotian@tangping
 * @Last Modified time: 2020-11-25 16:36:58
 */

declare namespace WechatMiniprogram {
  interface GlobalData {
    // 是否能够唤端
    canCallApp: boolean;
    // 发布环境
    env: 'm' | 'wapa';
    // 审核状态，审核状态为 1 代表微信小程序审核中
    auditStatus: '1' | '0';
  }

  interface Wx {
    global: {
      getData: () => GlobalData;
      setData: (newData: Partial<GlobalData>) => void;
    };
  }

  interface IntersectionObserverObserveCallbackResult {
    dataset: any;
  }
}
