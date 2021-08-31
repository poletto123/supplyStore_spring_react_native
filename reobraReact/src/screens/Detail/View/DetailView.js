import React from 'react';
import {View, Text} from 'react-native';
export default DetailView = props => {
  const text = 'Detail View = ' + props.item_id;
  return (
    //Chamando o View e passando o props count_info
    <View>
      <Text style={{fontSize: 40}}>{text}</Text>
    </View>
  );
};
