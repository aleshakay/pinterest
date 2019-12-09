import $ from 'jquery';
import board from '../../components/boards/boards';
import deleteSB from '../../components/deleteBoards/deleteBoards';

const eventlisteners = () => {
  $('.toSingleBtn').click(() => {
    $('#boards').addClass('hide');
  });
};

$('#pins').on('click', '.anotherclass', board.showAllBoards);
$('#boards').on('click', '.toDeleteBoardBtn', deleteSB.deleteSingleBoard);

export default { eventlisteners };
