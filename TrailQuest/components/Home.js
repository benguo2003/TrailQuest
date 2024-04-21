import React, { useEffect, useRef } from 'react';
import { View, StatusBar, Image, TextInput, StyleSheet, Dimensions, Text } from 'react-native';
import { useNavigation, useIsFocused} from '@react-navigation/native';
import Navbar from './Navbar'; // Import Navbar

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

function Home() {
  const navigation = useNavigation();

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
          <TextInput style={styles.input} placeholder="Search for a trail..." />
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