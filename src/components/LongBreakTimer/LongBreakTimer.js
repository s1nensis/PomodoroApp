import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ButtonTimer } from '../ButtonTimer/ButtonTimer';
import { Countdown } from '../Countdown/Countdown';

export const LongBreakTimer = () => {
  const [isRunning, setIsRunning] = useState(false);

  return (
    <View style={styles.container}>
      <Countdown color="#446ACA" minutes={15} isPaused={!isRunning} />
      {isRunning ? (
        <ButtonTimer
          color="#8AA5EA"
          title="STOP"
          onPress={() => setIsRunning(false)}
        />
      ) : (
        <ButtonTimer
          color="#8AA5EA"
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
    backgroundColor: '#8AA5EA',
    padding: 10,
  },
});
