import './boards.scss';
import utilities from '../../helpers/utilities';
import boardData from '../../helpers/data/boardData';
import oneBoard from '../SingleBoard/singleBoard';

const createBoards = (uid) => {
  boardData.getBoard(uid)
    .then((boards) => {
      let domString = '';
      domString += '<h1>BOARDS</h1>';
      domString += '<div id="board-container" class="d-flex flex-wrap">';
      boards.forEach((board) => {
        domString += oneBoard.makeSingleBoard(board);
      });
      domString += '</div>';
      utilities.printToDom('boards', domString);
    });
};

export default { createBoards };
