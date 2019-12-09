import './pinsCard.scss';

const pinsCardMaker = (pin) => {
  let domString = '';
  domString += `
    <div class="card">
    <div class="card col-md pinCard" id="${pin.id}">
    <div class="card-body">
    <img src=${pin.imageUrl} class="card-img-top pinImage" alt="...">
    <p><a href="${pin.siteUrl}" class="pinUrl btn btn-primary">Link to Source</a></p>
    <h5 class="card-title">${pin.name}</h5>
    <p class="card-text">${pin.description}</p>
    <a href="#" id="${pin.id}" class="pinBtnCard btn btn-danger data-boardId="${pin.boardId}">Delete</a>
    </div>
    </div>
</div>`;

  return domString;
};

export default { pinsCardMaker };
