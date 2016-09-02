/* @flow */

import React from 'react';
import {
  createRouter,
  NavigationProvider,
  StackNavigation,
} from '@exponent/ex-navigation';

import Login from './scenes/login';

export default Router = createRouter(() => ({
  login: () => Login,
}));

export const Navigator = () => (
  <NavigationProvider router={Router}>
    <StackNavigation initialRoute={Router.getRoute('login')} />
  </NavigationProvider>
);
