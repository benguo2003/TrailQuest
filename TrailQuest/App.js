import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './Navigator'; // Replace './Navigator' with the path to your Navigator.js file
import LocationProvider from './backend/LocationProvider'; // Replace './LocationProvider' with the path to your LocationProvider.js file
import { useFonts } from 'expo-font';
import { UserContext } from './backend/UserContext'; // Import your UserContext.js file

export default function App() {
  const [userData, setUserData] = useState(null);


  return (
    <NavigationContainer>
      <LocationProvider>
        <UserContext.Provider value={{ userData, setUserData }}>
          <AppNavigator />
        </UserContext.Provider>
      </LocationProvider>
    </NavigationContainer>
  );
}