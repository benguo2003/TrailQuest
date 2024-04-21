import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './Navigator'; // Replace './Navigator' with the path to your Navigator.js file
import LocationProvider from './backend/LocationProvider'; // Replace './LocationProvider' with the path to your LocationProvider.js file
import { useFonts } from 'expo-font';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['You are initializing Firebase Auth for React Native without providing AsyncStorage.']);
export default function App() {
  return (
    <NavigationContainer>
      <LocationProvider>
        <Navigator />
      </LocationProvider>
    </NavigationContainer>
  );
}