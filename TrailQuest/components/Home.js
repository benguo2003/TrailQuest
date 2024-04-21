import React, { useState } from 'react';
import { View, StatusBar, Image, TextInput, StyleSheet, Dimensions, Text, Button} from 'react-native';
import { useNavigation, useIsFocused} from '@react-navigation/native';
import Navbar from './Navbar'; // Import Navbar
import { useFonts, RobotoSlab_600SemiBold } from '@expo-google-fonts/roboto-slab';
import runPrompt from '../backend/chat.js';  // Import the sendMessage function

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

function Home() {
  const navigation = useNavigation();
  
  let [fontsLoaded, fontError] = useFonts({
    RobotoSlab_600SemiBold,
  });

  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handlePress = async () => {
    const res = await runPrompt("Baldwin Hills Park Lands, California State Parks, Catalina Island Conservancy, City of Palmdale, County of Los Angeles, Mountains Recreation and Conservation Authority, Mountains Restoration Trust", "Large backpack, fleece pants and jacket");
    quest_name = res[0];
    trail_1 = res[1];
    trail_2 = res[2];
    trail_3 = res[3];
    setResponse(`Quest Name: ${quest_name}\nTrail 1: ${trail_1}\nTrail 2: ${trail_2}\nTrail 3: ${trail_3}`);
  };

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>Home</Text>          
          <Image source={require('../assets/trailQuestCompass.png')} style={styles.logoImage} /> 
        </View>
      </View>
      <View style={styles.main}>
        <View style={styles.searchBox}>
          <TextInput 
            style={styles.input} 
            placeholder="Search for a trail..." 
            onChangeText={text => setInput(text)}
            value={input}
          />
          <Button title="Send" onPress={handlePress} />
          {response && <Text>{response}</Text>}
        </View>
      </View>
      <Navbar navigation={navigation}/>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 50,
      backgroundColor: '#F7FEDB',
    },
    header: {
      backgroundColor: '#F7FEDB',
      alignItems: 'center',
      padding: screenHeight * 0.02,
    },
    headerText: {
      color: 'white',
      fontSize: 20,
    },
    main: {
      flex: 1,
      padding: 20,
      backgroundColor: '#FFFFFF',
    },
    searchBox: {
      marginBottom: 20,
    },
    input: {
      height: 40,
      borderColor: '#4CAF50',
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
    },
    logoContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    logoImage: {
      width: screenWidth * 0.045,
      height: screenHeight * 0.045,
      resizeMode: 'contain',
      marginRight: screenWidth * 0.07, // Same width as the logoImage
      top: -12
    },
    logoText: {
      color: '#465306',
      fontSize: 45,
      textAlign: 'center',
      paddingLeft: screenWidth * 0.12,
      fontFamily: 'RobotoSlab_600SemiBold',
    },
});

export default Home;