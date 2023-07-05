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
  idx: number;
}


function TabOneScreen({ navigation }: any) {

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

  // 만약 더미데이터 없이 useState([])하면 typescript가 빈 배열을 never type으로 인식하기 때문에 따로 type을 지정해줘야한다.
  const [people,setPeople] = useState<PersonProps[]>([
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
  ]);

  const [name, onChangeName] = useState('');
  const [age, onChangeAge] = useState('');
  const [idx, setIdx] = useState(people.length);

  const addPerson = ()=> {
    setPeople([...people, {name, age:Number(age), idx:idx}])
    setIdx(idx+1);
  }

  const removePerson = (idx:number) => {
    const newPeople = people.filter((person)=>person.idx !== idx)
    
    setPeople(newPeople);
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input}
          placeholder='name'
          onChangeText={onChangeName}
          value={name}
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