import React, { useState } from 'react';
import { View, TextInput, Image, StyleSheet, TouchableOpacity, Text, KeyboardAvoidingView, Platform, ActivityIndicator} from 'react-native';
import AwesomeButton from "react-native-really-awesome-button";
import { useFonts, RobotoSlab_600SemiBold } from '@expo-google-fonts/roboto-slab';
import { FIREBASE_AUTH } from '../backend/FirebaseConfig.ts';
import { signInWithEmailAndPassword } from 'firebase/auth';


export default function SignIn({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = FIREBASE_AUTH;
  
  let [fontsLoaded, fontError] = useFonts({
    RobotoSlab_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const logIn = async () => {
    setLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
      alert('Invalid email or password! Try again!')
    }
    setLoading(false);
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
          <TextInput value={email} placeholder="Enter Email" style={styles.input} autoCorrect={false} autoCapitalize="none" textContentType='oneTimeCode'
            onChangeText={(text) => setEmail(text)}/>
          <TextInput value={password} placeholder="Enter Password" secureTextEntry={true} style={styles.input} autoCapitalize="none" autoCorrect={false} textContentType='oneTimeCode'
            onChangeText={(text) => setPassword(text)}/>

          { loading ? <ActivityIndicator size="large" color="#4CAF50" /> :
            <>
              <AwesomeButton
                type="primary"
                onPress={logIn}
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
            </>}
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
