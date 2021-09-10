import React from 'react';
import styles from './ListaProdutoStyle';
import {View, Text, TouchableOpacity} from 'react-native';

const ListaProdutoView = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.textInfo}>Tela de produtos</Text>
      <TouchableOpacity onPress={props.goToProduto}>
        <View style={styles.viewButton}>
          <Text>Detalhe do produto</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ListaProdutoView;
