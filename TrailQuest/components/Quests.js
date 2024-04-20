import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

function QuestsScreen() {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Quests</Text> */}
      {/* Rest of your code */}
      {/* <StatusBar barStyle="dark-content" /> */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/trailQuestCompass.png')} style={styles.logoImage} />
          <Text style={styles.headerText}>Quests</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('+')}>
          <Text style={styles.navItem}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7FEDB',
    paddingTop: 50 // This sets the background color of the entire app
  },
  logoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
  },
  logoImage: {
    width: 18, // or the width you want
    height: 18, // or the height you want
    position: 'absolute',
    left: 0,
    top: 0,
    resizeMode: 'contain',
  },
  header: {
    backgroundColor: '#F7FEDB',
    paddingVertical: 5,
    alignItems: 'center',
  },
  headerText: {
    color: '#465306',
    fontSize: 60,
    // position: 'absolute',
    marginLeft: 0,
    top: 0
  }
});

export default QuestsScreen; 