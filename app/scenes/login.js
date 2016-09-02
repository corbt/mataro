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
import { Background, MemoryTitle, Button } from '../components';
import Router from '../navigation';

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

  componentDidMount() {
    if (__DEV__) {
      base.authWithPassword({ email: 'k@c.com', password: 'aaaaaa' }, this._handleAuth)
    }
  }

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
      this.setState({ isAuthenticating: false });
      Alert.alert('Authentication Error', error.message);
    } else {
      this.props.navigator.push(Router.getRoute('main'));
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
                  <Button text="Log in!" onPress={this._logIn} />
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
