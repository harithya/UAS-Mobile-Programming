// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/views/Home'
import Add from './src/views/Add'
import Edit from './src/views/Edit'

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Add" component={Add} />
        <Stack.Screen name="Edit" component={Edit} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;