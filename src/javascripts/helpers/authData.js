import $ from 'jquery';
import firebase from 'firebase/app';
import 'firebase/auth';
import boards from '../components/boards/boards';

const boardsDiv = $('#boards');
const logoutNavbar = $('#navbar-button-logout');
const authDiv = $('#auth');
const homeDiv = $('#home');


const checkLoginStatus = () => {
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      boardsDiv.removeClass('hide');
      logoutNavbar.removeClass('hide');
      authDiv.addClass('hide');
      homeDiv.addClass('hide');
      boards.createBoards(user.uid);
    } else {
      boardsDiv.addClass('hide');
      logoutNavbar.addClass('hide');
      authDiv.removeClass('hide');
      homeDiv.removeClass('hide');
    }
  });
};

export default { checkLoginStatus };
