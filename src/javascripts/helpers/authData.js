import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';

const boardsDiv = $('#boards');
const logoutNavbar = $('#navbar-button-logout');
const authDiv = $('#auth');


const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      boardsDiv.removeClass('hide');
      logoutNavbar.removeClass('hide');
      authDiv.addClass('hide');
    } else {
      boardsDiv.addClass('hide');
      logoutNavbar.addClass('hide');
      authDiv.removeClass('hide');
    }
  });
};

export default { checkLoginStatus };
