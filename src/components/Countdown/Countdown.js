import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, Easing, View } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const minutesToMillis = (min) => min * 60 * 1000;
const formatTime = (time) => (time < 10 ? `0${time}` : time);

export const Countdown = ({ minutes = 5, isPaused = true, color = '#000' }) => {
  const interval = React.useRef(null);

  const [millis, setMillis] = useState(null);
  const [progress, setProgress] = useState(100);

  const minute = Math.floor(millis / 1000 / 60) % 60;
  const seconds = Math.floor(millis / 1000) % 60;

  const countDown = () => {
    setMillis((time) => {
      if (time === 0) {
        clearInterval(interval.current);
        onEndPomodoro();
        return time;
      }

      const timeLeft = time - 1000;
      setProgress((timeLeft / minutesToMillis(minutes)) * 100);

      return timeLeft;
    });
  };

  useEffect(() => {
    setMillis(minutesToMillis(minutes));
    setProgress(100);
  }, [minutes]);

  useEffect(() => {
    if (isPaused) {
      if (interval.current) clearInterval(interval.current);
      return;
    }

    interval.current = setInterval(countDown, 1000);

    return () => clearInterval(interval.current);
  }, [isPaused]);

  return (
    <View style={styles.container}>
      <AnimatedCircularProgress
        style={styles.progressBar}
        size={280}
        fill={progress}
        width={10}
        duration={1000}
        AnimatedCircularProgress={Easing.inOut}
        rotation={-360}
        tintColor="#fff"
        backgroundColor={color}
        children={() => {
          return (
            <Text style={styles.text}>
              {formatTime(minute)}:{formatTime(seconds)}
            </Text>
          );
        }}
      ></AnimatedCircularProgress>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  progressBar: {},
});
