import React from 'react';
import styles from './ListaPedidoStyle.js';
import {View, Text} from 'react-native';

const ListaPedidoView = props => {
  return (
    <View>
      <Text style={styles.textInfo}>Tela de pedidos</Text>
    </View>
  );
};

export default ListaPedidoView;
