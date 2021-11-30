import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { AllCategoriesScreen, AllProductScreen, HomeScreen } from '../screens'

const {Navigator, Screen} = createNativeStackNavigator()

export default function AppRoute() {
    return (
        <Navigator>
            <Screen component={HomeScreen} name="home" />
            <Screen component={AllProductScreen} name="allProduct" />
            <Screen component={AllCategoriesScreen} name="allCategories"/>
        </Navigator>
    )
}

const styles = StyleSheet.create({})
