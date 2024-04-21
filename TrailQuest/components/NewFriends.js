import React, { useState, useContext } from 'react';
import { View, StatusBar, Image, TouchableOpacity, Text, StyleSheet, TextInput, Dimensions, KeyboardAvoidingView, Platform, ActivityIndicator} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AwesomeButton from "react-native-really-awesome-button";
import Navbar from './Navbar'; // Import Navbar
import { useFonts, RobotoSlab_600SemiBold } from '@expo-google-fonts/roboto-slab';
import { FIREBASE_DB } from '../backend/FirebaseConfig.ts';
import { UserContext } from '../backend/UserContext';
import { doc, getDoc } from "firebase/firestore";
import { updateDocument2 } from '../backend/updateDoc';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

function NewFriends() {
  const { userData, setUserData} = useContext(UserContext);
  const [newFriendData, setNewFriendData] = useState(); // Add userData to newFriendData
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [showFriend, setshowFriend] = useState(false);

  let [fontsLoaded, fontError] = useFonts({
    RobotoSlab_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const handleAdd = async () => {
      const lowerCaseEmail = email.toLowerCase();
      const userDocRef = doc(FIREBASE_DB, "users", lowerCaseEmail);
      const userDocSnap = await getDoc(userDocRef);
      if (userDocSnap.exists()) {
        const tempData = userDocSnap.data();
        if (userData.friends.length === 0) {
          setNewFriendData(tempData);
          setshowFriend(true);
          updateDocument2('users', userData.email, tempData.email).then(() => {
            setUserData({
              ...userData,
              friends: [tempData.email]
            });
          });
        }
        else if(userData.email === tempData.email) {
          alert('You cannot add yourself as a friend!')
          setshowFriend(false);
        }
        else if (userData.friends.includes(tempData.email)) {
          alert('You are already friends with this user!')
          setshowFriend(false);
        }
        else {
          setNewFriendData(tempData);
          setshowFriend(true);
          updateDocument2('users', userData.email, tempData.email).then(() => {
            setUserData({
              ...userData,
              friends: [...userData.friends, tempData.email]
            });
          });
        }
      } 
      else {
        alert('Invalid email! Try again!')
      }
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>Add Friend</Text>
          <Image source={require('../assets/trailQuestCompass.png')} style={styles.logoImage} /> 
        </View>
      </View>
      <KeyboardAvoidingView 
            style={styles.main} 
            behavior={Platform.OS === "ios" ? "padding" : "height"} 
            enabled
            >
          <View style={styles.formContainer}>
              <Text style={{fontSize:18, fontFamily: 'RobotoSlab_600SemiBold', padding: screenWidth * 0.02}}>
                Search by email:
              </Text>
              <TextInput value={email} onChangeText={(text) => setEmail(text)} style={styles.input} placeholder="Enter Email" autoCorrect={false} autoCapitalize="none" textContentType='oneTimeCode'/>
                <AwesomeButton
                    onPress={handleAdd}
                    width={screenWidth * 0.5} // Adjust as needed
                    height={50} // Adjust as needed
                    textSize={20} // Adjust as needed
                    backgroundColor="#4CAF50"
                    backgroundDarker="#52a934"
                    backgroundActive="#7cbe2d"
                    backgroundShadow="#3f8228"
                    backgroundProgress="#89cf35"
                    borderColor="#5bbd3a"
                    textColor="#FFFFFF"
                    springRelease
                    >
                    + Add New Friend
                </AwesomeButton>
                {showFriend ?               
                <Text style={styles.addedFriend}>
                  {newFriendData.name} has been added as a friend!
                </Text> 
                : null}
          </View>
      </KeyboardAvoidingView>
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
      padding: 40,
      backgroundColor: '#FFFFFF',
    },
    input: {
      height: 40,
      width: 300,
      borderColor: '#4CAF50',
      backgroundColor: "white",
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
      marginBottom: 30,
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
    formContainer: {
      flex: 1,
      justifyContent: 'top',
      alignItems: 'center',
    },
    addedFriend: {
      fontSize:18,
      fontFamily: 'RobotoSlab_600SemiBold',
      padding: 30,
      textAlign: 'center',
      alignSelf: 'center',
    }
});

export default NewFriends;