import { Button, FlatList, StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { useContext } from "react";
import { PeopleContext } from "../context";



function StackOneScreen({ navigation }: any) {

    // Context로 props관리

    const { nameProps, ageProps, people, addPerson, removePerson } = useContext(PeopleContext);

    

    return (
        <>
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
                        onPress={addPerson}
                    />
                </View>
            </View>
                <Button
                    title='Go to peopleList'
                    onPress={() => navigation.navigate('StackTwo')}
                />
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        width: '50%',
        height: 40,
        borderWidth: 1,
        margin: 3
    },
    inputContainer: {
        width: '100%',
        alignItems: 'center'
    },
})

export default StackOneScreen;