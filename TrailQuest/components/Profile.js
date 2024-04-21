import React, { useState, useContext, useEffect } from 'react';
import { View, StatusBar, Image, TouchableOpacity, Text, StyleSheet, TextInput, Dimensions, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AwesomeButton from "react-native-really-awesome-button";
import Navbar from './Navbar'; // Import Navbar
import { useFonts, RobotoSlab_600SemiBold } from '@expo-google-fonts/roboto-slab';
import { ScreenHeight, ScreenWidth } from 'react-native-elements/dist/helpers';
import * as ImagePicker from 'expo-image-picker';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
//import * as Progress from 'react-native-progress';
import {FIREBASE_DB, STORAGE} from '../backend/FirebaseConfig.ts';
import { getFirestore, collection, query, where, getDocs, updateDoc, doc } from "firebase/firestore";
import * as FileSystem from 'expo-file-system';


import { UserContext } from '../backend/UserContext'; // Import your UserContext.js file

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

function ProfileScreen() {
  const navigation = useNavigation();
  const { userData, setUserData } = useContext(UserContext);
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const db = getFirestore();

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  let [fontsLoaded, fontError] = useFonts({
    RobotoSlab_600SemiBold,
  });
  if (!fontsLoaded && !fontError) {
    return null;
  }

  const selectImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (result.assets && result.assets[0] && result.assets[0].uri) {
      const uri = result.assets[0].uri;
      setImage(uri);
      uploadImage(uri);
    }
  };
  
  const uploadImage = async (uri) => {
    try {
      const response = await fetch(uri);
      const blob = await response.blob();
  
      // Check if userData and userData.email is not null or undefined
      if (!userData || !userData.email) {
        console.error("Error: User data or user email is missing");
        return;
      }
  
      var storageRef = ref(STORAGE, `my-image-${userData.email}`);
      console.log(storageRef);
      const uploadTask = uploadBytesResumable(storageRef, blob);
  
      uploadTask.on('state_changed', 
        (snapshot) => {
          // You can use this function to monitor the upload progress
        }, 
        (error) => {
          console.error("Error uploading image: ", error);
        }, 
        async () => {
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            console.log('File available at', downloadURL);
            setImage(downloadURL);
            setUserData({ ...userData, profilePic: downloadURL });
  
            const docRef = doc(FIREBASE_DB, "users", userData.email);
            await updateDoc(docRef, { profilePic: downloadURL });
            console.log("Image upload successful!");
          } catch (error) {
            console.error("Error getting download URL: ", error);
          }
        }
      );
    } catch (error) {
      console.error("Error uploading image: ", error);
    }
  };

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
      
      <Image source={userData?.profilePic ? { uri: userData.profilePic } : require('../assets/profileIcon.png')} style={styles.profileIcon} />
        <View style={styles.upload}>
            <TouchableOpacity onPress={selectImage} style={styles.upload}>
              <Text style={styles.navItem}>Upload Photo</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.container2}>
          <View style={styles.profileContainer}>
            <Text style={styles.containerText}>Name:</Text>
            <Text style={styles.containerText}>Age:</Text>
            <Text style={styles.containerText}>Height:</Text>
            <Text style={styles.containerText}>Gears:</Text>
          </View>
          <View style={styles.profileInfo}>
            <Text style={styles.containerText}>{userData?.name}</Text>
            <Text style={styles.containerText}>25</Text>
            <Text style={styles.containerText}>6'1</Text>
            <Text style={styles.containerText} numberOfLines={5}>Large backpack, moisture-wicking shirt, fleece pants and jacket</Text>
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
      top: ScreenHeight * 0.02,
    },
    profileIcon: {
      width: screenWidth * 0.45,
      height: screenWidth * 0.45,
      marginLeft: ScreenWidth * 0.23,
      top: ScreenHeight * 0.02,
    },
    upload: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: screenHeight * 0.02,
    },
    profileContainer: {
      marginLeft: screenWidth * 0.03,
    },
    profileInfo: {
      marginRight: screenWidth * 0.2,
      marginLeft: screenWidth * 0.03,
    },
    containerText:{
      fontSize: 18,
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