import React from 'react';
import styles from './HomeStyle';
import {View, Text, TouchableOpacity} from 'react-native';

const HomeView = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.textInfo}>Reobra</Text>
      <TouchableOpacity onPress={props.goToDetail}>
        <View style={styles.viewButton}>
          <Text>Tela interna</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default HomeView;
