import './singleBoard.scss';
import p from '../pinsCard/pinsCard';
import utilities from '../../helpers/utilities';
import pinsData from '../../helpers/data/pinsData';

const singleBoardMaker = (boardId) => {
  pinsData.getPins(boardId)
    .then((pins) => {
      let domString = '<div id="someid" class="d-flex flex-wrap">';
      console.log(pins);
      pins.forEach((pin) => {
        domString += p.makeboardcard(pin);
      });
      domString += '</div>';
      utilities.printToDom('pins', domString);
    })
    .catch((error) => console.error(error));
};


export default { singleBoardMaker };
