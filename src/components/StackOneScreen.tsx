import { Button, Text, View } from "react-native";


function StackOneScreen({ navigation }: any) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>StackOne Screen</Text>
            <Button
                title='Go to StackTwo'
                onPress={() => navigation.navigate('StackTwo')}
            />
        </View>
    )
}

export default StackOneScreen;