import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/views/Home'
import Modul1 from './src/views/modules/Modul1'
import Modul2 from './src/views/modules/Modul2'
import Modul3 from './src/views/modules/Modul3'
import Modul4 from './src/views/modules/Modul4'
import Modul5 from './src/views/modules/Modul5'
import Modul6 from './src/views/modules/Modul6'


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="Modul1" component={Modul1} />
        <Stack.Screen name="Modul2" component={Modul2} />
        <Stack.Screen name="Modul3" component={Modul3} />
        <Stack.Screen name="Modul4" component={Modul4} />
        <Stack.Screen name="Modul5" component={Modul5} />
        <Stack.Screen name="Modul6" component={Modul6} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;