import { createElement, useState } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import useInterval from 'rax-use-interval';
import Toast from 'universal-toast';
import Alert from 'universal-alert';


import styles from './index.module.css';
export default function FruitMachine() {
  const [delay, setDelay] = useState(null);
  const [count, setCount] = useState(0);
  const [range, setRange] = useState(Math.floor(Math.random() * 2 + 2));
  const [spd2, setSpd2] = useState(200);
  const [idx, setIdx] = useState(0);
  const [ret, setRet] = useState(1);
  const [len, setLen] = useState(8);
  const [isStart, setIsStart] = useState(false);
  const [star, setStar] = useState(false);
  useInterval(() => {
    setCount(count + 1);
    console.log(count);
    console.log(delay);
    if (count > range * len) {
      setDelay(spd2);
    }
    if (count !== (range + 1) * len + ret) {
      setIdx(count % 8 === 0 ? 8 : count % 8);
    } else {
      stopTimer();
      setIsStart(false);
      getGiftResult();
      setIdx(ret);
    }
  }, delay);

  useInterval(() => {
    setStar(!star);
  }, 1000);

  const getGiftResult = () => {
    Alert({
      title: 'alert框的标题',
      content: 'alert框的内容',
      buttonText: '按钮文字，默认confirm'
    }).then(() => {
      console.log('确定');
    });

    Toast.show('Hi');
  };
  const startGame = () => {
    if (isStart) {
      stopTimer();
      setIsStart(false);
      return;
    }
    setIsStart(true);
    setCount(0);
    setDelay(100);
    setSpd2(200);
    setRange(Math.floor(Math.random() * 2 + 2));
    delay ? stopTimer() : restartTimer();
  };

  const stopTimer = () => setDelay(null);
  const restartTimer = () => setDelay(100);
  const [icon, setIcon] = useState([1, 2, 3, 4, 5, 6, 7]);
  const [icon2, setIcon2] = useState([1, 2, 3, 4, 5]);
  return (
    <View className={styles.container} >
      <View className={styles.title}>
        <View>{ '您有' }</View>
        <View>{ '200' }</View>
        <View>{ '积分' }</View>
      </View>
      <View className={styles.marqueewpborder}>
        <View className={styles.marqueewpbg} />
        <View className={styles.marqueewp}>
          <View className={styles.marqueeitem} style={{ opacity: idx === 1 ? 1 : 0.8 }} >1</View>
          <View className={styles.marqueeitem} style={{ opacity: idx === 2 ? 1 : 0.8 }} >2</View>
          <View className={styles.marqueeitem} style={{ opacity: idx === 3 ? 1 : 0.8 }} >3</View>
          <View className={styles.marqueeitem} style={{ opacity: idx === 8 ? 1 : 0.8 }} >8</View>
          <View className={styles.marqueeitem} onClick={startGame} >{ '开始'}</View>
          <View className={styles.marqueeitem} style={{ opacity: idx === 4 ? 1 : 0.8 }} >4</View>
          <View className={styles.marqueeitem} style={{ opacity: idx === 7 ? 1 : 0.8 }} >7</View>
          <View className={styles.marqueeitem} style={{ opacity: idx === 6 ? 1 : 0.8 }} >6</View>
          <View className={styles.marqueeitem} style={{ opacity: idx === 5 ? 1 : 0.8 }} >5</View>
        </View>
      </View>
      <View className={styles.starLeft}>
        {
          icon.map((val, index) => {
            return (
              // eslint-disable-next-line no-nested-ternary
              index % 2 === 0 ?
                star ?
                  <View key={val} className={styles.light} /> : <View className={styles.dark} /> :
                star ?
                  <View key={val} className={styles.dark} /> : <View className={styles.light} />
            );
          })
        }
      </View>
      <View className={styles.starRight}>
        {
          icon.map((val, index) => {
            return (
              // eslint-disable-next-line no-nested-ternary
              index % 2 === 0 ?
                star ?
                  <View key={val} className={styles.light} /> : <View className={styles.dark} /> :
                star ?
                  <View key={val} className={styles.dark} /> : <View className={styles.light} />
            );
          })
        }
      </View>
      <View className={styles.starTop}>
        {
          icon2.map((val, index) => {
            return (
              // eslint-disable-next-line no-nested-ternary
              index % 2 !== 0 ?
                star ?
                  <View key={val} className={styles.light} /> : <View className={styles.dark} /> :
                star ?
                  <View key={val} className={styles.dark} /> : <View className={styles.light} />
            );
          })
        }
      </View>
      <View className={styles.starBottom}>
        {
          icon2.map((val, index) => {
            return (
              // eslint-disable-next-line no-nested-ternary
              index % 2 !== 0 ?
                star ?
                  <View key={val} className={styles.light} /> : <View className={styles.dark} /> :
                star ?
                  <View key={val} className={styles.dark} /> : <View className={styles.light} />
            );
          })
        }
      </View>
      <View className={styles.gifts}>{'点击查看抽奖礼品'}</View>
      <View className={styles.tips}>
        <View className={styles.tipslinel} />
        <View className={styles.tipssignl} />
        <View>{'抽奖说明'}</View>
        <View className={styles.tipssignr} />
        <View className={styles.tipsliner} />
      </View>
      <View className={styles.options} >
        <View>{'1、每个会员可根据自己的积分数开启多个红包，每个红包仅限开启1次。'}</View>
        <View>{'2、每个红包中的礼品以分值段划分，随机抽取。'}</View>
      </View>
    </View>
  );
}
