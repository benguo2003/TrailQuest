import React from 'react';
import { View, StatusBar, Image, TouchableOpacity, Text, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AwesomeButton from "react-native-really-awesome-button";

function FriendsScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/trailQuestCompass.png')} style={styles.logoImage} /> 
          <Text style={styles.logoText}>Friends</Text>
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
       <Image source={require('../assets/profileIcon.png')} style={styles.friendProfile1} />
       <Image source={require('../assets/profileIcon.png')} style={styles.friendProfile2} />
       <Image source={require('../assets/profileIcon.png')} style={styles.friendProfile3} />
       <Image source={require('../assets/profileIcon.png')} style={styles.friendProfile4} />
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
      padding: 15,
    },
    logoImage: {
      width: 18, // or the width you want
      height: 18, // or the height you want
      position: 'absolute',
      left: 175,
      top: 25,
      resizeMode: 'contain',
    },
    logoText: {
      color: '#465306',
      fontSize: 50,
      marginLeft: 0,
      top: 0
    },
    friendProfile1: {
      width: 90,
      height: 90,
      top: 30,
      left: 20,
    },
    friendProfile2: {
      width: 90,
      height: 90,
      top: 70,
      left: 20,
    },
    friendProfile3: {
      width: 90,
      height: 90,
      top: 110,
      left: 20,
    },
    friendProfile4: {
      width: 90,
      height: 90,
      top: 150,
      left: 20,
    },
});

export default FriendsScreen;