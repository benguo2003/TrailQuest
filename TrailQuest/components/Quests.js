import React from 'react';
import { View, StatusBar, Image, TouchableOpacity, Text, StyleSheet, TextInput, Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AwesomeButton from "react-native-really-awesome-button";
import Navbar from './Navbar'; // Import Navbar
import { useFonts, RobotoSlab_600SemiBold } from '@expo-google-fonts/roboto-slab';
import { FlatList } from 'react-native';

// Get the screen's width and height
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

function QuestsScreen() {
  const navigation = useNavigation();

  const quests = [
    {
      id: 1,
      title: 'Laguna Beach',
      image: 'https://www.thatocgirl.com/wp-content/uploads/2020/12/west-ridge-trail-hike-to-top-of-the-world.jpg',
    },
    {
      id: 2,
      title: 'Santa Monica Beach',
      image: 'https://www.thatocgirl.com/wp-content/uploads/2020/12/west-ridge-trail-hike-to-top-of-the-world.jpg',
    },
    {
      id: 3,
      title: 'Anaheim',
      image: 'https://www.thatocgirl.com/wp-content/uploads/2020/12/west-ridge-trail-hike-to-top-of-the-world.jpg',
    },
    {
      id: 4,
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
        <AwesomeButton
          type="primary"
          onPress={() => navigation.navigate('Start')}
          width={200} // Adjust as needed
          height={50} // Adjust as needed
          textSize={18} // Adjust as needed
          backgroundColor="#4CAF50"
          backgroundDarker="#388E3C"
          backgroundShadow="#2E7D32"
          textColor="#FFFFFF"
          springRelease
        >
          See Trail Map
        </AwesomeButton>
        <FlatList 
          style={styles.cardContainer}
          data = {quests}
          renderItem={({ item: quest }) => (
            <View style={styles.card}> 
              <Image source={{ uri: quest.image }} style={styles.image} />
              <Text style = {styles.cardText}>{quest.title}</Text>
            </View>
          )}
          keyExtractor={(quest, index) => index.toString()}  
        />
        <View style={styles.buttonContainer}>
          <AwesomeButton
            width={60}
            height={60}
            borderRadius={30}
            backgroundColor="#FF6347"
            onPress={() => console.log('Button pressed')}
          >
            <Text style={{ color: 'white' }}>+</Text>
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
      bottom: 100,
      right: 20,
    },

    cardContainer: {
      top: 10,
      flex:1,
      maxHeight: 0.5 * screenHeight,
      padding: 10,
    },
    card: {
      marginBottom: 10,
      padding: 10,
      backgroundColor: '#D2DFAF',
      borderRadius: 10,
      flexDirection: 'column',
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
    },
});

export default QuestsScreen;