import firebase from 'firebase';

import auth from './components/Auth/auth';
import authData from './helpers/authData';
import myNavbar from './components/myNavbar/myNavbar';
import home from './components/home/home';
import boards from './components/boards/boards';
import listen from './helpers/Listeners/eventlisteners';

import apiKeys from './helpers/apiKeys.json';

import '../styles/main.scss';


const init = () => {
  firebase.initializeApp(apiKeys.firebaseKeys);
  authData.checkLoginStatus();
  auth.loginButton();
  myNavbar.logoutEvent();
  home.createHome();
  boards.createBoards();
  listen.eventlisteners();
};

init();
