import React, { Component } from 'react';

import {
  Alert,
  LayoutAnimation,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native'
import sample from 'lodash.sample';

import base from '../base';
import { Background, Button, MemoryTitle } from '../components';

window.sample = sample;

export default class Game extends Component {
  static route = {
    navigationBar: {
      title: 'Play Game',
      backgroundColor: '#d50000',
      titleStyle: { color: 'white' },
    },
  };

  state = { string: '', gameState: 'showing' };

  componentDidMount() {
    this._resetGame();
  }

  _resetGame = () => {
    LayoutAnimation.spring();
    const string = Array.apply(null, Array(19 * 5)).map(() => sample("0123456789")).join("");
    // let string = sample("0123456789", 19 * 5).join("");
    this.setState({ string, gameState: 'showing' });
  };

  _testMemory = () => {
    LayoutAnimation.spring();
    this.setState({ gameState: 'guessing' })
  }

  _updateGuess = (guess:string) => {
    if (!this.state.string.startsWith(guess)) {
      const score = guess.length - 1;
      Alert.alert(
        "Game over",
        `Oops, wrong number! Your final score is ${score}.`,
        this._resetGame
      );
      base.push('scores', {
        data: {
          score: -score,
          email: base.app().auth().currentUser.email,
          date: new Date(),
        }
      })
    }
  };

  render() {
    return (
      <Background>
        <MemoryTitle />
        <View style={s.container}>
          <View style={s.textContainer}>
            {this.state.gameState === 'showing'
            ? (
              <Text style={s.gameText}>
                {this.state.string}
              </Text>
            ) : (
              <TextInput
                style={[s.gameText, s.textInput]}
                placeholder="Enter as many digits as you can remember"
                multiline
                numberOfLines={5}
                keyboardType="numeric"
                onChangeText={this._updateGuess}
              />
            )}
          </View>
          {(this.state.gameState === 'showing')
           ? <Button style={s.button} text="Got it!" onPress={this._testMemory} />
           : <Button style={s.button} text="Try Again" onPress={this._resetGame} />
          }
        </View>
      </Background>
    )
  }
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  textContainer: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#d50000',
    borderRadius: 5,
    marginBottom: 20,
  },
  gameText: {
    fontFamily: 'Courier New',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
  textInput: {
    height: 200,
  }
});
