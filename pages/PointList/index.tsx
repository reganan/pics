import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import ScrollView from 'rax-scrollview';
import Image from 'rax-image';

import styles from './index.module.css';
function PointList() {
  return (
    <View className={styles.pageContainer}>
      <ScrollView onEndReached={() => { }}>
        <View className={styles.pltopTitlePane}>
          <Text className={styles.pltopTitleText}>您有</Text>
          <Text className={styles.pltopTitleCount}>{' 2 '}</Text>
          <Text className={styles.pltopTitleText}>个小票正在审核中</Text>
        </View>

        <View className={styles.plitemPane}>
          <View className={styles.plitemTitlePane}>
            <Text className={styles.plitemStatus}>审核中</Text>
            <Text className={styles.plitemDestail}>{'详情 >'}</Text>
          </View>
          <View className={styles.plitemLine} />
          <View className={styles.plbottomPane }>
            <View className={styles.plbottomStatusPane}>
              <Image className={ styles.plitemTitleIcon}/>
              <Text className={styles.plbottomStatusText}>上传待审批</Text>
              <View className={styles.plbottomStatusLine} />
              <Image className={ styles.plitemTitleIcon}/>
              <Text className={styles.plbottomStatusTextGreen}>积分成功</Text>
            </View>
            <View className={styles.plbottomTimePane }>
              <Text className={styles.plbottomTimeText}>2019.11.12 / 16:40:06</Text>
              <Text className={styles.plbottomTimeTextGreen}>2019.11.12 / 16:40:06</Text>
            </View>
          </View>
        </View>

        <View className={styles.plitemPane}>
          <View className={styles.plitemTitlePane}>
            <Text className={styles.plitemStatus}>审核中</Text>
            <Text className={styles.plitemDestail}>{'详情 >'}</Text>
          </View>
          <View className={styles.plitemLine} />
          <View className={styles.plbottomPane }>
            <View className={styles.plbottomStatusPane}>
              <Image className={ styles.plitemTitleIcon}/>
              <Text className={styles.plbottomStatusText}>上传待审批</Text>
              <View className={styles.plbottomStatusLine} />
              <Image className={ styles.plitemTitleIcon}/>
              <Text className={styles.plbottomStatusTextRed}>审批失败</Text>
            </View>
            <View className={styles.plbottomTimePane }>
              <Text className={styles.plbottomTimeText}>2019.11.12 / 16:40:06</Text>
              <Text className={styles.plbottomTimeTextRed}>2019.11.12 / 16:40:06</Text>
            </View>
          </View>
        </View>

        <View className={styles.plitemPane}>
          <View className={styles.plitemTitlePane}>
            <Text className={styles.plitemStatus}>审核中</Text>
            <Text className={styles.plitemDestail}>{'详情 >'}</Text>
          </View>
          <View className={styles.plitemLine} />
          <View className={styles.plbottomPane }>
            <View className={styles.plbottomStatusPane}>
              <Image className={ styles.plitemTitleIcon}/>
              <Text className={styles.plbottomStatusText}>上传待审批</Text>
              <View className={styles.plbottomStatusLine} />
              <Image className={ styles.plitemTitleIcon}/>
              <Text className={styles.plbottomStatusTextGray}>积分成功</Text>
            </View>
            <View className={styles.plbottomTimeTextPane }>
              <Text className={styles.plbottomTimeText}>2019.11.12 / 16:40:06</Text>
              <Text className={styles.plbottomTimeTextGray}>待审核</Text>
            </View>
          </View>
        </View>

      </ScrollView>
    </View>
  );
}

export default PointList;
