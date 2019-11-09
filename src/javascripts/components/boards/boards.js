import $ from 'jquery';
import './boards.scss';
import utilities from '../../helpers/utilities';
import boardData from '../../helpers/data/boardData';
import multiBoard from '../boardcard/boardcard';
import singleBrd from '../singleBoard/singleBoard';

const showOneBoard = (event) => {
  const boardId = event.target.id;
  singleBrd.singleBoardMaker(boardId);
};

const createBoards = (uid) => {
  boardData.getBoard(uid)
    .then((boards) => {
      let domString = '';
      domString += '<h1 class="boardsh1">BOARDS</h1>';
      console.log('createBoards');
      domString += '<div id="board-container" class="d-flex flex-wrap">';
      boards.forEach((board) => {
        domString += multiBoard.makeboardscard(board);
      });
      domString += '</div>';
      utilities.printToDom('boards', domString);
      $('#boards').on('click', '.toSingleBtn', showOneBoard);
    });
};

export default { createBoards };
