import { createElement, useState } from 'rax';
import View from 'rax-view';
import { history } from 'rax-app';

import styles from './index.module.css';

export default function CarManager() {
  const [cars, setCars] = useState([{ id: 1, number: '粤A·3S456' }, { id: 2, number: '粤A·3S456' }, { id: 3, number: '粤A·3S456' }]);
  const [delitem, setDelitem] = useState('');
  const [touchStartX, setTouchStartX] = useState(0);
  const delCarItem = (val) => {
    let _cars = [];
    cars.forEach(element => {
      if(element.id !== val.id)
      _cars.push(element);
    });
    setDelitem('');
    setCars(_cars);
    console.log(val);
  };
  return (
    <View className={styles.container} >
      <View className={styles.recordPane}>
        <View className={styles.record} onClick={() => { history.push('/carrecord'); }}>{'缴费记录'}</View>
      </View>
      <View className={styles.CarsItems}>
        {
          cars.map((val, index) => {
            return (
              <View
                key={index}
                className={styles.CarsItemPane}
                onTouchStart={(e) => {
                  console.log("111");
                  setTouchStartX(e.changedTouches[0].clientX);
                }}
                onTouchEnd={(e) => {
                  if (touchStartX > e.changedTouches[0].clientX + 50) {
                    setDelitem(val);
                  }
                  if (touchStartX <= e.changedTouches[0].clientX) {
                    setDelitem('');
                  }
                }}
              >
                <View
                  className={styles.CarsItem}
                >
                  <View className={ styles.CarNumber}>
                    <View>{'粤A'}</View>
                    <View style={{color: '#CCCCCC'}}>{'·'}</View>
                    <View>{'3S456'}</View>
                  </View>
                </View>
                { delitem.id === val.id &&
                  <View
                    onClick={() => {
                      delCarItem(val);
                    }}
                    className={styles.right}
                    style={{ right: '{{-98}}rpx' }}
                  >
                    {'删除'}
                  </View>}
              </View>
            );
          })
        }
        { cars && cars.length < 5 &&
          <View
            className={styles.CarsItem}
            onClick={() => {
              let _cars = [...cars];
              _cars.push({ id: cars.length + 1, number: '粤A·3S456' });
              setCars(_cars);
            }}
          >
            <View className={styles.CarsItemAdd}>{'+'}</View>
            <View className={styles.CarsItemAddDescri}>{'增绑车辆'}</View>
          </View>
        }
      </View>
      <View className={styles.tips}>
        <View className={styles.tipslinel} />
        <View className={styles.tipssignl} />
        <View>{'温馨提示'}</View>
        <View className={styles.tipssignr} />
        <View className={styles.tipsliner} />
      </View>
      <View className={styles.options} >
        <View>{'1 点击增改车牌转换为付款车牌号；'}</View> 
        <View>{'2 绑定车辆后，会员可实时查询车辆入场时间和当前车费；'}</View> 
        <View>{'3 线上支付成功后，您将有15分钟的离场时间，超过15分钟后则按照车场收费标准重新计算停车费。'}</View> 
        <View>{'4 顾客凭会员积分办理停车优惠，会员可选择使用50积分抵扣5元、100积分抵扣10元以此类推，上不封顶，最高限额为60元。'}</View> 
        <View>{'5 每个会员每天只能办理1次停车优惠'}</View> 
        <View>{'6 积分抵扣停车优惠与其他优惠不可同时享受。'}</View> 
        <View>{'7 具体详情请以商场公示为准。'}</View>
      </View>
    </View>
  );
}
