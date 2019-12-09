import './singleBoard.scss';
import p from '../pinsCard/pinsCard';
import utilities from '../../helpers/utilities';
import pinsData from '../../helpers/data/pinsData';

// const hideAllBoards = $('#boards');

const singleBoardMaker = (boardId) => {
  pinsData.getPins(boardId)
    .then((pins) => {
      // hideAllBoards.empty();
      let domString = '<div id="singleBoardDiv">';
      domString += '<div id="singleBoardMakerid" class="d-flex flex-wrap">';
      console.log(pins);
      pins.forEach((pin) => {
        domString += p.pinsCardMaker(pin);
      });
      domString += '<div class="containers">';
      domString += `<div class="allBoardsButton"><a href="#" id="${boardId}" class="anotherclass btn btn-outline-primary">All Boards</a></div>`;
      domString += '</div></div> </div>';
      utilities.printToDom('pins', domString);
    })
    .catch((error) => console.error(error));
};


export default { singleBoardMaker };
