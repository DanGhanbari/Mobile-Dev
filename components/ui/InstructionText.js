import {StyleSheet, Text} from 'react-native';
import React from 'react';

export default function InstructionText({children, style}) {
  return <Text style={[styles.instructionText, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  instructionText: {
    fontSize: 24,
    color: '#72063c',
  },
});
