import { useContext } from "react";
import { Button, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { PeopleContext } from "../context";

interface PersonProps {
    name: string;
    age: number;
    idx: number;
    }

function StackTwoScreen({ navigation }: any) {
    
    const { nameProps, ageProps, people, addPerson, removePerson } = useContext(PeopleContext);

    const Person = ({ name, age, idx }: PersonProps) => (
        <View style={styles.item}>
            <Text style={styles.script}>My name is {name} and I'm {age} years old</Text>
            <Text>my idx is {idx}</Text>
            <TouchableOpacity
                onPress={() => removePerson(idx)}
                style={{ backgroundColor: 'red', width: 70, height: 40 }}
            >
                <Text style={{ fontSize: 20 }}>remove</Text>
            </TouchableOpacity>
        </View>
    )


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <FlatList
                    data={people}
                    renderItem={({ item }) => <Person name={item.name} age={item.age} idx={item.idx} />}
                    keyExtractor={(item) => item.idx.toString()}
                />
            
            <Button
                title='Go back'
                onPress={()=>{
                    console.log(navigation.canGoBack())
                    navigation.goBack()
                }}
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
})

export default StackTwoScreen;