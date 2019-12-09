import deleteSinglePin from '../../helpers/data/pinsData';
import singleBoardWithPins from '../singleBoard/singleBoard';

const deleteFromBoard = (e) => {
  e.preventDefault();
  const targetedPin = e.target.id;
  deleteSinglePin.deletePin(targetedPin)
    .then(() => {
      // eslint-disable-next-line no-use-before-define
      singleBoardWithPins.singleBoardMaker();
    })
    .catch((error) => console.error(error));
};

export default { deleteFromBoard };
