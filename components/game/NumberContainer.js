import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function NumberContainer({children}) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: '#4e0329',
    padding: 24,
    margin: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  numberText: {
    fontSize: 34,
    color: 'white',
    fontWeight: 'bold',
  },
});
