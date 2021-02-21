/**
 * @format
 */
import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import { SafeAreaProvider } from 'react-native-safe-area-context';

Main = () => {
    return (
        <SafeAreaProvider>
            <App />
        </SafeAreaProvider>
    )
}

AppRegistry.registerComponent(appName, () => Main);
