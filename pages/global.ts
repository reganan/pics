/*
 * @Author: xiaotian@tangping
 * @Descriptions: 全局变量管理
 * @TodoList: 无
 * @Date: 2020-11-24 14:57:04
 * @Last Modified by: xiaotian@tangping
 * @Last Modified time: 2020-11-24 17:38:10
 */

type GlobalData = WechatMiniprogram.GlobalData;

const INITIAL_GLOBAL_DATA: GlobalData = {
  canCallApp: false,
  env: 'm',
  auditStatus: '0',
};

class Global {
  private data: GlobalData = null;

  constructor(initialData: GlobalData) {
    this.data = {
      ...initialData,
    };
  }

  getData(): GlobalData {
    return {
      ...this.data,
    };
  }

  setData(newData: Partial<GlobalData>): void {
    this.data = {
      ...this.data,
      ...newData,
    };
  }
}

wx.global = new Global(INITIAL_GLOBAL_DATA);
