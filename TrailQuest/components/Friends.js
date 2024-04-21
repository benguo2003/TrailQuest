import React from 'react';
import { View, StatusBar, Image, TouchableOpacity, Text, StyleSheet, TextInput, Dimensions} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AwesomeButton from "react-native-really-awesome-button";

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

function FriendsScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>Friends</Text>
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
        <View style={styles.friend}>
          <View>
            <Image source={require('../assets/profileIcon.png')} style={styles.friendProfile} />
            <Text style={styles.friendName}>Bradley</Text>
          </View>
          <View style={styles.friendInfo}>
            <Text style={styles.quest}>Wayne Quest</Text>
            <Text style={styles.percentage}>38%</Text>
          </View>
        </View>
        <View style={styles.friend}>
        <View>
            <Image source={require('../assets/profileIcon.png')} style={styles.friendProfile} />
            <Text style={styles.friendName}>Gabby</Text>
          </View>
          <View style={styles.friendInfo}>
            <Text style={styles.quest}>Malibu Quest</Text>
            <Text style={styles.percentage}>56%</Text>
          </View>
        </View>
        <View style={styles.friend}>
        <View>
            <Image source={require('../assets/profileIcon.png')} style={styles.friendProfile} />
            <Text style={styles.friendName}>Josiah</Text>
          </View>
          <View style={styles.friendInfo}>
            <Text style={styles.quest}>Olympic Quest</Text>
            <Text style={styles.percentage}>71%</Text>
          </View>
        </View>
        <View style={styles.friend}>
        <View>
            <Image source={require('../assets/profileIcon.png')} style={styles.friendProfile} />
            <Text style={styles.friendName}>Jenny</Text>
          </View>
          <View style={styles.friendInfo}>
          <Text style={styles.quest}>Runyon Quest</Text>
          <Text style={styles.percentage}>3%</Text>
          </View>
        </View>
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
    friend: {
      flexDirection: 'row',
      width: screenWidth * 0.8,
      height: screenHeight * 0.15,
      top: 30,
    },
    friendProfile: {
      width: screenWidth * 0.20,
      height: screenWidth * 0.20,
      right:0,
    },
    friendName: {
      color: "#465306",
      left: 0,
      top: 10,
      textAlign: 'center',
    },
    friendInfo: {
      backgroundColor: '#D2DFAF',
      width: screenWidth * 0.6,
      height: screenHeight * 0.12,
      left: screenWidth * 0.1,
      borderRadius: 20,
      alignItems: "center",
      justifyContent: "center",
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
    }
});

export default FriendsScreen;