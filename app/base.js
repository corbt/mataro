/* @flow */

import Rebase from 're-base';

const base = Rebase.createClass({
  apiKey: "AIzaSyCDvkciPXNBj0pSXMrg1ZT523yQlK6LAqQ",
  authDomain: "mataro-bc42a.firebaseapp.com",
  databaseURL: "https://mataro-bc42a.firebaseio.com",
  storageBucket: "mataro-bc42a.appspot.com",
});

if (__DEV__) {
  window.base = base;
}

export default base;
