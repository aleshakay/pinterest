import './home.scss';
import utilities from '../../helpers/utilities';

const createHome = () => {
  const domString = `<div class="TitlePinerest">
  <h1>Pinterest</h1></div>`;
  utilities.printToDom('home', domString);
};

export default { createHome };
