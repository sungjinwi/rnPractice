import { Button, Text, View } from "react-native";

function StackTwoScreen({ navigation }: any) {


    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>StackTwo Screen</Text>
            
            <Button
                title='Go to TabOne'
                onPress={() => navigation.navigate('TabOne')}
            />
        </View>
    )
}

export default StackTwoScreen;