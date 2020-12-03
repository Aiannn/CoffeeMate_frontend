import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import AccountScreen from '../screens/AccountScreen'
import SettingsScreen from '../screens/SettingsScreen'

const Stack = createStackNavigator()

const AccountNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='account'>
            <Stack.Screen name='account' component={AccountScreen} />
            <Stack.Screen name='settings' component={SettingsScreen} />
        </Stack.Navigator>
    )
}

export default AccountNavigator;