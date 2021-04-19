import { createElement, useState } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import useInterval from 'rax-use-interval';
import styles from './index.module.css';
import alert from '@uni/alert';
export default function FruitMachine() {
  const [delay, setDelay] = useState(null);
  const [count, setCount] = useState(0);
  const [range, setRange] = useState(Math.floor(Math.random()*2 + 2));
  const [spd2, setSpd2] = useState(200);
  const [idx, setIdx] = useState(0);
  const [ret, setRet] = useState(1);
  const [len, setLen] = useState(8);
  const [isStart, setIsStart] = useState(false);

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
      setIdx(ret)
    }
  }, delay);

  const getGiftResult = () => {
    alert({
      title: 'alert框的标题',
      content: 'alert框的内容',
      buttonText: '按钮文字，默认confirm',
    }).then(() => {
      console.log('确定');
    });
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

  return (
    <View className={styles.container} >
      <View className={ styles.marqueewp}>
        <View className={styles.marqueeitem} style={{ opacity: idx === 1 ? 1 : 0.8 }} >1</View>
        <View className={styles.marqueeitem} style={{ opacity: idx === 2 ? 1 : 0.8 }} >2</View>
        <View className={styles.marqueeitem} style={{ opacity: idx === 3 ? 1 : 0.8 }} >3</View>
        <View className={styles.marqueeitem} style={{ opacity: idx === 8 ? 1 : 0.8 }} >8</View>
        <View className={ styles.marqueeitem} onClick={startGame} />
        <View className={styles.marqueeitem} style={{ opacity: idx === 4 ? 1 : 0.8 }} >4</View>
        <View className={styles.marqueeitem} style={{ opacity: idx === 7 ? 1 : 0.8 }} >7</View>
        <View className={styles.marqueeitem} style={{ opacity: idx === 6 ? 1 : 0.8 }} >6</View>
        <View className={styles.marqueeitem} style={{ opacity: idx === 5 ? 1 : 0.8 }} >5</View>
      </View>
    </View>
  );
}
