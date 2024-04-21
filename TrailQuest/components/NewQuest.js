import React, { useState } from 'react';
import { View, StatusBar, Image, Alert, Text, StyleSheet, TextInput, Dimensions, KeyboardAvoidingView, Platform } from 'react-native';
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';
import AwesomeButton from "react-native-really-awesome-button";
import Navbar from './Navbar'; // Import Navbar
import { useFonts, RobotoSlab_600SemiBold } from '@expo-google-fonts/roboto-slab';
import { fetchData } from '../backend/trails';
import runPrompt from '../backend/chat.js';  // Import the sendMessage function

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

function NewQuest() {
  const navigation = useNavigation();

  const [range, setRange] = useState(0);
  const [equipment, setEquipment] = useState('');

  let [fontsLoaded, fontError] = useFonts({
    RobotoSlab_600SemiBold,
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  const generateTrails = async () => {
    if (!equipment) {
      Alert.alert('Error', 'Please type your list');
      return;
    }
    const trails = await fetchData();
    const names = Object.values(trails).map(trail => trail.name).join(', ');
    const temp_names = Object.values(trails).map(trail => trail.name);
    const descriptions = Object.values(trails).map(trail => trail.description);
    const quest_list = await runPrompt(names, equipment);
    const trails_obj = [];
    for (let i = 0; i < temp_names.length; i++) {
      const trail = {
        name: temp_names[i],
        description: descriptions[i]
      };
      trails_obj.push(trail);
    }
    for (let i = 0; i < quest_list.length; i++) {
      for (let j = 0; j < trails_obj.length; j++) {
        if (quest_list[i] === trails_obj[j].name) {
          quest_list.push(descriptions[j]);
        }
      }
    }
    navigation.navigate('Quests', { questList: quest_list });
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Text style={styles.logoText}>New Quest</Text>
          <Image source={require('../assets/trailQuestCompass.png')} style={styles.logoImage} /> 
        </View>
      </View>
      <KeyboardAvoidingView 
            style={styles.main} 
            behavior={Platform.OS === "ios" ? "padding" : "height"} 
            enabled
            >
      <View style={styles.main}>
        <View style={{flex:1}}>
            <View>
                <Slider
                    size="Default"
                    defaultValue={0}
                    minimumValue={0}
                    maximumValue={100}
                    aria-label="Default"
                    valueLabelDisplay="auto"
                    color={'#4CAF50'}
                    value={range}
                    thumbTintColor='#5d3a1a'
                    minimumTrackTintColor="#4CAF50" // Color of the track to the left of the thumb
                    onValueChange={(value) => setRange(Math.round(value))}
                    />
            </View>
            <Text style={{fontSize:18, fontFamily: 'RobotoSlab_600SemiBold', padding: screenWidth * 0.02}}>
              Select your range in miles: {Math.round(range)}
            </Text>
            <Text style={{fontSize:18, fontFamily: 'RobotoSlab_600SemiBold', padding: screenWidth * 0.02}}>Provide your gear list:</Text>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <TextInput placeholder="Type your list here" style={styles.input} autoCorrect={false} textContentType='oneTimeCode' textAlignVertical="top" onChangeText={setEquipment} value={equipment}/>
            </View>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
                <AwesomeButton
                    width={screenWidth * 0.85} // Adjust as needed
                    height={50} // Adjust as needed
                    textSize={20} // Adjust as needed
                    onPress={generateTrails}
                    backgroundColor="#4CAF50"
                    backgroundDarker="#52a934"
                    backgroundActive="#7cbe2d"
                    backgroundShadow="#3f8228"
                    backgroundProgress="#89cf35"
                    borderColor="#5bbd3a"
                    textColor="#FFFFFF"
                    springRelease
                    >
                    + Create New Quest
                </AwesomeButton>
            </View>
        </View>
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
      padding: 12,
      backgroundColor: '#FFFFFF',
    },
    input: {
        width: screenWidth * 0.85, 
        height: screenHeight * 0.4,
        borderColor: '#4CAF50',
        backgroundColor: "white",
        borderWidth: 1,
        borderRadius: 10,
        padding: 15,
        marginBottom: 18,
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

export default NewQuest;