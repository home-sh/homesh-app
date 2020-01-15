import * as firebase from 'firebase';

let config = {
  projectId: 'home-sh',
  apiKey: 'AIzaSyBg5O-7dydqQrqYa4j-bTneWCmbc3sXWHU',
  authDomain: 'home-sh.firebaseio.com',
  databaseURL: 'https://home-sh.firebaseio.com',
  storageBucket: 'home-sh.appspot.com',
};

let app = firebase.initializeApp(config);
export const db = app.database();
