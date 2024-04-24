// In App.js in a new project

import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PaperProvider, Button } from 'react-native-paper';
import { SnackbarManager, useSnackbarManager } from './SnackbarManager';

function HomeScreen({ navigation }) {
  const { addSnackbar } = useSnackbarManager()

  const redirect = () => {
    addSnackbar(`youre now on details screen`)
    navigation.navigate('Details')
  } 
  return (
    <>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        onPress={redirect}
      >Go to Details</Button>
    </View>
    </>
  );
}

function DetailsScreen({ navigation }) {
  const { addSnackbar } = useSnackbarManager()

  const redirect = () => {
    addSnackbar(`youre now on home screen`)
    navigation.navigate('Home')
  } 

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        onPress={redirect}
      >Go Home</Button>
    </View>
  );
}
const Stack = createNativeStackNavigator();

function App() {
  return (
    <PaperProvider>
        <NavigationContainer>
          <SnackbarManager>
              <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
              </Stack.Navigator>
          </SnackbarManager>
        </NavigationContainer>
    </PaperProvider>
  );
}

export default App;