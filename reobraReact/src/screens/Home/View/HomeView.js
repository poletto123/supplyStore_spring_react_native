import React from 'react';
import styles from './HomeStyle'; //Importando o Style
import {View, Text, TouchableOpacity} from 'react-native';

const HomeView = props => {
  //juntando o texto Tempo com o count_info vindo do props
  const teste = 'Tempo: ' + props.count_info;

  //Passando o metodo recebido pela props no onPress
  return (
    <View style={styles.container}>
      <Text style={styles.textInfo}> {teste} </Text>
      <TouchableOpacity underlayColor="white" onPress={props.onButtonPressed}>
        <View style={styles.viewButton}>
          <Text>Iniciar/Pausar Cronometro</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={props.goToDetail}>
        <View style={styles.viewButton}>
          <Text>Tela Detail </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default HomeView;
