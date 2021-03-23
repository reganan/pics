import { createElement, useRef, useState } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';

import styles from './index.module.css';

const styles2 = {
  slider: {
    width: 750,
    position: 'relative',
    overflow: 'hidden',
    height: 500,
    backgroundColor: '#cccccc',
  },
  itemWrap: {
    width: 500,
    height: 500,
  },
  image: {
    width: 500,
    height: 500,
  },
  button: {
    marginTop: 20,
    width: 340,
    height: 80,
  },
  paginationStyle: {
    position: 'absolute',
    width: 750,
    height: 40,
    bottom: 20,
    left: 0,
    itemColor: 'rgba(255, 255, 255, 0.5)',
    itemSelectedColor: 'rgb(255, 80, 0)',
    itemSize: 16,
  },
};

export default function Home() {
  const [swiperIndex, setSwiperIndex] = useState(0);
  // const [prcessW, setPrcessW] = useState(0)//618
  // const [prcessL, setPrcessL] = useState(-134)//490
  const [prcessW, setPrcessW] = useState(618); //618
  const [prcessL, setPrcessL] = useState(470); //490
  const swiperChange = (e) => {
    setSwiperIndex(e.detail.current);
    console.log('prcessW' + prcessW + 'prcessL' + prcessL);
    // if (prcessW >= 616) {
    //   setPrcessW(0)
    //   setPrcessL(-134)
    // } else {
    //   setPrcessW(prcessW + 24)
    //   setPrcessL(prcessL + 24)
    // }
  };

  return (
    <View className={styles.homeContainer}>
      <Text className={styles.topTitleText}>{'消费打卡进度'}</Text>
      <View className={styles.topPrcessPane}>
        <View className={styles.topPrcess}></View>
        <View className={styles.topSelPrcess} style={{ width: prcessW }}></View>
        <View className={styles.topSelPrcessTextPane} style={{ left: prcessL }}>
          <Text className={styles.topSelPrcessText}>▼</Text>
          <Text className={styles.topSelPrcessContent}>{'已消费12单'}</Text>
        </View>
      </View>
      <swiper
        className={styles.swiperBlock}
        autoplay="true"
        circular="true"
        interval="3000"
        previous-margin="0rpx"
        next-margin="179rpx"
        current="0"
        onChange={swiperChange}
      >
        <swiper-item className={styles.swiperItem}>
          {swiperIndex == 0 ? (
            <View className={styles.slideImageActive}>
              <View className={styles.itemPane}>
                <View className={styles.itemTitlePane}>
                  <Text className={styles.itemTopTitle}>满</Text>
                  <Text className={styles.itemTopCount}>10</Text>
                  <Text className={styles.itemTopTitle}>个印章获赠</Text>
                </View>

                <Text className={styles.itemSubTitle}>施华蔻吹风机1个</Text>
                <Image
                  className={styles.itemImage}
                  source={{
                    uri: 'https://gw.alicdn.com/tfs/TB1g6AvPVXXXXa7XpXXXXXXXXXX-215-215.png',
                    width: 262,
                    height: 294,
                  }}
                />
                <Text className={styles.getGift}>去领取</Text>
              </View>
            </View>
          ) : (
            <View className={styles.slideImage}>
              <View className={styles.itemSmallPane}>
                <View className={styles.itemSmallTitlePane}>
                  <Text className={styles.itemSmallTopTitle}>满</Text>
                  <Text className={styles.itemSmallTopCount}>10</Text>
                  <Text className={styles.itemSmallTopTitle}>个印章获赠</Text>
                </View>

                <Text className={styles.itemSmallSubTitle}>施华蔻吹风机1个</Text>
                <Image
                  className={styles.itemSmallImage}
                  source={{
                    uri: 'https://gw.alicdn.com/tfs/TB1g6AvPVXXXXa7XpXXXXXXXXXX-215-215.png',
                    width: 212,
                    height: 244,
                  }}
                />
                <Text className={styles.getSmallGift}>去领取</Text>
              </View>
            </View>
          )}
        </swiper-item>
        <swiper-item className={styles.swiperItem}>
          {swiperIndex == 1 ? (
            <View className={styles.slideImageActive}>
              <View className={styles.itemPane}>
                <View className={styles.itemTitlePane}>
                  <Text className={styles.itemTopTitle}>满</Text>
                  <Text className={styles.itemTopCount}>10</Text>
                  <Text className={styles.itemTopTitle}>个印章获赠</Text>
                </View>

                <Text className={styles.itemSubTitle}>施华蔻吹风机1个</Text>
                <Image
                  className={styles.itemImage}
                  source={{
                    uri: 'https://gw.alicdn.com/tfs/TB1g6AvPVXXXXa7XpXXXXXXXXXX-215-215.png',
                    width: 262,
                    height: 294,
                  }}
                />
                <Text className={styles.getGift}>去领取</Text>
              </View>
            </View>
          ) : (
            <View className={styles.slideImage}>
              <View className={styles.itemSmallPane}>
                <View className={styles.itemSmallTitlePane}>
                  <Text className={styles.itemSmallTopTitle}>满</Text>
                  <Text className={styles.itemSmallTopCount}>10</Text>
                  <Text className={styles.itemSmallTopTitle}>个印章获赠</Text>
                </View>

                <Text className={styles.itemSmallSubTitle}>施华蔻吹风机1个</Text>
                <Image
                  className={styles.itemSmallImage}
                  source={{
                    uri: 'https://gw.alicdn.com/tfs/TB1g6AvPVXXXXa7XpXXXXXXXXXX-215-215.png',
                    width: 212,
                    height: 244,
                  }}
                />
                <Text className={styles.getSmallGift}>去领取</Text>
              </View>
            </View>
          )}
        </swiper-item>
        <swiper-item className={styles.swiperItem}>
          {swiperIndex == 2 ? (
            <View className={styles.slideImageActive}>
              <View className={styles.itemPane}>
                <View className={styles.itemTitlePane}>
                  <Text className={styles.itemTopTitle}>满</Text>
                  <Text className={styles.itemTopCount}>10</Text>
                  <Text className={styles.itemTopTitle}>个印章获赠</Text>
                </View>

                <Text className={styles.itemSubTitle}>施华蔻吹风机1个</Text>
                <Image
                  className={styles.itemImage}
                  source={{
                    uri: 'https://gw.alicdn.com/tfs/TB1g6AvPVXXXXa7XpXXXXXXXXXX-215-215.png',
                    width: 262,
                    height: 294,
                  }}
                />
                <Text className={styles.getGiftIng}>待完成</Text>
              </View>
            </View>
          ) : (
            <View className={styles.slideImage}>
              <View className={styles.itemSmallPane}>
                <View className={styles.itemSmallTitlePane}>
                  <Text className={styles.itemSmallTopTitle}>满</Text>
                  <Text className={styles.itemSmallTopCount}>10</Text>
                  <Text className={styles.itemSmallTopTitle}>个印章获赠</Text>
                </View>

                <Text className={styles.itemSmallSubTitle}>施华蔻吹风机1个</Text>
                <Image
                  className={styles.itemSmallImage}
                  source={{
                    uri: 'https://gw.alicdn.com/tfs/TB1g6AvPVXXXXa7XpXXXXXXXXXX-215-215.png',
                    width: 212,
                    height: 244,
                  }}
                />
                <Text className={styles.getSmallGiftIng}>待完成</Text>
              </View>
            </View>
          )}
        </swiper-item>
      </swiper>
      <Text className={styles.actText}>{'活动细则 >'}</Text>
    </View>
  );
}
