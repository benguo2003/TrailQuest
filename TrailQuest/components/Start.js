import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import LocationContext from '../backend/LocationContext';

function StartScreen() {
  const location = useContext(LocationContext);

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