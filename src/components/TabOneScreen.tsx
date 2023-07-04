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

type PersonProps = {
  name: string;
  age: number;
  index: number;
}


function TabOneScreen({ navigation }: any) {

  const Person = ({ name, age, index }: PersonProps) => (
    <View style={styles.item}>
      <Text style={styles.script}>My name is {name} and I'm {age} years old</Text>
      <TouchableOpacity
        onPress={()=>removePerson(index)}
        style={{backgroundColor:'red', width:70, height:40}}
      >
        <Text style={{fontSize:20}}>remove</Text>
      </TouchableOpacity>
    </View>
  )

  const [people,setPeople] = useState(
    [
      {
        name: 'john',
        age: 20
      },
      {
        name: 'peter',
        age: 23
      },
    ]
  )

  const [name, onChangeName] = useState('');
  const [age, onChangeAge] = useState('');

  const addPerson = ()=> {
    setPeople([...people, {name:name, age:Number(age)}])
  }

  const removePerson = (index:number) => {
    people.splice(index,1);

    // array에 담기는 변수는 주소값이기 때문에 단순히 push, splice로는 변화시킬 수 없고
    // 비구조화 할당으로 다시 본인을 할당하면 state가 변하면서 rerencdering 된다 
    setPeople([...people]);
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
        data={people}
        renderItem={({ item, index }) => <Person name={item.name} age={item.age} index={index} />}
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