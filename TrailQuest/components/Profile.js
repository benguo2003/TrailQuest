import React from 'react';
import { View, StatusBar, Image, TouchableOpacity, Text, StyleSheet, TextInput, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AwesomeButton from "react-native-really-awesome-button";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

function ProfileScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>Profile</Text>
          <Image source={require('../assets/trailQuestCompass.png')} style={styles.logoImage} /> 
        </View>
      </View>
      <View style={styles.nav}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Text style={styles.navItem}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Quests')}>
          <Text style={styles.navItem}>Quests</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Text style={styles.navItem}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Friends')}>
          <Text style={styles.navItem}>Friends</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.main}>
        
      </View>
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
    },
});

export default ProfileScreen;