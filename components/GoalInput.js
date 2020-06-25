import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  TextInput,
  Button,
  ScrollView,
  FlatList,
} from 'react-native';

const GoalInput = props => {
  const [entered, setEntered] = useState('');

  const inputHandler = entered => {
    setEntered(entered);

    // if (entered !== '') {
    //   setTimeout(() => {
    //     setEntered('');
    //   }, 3000);
    //   // setEntered('')
    // }
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <TextInput
        value={entered}
        onChangeText={inputHandler}
        placeholder="course"
        style={styles.inputContainer}
      />
      <Button title="Add" onPress={props.addGoal.bind(this, entered)} />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderBottomColor: 'black',
    borderWidth: 1,
    width: '80%',
  },
});

export default GoalInput;
