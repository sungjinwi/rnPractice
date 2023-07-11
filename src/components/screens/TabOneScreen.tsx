import {
  Button,
  Text,
  View,
  FlatList,
  StyleSheet,
  Alert,
  TextInput,
  TouchableOpacity,
} from 'react-native';

function TabOneScreen({navigation}: any) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        title="Go to stackTwo"
        onPress={() =>
          navigation.navigate('TabTwo', {
            screen: 'StackTwo',
          })
        }
      />
    </View>
  );
}

export default TabOneScreen;
