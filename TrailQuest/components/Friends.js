import React, { useState, useContext } from 'react';
import { View, StatusBar, Image, TouchableOpacity, Text, StyleSheet, TextInput, Dimensions, ScrollView, FlatList} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Navbar from './Navbar'; // Import Navbar
import { useFonts, RobotoSlab_600SemiBold } from '@expo-google-fonts/roboto-slab';
import AwesomeButton from "react-native-really-awesome-button";
import { UserContext } from '../backend/UserContext';


const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

function FriendsScreen() {
  const navigation = useNavigation();
  const { userData, setUserData} = useContext(UserContext);

  let [fontsLoaded, fontError] = useFonts({
    RobotoSlab_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const friendsList = userData.friends;
  
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>Friends</Text>
          <Image source={require('../assets/trailQuestCompass.png')} style={styles.logoImage} /> 
        </View>
      </View>
      <View style={styles.main}>

        <View style={{flex: 1}}>
          <ScrollView contentContainerStyle={styles.scrollView}>
            {friendsList.map((friend, index) => (
              <View style={styles.friend} key={index}>
                <View>
                  <Image source={require('../assets/profileIcon.png')} style={styles.friendProfile} />
                  <Text style={styles.friendName}>Ben Guo</Text>
                </View>
                <View style={styles.friendInfo}>
                  <Text style={styles.friendName}>{friend}</Text>
                </View>
              </View>
              ))}
          </ScrollView>
        </View>

        <View style={styles.buttonContainer}>
          <AwesomeButton
            type="primary"
            onPress={() => navigation.navigate('NewFriends')}
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
    scrollView: {
      flexGrow: 1,
      padding: screenHeight * 0.02,
      backgroundColor: '#FFFFFF',
      // bottom: screenHeight * 0.1,
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
      fontFamily: 'RobotoSlab_600SemiBold',
    },
    friend: {
      flexDirection: 'row',
      width: screenWidth * 0.8,
      height: screenHeight * 0.15,
    },
    friendProfile: {
      width: screenWidth * 0.20,
      height: screenWidth * 0.20,
      right:0,
    },
    friendName: {
      color: "#465306",
      left: 0,
      textAlign: 'center',
      fontFamily: 'RobotoSlab_600SemiBold',
      fontSize: 0.05 * screenWidth,
    },
    friendInfo: {
      backgroundColor: '#D2DFAF',
      width: screenWidth * 0.6,
      height: screenHeight * 0.12,
      left: screenWidth * 0.05,
      borderRadius: 20,
      alignItems: "center",
      justifyContent: "center",
      fontFamily: 'RobotoSlab_600SemiBold',
    },
    quest: {
      padding: screenWidth * 0.005,
      color: "#465306",
      fontSize: screenHeight * 0.03,
    },
    percentage: {
      padding: screenWidth * 0.005,
      color: "white",
      fontSize: screenHeight * 0.04
    },
    buttonContainer: {
      position: 'absolute',
      bottom: 25,
      right: 20,
    }
});

export default FriendsScreen;