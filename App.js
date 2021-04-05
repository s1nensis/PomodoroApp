import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Pomodoro } from './src/components/Pomodoro/Pomodoro';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PomodoroApp</Text>
      <Pomodoro />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BC3B34',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 50,
  },
});
