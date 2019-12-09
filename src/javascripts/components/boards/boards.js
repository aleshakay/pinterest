import $ from 'jquery';
import './boards.scss';
import firebase from 'firebase';
import utilities from '../../helpers/utilities';
import boardData from '../../helpers/data/boardData';
import multiBoard from '../boardcard/boardcard';
import singleBoardWithPins from '../singleBoard/singleBoard';
import deletePin from '../DeletePins/deletePins';

const createBoards = (uid) => {
  boardData.getBoard(uid)
    .then((boards) => {
      let domString = '';
      domString += '<h1 class="boardsh1">BOARDS</h1>';
      domString += '<div id="board-container" class="d-flex flex-wrap">';
      boards.forEach((board) => {
        domString += multiBoard.makeboardscard(board);
      });
      domString += '</div>';
      utilities.printToDom('boards', domString);
      // eslint-disable-next-line no-use-before-define
      $('#boards').on('click', '.toSingleBtn', showOneBoard);
      // eslint-disable-next-line no-use-before-define
      $('#pins').on('click', '.pinBtnCard', deletePin.deleteFromBoard);
      // eslint-disable-next-line no-use-before-define
      $('#pins').on('click', '.anotherclass', showAllBoards);
    });
};


const showOneBoard = (e) => {
  const boardId = e.target.id;
  singleBoardWithPins.singleBoardMaker(boardId);
};

const showAllBoards = () => {
  const { uid } = firebase.auth().currentUser;
  createBoards(uid);
};

export default { createBoards, showAllBoards };
