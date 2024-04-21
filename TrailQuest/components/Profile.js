import React from 'react';
import { View, StatusBar, Image, TouchableOpacity, Text, StyleSheet, TextInput, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AwesomeButton from "react-native-really-awesome-button";
import Navbar from './Navbar'; // Import Navbar
import { useFonts, RobotoSlab_600SemiBold } from '@expo-google-fonts/roboto-slab';
import { ScreenWidth } from 'react-native-elements/dist/helpers';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

function ProfileScreen() {
  const navigation = useNavigation();

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
          <Text style={styles.logoText}>Profile</Text>
          <Image source={require('../assets/trailQuestCompass.png')} style={styles.logoImage} /> 
        </View>
      </View>
      <View style={styles.main}>
        <Image source={require('../assets/profileIcon.png')} style={styles.profileIcon} />
        <View style={styles.container2}>
          <View style={styles.profileContainer}>
            <Text style={styles.containerText}>Name:</Text>
            <Text style={styles.containerText}>Age:</Text>
            <Text style={styles.containerText}>Height:</Text>
            <Text style={styles.containerText}>Gears:</Text>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.containerText}>Abby White</Text>
            <Text style={styles.containerText}>25</Text>
            <Text style={styles.containerText}>6'1</Text>
            <Text style={styles.containerText} numberOfLines={2}>Large backpack, fleece pants and jacket</Text>
          </View>
        </View>
        <View style={styles.buttons}>
            <AwesomeButton
            type="primary"
            onPress={() => navigation.navigate('SignIn')}
            width={120} // Adjust as needed
            height={50} // Adjust as needed
            textSize={18} // Adjust as needed
            backgroundColor="#D30000"
            backgroundDarker="#C21807"
            backgroundActive="#C21807"
            backgroundShadow="#C21807"
            backgroundProgress="#89CF35"
            borderColor="#5BBD3A"
            textColor="#FFFFFF"
            springRelease
          >
            Sign Out
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
    buttons: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    container2: {
      flexDirection: "row",
      padding: screenWidth * 0.05,
    },
    profileIcon: {
      width: screenWidth * 0.45,
      height: screenWidth * 0.45,
      marginLeft: ScreenWidth * 0.23,
    },
    profileContainer: {
      marginLeft: screenWidth * 0.03,
    },
    profileInfo: {
      marginRight: screenWidth * 0.03,
      marginLeft: screenWidth * 0.03,
    },
    containerText:{
      fontSize: 22,
      padding: screenHeight * 0.01,
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
});

export default ProfileScreen;