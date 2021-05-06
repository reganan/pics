import { createElement } from 'rax';
import View from 'rax-view';
import ScrollView from 'rax-scrollview';
import cs from 'classnames';
import styles from './index.module.less';

interface cateItem {
  mainCateBizId: string;
  mainCateBizName: string;
}
interface Props {
  curActiveKey: number | string;
  cateList: cateItem[];
  changeTab: (v) => any;
}

export default (props: Props) => {
  const { cateList, curActiveKey } = props;
  const onChangeTab = (v) => {
    props.changeTab(Number(v));
  };

  return (
    <ScrollView className={styles.tabContainer} horizontal>
      {cateList &&
        cateList.map((item) => (
          <View
            onClick={() => {
              onChangeTab(item.mainCateBizId);
            }}
            key={item.mainCateBizId}
            className={cs(styles.tabItem, {
              [styles.active]: Number(curActiveKey) === Number(item.mainCateBizId),
            })}
          >
            {item.mainCateBizName}
          </View>
        ))}
    </ScrollView>
  );
};
