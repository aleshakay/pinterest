import './boards.scss';
import utilities from '../../helpers/utilities';

const createBoards = () => {
  const domString = `<div class="boardsPage">
  <h1>Boards</h1></div>`;
  utilities.printToDom('boards', domString);
};

export default { createBoards };
