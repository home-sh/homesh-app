/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import * as firebase from 'firebase';
import '@firebase/firestore';
import config from './config';

AppRegistry.registerComponent(appName, () => App);
firebase.initializeApp(config);
