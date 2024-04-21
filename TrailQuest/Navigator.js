import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from './components/SignIn';
import Home from './components/Home';
import Friends from './components/Friends'; // Import your Trails screen
import Quests from './components/Quests'; // Import your Quests screen
import Profile from './components/Profile'; // Import your Profile screen
import Start from './components/Start'; // Import your Start screen
import signup from './components/signup';


const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="SignIn">
      <Stack.Screen name="SignIn" component={SignIn} options={{ headerShown: false }}/>
      <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
      <Stack.Screen name="Friends" component={Friends} options={{ headerShown: false }}/>
      <Stack.Screen name="Quests" component={Quests} options={{ headerShown: false }}/>
      <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }}/>
      <Stack.Screen name="Start" component={Start} options={{ headerShown: false }}/>
      <Stack.Screen name="signup" component={signup} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

export default AppNavigator;