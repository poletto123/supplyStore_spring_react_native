import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './LeftMenuStyle';

export default LeftMenuView = props => {
  return (
    //Chamando o View e montando o menu
    <View style={styles.container}>
      <View style={styles.navSectionStyle}>
        <TouchableOpacity onPress={props.goToListaProduto}>
          <View style={styles.navItemStyle}>
            <Text style={styles.navItemTitleStyle}>Produtos</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.goToPedidos}>
          <View style={styles.navItemStyle}>
            <Text style={styles.navItemTitleStyle}>Meus pedidos</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.goToPerfil}>
          <View style={styles.navItemStyle}>
            <Text style={styles.navItemTitleStyle}>Meu perfil</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.goToContato}>
          <View style={styles.navItemStyle}>
            <Text style={styles.navItemTitleStyle}>Contato</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={props.goToSobre}>
          <View style={styles.navItemStyle}>
            <Text style={styles.navItemTitleStyle}>Sobre</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
