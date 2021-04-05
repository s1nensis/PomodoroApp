import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { ButtonTimer } from '../ButtonTimer/ButtonTimer';
import { Countdown } from '../Countdown/Countdown';

export const ShortBreakTimer = () => {
  const [isRunning, setIsRunning] = useState(false);

  return (
    <View style={styles.container}>
      <Countdown color="#378282" minutes={5} isPaused={!isRunning} />
      {isRunning ? (
        <ButtonTimer
          color="#5C9C9C"
          title="STOP"
          onPress={() => setIsRunning(false)}
        />
      ) : (
        <ButtonTimer
          color="#5C9C9C"
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
    backgroundColor: '#5C9C9C',
    padding: 10,
  },
});
