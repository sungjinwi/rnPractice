import {
  Button,
  Text,
  View,
  FlatList,
  StyleSheet
} from 'react-native'


const People = [
  {
    name:'john',
    age:20
  },
  {
    name:'peter',
    age:23
  },
  {
    name:'jane',
    age:19
  },
  {
    name:'smith',
    age:33
  },
  {
    name:'roan',
    age:22
  },
  {
    name:'orange',
    age:30
  },
]

type PersonProps = {
  name:string;
  age:number;
}

const ListHeader = ()=> (
  <View style={styles.listHeader}>
    <Text style={styles.title}>People List</Text>
  </View>
)

const Person = ({name,age}: PersonProps) => (
  <View style={styles.item}>
    <Text style={styles.script}>My name is {name} and I'm {age} years old</Text>
  </View>
)

function TabOneScreen({ navigation }: any) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <FlatList 
        data={People}
        renderItem={({item})=> <Person name={item.name} age={item.age} />}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={<ListHeader />}
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
  listHeader: {
    alignItems: 'center',
    backgroundColor: 'brown',
  },
  title: {
    fontSize: 30
  }
})

export default TabOneScreen;