import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { ButtonTimer } from '../ButtonTimer/ButtonTimer';
import { Countdown } from '../Countdown/Countdown';

export const PomodoroTimer = ({ onPress }) => {
  const [isRunning, setIsRunning] = useState(false);

  return (
    <View style={styles.container}>
      <Countdown color="#971F18" minutes={25} isPaused={!isRunning} />
      {isRunning ? (
        <ButtonTimer
          color="#D9615B"
          title="STOP"
          onPress={() => setIsRunning(false)}
        />
      ) : (
        <ButtonTimer
          color="#D9615B"
          title="START"
          onPress={() => setIsRunning(true)}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D9615B',
    padding: 10,
  },
});
