import React from 'react';
import { StyleSheet, View } from 'react-native';
import Text from './src/Text';

export default function App() {
  return (
    <View style={styles.container}>
      <Text h1 h1Style={{color: 'blue', fontStyle: 'italic' }}>Title 1</Text>
      <Text h2 h2Style={{color: 'green', fontStyle: 'italic' }}>Title 2</Text>
      <Text h3 h3Style={{color: 'red', fontStyle: 'italic' }}>Title 3</Text>
      <Text h4 h4Style={{color: 'yellow', fontStyle: 'italic' }}>Title 4</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
