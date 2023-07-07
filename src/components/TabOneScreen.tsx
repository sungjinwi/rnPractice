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





function TabOneScreen({ navigation }: any) {

    

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
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