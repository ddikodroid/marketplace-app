import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {LogoTitle} from '../components';
import {AllCategoriesScreen, AllProductScreen, HomeScreen} from '../screens';

const {Navigator, Screen} = createNativeStackNavigator();

export default function AppRoute() {
  return (
    <Navigator
      initialRouteName="home"
      screenOptions={{headerTitleAlign: 'center'}}>
      <Screen
        component={HomeScreen}
        name="home"
        options={{headerTitle: props => <LogoTitle {...props} />}}
      />
      <Screen
        component={AllProductScreen}
        name="allProduct"
        options={{title: 'Semua Produk'}}
      />
      <Screen
        component={AllCategoriesScreen}
        name="allCategories"
        options={{title: 'Semua Kategori'}}
      />
    </Navigator>
  );
}
