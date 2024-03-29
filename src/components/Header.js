import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
  const { text, container } = styles;

  return (
    <View style={container} >
      <Text style={text}>{props.title}</Text>
    </View>
  );
};

const styles = {
  text: {
    fontSize: 20,
    color: '#ffffff',
    padding: 10
  },
  container: {
    height: 60,
    justifyContent: 'center',
    backgroundColor: '#326ada',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  }
};

export default Header;
