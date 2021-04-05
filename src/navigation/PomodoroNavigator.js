import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { PomodoroTimer } from '../components/PomodoroTimer/PomodoroTimer';
import { ShortBreakTimer } from '../components/ShortBreakTimer/ShortBreakTimer';
import { LongBreakTimer } from '../components/LongBreakTimer/LongBreakTimer';

const Tab = createMaterialTopTabNavigator();

export const PomodoroNavigator = () => {
  const tabBarOptions = {
    activeTintColor: '#fff',
    indicatorStyle: {
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    labelStyle: {
      fontSize: 12,
    },
    style: {
      backgroundColor: '#D9615B',
    },
  };

  return (
    <NavigationContainer>
      <Tab.Navigator tabBarOptions={tabBarOptions}>
        <Tab.Screen name="Pomodoro" component={PomodoroTimer} />
        <Tab.Screen name="Short Break" component={ShortBreakTimer} />
        <Tab.Screen name="Long Break" component={LongBreakTimer} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};
