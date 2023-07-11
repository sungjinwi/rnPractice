/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
    Button,
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';
import { TabOneScreen, TabTwoScreen } from './src/components';
import { PeopleContext } from './src/context';
import { useManagePeople } from './src/hooks';
import { peopleDummy } from './src/assets'; 

const Tab = createBottomTabNavigator();

function App(): JSX.Element {

    const managePeople = useManagePeople(peopleDummy);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <PeopleContext.Provider value={managePeople}>
                <NavigationContainer>
                    <Tab.Navigator>
                        <Tab.Screen name="TabOne" component={TabOneScreen} />
                        <Tab.Screen name="TabTwo" component={TabTwoScreen} />
                    </Tab.Navigator>
                </NavigationContainer>
            </PeopleContext.Provider>
        </SafeAreaView>
    );
}

export default App;