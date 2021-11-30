import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {AllCategoriesScreen, AllProductScreen, HomeScreen} from '../screens';

const {Navigator, Screen} = createNativeStackNavigator();

export default function AppRoute() {
  return (
    <Navigator initialRouteName="home">
      <Screen component={HomeScreen} name="home" />
      <Screen component={AllProductScreen} name="allProduct" />
      <Screen component={AllCategoriesScreen} name="allCategories" />
    </Navigator>
  );
}
