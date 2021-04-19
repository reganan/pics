import { createElement, useState } from 'rax';
import View from 'rax-view';
import { getSearchParams, history } from 'rax-app';

import styles from './index.module.css';

export default function CarPay() {
  const searchParams = getSearchParams();
  console.log(searchParams);
  const [selpoint100, setSelPoint100] = useState(false);
  const [selpoint200, setSelPoint200] = useState(false);
  return (
    <View className={styles.container} >
      <View className={styles.topPane}>
        <View className={styles.topPaneTitle}>
          {'应付金额'}
        </View>
        <View className={styles.topPaneSubTitle}>
          <View>
            {'22.00'}
          </View>
          <View style={{ fontSize: '28rpx', color: '#999999' }}>
            {'元'}
          </View>
        </View>
        <View className={styles.topPaneline} />
        <View className={styles.topPaneInfo}>
          <View>
            {'总金额'}
          </View>
          <View style={{ fontSize: '28rpx', color: '#000000' }}>
            {'22.00'}
          </View>
        </View>
        <View className={styles.topPaneInfo}>
          <View>
            {'优惠金额'}
          </View>
          <View style={{ fontSize: '28rpx', color: '#000000' }}>
            {'-0.00'}
          </View>
        </View>
      </View>
      <View className={styles.bottomPane}>
        <View className={styles.bottomPaneInfo}>
          <View>
            {'车 牌 号'}
          </View>
          <View style={{ fontSize: '28rpx', color: '#000000' }}>
            {'粤A·3S456'}
          </View>
        </View>
        <View className={styles.bottomPaneInfo}>
          <View>
            {'入场时间'}
          </View>
          <View style={{ fontSize: '28rpx', color: '#000000' }}>
            {'2018-12-10   20:30:24'}
          </View>
        </View>
        <View className={styles.bottomPaneInfo}>
          <View>
            {'2小时52分3秒'}
          </View>
          <View style={{ fontSize: '28rpx', color: '#000000' }}>
            {'22.00'}
          </View>
        </View>
      </View>
      <View className={styles.payPane}>
        <View className={styles.payTopPane}>
          {'请您05分27秒内去支付，超时将取消此订单'}
        </View>
        <View className={styles.payBottomPane}>
          <View className={styles.payBottomLeftPane}>
            {'取消订单'}
          </View>
          <View
            className={styles.payBottomRightPane}
            onClick={() => {
              history.push('/carresult');
            }}
          >
            {'立即付款'}
          </View>
        </View>
      </View>
    </View>
  );
}

