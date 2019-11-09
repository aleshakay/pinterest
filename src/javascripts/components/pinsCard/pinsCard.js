import './pinsCard.scss';

const makeboardcard = (pin) => {
  let domString = '';
  domString += `
    <div class="card">
    <div class="card col-md pinCard" id="${pin.id}">
    <div class="card-body">
    <img src=${pin.imageUrl} class="card-img-top" alt="...">
    <a href="${pin.siteUrl}" class="pinUrl btn btn-primary">Go somewhere</a>
    <h5 class="card-title">${pin.name}</h5>
    <p class="card-text">${pin.description}</p>
    <a href="#" class="pinBtnCard btn btn-primary">Go somewhere</a>
    </div>
    </div>
</div>`;

  return domString;
};

export default { makeboardcard };
