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
        <TextInput placeholder="Name" style={styles.input} />
        <TextInput placeholder="Username" secureTextEntry style={styles.input} />
        <TextInput placeholder="password" secureTextEntry style={styles.input} />

        <AwesomeButton
          type="primary"
          onPress={() => navigation.navigate('Home')}
          width={200} // Adjust as needed
          height={50} // Adjust as needed
          textSize={18} // Adjust as needed
          backgroundColor="#D2DFAF"
          backgroundDarker="#D2DFAF"
          backgroundShadow="#D2DFAF"
          textColor="#FFFFFF"
          springRelease
        >
          Create My Account
        </AwesomeButton>
       
      
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FEDB',
    justifyContent: 'center',
  },  
  input: {
    height: 40, // Adjust as needed
    width: 300, // Adjust as needed
    borderColor: '#4CAF50',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: "white",
    padding: 20,
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
});