/* @flow */

import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  StyleSheet,
  Text,
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
})
