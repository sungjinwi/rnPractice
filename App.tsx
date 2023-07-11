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

const Tab = createBottomTabNavigator();


const dummy = [
    {
        name: 'john',
        age: 20,
        idx: 0
    },
    {
        name: 'peter',
        age: 23,
        idx: 1
    },
]

function App(): JSX.Element {

    const managePeople = useManagePeople(dummy);

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