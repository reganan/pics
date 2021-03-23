import { createElement } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';
import ScrollView from 'rax-scrollview';

import styles from './index.module.css';
function PointDestail() {
  return (
    <View className={styles.pageContainer}>
      <View className={styles.pointTitlePane}>
        <Text className={styles.pointTitlePaneTextL}>上传时间</Text>
        <Text className={styles.pointTitlePaneTextRBlack}>2019.11.8 / 16:40:06</Text>
      </View>
      <View className={styles.pointTitlePane}>
        <Text className={styles.pointTitlePaneTextL}>审核状态</Text>
        <Text className={styles.pointTitlePaneTextRGreen}>审核通过</Text>
      </View>
      <View className={styles.pointTitlePane}>
        <Text className={styles.pointTitlePaneTextL}>审核状态</Text>
        <Text className={styles.pointTitlePaneTextRBlack}>审核中</Text>
      </View>
      <View className={styles.pointTitlePane}>
        <Text className={styles.pointTitlePaneTextL}>审核状态</Text>
        <Text className={styles.pointTitlePaneTextRRed}>审核未通过</Text>
      </View>
      <Text className={styles.pointBottomPaneText}>驳回原因</Text>
      <View className={styles.pointReasonPane}>
        <ScrollView className={styles.pointReasonScrollerPane}>
          <Text className={styles.pointReasonText}>
            您好，您的小票信息显示不全其中没有包括（商场信息、店铺名称、交易时间、交易单号、消费金额5个基本要素），请重新拍完整小票标注二次上传，重新上传得积分。如有疑问请点击会员积分——在线客服,联系我们。
          </Text>
          <Text className={styles.pointReasonText}>
            您好，您的小票信息显示不全其中没有包括（商场信息、店铺名称、交易时间、交易单号、消费金额5个基本要素），请重新拍完整小票标注二次上传，重新上传得积分。如有疑问请点击会员积分——在线客服,联系我们。
          </Text>
          <Text className={styles.pointReasonText}>
            您好，您的小票信息显示不全其中没有包括（商场信息、店铺名称、交易时间、交易单号、消费金额5个基本要素），请重新拍完整小票标注二次上传，重新上传得积分。如有疑问请点击会员积分——在线客服,联系我们。
          </Text>
        </ScrollView>
      </View>
      <View className={styles.pointLine} />
      <Text className={styles.pointBottomPaneText}>上传照片</Text>
      <View className={styles.pointBottomPane}>
        <Image
          className={styles.itemImage}
          source={{
            uri: 'https://gw.alicdn.com/tfs/TB1g6AvPVXXXXa7XpXXXXXXXXXX-215-215.png',
            width: 588,
            height: 400,
          }}
        />
      </View>
      <Text className={styles.pointBottomBtn}>重新上传此小票</Text>
    </View>
  );
}

export default PointDestail;
