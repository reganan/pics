import { createElement, useState } from 'rax';
import View from 'rax-view';
import { getSearchParams, history } from 'rax-app';

import styles from './index.module.css';

export default function CarResult() {
  const searchParams = getSearchParams();
  console.log(searchParams);
  const [selpoint100, setSelPoint100] = useState(false);
  const [selpoint200, setSelPoint200] = useState(false);
  return (
    <View className={styles.container} >

      <View className={styles.payTopPane}>
        {'请您05分27秒内去支付，超时将取消此订单'}
      </View>
      <View className={styles.topPane}>
        <View className={styles.topPaneInfoDD}>
          <View
            style={{
              width: '130rpx',
              height: '130rpx',
              background: '#1AAD17',
              borderRadius: '75rpx',
              lineHeight: '130rpx',
              textAlign: 'center',
              color: '#FFFFFF',
              fontWeight: 900,
              fontSize: '65rpx',
            }}>
            {'✓'}
          </View>
        </View>
        <View className={styles.topPaneInfoDD}>
          <View>
            {'缴费成功'}
          </View>
        </View>
        <View className={styles.topPaneInfoD}>
          <View>
            {'22.00'}
          </View>
          <View style={{ color: '#999999', fontSize: '28rpx' }}>
            {'元'}
          </View>
        </View>
        <View className={styles.topPaneInfo}>
          <View>
            {'已优惠'}
          </View>
          <View>
            {'0'}
          </View>
          <View>
            {'元'}
          </View>
        </View>
      </View>
      <View className={styles.payPane}>

        <View className={styles.payBottomPane}>
          <View
            className={styles.payBottomRightPane}
            onClick={() => {
              history.goBack(2);
            }}
          >
            {'确定'}
          </View>
        </View>
      </View>
    </View>
  );
}

