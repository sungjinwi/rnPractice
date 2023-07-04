import { Button, Text, View } from 'react-native'

function TabOneScreen({navigation}:any) {
    return (
      <View style={{ flex:1, alignItems:'center', justifyContent:'center'}}>
        <Text>TabOne Screen</Text>
        <Button
          title='Go to stackTwo'
          onPress={()=>navigation.navigate('TabTwo', {
            screen: 'StackTwo'
          })}
        />
      </View>
    )
  }

export default TabOneScreen;