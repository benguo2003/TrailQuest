import React, { useState } from 'react';
import { View, StatusBar, Image, Alert, Text, StyleSheet, TextInput, Dimensions, KeyboardAvoidingView, Platform, ScrollView} from 'react-native';
import Slider from '@react-native-community/slider';
import { useNavigation } from '@react-navigation/native';
import AwesomeButton from "react-native-really-awesome-button";
import Navbar from './Navbar'; // Import Navbar
import { useFonts, RobotoSlab_600SemiBold } from '@expo-google-fonts/roboto-slab';
import { fetchData } from '../backend/trails';
import runPrompt from '../backend/chat.js';  // Import the sendMessage function

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

function Quest( {route} ) {
  const navigation = useNavigation();
  const { quest } = route.params;

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
    const latitudes = Object.values(trails).map(trail => trail.lat);
    const longitudes = Object.values(trails).map(trail => trail.lon);
    const quest_list = await runPrompt(names, equipment);
    const trails_obj = [];
    console.log(latitudes);
    for (let i = 0; i < temp_names.length; i++) {
      const trail = {
        name: temp_names[i],
        description: descriptions[i],
        latitude: latitudes[i],
        latitude: longitudes[i],
      };
      trails_obj.push(trail);
    }
    for (let i = 0; i < quest_list.length; i++) {
      for (let j = 0; j < trails_obj.length; j++) {
        if (quest_list[i] === trails_obj[j].name) {
          quest_list.push(descriptions[j]);
          quest_list.push(latitudes[j]);
          quest_list.push(longitudes[j]);
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
          <Text style={styles.logoText}>THE QUEST!</Text>
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
                <Text style={{fontSize: 20, fontFamily: 'RobotoSlab_600SemiBold', padding: screenWidth * 0.02, textDecorationLine: 'underline', textAlign: 'center'}}>
                    { quest.questName }
                </Text>
            </View>
            <ScrollView contentContainerStyle={styles.cardContainer} showsVerticalScrollIndicator={false}>
            {[1, 2, 3].map((trailNumber) => (
                <View key={trailNumber} style={styles.card}>
                    <Text style={styles.cardTitle}>{quest.trails[`trail${trailNumber}`]}</Text>
                    <Text style={styles.cardDescription}>{quest.trails[`desc${trailNumber}`]}</Text>
                    <Text style={styles.cardCoordinates}>Coordinates: {quest.trails[`lat${trailNumber}`]}, {quest.trails[`lon${trailNumber}`]}</Text>
                </View>
            ))}
            </ScrollView>
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

    cardContainer: {
        top: 10,
      },
      card: {
        padding: 10,
        marginBottom: 20,
        backgroundColor: '#D2DFAF',
        borderRadius: 10,
        flexDirection: 'column',
        width: 0.88 * screenWidth,
        height: screenHeight * 0.18,
      },
      cardTextQuestNum: {
        color: "#4CAF50",
        fontSize: screenHeight * 0.02,
        paddingTop: screenHeight * 0.01,
        paddingBottom: screenHeight * 0.01,
        fontFamily: 'RobotoSlab_600SemiBold',
        marginBottom: 15,
      },
      image: {
        width: '100%',
        height: '60%',
        resizeMode: 'cover',
        borderRadius: 10,
      },
      cardText: {
        color: "#6E260E",
        fontSize: screenHeight * 0.025,
        paddingTop: screenHeight * 0.01,
        paddingBottom: screenHeight * 0.01,
        fontFamily: 'RobotoSlab_600SemiBold',
        textDecorationLine: 'underline',
        marginBottom: 10,
      },
});

export default Quest;