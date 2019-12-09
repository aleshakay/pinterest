import dBoards from '../../helpers/data/boardData';
import singleBoard from '../singleBoard/singleBoard';

const deleteSingleBoard = (e) => {
  const boardId = e.target.id;
  dBoards.deleteBoard(boardId)
    .then(() => {
      singleBoard.singleBoardMaker();
    })
    .catch((error) => console.error(error));
};

export default { deleteSingleBoard };
