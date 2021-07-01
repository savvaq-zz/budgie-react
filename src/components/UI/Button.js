import React from 'react';
import {Pressable, StyleSheet, Text, View} from 'react-native';

export const Button = props => {
  const {outline, style, onClick, children} = props;

  return (
    <Pressable onPress={onClick}>
      <View
        style={[outline ? styles.outlineContainer : styles.container, style]}>
        <Text style={outline ? styles.outlineText : styles.text}>
          {children}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000000',
    borderRadius: 10,
    paddingTop: 16,
    paddingBottom: 16,
  },
  text: {
    color: '#FFFFFF',
    textAlign: 'center',
  },
  outlineContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingTop: 16,
    paddingBottom: 16,
    borderWidth: 1,
    borderColor: '#000000',
    borderStyle: 'solid',
  },
  outlineText: {
    color: '#000000',
    textAlign: 'center',
  },
});
