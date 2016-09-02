import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native'

import { Background, Button, MemoryTitle } from '../components';
import Router from '../navigation';

export default class Main extends Component {
  static route = {
    navigationBar: {
      title: 'Main Menu',
      backgroundColor: '#d50000',
      titleStyle: { color: 'white' },
    },
  };

  _openGame = () => this.props.navigator.push(Router.getRoute('game'));
  _openMyScores = () => this.props.navigator.push(Router.getRoute('myScores'));
  _openHighScores = () => this.props.navigator.push(Router.getRoute('highScores'));

  render() {
    return (
      <Background>
        <MemoryTitle />
        <View style={s.buttons}>
          <Button text="Play Game!" onPress={this._openGame} />
          <Button text="My Scores" onPress={this._openMyScores} />
          <Button text="High Scores" onPress={this._openHighScores} />
        </View>
      </Background>
    )
  }
}

const s = StyleSheet.create({
  buttons: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  }
});
