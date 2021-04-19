import { createElement, Component, render, createRef, useState, useEffect} from 'rax';

import View from 'rax-view';
import ScrollView from 'rax-scrollview';

import styles from './index.module.css';


function Thumb() {
  return (
    <View className={styles.button}>
      <View className={styles.box} />
    </View>
  );
}

const createThumbRow = (val, index) => <Thumb key={index} />;

export default function Scroll() {
  const [THUMBS, setTHUMBS] = useState([]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTHUMBS([1,1,1,1,1]);
    }, 10000);
  }, []);

  return (
    <View className={ styles.container } >
      <ScrollView horizontal style={{ marginLeft: '30rpx', width: '690rpx', height: '400rpx' }} >
        {THUMBS.map(createThumbRow)}
      </ScrollView>
      <ScrollView horizontal style={{ marginLeft: '30rpx', width: '600rpx', height: '400rpx' }} >
        {THUMBS.map(createThumbRow)}
      </ScrollView>
    </View>
  );
}
