import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import AppRoute from './src/routes/AppRoute'

export default function App() {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <AppRoute/>
    </NavigationContainer>
    </SafeAreaProvider>
  )
}

