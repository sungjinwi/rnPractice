import { useState } from 'react';
import {
  Button,
  Text,
  View,
  FlatList,
  StyleSheet,
  Alert,
  TextInput
} from 'react-native'


const People = [
  {
    name: 'john',
    age: 20
  },
  {
    name: 'peter',
    age: 23
  },
  
]

type PersonProps = {
  name: string;
  age: number;
}

const Person = ({ name, age }: PersonProps) => (
  <View style={styles.item}>
    <Text style={styles.script}>My name is {name} and I'm {age} years old</Text>
  </View>
)

function TabOneScreen({ navigation }: any) {
  const [name, onChangeName] = useState('');
  const [age, onChangeAge] = useState('');

  const addPerson = ()=> {
    People.push({name:name, age:Number(age)})
    console.log(JSON.stringify(People))
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input}
          placeholder='name'
          onChangeText={onChangeName}
          value={name}
          onSubmitEditing={()=>{console.log('submitting')}}
        />
        <TextInput style={styles.input}
          placeholder='age'
          onChangeText={onChangeAge}
          value={age}
          keyboardType='numeric'
        />
        <Button 
          title='Add person'
          onPress={addPerson}
        />
        
      </View>
      <FlatList
        data={People}
        renderItem={({ item }) => <Person name={item.name} age={item.age} />}
        keyExtractor={(item, index) => index.toString()}
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
    height: 30,
    borderWidth: 1,
    margin: 3
  },
  inputContainer: {
    width: '100%',
    alignItems: 'center'
  }
})

export default TabOneScreen;