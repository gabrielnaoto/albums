import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ text, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.text}>{text}</Text>
  </TouchableOpacity>
);

const styles = {
  button: {
    flex: 1,
    alingSelf: 'strech',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#433e90',
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5,
  },
  text: {
    alignSelf: 'center',
    color: '#433e90',
    fontSize: 16,
    fontWeight: '600',
    padding: 10
  }
};

export default Button;
