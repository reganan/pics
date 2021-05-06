/*
 * @Author: xiaotian@tangping
 * @Descriptions: 唤端逻辑封装
 * @TodoList: 无
 * @Date: 2020-11-23 20:26:27
 * @Last Modified by: xiaotian@tangping
 * @Last Modified time: 2020-11-23 20:27:46
 */

import { useRef, useCallback } from 'rax';

/**
 * 唤端逻辑封装
 *
 * @returns {[Rax.MutableRefObject<any>, () => void]}
 */
const useLaunchApp = (): [Rax.MutableRefObject<any>, () => void] => {
  const modalRef = useRef(null);

  const launchAppError = useCallback(() => {
    modalRef.current.instance.showModal();
  }, []);

  return [modalRef, launchAppError];
};

export default useLaunchApp;
