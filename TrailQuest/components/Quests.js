import React from 'react';
import { View, StatusBar, Image, TouchableOpacity, Text, StyleSheet, TextInput, Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AwesomeButton from "react-native-really-awesome-button";
import Navbar from './Navbar'; // Import Navbar
import { useFonts, RobotoSlab_600SemiBold } from '@expo-google-fonts/roboto-slab';
import { ScrollView } from 'react-native';

// Get the screen's width and height
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

function QuestsScreen() {
  const navigation = useNavigation();

  const quests = [
    {
      id: 50,
      title: 'Laguna Beach',
      image: 'https://www.thatocgirl.com/wp-content/uploads/2020/12/west-ridge-trail-hike-to-top-of-the-world.jpg',
    },
    {
      id: 51,
      title: 'Santa Monica Beach',
      image: 'https://www.thatocgirl.com/wp-content/uploads/2020/12/west-ridge-trail-hike-to-top-of-the-world.jpg',
    },
    {
      id: 52,
      title: 'Anaheim',
      image: 'https://www.thatocgirl.com/wp-content/uploads/2020/12/west-ridge-trail-hike-to-top-of-the-world.jpg',
    },
    {
      id: 53,
      title: 'San Diego',
      image: 'https://www.thatocgirl.com/wp-content/uploads/2020/12/west-ridge-trail-hike-to-top-of-the-world.jpg',
    },
  ];
  
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
          <Text style={styles.logoText}>Quests</Text>
          <Image source={require('../assets/trailQuestCompass.png')} style={styles.logoImage} />
        </View>
      </View>
      <View style={styles.main}>
        <View style={{flex: 1}}>
          <ScrollView contentContainerStyle={styles.cardContainer}>
            {quests.map((quest, index) => (
              <View key={index} style={styles.card}>
                <Text style={styles.cardTextQuestNum}>Quest {index + 1}</Text>
                <Image source={{ uri: quest.image }} style={styles.image} />
                <Text style = {styles.cardText}>{quest.title}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        <View style={styles.buttonContainer}>
          <AwesomeButton
            width={60}
            height={60}
            borderRadius={30}
            backgroundColor="#FF6347"
          >
            <Text style={{ color: 'white', fontFamily: 'RobotoSlab_600SemiBold', fontSize: 30 }}>+</Text>
          </AwesomeButton>
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
    nav: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 20,
      backgroundColor: '#D2DFAF',
    },
    navItem: {
      color: 'black',
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

    buttonContainer: {
      position: 'absolute',
      bottom: 25,
      right: 20,
    },

    cardContainer: {
      top: 10,
    },
    card: {
      padding: 10,
      marginBottom: 20,
      backgroundColor: '#D2DFAF',
      borderRadius: 10,
      flexDirection: 'column',
      width: 0.9 * screenWidth,
      height: screenHeight * 0.4,
    },
    cardTextQuestNum: {
      color: "#465306",
      fontSize: screenHeight * 0.02,
      paddingTop: screenHeight * 0.01,
      paddingBottom: screenHeight * 0.01,
      fontFamily: 'RobotoSlab_600SemiBold',
      textDecorationLine: 'underline',
    },
    image: {
      width: '100%',
      height: '70%',
      resizeMode: 'cover',
      borderRadius: 10,
    },
    cardText: {
      color: "#465306",
      fontSize: screenHeight * 0.03,
      paddingTop: screenHeight * 0.01,
      paddingBottom: screenHeight * 0.01,
      fontFamily: 'RobotoSlab_600SemiBold',
    },
});

export default QuestsScreen;