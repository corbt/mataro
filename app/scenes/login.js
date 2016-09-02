/* @flow */

import React, { Component } from 'react';
import {
  ActivityIndicator,
  Alert,
  KeyboardAvoidingView,
  LayoutAnimation,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

import base from '../base';
import { Background, MemoryTitle } from '../components';

export default class Login extends Component {
  static route = {
    navigationBar: {
      title: 'Create Account',
      backgroundColor: '#d50000',
      textColor: 'blue',
      titleStyle: { color: 'white' },
    },
  };

  state:{ email:string, password:string, isAuthenticating:boolean } =
    { email: '', password: '', isAuthenticating: false };

  _logIn = () => {
    LayoutAnimation.easeInEaseOut();
    this.setState({ isAuthenticating: true });
    const { email, password } = this.state;
    base.authWithPassword({ email, password }, this._handleAuth);
  };

  _createAccount = () => {
    LayoutAnimation.easeInEaseOut();
    this.setState({ isAuthenticating: true });
    const { email, password } = this.state;
    base.createUser({ email, password }, this._handleAuth);
  };

  _handleAuth = (error, user) => {
    if (error) {
      LayoutAnimation.easeInEaseOut();
      this.setState({ isAuthenticating: false });
      Alert.alert('Authentication Error', error.message);
    } else {
      console.log(user);
    }
  };

  render() {
    return (
      <Background>
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
          <MemoryTitle style={{ flex: 1 }} />
          <View style={s.inputsContainer}>
            <View style={s.inputBoxes}>
              <TextInput
                testID="LoginEmail"
                placeholder="Email"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                clearButtonMode="always"
                style={s.input}
                onChangeText={email => this.setState({ email })}
                underlineColorAndroid="transparent"
              />
              <View style={s.inputDivider} />
              <TextInput
                placeholder="Password"
                secureTextEntry
                clearButtonMode="always"
                returnKeyType="go"
                style={s.input}
                onChangeText={password => this.setState({ password })}
                underlineColorAndroid="transparent"
              />
            </View>
            {this.state.isAuthenticating
              ? <ActivityIndicator style={s.progress} />
              : (
                <View>
                  <View style={s.buttonWrapper}>
                    <TouchableHighlight onPress={this._logIn}>
                      <View style={s.button}>
                        <Text style={s.buttonText}>Log in!</Text>
                      </View>
                    </TouchableHighlight>
                  </View>
                  <TouchableOpacity onPress={this._createAccount} style={s.signup}>
                    <Text style={s.signupText}>Sign Up</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          <View style={{ flex: 1 }} />
        </KeyboardAvoidingView>
      </Background>
    )
  }
}

const borderColor = '#FFCDD2';
const s = StyleSheet.create({
  inputsContainer: {
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 15,
  },
  inputBoxes: {
    borderRadius: 5,
    backgroundColor: 'white',
    marginBottom: 10,
    borderColor,
  },
  inputDivider: {
    height: 1,
    backgroundColor: borderColor,
  },
  input: {
    height: 40,
    paddingHorizontal: 12,
  },
  buttonWrapper: {
    marginTop: 5,
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
  signup: {
    padding: 10,
  },
  signupText: {
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: 'transparent',
  },
  progress: {
    paddingTop: 15,
  },
  buttonsContainer: {
    flex: 1,
  },
})
