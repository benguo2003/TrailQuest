import React from 'react';
import { View, Text, TextInput, StyleSheet, StatusBar } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.headerText}>TrailQuest</Text>
      </View>
      <View style={styles.nav}>
        <Text style={styles.navItem}>Home</Text>
        <Text style={styles.navItem}>Trails</Text>
        <Text style={styles.navItem}>About</Text>
        <Text style={styles.navItem}>Profile</Text>
      </View>
      <View style={styles.main}>
        <View style={styles.searchBox}>
          <TextInput style={styles.input} placeholder="Search for a trail..." />
        </View>
        {/* Add more trail boxes as needed */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: '#4CAF50', // This sets the background color of the entire app
  },
  header: {
    backgroundColor: '#4CAF50',
    padding: 20,
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
    backgroundColor: '#8BC34A',
  },
  navItem: {
    color: 'white',
  },
  main: {
    flex: 1,
    padding: 20,
    backgroundColor: '#C8E6C9',
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
});