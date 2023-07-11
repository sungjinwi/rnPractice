import {createNativeStackNavigator} from '@react-navigation/native-stack';
import StackOneScreen from './StackOneScreen';
import StackTwoScreen from './StackTwoScreen';

function TabTwoScreen() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="StackOne"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="StackOne" component={StackOneScreen} />
      <Stack.Screen name="StackTwo" component={StackTwoScreen} />
    </Stack.Navigator>
  );
}

export default TabTwoScreen;
