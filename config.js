import * as firebase from 'firebase';
import '@firebase/firestore';

let config = {
  projectId: 'home-sh',
  apiKey: 'AIzaSyBg5O-7dydqQrqYa4j-bTneWCmbc3sXWHU',
  authDomain: 'home-sh.firebaseio.com',
  databaseURL: 'https://home-sh.firebaseio.com',
  storageBucket: 'home-sh.appspot.com',
};

firebase.initializeApp(config);

const db = firebase.firestore();

export default db;
