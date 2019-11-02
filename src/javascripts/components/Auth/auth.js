import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';
import googleButton from './auth.png';
import utilities from '../../helpers/utilities';
import './auth.scss';


const signMeIn = () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth().signInWithPopup(provider);
};

const loginButton = () => {
  const domString = `<button id="google-auth">
  <img src =${googleButton} />
  </button>`;
  utilities.printToDom('auth', domString);
  $('#google-auth').click(signMeIn);
};

export default { loginButton };
