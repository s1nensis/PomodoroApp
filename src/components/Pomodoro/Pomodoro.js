import React from 'react';
import { StyleSheet, View } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { PomodoroNavigator } from '../../navigation/PomodoroNavigator';

const Tab = createMaterialTopTabNavigator();

export const Pomodoro = () => {
  return (
    <View style={styles.container}>
      <PomodoroNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D9615B',
    padding: 10,
    borderRadius: 10,
    width: '90%',
    height: '65%',
  },
});
