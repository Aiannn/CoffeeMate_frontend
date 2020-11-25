import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import OpeningScreen from '../screens/OpeningScreen'
import RegisterScreen from '../screens/RegisterScreen'

const Stack = createStackNavigator()

const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name='Welcome' component={OpeningScreen} />
        <Stack.Screen name='Register' component={RegisterScreen} />
    </Stack.Navigator>
)

export default AuthNavigator