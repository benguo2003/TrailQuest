import React from 'react';
import { View, TextInput, Image, StyleSheet, TouchableOpacity, Text, KeyboardAvoidingView, Platform} from 'react-native';
import AwesomeButton from "react-native-really-awesome-button";
import { useFonts, RobotoSlab_600SemiBold } from '@expo-google-fonts/roboto-slab';

export default function SignIn({ navigation }) {
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
          <TextInput placeholder="Email" style={styles.input} autoCorrect={false} textContentType='oneTimeCode'/>
          <TextInput placeholder="Password" secureTextEntry style={styles.input} autoCorrect={false} textContentType='oneTimeCode'/>
          <AwesomeButton
            type="primary"
            onPress={() => navigation.navigate('Home')}
            width={100} // Adjust as needed
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
            Log In
          </AwesomeButton>

          <View style={styles.SignUp}>
            <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
              <Text style={styles.navItem}>Sign Up</Text>
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
  SignUp: {
   padding: 15,
  },
  logoImage: {
    width: 340,
    height: 340,
    top: -10,  // Adjusted to reduce the negative top value
    resizeMode: 'contain',
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    top: -70,  // Adjust this value as needed to lower the position
    marginTop: -10,  // Added to bring down the form elements
  },
  navItem: {
    textDecorationLine: 'underline',
    fontFamily: 'RobotoSlab_600SemiBold',
  },
});
