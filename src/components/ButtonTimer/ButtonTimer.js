import * as React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

export const ButtonTimer = ({ title = 'START', color = '#000', ...props }) => {
  const textButtonStyle = () => {
    return {
      fontWeight: 'bold',
      fontSize: 32,
      color: color,
      textAlign: 'center',
    };
  };

  return (
    <TouchableOpacity style={styles.buttonTimer} onPress={props.onPress}>
      <Text style={textButtonStyle()}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonTimer: {
    backgroundColor: '#fff',
    margin: 5,
    padding: 5,
    fontWeight: 'bold',
    borderRadius: 10,
  },
});
