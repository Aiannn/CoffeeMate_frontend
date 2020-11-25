import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CoffeeShopInfoScreen from '../screens/CoffeeShopInfoScreen'
import CoffeeMeetingsScreen from '../screens/CoffeeMeetingsScreen'

const Stack = createStackNavigator()

const CoffeeShopsNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name='coffeeShops' component={CoffeeMeetingsScreen} />
        <Stack.Screen name='coffeeShopInfo' component={CoffeeShopInfoScreen} />
    </Stack.Navigator>
)

export default CoffeeShopsNavigator