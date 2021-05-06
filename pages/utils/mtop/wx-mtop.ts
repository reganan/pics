import Toast from 'universal-toast';

// import { history } from 'rax-app';
import { miniappMtop } from '@ali/topping-rax-utils';
import { WxCheckSession, BusinessLogin } from '@/utils/wxUtils';
import { TPGetStorage } from '@/utils/storage';
import { IParamsSendMtop, IResult4Mtop } from '@/typings/mtop';

const lib = miniappMtop.wxMtop;

const errorText = '网络错误，请下拉刷新页面';

class WxMtop {
  constructor() {
    lib.mtop.config.prefix = 'acs';
    // lib.mtop.config.subDomain = process.env.NODE_ENV === 'prod' ? 'm' : 'wapa';
    lib.mtop.config.subDomain = 'm';
    lib.mtop.config.useJsonpResultType = true;
    lib.mtop.config.mainDomain = 'taobao.com';
  }

  async sendMtop(params: IParamsSendMtop) {
    const tokenTime = TPGetStorage('tokenTime');
    const now = new Date().getTime();
    const differ = tokenTime ? now - tokenTime > 6840000 : false;
    if (differ) {
      BusinessLogin().then(() => this.request(params));
    } else {
      return this.request(params);
    }
  }

  async request(params: IParamsSendMtop) {
    if (params.needCheckSession) {
      try {
        WxCheckSession(this.request(params));
        return;
      } catch (err) {
        console.log(err);
      }
    }

    let token: any;
    try {
      token = TPGetStorage('token');
    } catch (err) {
      token = '';
    }

    return new Promise((resolve, reject) => {
      lib.mtop
        .request({
          api: params.url,
          v: '1.0',
          SV: '2.0',
          ecode: 0,
          data: params.params,
          headers: {
            tinyAppToken: token,
            ...params.headers,
          },
          type: params.method,
        })
        .then(async (res: IResult4Mtop) => {
          if (res?.data?.success === 'false' || res?.ret?.join(',').indexOf('SUCCESS') === -1) {
            Toast.show(res?.data?.msg || res?.ret?.join('').split('::')[1] || errorText);
          }
          resolve(res?.data?.data);
        })
        .catch(async (err) => {
          if (['10002'].includes(err?.data?.code)) {
            BusinessLogin().then(() => this.request(params));
            Toast.show(errorText);
            return;
          }
          Toast.show(err?.data?.msg || err?.ret?.join('').split('::')[1] || errorText);
          reject(err);
          // history.push('/error');
        });
    }) as Promise<any>;
  }
}

const useMtop = new WxMtop();

export default useMtop;
