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

  let [fontsLoaded, fontError] = useFonts({
    RobotoSlab_600SemiBold,
  });

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
        <View style={styles.profileContainer}>
          <Image source={require('../assets/profileIcon.png')} style={styles.profileIcon} />
        </View>
        <View style={styles.outerQuestContainer}>
          <View style={styles.questContainer}>
            <Text style={styles.questText}>Weekly Summary</Text>
          </View>
          <Text style={styles.detailText}>Miles Hiked: 150</Text>
          <Text style={styles.detailText}>Quests Completed: 8/10</Text>
        </View>
        {/* New outer and inner container for Friends */}
        <View style={styles.SecondouterQuestContainer}>
          <View style={styles.SecondquestContainer}>
            <Text style={styles.questText2}>Popular Trails</Text>
          </View>
          <Text style={styles.detailText2}> Trail 1</Text>
          <Text style={styles.detailText2}> Trail 2</Text>
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
  },
  main: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
    alignItems: 'center', // Keeps the main container centered
    justifyContent: 'center',
  },
  profileContainer: {
    height: 100,
    width: 100,
    borderRadius: 50,
    overflow: 'hidden',
    marginBottom: 80,
    marginTop: 10,
    position: 'relative',
  },
  profileIcon: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 5,
    resizeMode: 'contain'
  },
  outerQuestContainer: {
    width: screenWidth - 40,
    padding: 20,
    backgroundColor: '#D2DFAF',
    borderRadius: 30,
    alignItems: 'flex-start', // Align child items to the left
    justifyContent: 'flex-start', // Align items to the top
    marginTop: -50,
    marginBottom: 40,
  },
  

  questContainer: {
    width: screenWidth - 90,
    height: 50,
    backgroundColor: '#4CAF50',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'flex-start',  // Ensure content alignment to the left
    marginBottom: 10,
    paddingLeft: 10,  // Add padding to ensure text does not stick to the edge
  },

  questText: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'RobotoSlab_600SemiBold',
    textAlign: 'left',  // Correct property to align text horizontally
    alignSelf: 'flex-start',  // Align text to the start (left) of its container
  },
  detailText: {
    color: '#333',
    fontSize: 20,
    fontFamily: 'RobotoSlab_600SemiBold',
    textAlign: 'left',
    alignSelf: 'flex-start',
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: screenHeight * 0.02,
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
    paddingLeft: screenWidth * 0.12, // Same width as the logoImage
    fontFamily: 'RobotoSlab_600SemiBold',
  },
  SecondouterQuestContainer: {
    width: screenWidth - 40,
    padding: 20,
    backgroundColor: '#D2DFAF',
    borderRadius: 30,
    alignItems: 'flex-start', // Aligns children to the start (left)
    justifyContent: 'flex-start', // Aligns children to the start (top)
    marginTop: -30,
    marginBottom: 40,
  },
  SecondquestContainer: {
    width: screenWidth - 90,
    height: 50,
    backgroundColor: '#4CAF50',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center', // Centering content within the quest box
    marginBottom: 10,
  },
  questText2: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'RobotoSlab_600SemiBold',
    textAlign: 'left',          // Ensures text is aligned to the left within its component
    alignSelf: 'flex-start',    // Align text to the start (left) of its container
    marginLeft: 10,             // Moves the text slightly to the right from the start of the container
  },
  detailText2: {
    color: '#333',
    fontSize: 18,
    fontFamily: 'RobotoSlab_600SemiBold',
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginTop: 10,
    marginRight: 0, // Adjusted margin
    marginLeft: 0 // Adjusted margin
  },
});

export default Home;
