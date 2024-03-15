import { Platform, StyleSheet, Text, TouchableOpacity, View,UIManager } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddEmploy from './src/AddEmploy';
import ShowEmploy from './src/ShowEmploy';
import { Provider } from 'react-redux';
import store from './Redux/Store/store';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';
let persister  = persistStore(store)
const App = () => {
  if (Platform.OS === 'android') {
    UIManager.setLayoutAnimationEnabledExperimental &&
      UIManager.setLayoutAnimationEnabledExperimental(true);
  }
  const Stack = createNativeStackNavigator();
  return (
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: 'seashell' }}>
    <Provider store={store}>
      <PersistGate persistor={persister}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="ShowEmploy" component={ShowEmploy} />
          <Stack.Screen name="AddEmploy" component={AddEmploy} />
        </Stack.Navigator>
      </NavigationContainer>
      </PersistGate>
    </Provider>
</GestureHandlerRootView>
  )
}

export default App

const styles = StyleSheet.create({})