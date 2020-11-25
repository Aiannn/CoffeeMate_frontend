import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import CreateMeetingScreen from '../screens/CreateMeetingScreen'
import CoffeeMeetingsScreen from '../screens/CoffeeMeetingsScreen'
import AccountScreen from '../screens/AccountScreen'
import CoffeeShopsNavigator from './CoffeeShopsNavigator'
import Map from '../components/Map'

const Tab = createBottomTabNavigator()

const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen
            name='New Meeting'
            component={CreateMeetingScreen}
            options={{
                tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name='plus-circle-outline' color={color} size={size} />
            }} />
        <Tab.Screen
            name='Coffee Meetings'
            component={CoffeeShopsNavigator}
            options={{
                tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name='coffee' color={color} size={size} />
            }} />
        <Tab.Screen
            name='Account'
            component={AccountScreen}
            options={{
                tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name='account' color={color} size={size} />
            }} />
        <Tab.Screen
            name='CoffeeMap'
            component={Map}
            options={{
                tabBarIcon: ({ size, color }) => <MaterialCommunityIcons name='map' color={color} size={size} />
            }} />
    </Tab.Navigator>
)

export default AppNavigator