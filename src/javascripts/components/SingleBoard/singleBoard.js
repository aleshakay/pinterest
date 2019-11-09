import './singleBoard.scss';
import utilities from '../../helpers/utilities';

const makeSingleBoard = (board) => {
  let domString = '';
  if (board.name) {
    domString += `
    <div class="card">
    <div class="card col-4 boardCard" id="${board.id}">
    <div class="card-body">
    <h5 class="card-title">${board.name}</h5>
    <p class="card-text">${board.description}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`;
  }

  // return domString;
  utilities.printToDom('boards', domString);
};

export default { makeSingleBoard };
