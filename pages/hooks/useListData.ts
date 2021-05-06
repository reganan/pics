/*
 * @Author: xiantian@tangping
 * @Descriptions: 列表数据获取 hooks
 * @TodoList: 无
 * @Date: 2020-08-26 19:13:15
 * @Last Modified by: xiaotian@tangping
 * @Last Modified time: 2020-11-25 17:33:33
 */

import { useEffect, useState, useRef, useCallback } from 'rax';
import { LoadMoreStatus } from '@components/LoadMore';
import { ContentCardInfo } from '@ali/ihome-common-components/lib/types/ContentCard';
import { PageInfo, AuditStatus } from '@customTypes/Common';

/**
 * 内容列表数据获取 hook
 *
 * @param {string} feedId 内容 Id
 * @param {number} firstLoadSize 首屏加载数量
 * @param {number} pageSize
 * @param {(id: string, pageInfo: PageInfo) => Promise<[ContentCardInfo[], PageInfo, AuditStatus]>} getData 数据请求方法
 * @param {(items: ContentCardInfo[], pageInfo: PageInfo) => void} [handleSuccess=() => {}] 数据获取成功回调
 * @returns {ContentCardInfo[], LoadMoreStatus, () => void, () => Promise<void>]}
 */
const useListData = (
  feedId: string,
  firstLoadSize: number,
  pageSize: number,
  getData: (id: string, pageInfo: PageInfo) => Promise<[ContentCardInfo[], PageInfo, AuditStatus]>,
  handleSuccess: (items: ContentCardInfo[], pageInfo: PageInfo) => void = () => {},
): [ContentCardInfo[], LoadMoreStatus, () => void, () => Promise<void>] => {
  const [listData, setListData] = useState<ContentCardInfo[]>([]);
  const [loadMoreStatus, setLoadMoreStatus] = useState<LoadMoreStatus>('normal');
  const pageInfo = useRef<any>({
    pageSize: pageSize,
  });

  // 首次调用
  useEffect(() => {
    getCardList();
  }, []);

  /**
   * 获取列表数据
   */
  const getCardList = useCallback(
    (isRefresh = false) => {
      setLoadMoreStatus('loading');
      return getData(feedId, pageInfo.current)
        .then((res) => {
          const [items, page, auditStatus] = res;
          handleSuccess(items, page);

          // 更新 status，用于判断 DownloadAppModal 是否需要降级展示
          wx.global.setData({
            auditStatus,
          });

          if (listData.length === 0) {
            // 首屏加载时先加载一屏数据
            setListData(items.slice(0, firstLoadSize));

            // 1s 后加载所有数据
            setTimeout(() => {
              setListData(items);
            }, 1000);
          } else {
            setListData(isRefresh ? items : listData.concat(items));
          }

          pageInfo.current = page;
          setLoadMoreStatus(page.hasNextPage ? 'normal' : 'noMore');
        })
        .catch(() => {
          setLoadMoreStatus('loadError');
        });
    },
    [feedId, firstLoadSize, listData, getData, handleSuccess],
  );

  /**
   * 加载更多数据
   */
  const loadMore = useCallback(() => {
    if (loadMoreStatus === 'noMore' || loadMoreStatus === 'loading') return;

    getCardList();
  }, [loadMoreStatus, getCardList]);

  /**
   * 刷新数据
   */
  const refresh = useCallback(() => {
    pageInfo.current = {};
    return getCardList(true);
  }, [getCardList]);

  return [listData, loadMoreStatus, loadMore, refresh];
};

export default useListData;
