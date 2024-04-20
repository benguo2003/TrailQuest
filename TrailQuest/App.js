import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './Navigator'; // Replace './Navigator' with the path to your Navigator.js file

export default function App() {
  return (
    <NavigationContainer>
      <Navigator />
    </NavigationContainer>
  );
}