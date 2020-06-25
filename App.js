import React, {useState} from 'react';
import {StyleSheet, Text, Image, View, TextInput, Button, ScrollView, FlatList} from 'react-native';
import GoalList from './components/GoalList'
import GoalInput from './components/GoalInput'

const App = () => {
  const [goalList, setGoalList] = useState([])

  const addGoal = (entered) => {
    // setGoalList([...goalList, entered])
    setGoalList(currentState => ([...currentState, {id: Math.random().toString(), value: entered}]))
  }

  // setGoalList(currentState => ([...currentState, entered]))

  const onDelete = (id) => {
    console.log('delete aja', id)
    setGoalList(currentState => {
      return currentState.filter(item => {
        item.value !== id
      })
    })
  }

  console.log(goalList)

  return (
    <View style={styles.screen}>
      <GoalInput addGoal={addGoal}  />
      <ScrollView>
      <FlatList data={goalList} renderItem={itemData=> (
        <GoalList item={itemData.item} onDelete={onDelete} />
      )}> 
      </FlatList>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    borderBottomColor: 'black',
    borderWidth: 1,
    width: '80%',
  },
  list:{
    backgroundColor: '#ccc',
    padding: 5,
    marginVertical: 5,
  }
});

export default App;
