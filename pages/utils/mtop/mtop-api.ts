import {
  IParamsWXLogin,
  IParamsWXPhone,
  IParamsHPService,
  IParamsListService,
  IParamsDetailService,
  IParamsListCase,
  IParamsCaseDetailService,
  IParamsStoreList,
  IParamsStoreDetail,
  IParamsCommentService,
  IParamsCommentDetail,
  IParamsServiceComment,
  IParamsGetImgupload,
} from '@/typings/mtop.api';
import useMtop from './wx-mtop';

// 获取登录信息
// needAuth true 需要授权
// verified true 需要验证
// Add Login API
export const getLoginInfo = (params: IParamsWXLogin) =>
  useMtop.sendMtop({
    url: 'mtop.tp.miniapp.portal.login.appLogin',
    needCheckSession: false,
    params,
  });

// 获取手机号
export const getPhoneInfo = (params: IParamsWXPhone) =>
  useMtop.sendMtop({
    url: 'mtop.tp.miniapp.portal.user.app.info.save',
    method: 'post',
    params,
  });

// 获取我的用户信息
export const getUsersInfo = () =>
  useMtop.sendMtop({
    url: 'mtop.tp.miniapp.portal.user.app.detail',
  });

// 首页最新的一个服务卡片
export const homePageService = (params?: IParamsHPService) =>
  useMtop.sendMtop({
    url: 'mtop.tp.miniapp.portal.service.last.get',
    method: 'post',
    params,
  });

// 服务卡片列表
export const getServiceList = (params: IParamsListService) =>
  useMtop.sendMtop({
    url: 'mtop.tp.miniapp.portal.service.list.get',
    method: 'post',
    params,
  });

// 服务详情
export const getServiceDetail = (params: IParamsDetailService) =>
  useMtop.sendMtop({
    url: 'mtop.tp.miniapp.portal.service.detail.get',
    method: 'post',
    params,
  });

// 案例列表
export const getCaseList = (params: IParamsListCase) =>
  useMtop.sendMtop({
    url: 'mtop.tp.miniapp.portal.content.list',
    method: 'post',
    params,
  });

// 案例详情
export const getCaseDetail = (params: IParamsCaseDetailService) =>
  useMtop.sendMtop({
    url: 'mtop.tp.miniapp.portal.content.detail',
    method: 'post',
    params,
  });

// 获取城市列表
export const getCityList = () =>
  useMtop.sendMtop({
    url: 'mtop.tp.miniapp.portal.mt.city.list',
    method: 'post',
  });

// 首页门店列表
export const getStoreList = (params: IParamsStoreList) =>
  useMtop.sendMtop({
    url: 'mtop.tp.miniapp.portal.lbs.store.list',
    method: 'post',
    params,
  });

// 创建评价
export const commentService = (params: IParamsCommentService) =>
  useMtop.sendMtop({
    url: 'mtop.tp.miniapp.comment.wx.comment.create',
    method: 'post',
    params,
  });

// 主营类目列表接口
export const getCateList = () =>
  useMtop.sendMtop({
    url: 'mtop.tp.miniapp.portal.config.cate.list',
    method: 'post',
  });

// 图片获得
export const getUploadImgUrl = (params: IParamsGetImgupload) =>
  useMtop.sendMtop({
    url: 'mtop.tp.miniapp.portal.oss.wx.app.getViewSignedUrl',
    method: 'get',
    params,
  });

// 获取签名
export const getStsToken = () =>
  useMtop.sendMtop({
    url: 'mtop.tp.miniapp.portal.oss.wx.comment.stsToken',
    method: 'post',
  });

// 门店详情
export const getStoreDetail = (params: IParamsStoreDetail) =>
  useMtop.sendMtop({
    url: 'mtop.tp.miniapp.portal.store.detail',
    method: 'post',
    params,
  });

// 评价详情
export const getCommentDetail = (params: IParamsCommentDetail) =>
  useMtop.sendMtop({
    url: 'mtop.tp.miniapp.comment.wx.comment.listOfStore',
    method: 'post',
    params,
  });

// 评价详情
export const getServiceComment = (params: IParamsServiceComment) =>
  useMtop.sendMtop({
    url: 'mtop.tp.miniapp.comment.wx.comment.queryByBelongId',
    method: 'get',
    params,
  });

// 首页banner
export const getHomebannerList = (params) =>
  useMtop.sendMtop({
    url: 'mtop.tp.miniapp.portal.config.banner.list',
    method: 'get',
    params,
  });
