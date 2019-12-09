import './boardcard.scss';

const makeboardscard = (board) => {
  let domString = '';
  domString += `
    <div class="card">
    <div class="card col-md boardCard" id="${board.id}">
    <div class="card-body">
    <h5 class="card-title">${board.name}</h5>
    <p class="card-text">${board.description}</p>
    <a href="#" id="${board.id}" class="toNewBtn btn btn-primary">New Pins</a>
    <a href="#" id="${board.id}" class="toSingleBtn btn btn-primary">View Pins</a>
    <a href="#" id="${board.id}" class="toDeleteBoardBtn btn btn-outline-primary">Delete Board</a>
    </div>
    </div>
</div>`;

  return domString;
};

export default { makeboardscard };
