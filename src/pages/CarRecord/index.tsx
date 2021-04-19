import { createElement, useState } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';

import styles from './index.module.css';
import { history } from 'rax-app';

export default function CarRecord() {
  const [carrecordlist, setCarRecordList] = useState([1,1,1,1]);
  return (
    <View className={styles.container} >
      {
        carrecordlist.map((val, index) => {
          return (
            <View
              className={styles.Item}
              onClick={() => {
                history.push(`/cardestail?key=${JSON.stringify(val)}`);
              }}
            >
              <View className={styles.ItemInfo}>
                <View>{'粤A·3S456'}</View>
                <View style={{ color: '#999999', fontSize: '24rpx' }}>{ '缴费成功' }</View>
              </View>
              <View className={styles.ItemSpace} />
              <View className={styles.ItemBottom}>
                <View className={styles.ItemBottomLeft}>
                  <View>{'停靠时长'}</View>
                  <View style={{ color: '#000000', marginLeft: '10rpx' }}>{'1小时52分3秒'}</View>
                </View>
                <View className={styles.ItemBottomRight}>
                  <View>{'22.00'}</View>
                  <View style={{ fontSize: '28rpx' }}>{ '元' }</View>
                </View>
              </View>
              <View className={ styles.ItemBottom2}>
                <View className={styles.ItemBottomLeft}>
                  <View>{'支付时间'}</View>
                  <View style={{ color: '#000000', marginLeft: '10rpx' }}>{'2018-11-10   20:30:24'}</View>
                </View>
                <View style={{ fontSize: '24rpx', color: '#999999' }}>{ '已优惠0元' }</View>
              </View>
            </View>
          );
        })
      }
    </View>
  );
}
