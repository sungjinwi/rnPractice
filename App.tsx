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

const Tab = createBottomTabNavigator();

function App(): JSX.Element {

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <PeopleContext.Provider value={1}>
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