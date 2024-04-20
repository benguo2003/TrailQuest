import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './SignIn';
import Home from './Home';
import Temp from './Temp'; // Import your Home screen
import Friends from './Friends'; // Import your Trails screen
import Quests from './Quests'; // Import your Quests screen
import Profile from './Profile'; // Import your Profile screen

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }}/>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
      <Stack.Screen name="Temp" component={Temp} options={{ headerShown: false }}/>
      <Stack.Screen name="Friends" component={Friends} options={{ headerShown: false }}/>
      <Stack.Screen name="Quests" component={Quests} options={{ headerShown: false }}/>
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

export default AppNavigator;