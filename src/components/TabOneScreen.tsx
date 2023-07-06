import { useState } from 'react';
import {
  Button,
  Text,
  View,
  FlatList,
  StyleSheet,
  Alert,
  TextInput,
  TouchableOpacity
} from 'react-native'
import { useInput, useManageList } from '../hooks';


interface PersonProps {
  name: string;
  age: number;
  idx: number;
}

const dummy = [
  {
    name: 'john',
    age: 20,
    idx:0
  },
  {
    name: 'peter',
    age: 23,
    idx:1
  },
]


function TabOneScreen({ navigation }: any) {

  // customHook으로 input 및 people관리 수정

  const nameProps = useInput('')
  const ageProps = useInput('')

  const managePeople = useManageList(dummy);

  const { list:people ,addItem: addPerson, removeItem: removePerson } = managePeople;

  const Person = ({ name, age, idx }: PersonProps) => (
    <View style={styles.item}>
      <Text style={styles.script}>My name is {name} and I'm {age} years old</Text>
      <Text>my idx is {idx}</Text>
      <TouchableOpacity
        onPress={()=>removePerson(idx)}
        style={{backgroundColor:'red', width:70, height:40}}
      >
        <Text style={{fontSize:20}}>remove</Text>
      </TouchableOpacity>
    </View>
  )

    return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input}
          placeholder='name'
          {...nameProps}
        />
        <TextInput style={styles.input}
          placeholder='age'
          keyboardType='numeric'
          {...ageProps}
        />
        <Button 
          title='Add person'
          // onPress={addPerson}
          onPress={()=>addPerson({name:nameProps.value, age:ageProps.value})}
        />
        
      </View>
      <FlatList
        data={people}
        renderItem={({ item, index }) => <Person name={item.name} age={item.age} idx={item.idx} />}
        keyExtractor={(item) => item.idx.toString()}
      />
      <Button
        title='Go to stackTwo'
        onPress={() => navigation.navigate('TabTwo', {
          screen: 'StackTwo'
        })}
      />
    </View>
  )
}



const styles = StyleSheet.create({
  item: {
    padding: 30,
    marginVertical: 10,
    backgroundColor: 'yellow'
  },
  script: {
    fontSize: 20
  },
  title: {
    fontSize: 30
  },
  input: {
    width: '50%',
    height: 40,
    borderWidth: 1,
    margin: 3
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center'
  }
})

export default TabOneScreen;