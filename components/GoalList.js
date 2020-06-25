import React from 'react';
import {StyleSheet, Text, Image, View, TextInput, Button, ScrollView, FlatList, Touchable, TouchableOpacity} from 'react-native';


const GoalItem = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={props.onDelete.bind(this, props.item.id)}> 
      <Text  style={styles.list}>
        {props.item.value}
      </Text>
    </TouchableOpacity>
   );
}

const styles = StyleSheet.create({
  list:{
    backgroundColor: '#ccc',
    padding: 5,
    marginVertical: 5,
  }
})
 
export default GoalItem;