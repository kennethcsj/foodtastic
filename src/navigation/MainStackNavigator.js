import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../components/home/HomeScreen'

const Stack = createStackNavigator();

function MainStackNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName = 'Home'
                screenOptions = {{ gestureEnabled: false }}
            >
                <Stack.Screen
                    name = 'Home'
                    component = {HomeScreen}
                    options = {{ title: 'My App' }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MainStackNavigator