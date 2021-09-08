import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import styles from './RightMenuStyle';

export default RightMenuView = props => {
  return (
    <View style={styles.container}>
      <View style={styles.navSectionStyle}>
        <Text style={styles.navItemTitleStyle}>Carrinho</Text>
        <FlatList
          style={styles.navItemStyle}
          data={[{key: 'Produto 1'}, {key: 'Produto 2'}, {key: 'Produto 3'}]}
          renderItem={({item}) => (
            <Text style={styles.item}>
              {'\u2022'} {item.key}
            </Text>
          )}
        />
      </View>
    </View>
  );
};
