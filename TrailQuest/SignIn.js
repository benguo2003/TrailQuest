import React from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

export default function SignIn({ navigation }) {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Email" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry style={styles.input} />
      <Button title="Sign In" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: '#4CAF50',
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
});