import React from 'react';
import { View } from 'react-native';

const Card = (props) => (
  <View style={styles.container} >
    {props.children}
  </View>
);

const styles = {
  container: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#d4d8d4',
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

export default Card;
