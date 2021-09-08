import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './LeftMenuStyle';

export default LeftMenuView = props => {
  return (
    //Chamando o View e montando o menu
    <View style={styles.container}>
      <View style={styles.navSectionStyle}>
        <TouchableOpacity>
          <View style={styles.navItemStyle}>
            <Text style={styles.navItemTitleStyle}>Produtos</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.navItemStyle}>
            <Text style={styles.navItemTitleStyle}>Pedido</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.navItemStyle}>
            <Text style={styles.navItemTitleStyle}>Carrinho</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.navItemStyle}>
            <Text style={styles.navItemTitleStyle}>Perfil</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.navItemStyle}>
            <Text style={styles.navItemTitleStyle}>Contato</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.navItemStyle}>
            <Text style={styles.navItemTitleStyle}>Sobre</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
