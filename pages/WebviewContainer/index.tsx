import { createElement, useEffect, useState } from 'rax';
import qs from 'querystring';
import View from 'rax-view';
import { getCurrentPages } from '@uni/application';
import { webviewRouterConfig } from '@/config/webview-router-config';
import { TPGetStorage } from '@/utils/storage';
import { getLocalBaseInfo } from '@/utils/baseInfo';

interface WebviewContainerProps {
  onMessage?: (type) => any;
  params?: Object;
}

/**
 * webview container用于读取路由配置，根据当前页面跳转到指定H5页面
 * @param props
 */
const WebviewContainer = (props: WebviewContainerProps) => {
  const { onMessage, params } = props;
  const localInfo = getLocalBaseInfo();
  const token = TPGetStorage('_token');
  const urlParams = {
    ...localInfo,
    ...params,
  };

  const [url, setUrl] = useState('');

  useEffect(() => {
    const pages = getCurrentPages();
    const currentPage = pages[pages.length - 1].route;
    const config = webviewRouterConfig.find((item) => item.key === currentPage);
    const targetUrl = config.value;
    setUrl(targetUrl);
  }, []);

  const onInternalMessage = (e) => {
    onMessage && onMessage(e);
  };

  const bizUrl = url ? `${url}?${qs.stringify({ ...urlParams, ...token })}` : '';
  console.log('url:', bizUrl);
  return <View>{url && <web-view src={bizUrl} onMessage={onInternalMessage} />}</View>;
};

export default WebviewContainer;
