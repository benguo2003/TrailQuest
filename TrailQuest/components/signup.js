import React, { useEffect, useState } from 'react';
import { View, TextInput, Image, StyleSheet, TouchableOpacity, Text, KeyboardAvoidingView, Platform, ActivityIndicator} from 'react-native';
import AwesomeButton from "react-native-really-awesome-button";
import { useFonts, RobotoSlab_600SemiBold } from '@expo-google-fonts/roboto-slab';

export default function SignUp({ navigation }) {
  let [fontsLoaded, fontError] = useFonts({
    RobotoSlab_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <KeyboardAvoidingView 
      style={styles.container} 
      behavior={Platform.OS === "ios" ? "padding" : "height"} 
      enabled
    >
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/trailQuestLogoNoBG.png')} style={styles.logoImage} />
        </View>      
        <View style={styles.formContainer}>
          <TextInput placeholder="Full Name" style={styles.input} autoCorrect={false} textContentType='oneTimeCode'/>
          <TextInput placeholder="Email" style={styles.input} autoCorrect={false} textContentType='oneTimeCode'/>
          <TextInput placeholder="Password" secureTextEntry style={styles.input} autoCorrect={false} textContentType='oneTimeCode'/>

          <AwesomeButton
            type="primary"
            onPress={() => navigation.navigate('Home')}
            width={200} // Adjust as needed
            height={50} // Adjust as needed
            textSize={18} // Adjust as needed
            backgroundColor="#4CAF50"
            backgroundDarker="#52a934"
            backgroundActive="#7cbe2d"
            backgroundShadow="#3f8228"
            backgroundProgress="#89cf35"
            borderColor="#5bbd3a"
            textColor="#FFFFFF"
            springRelease
          >
            Create My Account
          </AwesomeButton>
          <View style={styles.backToLogin}>
              <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                <Text style={styles.navItem}>Back To Login</Text>
              </TouchableOpacity>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FEDB',
    justifyContent: 'center',
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
  logoImage: {
    width: 340, // Adjust as needed
    height: 200,
    top: -30, // Adjust as needed
    resizeMode: 'contain', // This ensures the image aspect ratio is preserved
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    top: -10,
  },
  backToLogin: {
    padding: 15,
  },
  navItem: {
    textDecorationLine: 'underline',
    fontFamily: 'RobotoSlab_600SemiBold',
  },
});