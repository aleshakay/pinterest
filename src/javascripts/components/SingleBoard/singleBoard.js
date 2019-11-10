import './singleBoard.scss';
import p from '../pinsCard/pinsCard';
import utilities from '../../helpers/utilities';
import pinsData from '../../helpers/data/pinsData';

const singleBoardMaker = (boardId) => {
  pinsData.getPins(boardId)
    .then((pins) => {
      let domString = '<div id="singleBoardDiv">';
      domString += '<div id="singleBoardMakerid" class="d-flex flex-wrap">';
      console.log(pins);
      pins.forEach((pin) => {
        domString += p.pinsCardMaker(pin);
      });
      domString += `<p><a href="#" id="${boardId}" class="pinBtnCard btn btn-primary">All Boards</a></p>`;
      domString += '</div> </div>';
      utilities.printToDom('pins', domString);
    })
    .catch((error) => console.error(error));
};


export default { singleBoardMaker };
