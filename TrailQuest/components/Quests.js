import React, { useState, useEffect }from 'react';
import { View, StatusBar, Image, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AwesomeButton from "react-native-really-awesome-button";
import Navbar from './Navbar';
import { useFonts, RobotoSlab_600SemiBold } from '@expo-google-fonts/roboto-slab';
import { useContext } from 'react';
import { UserContext } from '../backend/UserContext';
import { updateDocument } from '../backend/updateDoc';


// Get the screen's width and height
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

function QuestsScreen( {route} ) {
  const { userData, setUserData } = useContext(UserContext);
  const navigation = useNavigation();

  useEffect(() => {
    if (route.params && route.params.questList && route.params.questList.length > 0) {
      console.log(route.params.questList);
      const questObject = {
            questName: route.params.questList[0],
            trails: {
              trail1: route.params.questList[1],
              desc1: route.params.questList[4],
              trail2: route.params.questList[2],
              desc2: route.params.questList[5],
              trail3: route.params.questList[3],
              desc3: route.params.questList[6],
            }
      };
      const userEmail = userData.email;
      updateDocument('users', userEmail, questObject).then(() => {
        setUserData({
          ...userData,
          questData: [...userData.questData, questObject]
        });
      });
    }
  }, [route.params]);

  const random_url = 'https://www.thatocgirl.com/wp-content/uploads/2020/12/west-ridge-trail-hike-to-top-of-the-world.jpg';

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
            <Text style={styles.logoText}>Quests</Text>
            <Image source={require('../assets/trailQuestCompass.png')} style={styles.logoImage} />
          </View>
        </View>
        <View style={styles.main}>
          <View style={{flex: 1}}>
            <ScrollView contentContainerStyle={styles.cardContainer}>
              {userData?.questData.map((quest, index) => (
                <View key={index} style={styles.card}>
                  <TouchableOpacity onPress={() => {
                    navigation.navigate('Home')
                  }}>
                    <Text style={styles.cardText}>{quest.questName}</Text>
                  </TouchableOpacity>
                  <Image source={{ uri: random_url }} style={styles.image}/>
                  <Text style={styles.cardTextQuestNum}>{`${quest.trails.trail1}, ${quest.trails.trail2}, ${quest.trails.trail3}`}</Text>
                </View>
              ))}
            </ScrollView>
          </View>

        <View style={styles.buttonContainer}>
          <AwesomeButton
            type="primary"
            onPress={() => navigation.navigate('NewQuest')}
            width={60}
            height={60}
            borderRadius={30}
            backgroundColor="#FF6347"
          >
            <Text style={{ color: 'white', fontFamily: 'RobotoSlab_600SemiBold', fontSize: 30 }}>+</Text>
          </AwesomeButton>
        </View>
      </View>
      
      <Navbar navigation={navigation}/>
    </View>
  )
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
      padding: screenHeight * 0.02,
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
    searchBox: {
      marginBottom: 20,
    },
    input: {
      height: 40,
      borderColor: '#4CAF50',
      borderWidth: 1,
      borderRadius: 10,
      padding: 10,
    },
    logoContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
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
      paddingLeft: screenWidth * 0.12,
      fontFamily: 'RobotoSlab_600SemiBold',
    },

    buttonContainer: {
      position: 'absolute',
      bottom: 25,
      right: 20,
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
      width: 0.9 * screenWidth,
      height: screenHeight * 0.5,
    },
    cardTextQuestNum: {
      color: "#465306",
      fontSize: screenHeight * 0.02,
      paddingTop: screenHeight * 0.01,
      paddingBottom: screenHeight * 0.01,
      fontFamily: 'RobotoSlab_600SemiBold',
      marginTop: 10, // add marginBottom to the text above the image
    },
    image: {
      width: '100%',
      height: '60%',
      resizeMode: 'cover',
      borderRadius: 10,
    },
    cardText: {
      color: "#465306",
      fontSize: screenHeight * 0.03,
      paddingTop: screenHeight * 0.01,
      paddingBottom: screenHeight * 0.01,
      fontFamily: 'RobotoSlab_600SemiBold',
      textDecorationLine: 'underline',
      marginBottom: 10, // or add marginTop to the text below the image
    },
});

const Details = ({ route }) => {
  const { questName } = route.params;
  return (
    <SharedElement id={`item.${questName}.name`}>
      <Animated.Text>{questName}</Animated.Text>
    </SharedElement>
  );
};

export default QuestsScreen;