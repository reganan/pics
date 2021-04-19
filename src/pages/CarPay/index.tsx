import { createElement, useState } from 'rax';
import View from 'rax-view';
import styles from './index.module.css';


export default function CarPay() {
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
      <View className={styles.centerPane}>
        <View className={styles.centerPaneInfo}>
          <View style={{ fontSize: '32rpx;', color: '#333333', fontWeight: 500 }}>
            {'当前积分'}
          </View>
          <View style={{ fontSize: '24rpx', color: '#6659B0' }}>
            {'1000积分可用'}
          </View>
        </View>
        <View className={styles.centerPaneline} />
        <View className={styles.centerPaneInfo}>
          <View style={{ fontSize: '32rpx;', color: '#333333', fontWeight: 400 }}>
            {'100积分抵扣1小时'}
          </View>
          {selpoint100 &&
            <View
              style={{
                marginTop: '30rpx',
                width: '40rpx',
                height: '40rpx',
                backgroundColor: '#F9F9F9',
                borderRadius: '4px',
                border: '3px solid #6659B0',
                lineHeight: '30rpx',
                textAlign: 'center',
                color: '#6659B0',
              }}
              onClick={() => {
                setSelPoint100(!selpoint100);
              }}
            >
              ✓
            </View>}
          {!selpoint100 && <View style={{ marginTop: '30rpx', width: '40rpx', height: '40rpx', backgroundColor: '#F9F9F9', borderRadius: '4px', border: '3px solid #6659B0' }} onClick={() => { setSelPoint200(false); setSelPoint100(!selpoint100); }} />}
        </View>
        <View className={styles.centerPaneline} />
        <View className={styles.centerPaneInfo}>
          <View style={{ fontSize: '32rpx;', color: '#333333', fontWeight: 400 }}>
            {'200积分抵扣2小时'}
          </View>
          {selpoint200 &&
            <View
              style={{
                marginTop: '30rpx',
                width: '40rpx',
                height: '40rpx',
                backgroundColor: '#F9F9F9',
                borderRadius: '4px',
                border: '3px solid #6659B0',
                lineHeight: '30rpx',
                textAlign: 'center',
                color: '#6659B0',
              }}
              onClick={() => {
                setSelPoint200(!selpoint200);
              }}
            >
              ✓
            </View>
          }
          {!selpoint200 && <View style={{ marginTop: '30rpx', width: '40rpx', height: '40rpx', backgroundColor: '#F9F9F9', borderRadius: '4px', border: '3px solid #6659B0' }} onClick={() => { setSelPoint100(false); setSelPoint200(!selpoint200); }} />}
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
          {'请于付款后15分钟内离场，超时将加收停车费'}
        </View>
        <View className={styles.payBottomPane}>
          <View className={styles.payBottomLeftPane}>
            <View>{'应付金额：'}</View>
            <View style={{ color: '#FFFFFF', fontSize: '37rpx' }}>{'22.00'}</View>
            <View>{'元'}</View>
          </View>
          <View className={styles.payBottomLeftSpace} />
          <View className={styles.payBottomRightPane}>
            {'立即支付'}
          </View>
        </View>
      </View>
    </View>
  );
}
