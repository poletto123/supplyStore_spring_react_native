import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './SideMenuStyle';

export default SideMenuView = props => {
  return (
    //Chamando o View e montando o menu
    <View style={styles.container}>
      <View style={styles.navSectionStyle}>
        <TouchableOpacity>
          <View style={styles.navItemStyle}>
            <Text style={styles.navItemTitleStyle}>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.navItemStyle}>
            <Text style={styles.navItemTitleStyle}>Produtos</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.navItemStyle}>
            <Text style={styles.navItemTitleStyle}>Carrinho</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};