const spmA = 'ihome-miniapp2';
// 举例
const SPVConfig = {
  Homes: {
    pageName: '首页Tab',
    pageUrl: 'pages/Home/index',
    spmA,
    spmB: 'maintab',
  },
  Services: {
    pageName: '服务tab',
    pageUrl: 'pages/Service/index',
    spmA,
    spmB: 'servicetab',
  },
  Mines: {
    pageName: '我的tab',
    pageUrl: 'pages/Mine/index',
    spmA,
    spmB: 'metab',
  },
  ServiceDetails: {
    pageName: '服务进度详情',
    pageUrl: 'pages/ServiceDetail/index',
    spmA,
    spmB: 'servicedetailpage',
  },
  StoreDetails: {
    pageName: '门店主页',
    pageUrl: 'pages/StoreDetail/index',
    spmA,
    spmB: 'storepage',
  },
  CaseDetails: {
    pageName: '案例详情',
    pageUrl: 'pages/CaseDetail/index',
    spmA,
    spmB: 'contentpage',
  },
  LoginPage: {
    pageName: '授权手机号码弹窗',
    pageUrl: 'loginpage',
    spmA,
    spmB: 'loginpage',
  },
};

const AplusConfig = {
  maintab: {
    exp: `/${spmA}.maintab.exp`,
    clkallserv: `/${spmA}.maintab.clkallserv`,
    servcardexp: `/${spmA}.maintab.servcardexp`,
    clkservcard: `/${spmA}.maintab.clkservcard`,
    storefeedsexp: `/${spmA}.maintab.storefeedsexp`,
    storecategorychange: `/${spmA}.maintab.storecategorychange`,
    storeclk: `/${spmA}.maintab.storeclk`,
  },
  loginpage: {
    clk: `/${spmA}.loginpage.clk`,
  },
  servicetab: {
    clk: `/${spmA}.servicetab.clk`,
    servchoice: `/${spmA}.servicetab.servchoice`,
  },
  servicedetailpage: {
    exp: `/${spmA}.servicedetailpage.exp`,
    clktoppingguider: `/${spmA}.servicedetailpage.clktoppingguider`,
    clkstoreguider: `/${spmA}.servicedetailpage.clkstoreguider`,
    clkstoredesigner: `/${spmA}.servicedetailpage.clkstoredesigner`,
    clkstoredetail: `/${spmA}.servicedetailpage.clkstoredetail`,
    clkevaluation1: `/${spmA}.servicedetailpage.clkevaluation1`,
    clkevaluation2: `/${spmA}.servicedetailpage.clkevaluation2`,
  },
  storepage: {
    exp: `/${spmA}.storepage.exp`,
    clktoppingguider: `/${spmA}.storepage.clktoppingguider`,
    evaluationexp: `/${spmA}.storepage.evaluationexp`,
  },
  contentpage: {
    exp: `/${spmA}.contentpage.exp`,
    clktoppingguider: `/${spmA}.contentpage.clktoppingguider`,
  },
};

export {
  SPVConfig,
  AplusConfig,
};
