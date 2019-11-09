import './singleBoard.scss';

const makeSingleBoard = (board) => {
  let domString = '';
  domString += `
    <div class="card">
    <div class="card col-4 boardCard" id="${board.id}">
    <div class="card-body">
    <h5 class="card-title">${board.name}</h5>
    <p class="card-text">${board.description}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>`;

  return domString;
};

export default { makeSingleBoard };
