import $ from 'jquery';
import './boards.scss';
import utilities from '../../helpers/utilities';
import boardData from '../../helpers/data/boardData';
import multiBoard from '../boardcard/boardcard';
import singleBoardWithPins from '../singleBoard/singleBoard';

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
      $('#pins').on('click', '.pinBtnCard', showAllBoards);
    });
};
const showOneBoard = (e) => {
  const boardId = e.target.id;
  console.log(e);
  singleBoardWithPins.singleBoardMaker(boardId);
};

const showAllBoards = (uid) => {
  createBoards(uid);
  console.log('help');
};

export default { createBoards };
