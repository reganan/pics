import { createElement, useState } from 'rax';
import View from 'rax-view';
import Image from 'rax-image';
import Slider from 'rax-slider';
import SlideImg from '@ali/tpsjj-slide-image';
import styles from './index.module.less';

export default (props) => {
  const { customStyle, swiperList, needShowPreview = false, w, h } = props;
  const [imgshow, setShow] = useState(false);
  const onClickImage = (index) => {
    if (needShowPreview) {
      setShow(true);
    } else {
      props.handleClickImage && props.handleClickImage(index);
    }
  };
  return (
    <View className={styles.swiperContainter}>
      <Slider
        width={w}
        height={h}
        loop
        showsPagination
        paginationStyle={{ itemColor: '#fff', itemSelectedColor: '#ddd' }}
      >
        {!!swiperList.length &&
          swiperList.map((url, i) => {
            return (
              <Slider.Item key={String(i)}>
                <Image
                  className={styles.swiperImg}
                  onClick={() => {
                    onClickImage(i);
                  }}
                  mode="aspectFill"
                  style={customStyle}
                  source={{
                    width: w,
                    height: '100%',
                    uri: url,
                  }}
                />
              </Slider.Item>
            );
          })}
      </Slider>
      <SlideImg
        x-if={imgshow}
        imgList={swiperList}
        imgCb={() => {
          setShow(false);
        }}
      />
    </View>
  );
};
