import { createElement, useState } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';
import Image from 'rax-image';
import TextInput from 'rax-textinput';
import ScrollView from 'rax-scrollview';
import styles from './index.module.css';

function Map() {
  const [THUMBS, setTHUMBS] = useState([
    { isSel: true, floor: 'B1' },
    { isSel: false, floor: 'B2' },
    { isSel: false, floor: 'B3' },
    { isSel: false, floor: 'B4' },
  ]);
  const [searchText, setSearchText] = useState('');
  return (
    <View className={styles.pageContainer}>
      <Image className={styles.mapImage} resizeMode="cover" source={{ uri: '' }} />
      <View className={styles.mapSearchPane}>
        <Text className={styles.mapSearchIcon}>🔍</Text>
        <TextInput
          className={styles.mapSearchInput}
          value={searchText}
          confirmType="search"
          onChangeText={(text) => {
            console.log(text);
            setSearchText(text);
          }}
        />
      </View>
      <View className={styles.mapFloorPane}>
        <Text className={styles.mapFloorL}>{'<'}</Text>
        <ScrollView
          className={styles.mapFloorCenter}
          horizontal
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
        >
          <View className={styles.mapFloorCenterPane}>
            {THUMBS.map((val, index) => {
              return (
                <View key={index} className={styles.button}>
                  {val.isSel === true ? (
                    <Text className={styles.selbox}>{val.floor}</Text>
                  ) : (
                    <Text
                      className={styles.box}
                      onClick={() => {
                        let _THUMBS = [];
                        THUMBS.forEach((item) => {
                          item.isSel = false;
                          if (val.floor === item.floor) {
                            item.isSel = true;
                          }
                          _THUMBS.push(item);
                          return item;
                        });
                        setTHUMBS(_THUMBS);
                      }}
                    >
                      {val.floor}
                    </Text>
                  )}
                </View>
              );
            })}
          </View>
        </ScrollView>
        <Text className={styles.mapFloorR}>{'>'}</Text>
      </View>
    </View>
  );
}

export default Map;
