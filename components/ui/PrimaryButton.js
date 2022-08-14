import {View, Text, Pressable, StyleSheet} from 'react-native';
import React from 'react';

const PrimaryButton = ({children, onPress}) => {
  return (
    <View style={styles.buttonOutercontainer}>
      <Pressable
        style={({pressed}) =>
          pressed
            ? [styles.buttonInnercontainer, styles.pressed]
            : styles.buttonInnercontainer
        }
        onPress={onPress}>
        <Text style={styles.burronText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOutercontainer: {
    borderRadius: 28,
    margin: 4,
    overflow: 'hidden',
  },
  buttonInnercontainer: {
    backgroundColor: '#72063c',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
  burronText: {
    color: 'white',
    textAlign: 'center',
  },
  pressed: {
    opacity: 0.75,
  },
});
