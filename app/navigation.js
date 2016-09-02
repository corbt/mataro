/* @flow */

import React from 'react';
import {
  createRouter,
  NavigationProvider,
  StackNavigation,
} from '@exponent/ex-navigation';

import Login from './scenes/login';
import Main from './scenes/main';
import Game from './scenes/game';
import { HighScores, MyScores } from './scenes/scores';

const Router = createRouter(() => ({
  login: () => Login,
  main: () => Main,
  game: () => Game,
  myScores: () => MyScores,
  highScores: () => HighScores,
}));
export default Router;

export const Navigator = () => (
  <NavigationProvider router={Router}>
    <StackNavigation initialRoute={Router.getRoute('login')} />
  </NavigationProvider>
);
