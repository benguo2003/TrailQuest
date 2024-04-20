import React from 'react';
import { View, TextInput, Button, Image, StyleSheet } from 'react-native';
import AwesomeButton from "react-native-really-awesome-button";

export default function SignIn({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../assets/trailQuestLogoNoBG.png')} style={styles.logoImage} />
      </View>      
      <View style={styles.formContainer}>
        <TextInput placeholder="Email" style={styles.input} />
        <TextInput placeholder="Password" secureTextEntry style={styles.input} />
        <AwesomeButton
          type="primary"
          onPress={() => navigation.navigate('Home')}
          width={200} // Adjust as needed
          height={50} // Adjust as needed
          textSize={18} // Adjust as needed
          backgroundColor="#4CAF50"
          backgroundDarker="#388E3C"
          backgroundShadow="#2E7D32"
          textColor="#FFFFFF"
          springRelease
          progress
        >
          Sign In
        </AwesomeButton>
        <AwesomeButton
          type="primary"
          onPress={() => navigation.navigate('Home')}
          width={200} // Adjust as needed
          height={50} // Adjust as needed
          textSize={18}
          backgroundColor="#4CAF50"
          backgroundDarker="#388E3C"
          backgroundShadow="#2E7D32"
          textColor="#FFFFFF"
          springRelease
          progress
        >
          Sign Up
        </AwesomeButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },  
  input: {
    height: 40, // Adjust as needed
    width: 300, // Adjust as needed
    borderColor: '#4CAF50',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  logoImage: {
    width: 340, // Adjust as needed
    height: 340,
    top: -100, // Adjust as needed
    resizeMode: 'contain', // This ensures the image aspect ratio is preserved
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    top: -100,
  },
});