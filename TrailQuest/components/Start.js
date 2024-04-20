import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import LocationContext from '../backend/LocationContext';
import { useNavigation } from '@react-navigation/native';
import AwesomeButton from "react-native-really-awesome-button";

function StartScreen() {
    const location = useContext(LocationContext);
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
        <Text style={styles.title}>Start A Trail</Text>
        {location && (
            <MapView
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            region={location}
            />
        )}

        <AwesomeButton
          type="primary"
          onPress={() => navigation.navigate('Quests')}
          width={200} // Adjust as needed
          height={50} // Adjust as needed
          textSize={18} // Adjust as needed
          backgroundColor="#4CAF50"
          backgroundDarker="#388E3C"
          backgroundShadow="#2E7D32"
          textColor="#FFFFFF"
          springRelease
          
        >
          Go back to Quests
        </AwesomeButton>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    map: {
        width: '90%',
        height: '50%',
    },
});

export default StartScreen;