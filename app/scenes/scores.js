import React, { Component } from 'react';

import {
  LayoutAnimation,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { Background } from '../components';
import base, { currentUser } from '../base';

export class MyScores extends Component {
  static route = {
    navigationBar: {
      title: 'My Scores',
      backgroundColor: '#d50000',
      titleStyle: { color: 'white' },
    },
  };

  _scoreQuery = {
    orderByChild: 'email',
    equalTo: currentUser().email,
  };

  render() {
    return <ScoreView query={this._scoreQuery} />;
  }
}

export class HighScores extends Component {
  static route = {
    navigationBar: {
      title: 'High Scores',
      backgroundColor: '#d50000',
      titleStyle: { color: 'white' },
    },
  };

  _scoreQuery = {
    orderByChild: 'score',
    limitToFirst: 10,
  };

  render() {
    return <ScoreView query={this._scoreQuery} />;
  }
}

class ScoreView extends Component {
  state = { scores: [] };

  componentWillUpdate() {
    LayoutAnimation.easeInEaseOut();
  }

  componentDidMount() {
    this._scoreListener = base.bindToState('scores', {
      context: this,
      state: 'scores',
      asArray: true,
      queries: this.props.query,
    });
  }

  componentWillUnmount() {
    base.removeBinding(this._scoreListener);
  }

  render() {
    console.log(this.state);
    return (
      <Background>
        <ScrollView>
          {this.state.scores.map(({ email, score, key }) => (
            <View style={s.scoreEntry} key={key}>
              <Text style={s.scoreEmail}>{email}</Text>
              <Text style={s.score}>{-score}</Text>
            </View>
          ))}
        </ScrollView>
      </Background>
    )
  }
}

const s = StyleSheet.create({
  scoreEntry: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: 'transparent',
  },
  scoreEmail: {
    flex: 1,
  },
  score: {
    fontFamily: 'Courier New',
    fontWeight: 'bold',
  }
});
