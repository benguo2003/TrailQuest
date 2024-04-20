import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './Navigator'; // Replace './Navigator' with the path to your Navigator.js file
import LocationProvider from './backend/LocationProvider'; // Replace './LocationProvider' with the path to your LocationProvider.js file

export default function App() {
  return (
    <NavigationContainer>
      <LocationProvider>
        <Navigator />
      </LocationProvider>
    </NavigationContainer>
  );
}