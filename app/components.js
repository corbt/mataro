/* @flow */

import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';

export const Background = ({ children }) => (
  <LinearGradient colors={['#FFCDD2', '#FFEBEE', '#FFCDD2']} style={{ flex: 1 }}>
    {children}
  </LinearGradient>
);

export const MemoryTitle = ({ style }) => (
  <View style={[s.titleBox, style]}>
    <Text style={s.title}>Memory!</Text>
  </View>
)

export const Button = ({ text, onPress }) => (
  <View style={s.buttonWrapper}>
    <TouchableHighlight onPress={onPress}>
      <View style={s.button}>
        <Text style={s.buttonText}>{text}</Text>
      </View>
    </TouchableHighlight>
  </View>
)

const s = StyleSheet.create({
  titleBox: {
    paddingVertical: 20,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  title: {
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    shadowColor: 'black',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  buttonWrapper: {
    marginTop: 10,
    borderRadius: 5,
    overflow: 'hidden',
  },
  button: {
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#E91E63',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
