import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './components/SignIn';
import Home from './components/Home';
import Friends from './components/Friends'; // Import your Trails screen
import Quests from './components/Quests'; // Import your Quests screen
import Profile from './components/Profile'; // Import your Profile screen
import Start from './components/Start'; // Import your Start screen
import SignUserUp from './components/SignUserUp';
import NewQuest from './components/NewQuest';

const Stack = createNativeStackNavigator();

function AppNavigator() {

  return (
    
    <Stack.Navigator 
      initialRouteName="SignIn"
      screenOptions={{
        animation: 'fade',
        headerShown: false,
    }}>
      <Stack.Screen 
        name="SignIn" 
        component={SignIn} 
        screenOptions={{
        animation: 'fade',
        headerShown: false,
    }}/>

      <Stack.Screen 
        name="Home" 
        component={Home} 
        screenOptions={{
        animation: 'fade',
        headerShown: false,
    }}/>

      <Stack.Screen 
        name="Friends" 
        component={Friends} 
        screenOptions={{
        animation: 'fade',
        headerShown: false,
    }}/>

      <Stack.Screen 
        name="Quests" 
        component={Quests} 
        screenOptions={{
        animation: 'fade',
        headerShown: false,
    }}/>

      <Stack.Screen 
        name="Profile" 
        component={Profile} 
        screenOptions={{
        animation: 'fade',
        headerShown: false,
    }}/>

      <Stack.Screen 
        name="Start" 
        component={Start} 
        screenOptions={{
        animation: 'fade',
        headerShown: false,
    }}/>
      
      <Stack.Screen 
        name="SignUserUp" 
        component={SignUserUp} 
        screenOptions={{
        animation: 'fade',
        headerShown: false,
    }}/>

      <Stack.Screen 
        name="NewQuest" 
        component={NewQuest} 
        screenOptions={{
        animation: 'fade',
        headerShown: false,
    }}/>

    </Stack.Navigator>
  );
}

export default AppNavigator;