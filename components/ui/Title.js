import {StyleSheet, Text} from 'react-native';
import React from 'react';

export default function Title({children}) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    borderWidth: 2,
    borderColor: 'white',
    color: 'white',
    padding: 12,
  },
});
